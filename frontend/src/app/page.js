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
  UserPlus
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
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupRole, setSignupRole] = useState("STUDENT");
  const [showGoogleModal, setShowGoogleModal] = useState(false);

  // User session state
  const [currentUser, setCurrentUser] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!signupName || !signupEmail || !signupPassword) {
      setError("Please fill in all fields.");
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
          password: signupPassword,
          full_name: signupName,
          role: signupRole,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "Registration failed.");
      }

      setSuccess("Account created successfully! Logging you in...");
      
      const loginResponse = await fetch("/api/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: signupEmail,
          password: signupPassword,
        }),
      });

      const loginData = await loginResponse.json();
      if (!loginResponse.ok) {
        throw new Error(loginData.detail || "Authentication failed after registration.");
      }

      const profileResponse = await fetch("/api/users/me", {
        headers: {
          "Authorization": `Bearer ${loginData.access_token}`
        }
      });

      if (!profileResponse.ok) {
        throw new Error("Failed to fetch user profile");
      }

      const profileData = await profileResponse.json();
      localStorage.setItem("token", loginData.access_token);
      localStorage.setItem("role", profileData.role);
      setUserRole(profileData.role);
      setCurrentUser(profileData);
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
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    
    if (clientId && clientId !== "your_google_client_id.apps.googleusercontent.com" && window.google) {
      try {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: (response) => {
            if (response.credential) {
              handleGoogleLogin(null, response.credential);
            }
          }
        });
        window.google.accounts.id.prompt();
      } catch (e) {
        setShowGoogleModal(true);
      }
    } else {
      setShowGoogleModal(true);
    }
  };

