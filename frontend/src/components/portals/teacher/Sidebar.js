"use client";

import React from "react";
import { BookOpen, Users } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="hidden w-64 bg-emerald-950 text-white md:block">
      <div className="flex h-20 items-center justify-center gap-2 border-b border-emerald-900 px-6">
        <div className="h-9 w-9 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-white">P</div>
        <span className="font-extrabold tracking-widest text-white">PATHFINDER</span>
      </div>
      <nav className="space-y-1 p-4">
        <button 
          onClick={() => setActiveTab("overview")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === "overview" ? "bg-emerald-600 text-white" : "text-emerald-100/70 hover:bg-emerald-900 hover:text-white"}`}
        >
          <BookOpen className="h-5 w-5" />
          <span>Overview</span>
        </button>
        <button 
          onClick={() => setActiveTab("students")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === "students" ? "bg-emerald-600 text-white" : "text-emerald-100/70 hover:bg-emerald-900 hover:text-white"}`}
        >
          <Users className="h-5 w-5" />
          <span>Student Roster</span>
        </button>
      </nav>
    </aside>
  );
}
