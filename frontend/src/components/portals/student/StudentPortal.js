"use client";

import React, { useState } from "react";
import { Bell, LogOut, Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import { ThemeToggle } from "../../ThemeToggle";
import Courses from "./Courses";
import Schedule from "./Schedule";

export default function StudentPortal({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden font-sans transition-colors duration-300 bg-slate-50 dark:bg-black text-slate-900 dark:text-white">
      {/* Sidebar Component for Desktop */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Mobile Drawer Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-[999] flex md:hidden bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="w-64 bg-[#0c061a] h-full flex flex-col relative shadow-2xl">
            {/* Close Button inside drawer header */}
            <div className="absolute top-5 right-4 z-[1000]">
              <button 
                onClick={() => setSidebarOpen(false)}
                className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/5"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            {/* Render Sidebar inside mobile container */}
            <Sidebar 
              activeTab={activeTab} 
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setSidebarOpen(false); // Close drawer after clicking item
              }} 
              isMobile={true}
            />
          </div>
          {/* Click outside backdrop to close */}
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 md:h-20 py-2 md:py-0 flex items-center justify-between px-3 md:px-8 transition-colors duration-300 bg-white dark:bg-[#0c061a] border-b border-slate-200 dark:border-white/5 text-slate-800 dark:text-white">
          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Hamburger Button for mobile */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className="p-1 md:p-2 rounded-lg md:hidden transition-colors hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-white"
              title="Open Navigation Menu"
            >
              <Menu className="h-7 w-7 md:h-6 md:w-6" />
            </button>
            <span className="text-[12px] md:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap text-blue-600 bg-blue-50 dark:text-[#00E3FD] dark:bg-[#00E3FD]/15">Student Portal</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <button className="relative p-1 md:p-2 text-slate-400 hover:text-slate-600 dark:text-white/60 dark:hover:text-white">
              <Bell className="h-5 w-5 md:h-6 md:w-6" />
              <span className="absolute top-1 right-1 md:top-1.5 md:right-1.5 h-1.5 w-1.5 md:h-2.5 md:w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="h-6 md:h-8 w-[1px] bg-slate-200 dark:bg-white/10"></div>
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className="h-7 w-7 md:h-10 md:w-10 rounded-full flex items-center justify-center font-semibold text-xs md:text-base bg-slate-100 border-slate-200 text-slate-600 border dark:bg-white/10 dark:border-white/20 dark:text-white">
                {user?.full_name?.charAt(0) || "S"}
              </div>
              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">{user?.full_name || "Demo Student"}</p>
                <p className="text-xs text-slate-500 dark:text-white/60">{user?.email}</p>
              </div>
              <button 
                onClick={onLogout}
                className="ml-1 p-1 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content Body based on Active Tab */}
        <main className={`flex-1 overflow-y-auto ${activeTab === "overview" ? "" : "p-6 md:p-8"}`}>
          {activeTab === "overview" && <Overview user={user} onLogout={onLogout} />}
          {activeTab === "courses" && <Courses />}
          {activeTab === "schedule" && <Schedule />}
        </main>
      </div>
    </div>
  );
}
