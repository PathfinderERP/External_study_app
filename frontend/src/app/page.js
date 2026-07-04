"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  BookOpen,
  Calendar,
  TrendingUp,
  Bell,
  ArrowLeft,
  Mail,
  UserPlus,
  Phone
} from "lucide-react";

// Import custom dashboards
import StudentPortal from "../components/portals/student/StudentPortal";
import TeacherPortal from "../components/portals/teacher/TeacherPortal";
import AdminPortal from "../components/portals/admin/AdminPortal";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Registration & Google Mock States
  const [view, setView] = useState("login"); // "login" or "signup"
  const [signupStep, setSignupStep] = useState(1); // 1: details, 2: OTP verification
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [registeredCreds, setRegisteredCreds] = useState(null); // stores credentials after successful registration
  const [signupRole, setSignupRole] = useState("STUDENT");
  const [showGoogleModal, setShowGoogleModal] = useState(false);

  // User session state
  const [currentUser, setCurrentUser] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [googleClientId, setGoogleClientId] = useState(null);
  const [userRole, setUserRole] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("role") || "STUDENT";
    }
    return "STUDENT";
  });
  const [isRestoringSession, setIsRestoringSession] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("token");
    }
    return false;
  });

  // Auto-restore session from localStorage on reload
  useEffect(() => {
    setIsMounted(true);

    // Fetch dynamic client configuration (runtime env variables)
    fetch("/api/config")
      .then(res => res.json())
      .then(data => {
        setGoogleClientId(data.google_client_id);
      })
      .catch(() => { });

    // Load Google Identity Services script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const token = localStorage.getItem("token");
    if (token) {
      fetch("/api/users/me", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(res => {
          if (!res.ok) throw new Error("Invalid session");
          return res.json();
        })
        .then(profileData => {
          setCurrentUser(profileData);
          setUserRole(profileData.role);
          localStorage.setItem("role", profileData.role);
        })
        .catch(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
        })
        .finally(() => {
          setIsRestoringSession(false);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setCurrentUser(null);
    setSuccess("");
    setError("");
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call to backend auth/token
      const response = await fetch("/api/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Incorrect email or password");
      }

      // Fetch user profile info
      const profileResponse = await fetch("/api/users/me", {
        headers: {
          "Authorization": `Bearer ${data.access_token}`
        }
      });

      if (!profileResponse.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const profileData = await profileResponse.json();
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("role", profileData.role);
      setUserRole(profileData.role);
      setSuccess("Successfully logged in!");
      setCurrentUser(profileData);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const sendOtpCode = async (e) => {
    if (e) e.preventDefault();
    setError("");
    setSuccess("");
    if (!signupName || !signupEmail || !signupPhone) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: signupEmail,
          phone_number: signupPhone,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Failed to send verification code.");
      }

      setSuccess("Verification code sent to your email and phone!");
      setSignupStep(2);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!otpCode) {
      setError("Please enter the verification code.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: signupEmail,
          full_name: signupName,
          phone_number: signupPhone,
          otp_code: otpCode,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Registration failed.");
      }

      // Automatically log the user in using the generated credentials returned by the backend
      const loginResponse = await fetch("/api/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: signupEmail,
          password: data.generated_password,
        }),
      });

      const loginData = await loginResponse.json();
      if (!loginResponse.ok) {
        throw new Error(loginData.detail || "Authentication failed after registration.");
      }

      // Fetch user profile info
      const profileResponse = await fetch("/api/users/me", {
        headers: {
          "Authorization": `Bearer ${loginData.access_token}`
        }
      });

      if (!profileResponse.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const profileData = await profileResponse.json();

      // Store credentials and session token
      localStorage.setItem("token", loginData.access_token);
      localStorage.setItem("role", profileData.role);

      // Save credentials to show the success credentials popup card
      setRegisteredCreds({
        email: signupEmail,
        password: data.generated_password,
        token: loginData.access_token,
        profile: profileData
      });
      setSuccess("Account verified and created successfully!");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async (googleEmail, realToken = null) => {
    setError("");
    setSuccess("");
    setShowGoogleModal(false);
    setIsLoading(true);

    try {
      let data;
      if (realToken) {
        // Real Google Authentication Route
        const response = await fetch("/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id_token: realToken }),
        });
        data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || "Google login failed on backend");
        }
      } else {
        // Mock Google Authentication Route using seeded demo credentials
        let password = "StudentSecurePass123!";
        if (googleEmail === "turing.prof@pathfinder.edu") {
          password = "TeacherSecurePass123!";
        } else if (googleEmail === "lovelace.admin@pathfinder.edu") {
          password = "AdminSecurePass123!";
        }

        const response = await fetch("/api/auth/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            username: googleEmail,
            password: password,
          }),
        });
        data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || "Incorrect email or password");
        }
      }

      const profileResponse = await fetch("/api/users/me", {
        headers: {
          "Authorization": `Bearer ${data.access_token}`
        }
      });

      if (!profileResponse.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const profileData = await profileResponse.json();
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("role", profileData.role);
      setUserRole(profileData.role);
      setSuccess("Logged in via Google!");
      setCurrentUser(profileData);
    } catch (err) {
      setError(err.message || "Google Authentication failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleClick = () => {
    const clientId = googleClientId;

    if (clientId && clientId !== "your_google_client_id.apps.googleusercontent.com" && window.google) {
      try {
        // Use standard Popup-based Google Token Client flow
        // This is 100% reliable on localhost and completely bypasses FedCM browser restrictions
        const client = window.google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: "openid email profile",
          callback: (response) => {
            if (response.access_token) {
              handleGoogleLogin(null, response.access_token);
            }
          }
        });
        client.requestAccessToken();
      } catch (e) {
        setShowGoogleModal(true);
      }
    } else {
      setShowGoogleModal(true);
    }
  };

  function DashboardSkeleton({ role }) {
    let sidebarBg = "bg-[#0c061a] border-r border-white/5"; // Student Portal dark violet-black
    let mainBg = "bg-[#f8fafc]";
    let skeletonCardBg = "bg-slate-200/70";

    if (role === "TEACHER") {
      sidebarBg = "bg-emerald-950"; // Teacher Portal dark green
    } else if (role === "SCHOOL_ADMIN" || role === "SUPER_ADMIN") {
      sidebarBg = "bg-slate-900 border-r border-slate-800"; // Admin Portal dark gray
    } else if (role === "STUDENT") {
      sidebarBg = "bg-slate-50 dark:bg-[#0c061a] border-r border-slate-200 dark:border-white/5";
      mainBg = "bg-slate-50 dark:bg-black";
      skeletonCardBg = "bg-slate-200/70 dark:bg-white/5";
    }

    return (
      <div className={`flex h-screen w-full ${mainBg}`}>
        {/* Sidebar Skeleton */}
        <div className={`hidden w-72 ${sidebarBg} p-6 md:flex flex-col gap-6`}>
          <div className="h-10 w-32 rounded-lg bg-white/5 animate-pulse"></div>
          <div className="h-6 w-full rounded bg-white/5 mt-8 animate-pulse"></div>
          <div className="h-6 w-full rounded bg-white/5 animate-pulse"></div>
          <div className="h-6 w-full rounded bg-white/5 animate-pulse"></div>
        </div>

        {/* Main Content Skeleton */}
        <div className="flex-1 flex flex-col p-6 lg:p-10 gap-6 overflow-hidden">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between">
            <div className={`h-8 w-48 rounded ${skeletonCardBg} animate-pulse`}></div>
            <div className="flex items-center gap-4">
              <div className={`h-10 w-10 rounded-full ${skeletonCardBg} animate-pulse`}></div>
              <div className={`h-10 w-24 rounded-lg ${skeletonCardBg} animate-pulse`}></div>
            </div>
          </div>

          {/* Welcome Banner Skeleton */}
          <div className={`h-40 w-full rounded-2xl ${skeletonCardBg} animate-pulse`}></div>

          {/* Stats Cards Skeleton Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
            <div className={`h-24 rounded-xl ${skeletonCardBg}`}></div>
            <div className={`h-24 rounded-xl ${skeletonCardBg}`}></div>
            <div className={`h-24 rounded-xl ${skeletonCardBg}`}></div>
            <div className={`h-24 rounded-xl ${skeletonCardBg}`}></div>
          </div>

          {/* Lower layout split */}
          <div className="flex flex-col lg:flex-row gap-6 flex-1 animate-pulse">
            <div className={`flex-1 h-64 rounded-2xl ${skeletonCardBg}`}></div>
            <div className={`w-full lg:w-80 h-64 rounded-2xl ${skeletonCardBg}`}></div>
          </div>
        </div>
      </div>
    );
  }

  // Render a clean background container during server-side rendering (SSR) or hydration to prevent layout flashing
  if (!isMounted) {
    return <div className="min-h-screen w-full bg-[#dbe4f4]"></div>;
  }

  // Render dashboard skeleton only during session restoration
  if (isRestoringSession) {
    return <DashboardSkeleton role={userRole} />;
  }

  // Render correct dashboard if logged in
  if (currentUser) {
    if (currentUser.role === "TEACHER") {
      return <TeacherPortal user={currentUser} onLogout={handleLogout} />;
    } else if (currentUser.role === "SCHOOL_ADMIN" || currentUser.role === "SUPER_ADMIN") {
      return <AdminPortal user={currentUser} onLogout={handleLogout} />;
    } else {
      return <StudentPortal user={currentUser} onLogout={handleLogout} />;
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .responsive-bg { background-image: url('/images/login page/login bg sm.png'); }
        @media (min-width: 768px) { 
          .responsive-bg { background-image: url('/images/login page/login  bg lg.png'); } 
          .desktop-radial-bg { background-image: radial-gradient(circle at 10% 80%, rgba(130, 0, 255, 0.25) 0%, transparent 60%), radial-gradient(circle at 90% 20%, rgba(255, 100, 0, 0.2) 0%, transparent 60%); }
        }
      `}} />
      <div className="flex min-h-screen w-full justify-center px-4 py-4 md:py-4 font-sans sm:items-center sm:px-8 responsive-bg bg-cover bg-center bg-no-repeat z-0">
        {/* Main Login Card Container */}
        <div className="mt-2 mb-auto md:my-auto flex w-full max-w-[1000px] flex-col overflow-hidden rounded-3xl md:rounded-[2rem] bg-transparent md:bg-white shadow-none md:shadow-2xl z-10 border-none">

          {/* Top Section with Split Columns */}
          <div className="flex flex-col md:flex-row">

            {/* Left Column (Brand, Tagline & Building Image) */}
            <div
              className="relative flex flex-col justify-between px-4 pt-5 pb-4 text-white md:w-[45%] md:p-6 lg:p-8 overflow-hidden bg-transparent md:bg-[#0a041f] desktop-radial-bg"
            >

              {/* Background Image Accent overlay (Desktop only) */}
              <div
                className="absolute inset-0 hidden md:block pointer-events-none z-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: "url('/images/login page/login bg sm.png')" }}
              ></div>

              {/* Header / Brand section (Desktop) */}
              <div className="relative z-10 hidden md:flex flex-col items-center text-center">

                {/* Pathfinder Logo (SVG styled based on image) */}
                <div className="mb-3 flex h-20 w-20 lg:h-24 lg:w-24 items-center justify-center">
                  <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer Shield/Cap outline */}
                    <path d="M50 8 L88 25 L88 55 C88 75 50 92 50 92 C50 92 12 75 12 55 L12 25 L50 8 Z" fill="#0b3394" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Graduation cap top */}
                    <path d="M50 20 L80 32 L50 44 L20 32 Z" fill="white" />
                    {/* Graduation cap body */}
                    <path d="M32 38 V48 C32 52 50 56 50 56 C50 56 68 52 68 48 V38" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
                    {/* Gold arrow cutting through the cap */}
                    <path d="M15 65 C40 65 60 55 75 30" stroke="#f1b827" strokeWidth="7" strokeLinecap="round" />
                    <path d="M62 28 L78 27 L80 42" stroke="#f1b827" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* BRAND TEXT */}
                <h2
                  className="text-3xl font-black tracking-[0.15em] text-white lg:text-[34px] drop-shadow-md"
                >
                  PATHFINDER
                </h2>

                {/* STUDENT PORTAL Banner */}
                <div className="mt-3 flex w-full items-center justify-center gap-3">
                  <div className="h-[1px] w-12 bg-white/40"></div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f1b827] sm:text-sm">
                    Portal Gateway
                  </span>
                  <div className="h-[1px] w-12 bg-white/40"></div>
                </div>

                {/* Tagline */}
                <p className="mt-6 text-[15px] text-zinc-200">
                  <span className="font-light">Your Path. Your Future.</span> <span className="font-normal text-white">Our Guidance.</span>
                </p>

                {/* Underline separator */}
                <div className="mt-5 h-[3px] w-16 rounded-full bg-[#f1b827]"></div>
              </div>

              {/* Header / Brand section (Mobile) */}
              <div className="relative z-10 flex md:hidden flex-col items-center text-center mt-2">
                {/* Pathfinder Logo */}
                <div className="mb-2 flex h-14 w-14 items-center justify-center">
                  <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 8 L88 25 L88 55 C88 75 50 92 50 92 C50 92 12 75 12 55 L12 25 L50 8 Z" fill="#0b3394" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M50 20 L80 32 L50 44 L20 32 Z" fill="white" />
                    <path d="M32 38 V48 C32 52 50 56 50 56 C50 56 68 52 68 48 V38" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" />
                    <path d="M15 65 C40 65 60 55 75 30" stroke="#f1b827" strokeWidth="7" strokeLinecap="round" />
                    <path d="M62 28 L78 27 L80 42" stroke="#f1b827" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>



                {/* Welcome Back Text */}
                <h2 className="mt-2 text-2xl font-black text-white tracking-tight leading-tight">
                  WELCOME BACK
                </h2>

                {/* Underline separator */}
                <div className="mt-2 h-[2px] w-12 rounded-full bg-gradient-to-r from-purple-500 to-orange-500"></div>

                {/* Mobile Tagline */}
                <p className="mt-2 text-xs text-zinc-400 font-light max-w-[260px]">
                  Sign in to access your <span className="font-semibold text-purple-400">AI-powered</span> learning dashboard.
                </p>


              </div>

              {/* Bottom Image Component (Desktop only) */}
              <div className="relative mt-4 hidden md:block h-48 w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg md:h-48">
                <Image
                  src="/images/login page/school_building.png"
                  alt="Pathfinder campus and students"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column (Login Form) */}
            <div className="relative flex flex-col justify-center px-4 pt-2 pb-6 md:py-6 md:w-[55%] lg:p-10 bg-transparent md:bg-white rounded-b-3xl md:rounded-none">

              {/* Top Right 3D Books Illustration */}
              <div className="absolute right-4 top-4 hidden h-20 w-20 sm:block md:h-24 md:w-24 lg:right-8 lg:top-6">
                <Image
                  src="/images/login page/books_cap.png"
                  alt="Graduation Books"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>

              {/* Notification Messages */}
              {error && (
                <div className="mb-4 rounded-lg bg-red-50 p-3 text-xs font-medium text-red-600 border border-red-100">
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-4 rounded-lg bg-green-50 p-3 text-xs font-medium text-green-600 border border-green-100">
                  {success}
                </div>
              )}

              {/* View Switcher: Login Form vs SignUp Form */}
              {view === "login" ? (
                <>
                  {/* Welcome Text (Desktop Only) */}
                  <div className="mb-4 hidden md:block">
                    <h1 className="text-3xl font-extrabold text-[#0c2356] tracking-tight">
                      Welcome Back!
                    </h1>
                    <p className="mt-1 text-sm text-zinc-500">
                      Login to access your Pathfinder dashboard
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Username Input */}
                    <div className="space-y-1 p-3 md:p-0 rounded-xl md:rounded-none bg-[#100b21]/90 md:bg-transparent border border-white/5 md:border-transparent">
                      <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-400 md:text-zinc-700">
                        Email Address
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-zinc-500 md:text-zinc-400">
                          <User className="h-5 w-5" />
                        </span>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="student@pathfinder.edu"
                          className="w-full rounded-xl border border-white/10 md:border-zinc-200 bg-[#181236]/80 md:bg-white py-3 pl-12 pr-4 text-sm text-white md:text-zinc-800 outline-none transition-all placeholder:text-zinc-500 md:placeholder:text-zinc-400 focus:border-[#5e2ae6] md:focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#5e2ae6] md:focus:ring-[#1e4cd8]"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1 p-3 md:p-0 rounded-xl md:rounded-none bg-[#100b21]/90 md:bg-transparent border border-white/5 md:border-transparent">
                      <label className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-400 md:text-zinc-700">
                        Password
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-4 text-zinc-500 md:text-zinc-400">
                          <Lock className="h-5 w-5" />
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••••••"
                          className="w-full rounded-xl border border-white/10 md:border-zinc-200 bg-[#181236]/80 md:bg-white py-3 pl-12 pr-12 text-sm text-white md:text-zinc-800 outline-none transition-all placeholder:text-zinc-500 md:placeholder:text-zinc-400 focus:border-[#5e2ae6] md:focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#5e2ae6] md:focus:ring-[#1e4cd8]"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 text-zinc-400 hover:text-zinc-600 focus:outline-none"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Checkbox and Forgot Password */}
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center gap-2 text-zinc-300 md:text-zinc-600 select-none cursor-pointer">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="h-4 w-4 rounded border-white/10 md:border-zinc-300 bg-[#130d2d] md:bg-white text-[#5e2ae6] md:text-[#1e4cd8] focus:ring-[#5e2ae6] md:focus:ring-[#1e4cd8]"
                        />
                        <span>Remember Me</span>
                      </label>
                      <a href="#" className="font-semibold text-[#f1b827] md:text-[#1e4cd8] hover:underline">
                        Forgot Password?
                      </a>
                    </div>

                    {/* Login Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#170560] to-[#3e0fc1] py-3 text-sm font-semibold text-white transition-all hover:from-[#13034a] hover:to-[#330a9e] focus:outline-none focus:ring-2 focus:ring-[#3e0fc1] focus:ring-offset-2 disabled:bg-zinc-400"
                    >
                      {isLoading ? (
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        <>
                          <LogIn className="h-5 w-5" />
                          <span>Login</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Divider OR */}
                  <div className="my-2 flex items-center justify-center gap-3">
                    <div className="h-[1px] flex-1 bg-white/10 md:bg-zinc-200"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 md:text-zinc-400">
                      OR
                    </span>
                    <div className="h-[1px] flex-1 bg-white/10 md:bg-zinc-200"></div>
                  </div>

                  {/* Google Sign In Button */}
                  <button
                    type="button"
                    onClick={handleGoogleClick}
                    className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 md:border-zinc-200 bg-[#130d2d] md:bg-white py-3 text-sm font-semibold text-white md:text-zinc-700 transition-all hover:bg-[#1a1438] md:hover:bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-[#5e2ae6] md:focus:ring-zinc-300"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span>Login with Google</span>
                  </button>

                  {/* Switch view link */}
                  <div className="mt-4 text-center text-sm">
                    <span className="text-zinc-400 md:text-zinc-500">New here? </span>
                    <button
                      onClick={() => {
                        setView("signup");
                        setError("");
                        setSuccess("");
                      }}
                      className="font-bold text-[#f1b827] md:text-[#1e4cd8] hover:underline focus:outline-none"
                    >
                      Create an Account
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* SignUp Header */}
                  <div className="mb-6">
                    <button
                      onClick={() => {
                        setView("login");
                        setError("");
                        setSuccess("");
                      }}
                      className="mb-2 flex items-center gap-1 text-xs font-semibold text-zinc-500 hover:text-zinc-700 focus:outline-none"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      <span>Back to Login</span>
                    </button>
                    <h1 className="text-3xl font-extrabold text-[#0c2356] tracking-tight">
                      Create Account
                    </h1>
                    <p className="mt-1 text-sm text-zinc-500">
                      Register a new portal gateway membership
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={signupStep === 1 ? sendOtpCode : handleRegister} className="space-y-4">
                    {signupStep === 1 ? (
                      <>
                        {/* Full Name */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                            Full Name
                          </label>
                          <div className="relative flex items-center">
                            <span className="absolute left-4 text-zinc-400">
                              <User className="h-5 w-5" />
                            </span>
                            <input
                              type="text"
                              value={signupName}
                              onChange={(e) => setSignupName(e.target.value)}
                              placeholder="Enter your full name"
                              className="w-full rounded-xl border border-zinc-200 py-2.5 pl-12 pr-4 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#1e4cd8]"
                              required
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                            Email Address
                          </label>
                          <div className="relative flex items-center">
                            <span className="absolute left-4 text-zinc-400">
                              <Mail className="h-5 w-5" />
                            </span>
                            <input
                              type="email"
                              value={signupEmail}
                              onChange={(e) => setSignupEmail(e.target.value)}
                              placeholder="Enter email address"
                              className="w-full rounded-xl border border-zinc-200 py-2.5 pl-12 pr-4 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#1e4cd8]"
                              required
                            />
                          </div>
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-1">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                            Phone Number
                          </label>
                          <div className="relative flex items-center">
                            <span className="absolute left-4 text-zinc-400">
                              <Phone className="h-5 w-5" />
                            </span>
                            <input
                              type="tel"
                              value={signupPhone}
                              onChange={(e) => setSignupPhone(e.target.value)}
                              placeholder="Enter phone number"
                              className="w-full rounded-xl border border-zinc-200 py-2.5 pl-12 pr-4 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#1e4cd8]"
                              required
                            />
                          </div>
                        </div>

                        {/* Submit Button Step 1 */}
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:bg-zinc-400 mt-2"
                        >
                          {isLoading ? (
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          ) : (
                            <>
                              <UserPlus className="h-5 w-5" />
                              <span>Send Verification Code</span>
                            </>
                          )}
                        </button>
                      </>
                    ) : (
                      <>
                        {/* OTP Verification Code */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                            Verification Code
                          </label>
                          <p className="text-xs text-zinc-500 leading-normal">
                            We've sent a 6-digit OTP code to <strong className="text-zinc-700">{signupEmail}</strong> and your phone. Enter the code below to complete your registration.
                          </p>
                          <div className="relative flex items-center">
                            <span className="absolute left-4 text-zinc-400">
                              <Lock className="h-5 w-5" />
                            </span>
                            <input
                              type="text"
                              maxLength={6}
                              value={otpCode}
                              onChange={(e) => setOtpCode(e.target.value)}
                              placeholder="Enter 6-digit OTP"
                              className="w-full rounded-xl border border-zinc-200 py-2.5 pl-12 pr-4 text-sm text-zinc-800 outline-none tracking-widest font-bold placeholder:tracking-normal transition-all placeholder:text-zinc-400 focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#1e4cd8]"
                              required
                            />
                          </div>
                          <p className="text-[10px] text-zinc-400">💡 Tip: For testing, you can also use <strong className="text-zinc-600">123456</strong>.</p>
                        </div>

                        {/* Submit Button Step 2 */}
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:bg-zinc-400 mt-2"
                        >
                          {isLoading ? (
                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          ) : (
                            <>
                              <UserPlus className="h-5 w-5" />
                              <span>Verify & Create Account</span>
                            </>
                          )}
                        </button>

                        {/* Back button */}
                        <button
                          type="button"
                          onClick={() => {
                            setSignupStep(1);
                            setError("");
                            setSuccess("");
                          }}
                          className="w-full text-center text-xs font-semibold text-zinc-500 hover:text-zinc-700 focus:outline-none mt-2"
                        >
                          Change Details / Go Back
                        </button>
                      </>
                    )}
                  </form>
                </>
              )}

              {/* Registration Success Credentials Modal */}
              {registeredCreds && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 text-slate-800">
                  <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-200 border border-zinc-100">
                    <div className="text-center mb-6">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-4">
                        <UserPlus className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900">Account Created!</h3>
                      <p className="text-sm text-zinc-500 mt-1">
                        Your login credentials have been sent to your verified email:
                      </p>
                      <p className="text-sm font-semibold text-[#1e4cd8] mt-1">{registeredCreds.email}</p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3 mb-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Username / Email</span>
                        <p className="text-sm font-semibold text-zinc-800">{registeredCreds.email}</p>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Generated Password</span>
                        <p className="text-sm font-mono font-bold text-zinc-800 select-all bg-white py-1.5 px-3 rounded border border-zinc-200 mt-1">
                          {registeredCreds.password}
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-1">💡 Tip: Copy this password to log in. You can change it later.</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setUserRole(registeredCreds.profile.role);
                        setCurrentUser(registeredCreds.profile);
                        setRegisteredCreds(null);
                        setSignupStep(1);
                        setView("login");
                      }}
                      className="w-full rounded-xl bg-[#1e4cd8] py-3 text-sm font-bold text-white transition-all hover:bg-[#1a44c2] focus:outline-none"
                    >
                      Go to Student Dashboard
                    </button>
                  </div>
                </div>
              )}

              {/* Google Identity Mock Account Selection Modal Overlay */}
              {showGoogleModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-sm p-4">
                  <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in duration-200 text-slate-800">
                    <div className="mb-4 flex items-center justify-between border-b border-zinc-100 pb-3">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900">Sign in with Google</h3>
                        <p className="text-xs text-zinc-500">Select an account to log in to Pathfinder</p>
                      </div>
                      <button
                        onClick={() => setShowGoogleModal(false)}
                        className="rounded-lg p-1 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-600"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-3">
                      <button
                        onClick={() => handleGoogleLogin("student@pathfinder.edu")}
                        className="flex w-full items-center gap-3 rounded-xl border border-zinc-100 p-3 text-left transition-all hover:bg-slate-50 hover:border-blue-200"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">JD</div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-zinc-950">John Doe</p>
                          <p className="text-xs text-zinc-500">student@pathfinder.edu</p>
                        </div>
                        <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-600">Student</span>
                      </button>

                      <button
                        onClick={() => handleGoogleLogin("turing.prof@pathfinder.edu")}
                        className="flex w-full items-center gap-3 rounded-xl border border-zinc-100 p-3 text-left transition-all hover:bg-slate-50 hover:border-emerald-200"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-bold">AT</div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-zinc-950">Prof. Alan Turing</p>
                          <p className="text-xs text-zinc-500">turing.prof@pathfinder.edu</p>
                        </div>
                        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600">Teacher</span>
                      </button>

                      <button
                        onClick={() => handleGoogleLogin("lovelace.admin@pathfinder.edu")}
                        className="flex w-full items-center gap-3 rounded-xl border border-zinc-100 p-3 text-left transition-all hover:bg-slate-50 hover:border-indigo-200"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 font-bold">AL</div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-zinc-950">Ada Lovelace</p>
                          <p className="text-xs text-zinc-500">lovelace.admin@pathfinder.edu</p>
                        </div>
                        <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-[10px] font-bold text-indigo-600">Admin</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setShowGoogleModal(false)}
                      className="mt-4 w-full rounded-xl bg-slate-100 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Navigation Bar */}
          <div className="grid grid-cols-2 bg-[#090417] py-4 md:grid-cols-4 w-full rounded-3xl md:rounded-t-none md:rounded-b-[2rem]">

            <div className="flex flex-col items-center justify-center gap-1 border-r border-white/5 border-b md:border-b-0 py-3 md:py-2 px-2 md:px-4 text-center">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-[#5e2ae6]" />
                <span className="text-xs md:text-sm font-semibold text-white">
                  Access<br className="md:hidden" /> Materials
                </span>
              </div>
              <span className="text-[9px] md:text-[10px] text-zinc-400">All in one place</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 md:border-r border-white/5 border-b md:border-b-0 py-3 md:py-2 px-2 md:px-4 text-center">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 md:h-6 md:w-6 text-[#5e2ae6]" />
                <span className="text-xs md:text-sm font-semibold text-white">
                  Check<br className="md:hidden" /> Attendance
                </span>
              </div>
              <span className="text-[9px] md:text-[10px] text-zinc-400">Track & stay on top</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 border-r border-white/5 py-3 md:py-2 px-2 md:px-4 text-center">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-[#f1b827]" />
                <span className="text-xs md:text-sm font-semibold text-white">
                  View<br className="md:hidden" /> Results
                </span>
              </div>
              <span className="text-[9px] md:text-[10px] text-zinc-400">Monitor progress</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1 py-3 md:py-2 px-2 md:px-4 text-center">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 md:h-6 md:w-6 text-[#5e2ae6]" />
                <span className="text-xs md:text-sm font-semibold text-white">
                  Stay<br className="md:hidden" /> Updated
                </span>
              </div>
              <span className="text-[9px] md:text-[10px] text-zinc-400">Important alerts</span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
