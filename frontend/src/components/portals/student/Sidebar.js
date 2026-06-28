"use client";

import React from "react";
import { TrendingUp, BookOpen, Calendar } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="hidden w-64 bg-slate-900 text-white md:block">
      <div className="flex h-20 items-center justify-center gap-2 border-b border-slate-800 px-6">
        <div className="h-9 w-9 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">P</div>
        <span className="font-extrabold tracking-widest text-white">PATHFINDER</span>
      </div>
      <nav className="space-y-1 p-4">
        <button 
          onClick={() => setActiveTab("overview")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === "overview" ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
        >
          <TrendingUp className="h-5 w-5" />
          <span>Overview</span>
        </button>
        <button 
          onClick={() => setActiveTab("courses")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === "courses" ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
        >
          <BookOpen className="h-5 w-5" />
          <span>Courses & Study</span>
        </button>
        <button 
          onClick={() => setActiveTab("schedule")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === "schedule" ? "bg-blue-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
        >
          <Calendar className="h-5 w-5" />
          <span>Attendance & Schedule</span>
        </button>
      </nav>
    </aside>
  );
}
