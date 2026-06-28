"use client";

import React, { useState } from "react";
import { Bell, LogOut } from "lucide-react";
import Sidebar from "./Sidebar";
import Overview from "./Overview";
import UserControl from "./UserControl";
import AuditLogs from "./AuditLogs";

export default function AdminPortal({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [systemLogs, setSystemLogs] = useState([
    { id: 1, time: "2026-06-27 10:20:26", event: "PostgreSQL Database connected successfully", type: "info" },
    { id: 2, time: "2026-06-27 10:20:32", event: "arq background task worker started with 3 tasks", type: "info" },
    { id: 3, time: "2026-06-27 10:25:26", event: "Database checkpoint successfully completed", type: "success" },
    { id: 4, time: "2026-06-27 13:05:31", event: "GET /api/auth/token - User login success (role: STUDENT)", type: "success" }
  ]);

  const handleAddUserLog = ({ fullName, email, role }) => {
    const newLog = {
      id: systemLogs.length + 1,
      time: new Date().toISOString().replace("T", " ").slice(0, 19),
      event: `Admin created user: ${fullName} (${role})`,
      type: "success"
    };
    setSystemLogs([newLog, ...systemLogs]);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Sidebar Component */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 md:px-8">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-indigo-400 px-3 py-1 rounded-full bg-indigo-950/55 border border-indigo-800">Admin Control</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-200">
              <Bell className="h-6 w-6" />
              <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-slate-900"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-800"></div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-indigo-950 flex items-center justify-center text-indigo-400 font-semibold border border-indigo-800">
                {user?.full_name?.charAt(0) || "A"}
              </div>
              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-slate-200">{user?.full_name || "Super Admin"}</p>
                <p className="text-xs text-slate-400">{user?.email}</p>
              </div>
              <button 
                onClick={onLogout}
                className="ml-2 p-2 text-red-400 hover:bg-slate-800 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content Body based on Active Tab */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {activeTab === "overview" && <Overview systemLogs={systemLogs} />}
          {activeTab === "users" && <UserControl onAddUser={handleAddUserLog} />}
          {activeTab === "logs" && <AuditLogs systemLogs={systemLogs} />}
        </main>
      </div>
    </div>
  );
}