function DashboardSkeleton({ role }) {
  let sidebarBg = "bg-[#0c2356]"; // Default Student Portal dark blue
  if (role === "TEACHER") {
    sidebarBg = "bg-emerald-950"; // Teacher Portal dark green
  } else if (role === "SCHOOL_ADMIN" || role === "SUPER_ADMIN") {
    sidebarBg = "bg-slate-900 border-r border-slate-800"; // Admin Portal dark gray
  }

  return (
    <div className="flex h-screen w-full bg-[#f8fafc]">
      {/* Sidebar Skeleton */}
      <div className={`hidden w-64 ${sidebarBg} p-6 md:flex flex-col gap-6`}>
        <div className="h-10 w-32 rounded-lg bg-white/5 animate-pulse"></div>
        <div className="h-6 w-full rounded bg-white/5 mt-8 animate-pulse"></div>
        <div className="h-6 w-full rounded bg-white/5 animate-pulse"></div>
        <div className="h-6 w-full rounded bg-white/5 animate-pulse"></div>
      </div>
      
      {/* Main Content Skeleton */}
      <div className="flex-1 flex flex-col p-6 lg:p-10 gap-6 overflow-hidden">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-8 w-48 rounded bg-slate-200/70 animate-pulse"></div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-slate-200/70 animate-pulse"></div>
            <div className="h-10 w-24 rounded-lg bg-slate-200/70 animate-pulse"></div>
          </div>
        </div>
        
        {/* Welcome Banner Skeleton */}
        <div className="h-40 w-full rounded-2xl bg-slate-200/70 animate-pulse"></div>
        
        {/* Stats Cards Skeleton Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
          <div className="h-24 rounded-xl bg-slate-200/70"></div>
          <div className="h-24 rounded-xl bg-slate-200/70"></div>
          <div className="h-24 rounded-xl bg-slate-200/70"></div>
          <div className="h-24 rounded-xl bg-slate-200/70"></div>
        </div>
        
        {/* Lower layout split */}
        <div className="flex flex-col lg:flex-row gap-6 flex-1 animate-pulse">
          <div className="flex-1 h-64 rounded-2xl bg-slate-200/70"></div>
          <div className="w-full lg:w-80 h-64 rounded-2xl bg-slate-200/70"></div>
        </div>
      </div>
    </div>
  );
}

  // Render skeleton screen during server-side rendering (SSR) or session restoration to avoid flashing the login page
  if (!isMounted || isRestoringSession) {
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
    <div className="flex min-h-screen w-full justify-center bg-[#dbe4f4] px-4 py-8 font-sans sm:items-center sm:px-8">
      {/* Main Login Card Container */}
      <div className="my-auto flex w-full max-w-[1000px] flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl">

        {/* Top Section with Split Columns */}
        <div className="flex flex-col md:flex-row">

          {/* Left Column (Brand, Tagline & Building Image) */}
          <div className="relative flex flex-col justify-between bg-gradient-to-br from-[#0b3394] via-[#051a54] to-[#020b26] px-6 py-12 text-white md:w-[45%] md:p-8 lg:p-10">

            {/* Background Grid Accent overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            {/* Header / Brand section */}
            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Pathfinder Logo (SVG styled based on image) */}
              <div className="mb-4 flex h-20 w-20 items-center justify-center">
                <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Shield/Cap outline */}
                  <path d="M50 5 L90 25 L90 55 C90 75 50 95 50 95 C50 95 10 75 10 55 L10 25 L50 5 Z" fill="#0b3394" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Graduation cap top */}
                  <path d="M50 16 L82 30 L50 44 L18 30 Z" fill="white" />
                  {/* Graduation cap body */}
                  <path d="M30 35 V48 C30 52 50 58 50 58 C50 58 70 52 70 48 V35" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                  {/* Gold arrow cutting through the cap */}
                  <path d="M15 65 C45 65 60 55 75 35" stroke="#f1b827" strokeWidth="6" strokeLinecap="round" />
                  <path d="M68 32 L78 32 L78 42" stroke="#f1b827" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* BRAND TEXT */}
              <h2 className="text-3xl font-extrabold tracking-widest text-white lg:text-4xl">
                PATHFINDER
              </h2>

              {/* STUDENT PORTAL Banner */}
              <div className="mt-1 flex w-full items-center justify-center gap-2">
                <div className="h-[2px] flex-1 bg-white/30"></div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f1b827] sm:text-sm">
                  Portal Gateway
                </span>
                <div className="h-[2px] flex-1 bg-white/30"></div>
              </div>

              {/* Tagline */}
              <p className="mt-6 text-xs font-light text-zinc-300 sm:text-sm">
                Your Path. Your Future. Our Guidance.
              </p>

              {/* Underline separator */}
              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#f1b827]"></div>
            </div>

            {/* Bottom Image Component */}
            <div className="relative mt-8 h-48 w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg md:h-56">
              <Image
                src="/images/school_building.png"
                alt="Pathfinder campus and students"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column (Login Form) */}
          <div className="relative flex flex-col justify-center p-8 md:w-[55%] lg:p-12">

            {/* Top Right 3D Books Illustration */}
            <div className="absolute right-4 top-4 hidden h-20 w-20 sm:block md:h-24 md:w-24 lg:right-8 lg:top-6">
              <Image
                src="/images/books_cap.png"
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
                {/* Welcome Text */}
                <div className="mb-6">
                  <h1 className="text-3xl font-extrabold text-[#0c2356] tracking-tight">
                    Welcome Back!
                  </h1>
                  <p className="mt-1 text-sm text-zinc-500">
                    Login to access your Pathfinder dashboard
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Username Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Email Address
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-zinc-400">
                        <User className="h-5 w-5" />
                      </span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-xl border border-zinc-200 py-3 pl-12 pr-4 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#1e4cd8]"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-zinc-400">
                        <Lock className="h-5 w-5" />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full rounded-xl border border-zinc-200 py-3 pl-12 pr-12 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#1e4cd8]"
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
                    <label className="flex items-center gap-2 text-zinc-600 select-none cursor-pointer">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="h-4 w-4 rounded border-zinc-300 text-[#1e4cd8] focus:ring-[#1e4cd8]"
                      />
                      <span>Remember Me</span>
                    </label>
                    <a href="#" className="font-semibold text-[#1e4cd8] hover:underline">
                      Forgot Password?
                    </a>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1e4cd8] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1a44c2] focus:outline-none focus:ring-2 focus:ring-[#1e4cd8] focus:ring-offset-2 disabled:bg-zinc-400"
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
                <div className="my-6 flex items-center justify-center gap-3">
                  <div className="h-[1px] flex-1 bg-zinc-200"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    OR
                  </span>
                  <div className="h-[1px] flex-1 bg-zinc-200"></div>
                </div>

                {/* Google Sign In Button */}
                <button
                  type="button"
                  onClick={handleGoogleClick}
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-zinc-200 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-1 focus:ring-zinc-300"
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
                <div className="mt-6 text-center text-sm">
                  <span className="text-zinc-500">New here? </span>
                  <button
                    onClick={() => {
                      setView("signup");
                      setError("");
                      setSuccess("");
                    }}
                    className="font-bold text-[#1e4cd8] hover:underline focus:outline-none"
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
                <form onSubmit={handleRegister} className="space-y-4">
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

                  {/* Password */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-4 text-zinc-400">
                        <Lock className="h-5 w-5" />
                      </span>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        placeholder="Choose a password"
                        className="w-full rounded-xl border border-zinc-200 py-2.5 pl-12 pr-12 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#1e4cd8]"
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

                  {/* Role Select Dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                      Account Role
                    </label>
                    <select
                      value={signupRole}
                      onChange={(e) => setSignupRole(e.target.value)}
                      className="w-full rounded-xl border border-zinc-200 py-2.5 px-4 text-sm text-zinc-800 outline-none transition-all focus:border-[#1e4cd8] focus:ring-1 focus:ring-[#1e4cd8] bg-white cursor-pointer"
                    >
                      <option value="STUDENT">Student</option>
                      <option value="TEACHER">Teacher</option>
                    </select>
                  </div>

                  {/* Submit Button */}
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
                        <span>Create Account</span>
                      </>
                    )}
                  </button>
                </form>
              </>
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
        <div className="grid grid-cols-2 border-t border-zinc-100 bg-white py-4 md:grid-cols-4">

          <div className="flex items-center justify-center gap-2 border-r border-zinc-100 py-2 px-4 text-center">
            <BookOpen className="h-5 w-5 text-[#1e4cd8]" />
            <span className="text-xs font-semibold text-[#0c2356] sm:text-sm">
              Access Study Materials
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 border-r border-zinc-100 py-2 px-4 text-center md:border-r">
            <Calendar className="h-5 w-5 text-[#1e4cd8]" />
            <span className="text-xs font-semibold text-[#0c2356] sm:text-sm">
              Check Attendance
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 border-r border-zinc-100 py-2 px-4 text-center">
            <TrendingUp className="h-5 w-5 text-[#1e4cd8]" />
            <span className="text-xs font-semibold text-[#0c2356] sm:text-sm">
              View Results
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 py-2 px-4 text-center">
            <Bell className="h-5 w-5 text-[#1e4cd8]" />
            <span className="text-xs font-semibold text-[#0c2356] sm:text-sm">
              Stay Updated
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
