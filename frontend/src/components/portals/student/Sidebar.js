"use client";

import React from "react";
import { TrendingUp, BookOpen, Calendar } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab, isMobile }) {
  return (
    <aside className={`${isMobile ? "w-full h-full" : "hidden md:block w-72"} bg-slate-50 dark:bg-[#0c061a] text-slate-900 dark:text-white border-r border-slate-200 dark:border-white/5 transition-colors duration-300`}>
      {/* Brand logo section */}
      <div className="flex h-20 items-center justify-start gap-2 border-b border-slate-200 dark:border-white/5 px-6">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#FF6C03] to-[#FFC300] flex items-center justify-center font-black text-black">
          P
        </div>
        <span className="font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400">
          PATHFINDER
        </span>
      </div>

      {/* Navigation section */}
      <nav className="space-y-2 p-4">
        {/* Overview Tab Button */}
        <button 
          onClick={() => setActiveTab("overview")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm md:text-base font-semibold transition-all duration-350 ${
            activeTab === "overview" 
              ? "bg-[#FF6C03]/10 text-[#FFC300] border-l-4 border-[#FF6C03]" 
              : "text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white border-l-4 border-transparent"
          }`}
        >
          <TrendingUp className={`h-5 w-5 md:h-6 md:w-6 ${activeTab === "overview" ? "text-[#FF6C03]" : "text-slate-500 dark:text-slate-400"}`} />
          <span className="whitespace-nowrap">Overview</span>
        </button>

        {/* Courses & Study Tab Button */}
        <button 
          onClick={() => setActiveTab("courses")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm md:text-base font-semibold transition-all duration-350 ${
            activeTab === "courses" 
              ? "bg-[#25CCF4]/10 text-[#00E3FD] border-l-4 border-[#25CCF4]" 
              : "text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white border-l-4 border-transparent"
          }`}
        >
          <BookOpen className={`h-5 w-5 md:h-6 md:w-6 ${activeTab === "courses" ? "text-[#25CCF4]" : "text-slate-500 dark:text-slate-400"}`} />
          <span className="whitespace-nowrap">Courses & Study</span>
        </button>

        {/* Attendance & Schedule Tab Button */}
        <button 
          onClick={() => setActiveTab("schedule")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm md:text-base font-semibold transition-all duration-350 ${
            activeTab === "schedule" 
              ? "bg-[#7545F0]/10 text-[#8463D7] border-l-4 border-[#7545F0]" 
              : "text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white border-l-4 border-transparent"
          }`}
        >
          <Calendar className={`h-5 w-5 md:h-6 md:w-6 ${activeTab === "schedule" ? "text-[#7545F0]" : "text-slate-500 dark:text-slate-400"}`} />
          <span className="whitespace-nowrap">Attendance & Schedule</span>
        </button>
      </nav>
    </aside>
  );
}
