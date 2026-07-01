"use client";

import React, { useState } from "react";
import { Bell, LogOut, Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import Courses from "./Courses";
import Schedule from "./Schedule";

export default function StudentPortal({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`flex h-screen overflow-hidden font-sans transition-colors duration-300 ${activeTab === "overview" ? "bg-black text-white" : "bg-slate-50"}`}>
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
        <header className={`h-16 md:h-20 py-2 md:py-0 flex items-center justify-between px-3 md:px-8 transition-colors duration-300 ${activeTab === "overview" ? "bg-[#0c061a] border-b border-white/5 text-white" : "bg-white border-b border-slate-200 text-slate-800"}`}>
          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Hamburger Button for mobile */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className={`p-1 md:p-2 rounded-lg md:hidden transition-colors ${activeTab === "overview" ? "hover:bg-white/10 text-white" : "hover:bg-slate-100 text-slate-600"}`}
              title="Open Navigation Menu"
            >
              <Menu className="h-7 w-7 md:h-6 md:w-6" />
            </button>
            <span className={`text-[12px] md:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap ${activeTab === "overview" ? "text-[#00E3FD] bg-[#00E3FD]/15" : "text-blue-600 bg-blue-50"}`}>Student Portal</span>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <button className={`relative p-1 md:p-2 ${activeTab === "overview" ? "text-white/60 hover:text-white" : "text-slate-400 hover:text-slate-600"}`}>
              <Bell className="h-5 w-5 md:h-6 md:w-6" />
              <span className="absolute top-1 right-1 md:top-1.5 md:right-1.5 h-1.5 w-1.5 md:h-2.5 md:w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className={`h-6 md:h-8 w-[1px] ${activeTab === "overview" ? "bg-white/10" : "bg-slate-200"}`}></div>
            <div className="flex items-center gap-1.5 md:gap-3">
              <div className={`h-7 w-7 md:h-10 md:w-10 rounded-full flex items-center justify-center font-semibold text-xs md:text-base ${activeTab === "overview" ? "bg-white/10 border border-white/20 text-white" : "bg-slate-100 border border-slate-200 text-slate-600"}`}>
                {user?.full_name?.charAt(0) || "S"}
              </div>
              <div className="hidden text-left md:block">
                <p className={`text-sm font-semibold ${activeTab === "overview" ? "text-white" : "text-slate-800"}`}>{user?.full_name || "Demo Student"}</p>
                <p className={`text-xs ${activeTab === "overview" ? "text-white/60" : "text-slate-500"}`}>{user?.email}</p>
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
