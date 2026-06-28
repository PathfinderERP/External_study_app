"use client";

import React from "react";
import { Activity, PlusCircle, Terminal } from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="hidden w-64 bg-slate-900 border-r border-slate-800 md:block">
      <div className="flex h-20 items-center justify-center gap-2 border-b border-slate-800 px-6">
        <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">P</div>
        <span className="font-extrabold tracking-widest text-white">PATHFINDER</span>
      </div>
      <nav className="space-y-1 p-4">
        <button 
          onClick={() => setActiveTab("overview")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === "overview" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
        >
          <Activity className="h-5 w-5" />
          <span>Metrics & System</span>
        </button>
        <button 
          onClick={() => setActiveTab("users")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === "users" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
        >
          <PlusCircle className="h-5 w-5" />
          <span>User Control</span>
        </button>
        <button 
          onClick={() => setActiveTab("logs")}
          className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${activeTab === "logs" ? "bg-indigo-600 text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
        >
          <Terminal className="h-5 w-5" />
          <span>Audit Logs</span>
        </button>
      </nav>
    </aside>
  );
}
