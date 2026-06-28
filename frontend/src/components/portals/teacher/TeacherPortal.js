"use client";

import React, { useState } from "react";
import { Bell, LogOut } from "lucide-react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import Roster from "./Roster";

export default function TeacherPortal({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [students, setStudents] = useState([
    { id: 1, name: "Marcus Brody", class: "Data Structures & Algorithms", grade: "A", attendance: "98%" },
    { id: 2, name: "Clara Oswald", class: "Data Structures & Algorithms", grade: "B+", attendance: "92%" },
    { id: 3, name: "Danny Pink", class: "Introductory Quantum Physics", grade: "A-", attendance: "94%" },
    { id: 4, name: "Rose Tyler", class: "Linear Algebra & Calculus", grade: "A", attendance: "96%" }
  ]);

  const handleAssignGrade = (id, newGrade) => {
    setStudents(students.map(s => s.id === id ? { ...s, grade: newGrade } : s));
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar Component */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600 px-3 py-1 rounded-full bg-emerald-50">Teacher Portal</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-semibold">
                {user?.full_name?.charAt(0) || "T"}
              </div>
              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-slate-800">{user?.full_name || "Prof. Demo Teacher"}</p>
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
          {activeTab === "students" && (
            <Roster students={students} onAssignGrade={handleAssignGrade} />
          )}
        </main>
      </div>
    </div>
  );
}
