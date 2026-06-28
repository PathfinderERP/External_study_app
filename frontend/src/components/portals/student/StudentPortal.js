"use client";

import React, { useState } from "react";
import { Bell, LogOut } from "lucide-react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import Courses from "./Courses";
import Schedule from "./Schedule";

export default function StudentPortal({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar Component */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 px-3 py-1 rounded-full bg-blue-50">Student Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-semibold">
                {user?.full_name?.charAt(0) || "S"}
              </div>
              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-slate-800">{user?.full_name || "Demo Student"}</p>
                <p className="text-xs text-slate-500">{user?.email}</p>
              </div>
              <button 
                onClick={onLogout}
                className="ml-2 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content Body based on Active Tab */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {activeTab === "overview" && <Overview user={user} />}
          {activeTab === "courses" && <Courses />}
          {activeTab === "schedule" && <Schedule />}
        </main>
      </div>
    </div>
  );
}
