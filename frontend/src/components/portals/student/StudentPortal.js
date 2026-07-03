"use client";

import React, { useState } from "react";
import { Bell, LogOut, Menu, X, User } from "lucide-react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import { ThemeToggle } from "../../ThemeToggle";

// New Figma pages
import Analytics from "./pages/Analytics";
import Attendance from "./pages/Attendance";
import Community from "./pages/Community";
import Exams from "./pages/Exams";
import Grievance from "./pages/Grievance";
import MyFeed from "./pages/MyFeed";
import NoticeBoard from "./pages/NoticeBoard";
import Performance from "./pages/Performance";
import Planner from "./pages/Planner";
import Profile from "./pages/Profile";
import ResultPage from "./pages/ResultPage";
import StudyAdda from "./pages/StudyAdda";
import StudyMaterial from "./pages/StudyMaterial";
import SwotAnalysis from "./pages/SwotAnalysis";

export default function StudentPortal({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden font-sans transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-[#070514] dark:text-white relative w-full">
      {/* Sidebar Component for Desktop */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMinimized={isSidebarMinimized}
        setIsMinimized={setIsSidebarMinimized}
      />

      {/* Mobile Drawer Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[999] flex md:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="w-64 bg-white dark:bg-[#0c061a] h-full flex flex-col relative shadow-2xl">
            {/* Render Sidebar inside mobile container */}
            <Sidebar
              activeTab={activeTab}
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setSidebarOpen(false); // Close drawer after clicking item
              }}
              isMobile={true}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
          {/* Click outside backdrop to close */}
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 h-20 md:h-24 py-2 md:py-0 flex items-center justify-between px-3 md:px-8 transition-colors duration-300 bg-white/90 dark:bg-transparent backdrop-blur-md border-b border-slate-200 dark:border-transparent text-slate-900 dark:text-white w-full">
          <div className="flex items-center gap-4 md:gap-6">
            {/* Hamburger Button for mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              title="Open Navigation Menu"
              className="
                md:hidden relative flex flex-col items-center justify-center gap-[5px]
                w-10 h-10 rounded-xl
                bg-transparent
                border border-slate-200 dark:border-white/10
                transition-all duration-300
                hover:bg-slate-100 dark:hover:bg-white/5
                active:scale-95
              "
            >
              {/* Three animated bars */}
              <span className="block w-[18px] h-[2.5px] rounded-full bg-slate-700 dark:bg-white transition-all duration-300" />
              <span className="block w-[18px] h-[2.5px] rounded-full bg-slate-700 dark:bg-white transition-all duration-300" />
              <span className="block w-[18px] h-[2.5px] rounded-full bg-slate-700 dark:bg-white transition-all duration-300" />
            </button>
            
            {/* Title (Hidden on very small screens) */}
            <h2 className="hidden sm:block text-[#D97706] dark:text-[#FFC300] bg-[#FFC300]/10 dark:bg-transparent px-2 py-1 rounded font-medium tracking-[0.2em] italic text-xs md:text-sm shadow-sm drop-shadow-none dark:drop-shadow-[0_0_8px_rgba(255,195,0,0.4)]">
              STUDENT INTELLIGENCE HUB
            </h2>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <ThemeToggle />
            <button className="relative p-2 rounded-xl transition-all duration-300 text-slate-500 hover:text-[#FFC300] hover:bg-slate-100 dark:text-white dark:hover:text-[#FFC300] dark:hover:bg-white/5 active:scale-95">
              <Bell className="h-6 w-6 md:h-[22px] md:w-[22px]" strokeWidth={1.5} />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
            </button>
            <div className="h-6 md:h-8 w-[1px] bg-slate-200 dark:bg-white/10"></div>
            
            <div className="relative">
              <div
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-3 md:gap-4 p-1.5 pr-3 md:pr-4 rounded-full transition-all duration-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-white/5"
              >
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-tr from-[#1c0f3b] to-[#0a0515] border border-[#3d1c7a] shadow-[0_0_15px_rgba(112,48,225,0.2)]">
                  <img src={`https://api.dicebear.com/7.x/micah/svg?seed=${user?.full_name || 'Student'}`} alt="Profile Avatar" className="w-full h-full object-cover scale-110" />
                </div>
                <div className="hidden text-left md:block">
                  <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">{user?.full_name ? user.full_name.split(' ')[0] : "John"}!</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Keep learning!</p>
                </div>
                <svg className="hidden md:block w-4 h-4 text-slate-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#1a0e31] rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 overflow-hidden z-50 animate-fade-in">
                  <div className="p-4 border-b border-slate-100 dark:border-white/5">
                    <p className="text-sm font-bold text-slate-800 dark:text-white truncate">{user?.full_name || "Demo Student"}</p>
                    <p className="text-xs text-slate-500 dark:text-white/50 truncate">{user?.email}</p>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={() => { setActiveTab("profile"); setIsProfileDropdownOpen(false); }}
                      className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 dark:text-white/80 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors"
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </button>
                    <button
                      onClick={onLogout}
                      className="w-full flex items-center gap-3 px-3 py-2 mt-1 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Body based on Active Tab */}
        <main className={`flex-1 overflow-y-auto ${activeTab === "overview" ? "" : "p-6 md:p-8"}`}>
          {activeTab === "overview" && <Overview user={user} onLogout={onLogout} />}
          {activeTab === "analytics" && <Analytics />}
          {activeTab === "attendance" && <Attendance />}
          {activeTab === "community" && <Community />}
          {activeTab === "exams" && <Exams />}
          {activeTab === "grievance" && <Grievance />}
          {activeTab === "myfeed" && <MyFeed />}
          {activeTab === "noticeboard" && <NoticeBoard />}
          {activeTab === "performance" && <Performance />}
          {activeTab === "planner" && <Planner />}
          {activeTab === "profile" && <Profile />}
          {activeTab === "resultpage" && <ResultPage />}
          {activeTab === "studyadda" && <StudyAdda />}
          {activeTab === "studymaterial" && <StudyMaterial />}
          {activeTab === "swotanalysis" && <SwotAnalysis />}
        </main>
      </div>
    </div>
  );
}
