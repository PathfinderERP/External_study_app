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
    <div className="flex h-screen overflow-hidden font-sans transition-colors duration-300 bg-slate-50 dark:bg-black text-slate-900 dark:text-white">
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
          <div className="w-64 bg-[#0c061a] h-full flex flex-col relative shadow-2xl">
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
        <header className="sticky top-0 z-30 h-20 md:h-20 py-2 md:py-0 flex items-center justify-between px-3 md:px-8 transition-colors duration-300 bg-white/80 dark:bg-[#0c061a]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-white shadow-sm">
          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Hamburger Button for mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              title="Open Navigation Menu"
              className="
                md:hidden relative flex flex-col items-center justify-center gap-[5px]
                w-10 h-10 rounded-xl
                bg-white/60 dark:bg-white/5
                border border-slate-200/80 dark:border-white/10
                shadow-sm
                transition-all duration-300
                hover:scale-105 hover:shadow-md
                hover:border-blue-400/60 dark:hover:border-[#00E3FD]/40
                hover:bg-blue-50/80 dark:hover:bg-[#00E3FD]/10
                active:scale-95
                group
              "
            >
              {/* Three animated bars */}
              <span className="block w-[18px] h-[2.5px] rounded-full bg-slate-600 dark:bg-white transition-all duration-300 group-hover:bg-blue-500 dark:group-hover:bg-[#00E3FD] group-hover:w-[14px]" />
              <span className="block w-[18px] h-[2.5px] rounded-full bg-slate-600 dark:bg-white transition-all duration-300 group-hover:bg-blue-500 dark:group-hover:bg-[#00E3FD]" />
              <span className="block w-[18px] h-[2.5px] rounded-full bg-slate-600 dark:bg-white transition-all duration-300 group-hover:bg-blue-500 dark:group-hover:bg-[#00E3FD] group-hover:w-[10px]" />
              {/* Glow ring */}
              <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-2 ring-blue-400/40 dark:ring-[#00E3FD]/30 pointer-events-none" />
            </button>
            {/* <span className="text-[12px] md:text-sm font-bold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full whitespace-nowrap text-blue-600 bg-blue-50/80 dark:text-[#00E3FD] dark:bg-[#00E3FD]/10 border border-blue-100 dark:border-[#00E3FD]/20 shadow-inner">Student Portal</span> */}
          </div>
          <div className="flex items-center gap-3 md:gap-5">
            <ThemeToggle />
            <button className="relative p-2 rounded-xl transition-all duration-300 text-slate-400 hover:text-slate-700 hover:bg-slate-100 dark:text-white/60 dark:hover:text-white dark:hover:bg-white/10 active:scale-95">
              <Bell className="h-7 w-7 md:h-[22px] md:w-[22px]" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#0c061a]"></span>
            </button>
            <div className="h-6 md:h-8 w-[1px] bg-slate-200 dark:bg-white/10"></div>
            <div className="relative">
              <div
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-2 md:gap-3 hover:bg-slate-50 dark:hover:bg-white/5 p-1.5 pr-3 md:pr-4 rounded-full transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-white/10"
              >
                <div className="h-10 w-10 md:h-11 md:w-11 rounded-full overflow-hidden flex items-center justify-center bg-slate-100 border-2 border-white dark:bg-white/10 dark:border-slate-800 shadow-sm">
                  <img src={`https://api.dicebear.com/7.x/micah/svg?seed=${user?.full_name || 'Student'}`} alt="Profile Avatar" className="w-full h-full object-cover scale-110" />
                </div>
                <div className="hidden text-left md:block">
                  <p className="text-sm font-bold text-slate-800 dark:text-white leading-tight">{user?.full_name || "Demo Student"}</p>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-white/50">{user?.email}</p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); onLogout(); }}
                  className="hidden md:block ml-2 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-full transition-all duration-300 active:scale-95"
                  title="Logout"
                >
                  <LogOut className="h-[18px] w-[18px]" />
                </button>
              </div>

              {/* Mobile Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#1a0e31] rounded-2xl shadow-xl border border-slate-200 dark:border-white/10 overflow-hidden z-50 md:hidden animate-fade-in">
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
