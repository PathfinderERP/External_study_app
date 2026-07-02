"use client";

import React from "react";
import { TrendingUp, BookOpen, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab, isMobile, isMinimized, setIsMinimized, onClose }) {
  return (
    <aside className={`${isMobile ? "w-full h-full" : `hidden md:flex flex-col ${isMinimized ? "w-24" : "w-72"} relative`} bg-slate-50 dark:bg-[#0c061a] text-slate-900 dark:text-white border-r border-slate-200 dark:border-white/5 transition-all duration-300`}>
      {/* Brand logo section */}
      {/* Brand logo section */}
      <div className={`flex h-20 items-center gap-2 border-b border-slate-200 dark:border-white/5 ${isMinimized ? "justify-center px-0" : "justify-start px-6"}`}>
        <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-[#FF6C03] to-[#FFC300] flex flex-shrink-0 items-center justify-center font-black text-black">
          P
        </div>
        {!isMinimized && (
          <div className="flex flex-1 items-center justify-between">
            <span className="font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400">
              PATHFINDER
            </span>
            {isMobile && onClose && (
              <button 
                onClick={onClose}
                className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-white/70 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-white/5 transition-colors"
                title="Close sidebar"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Toggle Arrow (Desktop Only) */}
      {!isMobile && (
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="absolute -right-3 top-6 bg-white dark:bg-[#1a0e31] border border-slate-200 dark:border-white/10 rounded-full p-1 z-50 text-slate-500 hover:text-[#FF6C03] shadow-sm transition-transform hover:scale-110"
        >
          {isMinimized ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      )}

      {/* Navigation section */}
      <nav className={`space-y-2 p-4 ${isMinimized ? "px-2" : ""}`}>
        {/* Overview Tab Button */}
        <button 
          onClick={() => setActiveTab("overview")}
          className={`flex w-full items-center gap-3 rounded-lg py-3 text-sm md:text-base font-semibold transition-all duration-350 ${isMinimized ? "justify-center px-0" : "px-4"} ${
            activeTab === "overview" 
              ? "bg-[#FF6C03]/10 text-[#FFC300] border-l-4 border-[#FF6C03]" 
              : "text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white border-l-4 border-transparent"
          }`}
          title={isMinimized ? "Overview" : ""}
        >
          <TrendingUp className={`h-5 w-5 md:h-6 md:w-6 flex-shrink-0 ${activeTab === "overview" ? "text-[#FF6C03]" : "text-slate-500 dark:text-slate-400"}`} />
          {!isMinimized && <span className="whitespace-nowrap">Overview</span>}
        </button>

        {/* Courses & Study Tab Button */}
        <button 
          onClick={() => setActiveTab("courses")}
          className={`flex w-full items-center gap-3 rounded-lg py-3 text-sm md:text-base font-semibold transition-all duration-350 ${isMinimized ? "justify-center px-0" : "px-4"} ${
            activeTab === "courses" 
              ? "bg-[#25CCF4]/10 text-[#00E3FD] border-l-4 border-[#25CCF4]" 
              : "text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white border-l-4 border-transparent"
          }`}
          title={isMinimized ? "Courses & Study" : ""}
        >
          <BookOpen className={`h-5 w-5 md:h-6 md:w-6 flex-shrink-0 ${activeTab === "courses" ? "text-[#25CCF4]" : "text-slate-500 dark:text-slate-400"}`} />
          {!isMinimized && <span className="whitespace-nowrap">Courses & Study</span>}
        </button>

        {/* Attendance & Schedule Tab Button */}
        <button 
          onClick={() => setActiveTab("schedule")}
          className={`flex w-full items-center gap-3 rounded-lg py-3 text-sm md:text-base font-semibold transition-all duration-350 ${isMinimized ? "justify-center px-0" : "px-4"} ${
            activeTab === "schedule" 
              ? "bg-[#7545F0]/10 text-[#8463D7] border-l-4 border-[#7545F0]" 
              : "text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white border-l-4 border-transparent"
          }`}
          title={isMinimized ? "Attendance & Schedule" : ""}
        >
          <Calendar className={`h-5 w-5 md:h-6 md:w-6 flex-shrink-0 ${activeTab === "schedule" ? "text-[#7545F0]" : "text-slate-500 dark:text-slate-400"}`} />
          {!isMinimized && <span className="whitespace-nowrap">Attendance & Schedule</span>}
        </button>
      </nav>
    </aside>
  );
}
