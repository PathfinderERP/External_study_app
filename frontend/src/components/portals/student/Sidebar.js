"use client";

import React from "react";
import { 
  TrendingUp, BookOpen, Calendar, ChevronLeft, ChevronRight, X, 
  PieChart, Users, FileText, AlertCircle, LayoutList, ClipboardList, 
  Trophy, ListTodo, User, Award, Coffee, Library, Target 
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
    <aside className={`${isMobile ? "w-full h-full" : `hidden md:flex flex-col ${isMinimized ? "w-24" : "w-72"} relative`} bg-slate-50 dark:bg-[#0c061a] text-slate-900 dark:text-white border-r border-slate-200 dark:border-white/5 transition-all duration-300`}>
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
      <nav className={`flex-1 overflow-y-auto space-y-2 p-4 ${isMinimized ? "px-2" : ""}`}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex w-full items-center gap-3 rounded-lg py-3 text-sm md:text-base font-semibold transition-all duration-350 ${isMinimized ? "justify-center px-0" : "px-4"} ${
                isActive 
                  ? `${tab.activeBg} ${tab.activeText} border-l-4 ${tab.activeBorder}` 
                  : "text-slate-500 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white border-l-4 border-transparent"
              }`}
              title={isMinimized ? tab.label : ""}
            >
              <Icon className={`h-5 w-5 md:h-6 md:w-6 flex-shrink-0 ${isActive ? tab.activeIcon : "text-slate-500 dark:text-slate-400"}`} />
              {!isMinimized && <span className="whitespace-nowrap">{tab.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
