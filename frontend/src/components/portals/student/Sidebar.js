"use client";

import React from "react";
import {
  TrendingUp, BookOpen, Calendar, ChevronLeft, ChevronRight, X,
  PieChart, Users, FileText, AlertCircle, LayoutList, ClipboardList,
  Trophy, ListTodo, User, Award, Coffee, Library, Target, Brain
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab, isMobile, isMinimized, setIsMinimized, onClose }) {
  const tabs = [
    { id: "overview", label: "Overview", icon: TrendingUp, activeBg: "bg-[#FF6C03]/10", activeText: "text-[#FFC300]", activeBorder: "border-[#FF6C03]", activeIcon: "text-[#FF6C03]" },
    { id: "profile", label: "Profile", icon: User, activeBg: "bg-[#CC99FF]/10", activeText: "text-[#CC99FF]", activeBorder: "border-[#CC99FF]", activeIcon: "text-[#CC99FF]" },
    { id: "studyadda", label: "Study Adda", icon: Coffee, activeBg: "bg-[#FF9999]/10", activeText: "text-[#FF9999]", activeBorder: "border-[#FF9999]", activeIcon: "text-[#FF9999]" },

    // New Figma pages
    { id: "analytics", label: "Analytics", icon: PieChart, activeBg: "bg-[#FF3366]/10", activeText: "text-[#FF3366]", activeBorder: "border-[#FF3366]", activeIcon: "text-[#FF3366]" },
    { id: "attendance", label: "Attendance", icon: Calendar, activeBg: "bg-[#33CC99]/10", activeText: "text-[#33CC99]", activeBorder: "border-[#33CC99]", activeIcon: "text-[#33CC99]" },
    { id: "community", label: "Community", icon: Users, activeBg: "bg-[#9933FF]/10", activeText: "text-[#9933FF]", activeBorder: "border-[#9933FF]", activeIcon: "text-[#9933FF]" },
    { id: "exams", label: "Exams", icon: FileText, activeBg: "bg-[#FF9933]/10", activeText: "text-[#FF9933]", activeBorder: "border-[#FF9933]", activeIcon: "text-[#FF9933]" },
    { id: "grievance", label: "Grievance", icon: AlertCircle, activeBg: "bg-[#FF3333]/10", activeText: "text-[#FF3333]", activeBorder: "border-[#FF3333]", activeIcon: "text-[#FF3333]" },
    { id: "myfeed", label: "My Feed", icon: LayoutList, activeBg: "bg-[#3399FF]/10", activeText: "text-[#3399FF]", activeBorder: "border-[#3399FF]", activeIcon: "text-[#3399FF]" },
    { id: "noticeboard", label: "Notice Board", icon: ClipboardList, activeBg: "bg-[#FFCC00]/10", activeText: "text-[#FFCC00]", activeBorder: "border-[#FFCC00]", activeIcon: "text-[#FFCC00]" },
    { id: "performance", label: "Performance", icon: Trophy, activeBg: "bg-[#FF66CC]/10", activeText: "text-[#FF66CC]", activeBorder: "border-[#FF66CC]", activeIcon: "text-[#FF66CC]" },
    { id: "planner", label: "Planner", icon: ListTodo, activeBg: "bg-[#33CCFF]/10", activeText: "text-[#33CCFF]", activeBorder: "border-[#33CCFF]", activeIcon: "text-[#33CCFF]" },
    { id: "resultpage", label: "Result Page", icon: Award, activeBg: "bg-[#66FF99]/10", activeText: "text-[#66FF99]", activeBorder: "border-[#66FF99]", activeIcon: "text-[#66FF99]" },
    { id: "studymaterial", label: "Study Material", icon: Library, activeBg: "bg-[#99CCFF]/10", activeText: "text-[#99CCFF]", activeBorder: "border-[#99CCFF]", activeIcon: "text-[#99CCFF]" },
    { id: "swotanalysis", label: "SWOT Analysis", icon: Target, activeBg: "bg-[#CCCCFF]/10", activeText: "text-[#CCCCFF]", activeBorder: "border-[#CCCCFF]", activeIcon: "text-[#CCCCFF]" }
  ];

  return (
    <aside className={`${isMobile ? "flex flex-col w-full h-full" : `hidden md:flex flex-col ${isMinimized ? "w-24" : "w-72"} relative`} bg-white dark:bg-[#0a0614] border-r border-slate-200 dark:border-transparent text-slate-900 dark:text-white transition-all duration-300`}>
      {/* Brand logo section */}
      <div className={`flex h-24 items-center gap-3 border-b border-slate-200 dark:border-white/5 ${isMinimized ? "justify-center px-0" : "justify-start px-6"}`}>
        <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-[#1c0f3b] to-[#0a0515] flex flex-shrink-0 items-center justify-center border border-[#3d1c7a] shadow-[0_0_15px_rgba(112,48,225,0.4)]">
          <Brain className="h-6 w-6 text-[#ff6a5c]" strokeWidth={2} />
        </div>
        {!isMinimized && (
          <div className="flex flex-1 items-center justify-between">
            <span className="font-extrabold tracking-[0.2em] text-slate-900 dark:text-white text-sm mt-1">
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
      <nav className={`flex-1 overflow-y-auto sidebar-scrollbar space-y-1 p-3 ${isMinimized ? "px-2" : ""}`}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center gap-3 py-3 md:py-3.5 text-[15px] font-medium transition-all duration-300 ${isMinimized ? "justify-center w-12 h-12 mx-auto rounded-xl mb-2" : "px-4 mx-4 w-[calc(100%-32px)] rounded-2xl mb-1.5"} ${isActive
                ? "bg-[#FFC300]/10 border border-[#FFC300]/20 text-[#FFC300]"
                : "text-slate-800 dark:text-white/90 hover:bg-slate-100 dark:hover:bg-white/5 border border-transparent"
                }`}
              title={isMinimized ? tab.label : ""}
            >
              <Icon className={`h-[22px] w-[22px] flex-shrink-0 transition-all duration-300 ${isActive ? "text-[#FFC300] drop-shadow-[0_0_8px_rgba(255,195,0,0.6)]" : "text-slate-700 dark:text-white/80 group-hover:text-slate-900 dark:group-hover:text-white"}`} strokeWidth={isActive ? 2 : 1.5} />
              {!isMinimized && <span className="whitespace-nowrap tracking-wide">{tab.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Keep Going Section (Bottom of Sidebar) */}
      {!isMinimized && (
        <div className="px-4 py-3 lg:px-6 lg:py-5 mt-auto border-t border-slate-200 dark:border-white/5">
          <div className="relative z-10">
            <h4 className="text-[12px] lg:text-[13px] font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2 leading-none">
              Keep going! <span className="text-sm lg:text-lg">🚀</span>
            </h4>
            <p className="text-[10px] lg:text-[11px] text-slate-500 dark:text-slate-400 leading-tight mb-2 pr-2">
              Consistency is the key to success.
            </p>

            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#FF6C03] to-[#CC99FF] w-[75%] rounded-full shadow-[0_0_10px_rgba(255,108,3,0.8)]"></div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
