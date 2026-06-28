"use client";

import React from "react";
import { Users, Database, Activity, ShieldAlert } from "lucide-react";

export default function Overview({ systemLogs }) {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-800 to-slate-900 p-6 border border-slate-800 shadow-md">
        <h2 className="text-2xl font-bold md:text-3xl">System Dashboard Overview</h2>
        <p className="mt-2 text-indigo-200 max-w-xl">All modules are operational. System health checks are green, database connections stable.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-400">Total Users</span>
            <Users className="h-6 w-6 text-indigo-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-white">1,408</p>
          <p className="text-xs text-green-500 mt-1">↑ 24 new this week</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-400">Database Engine</span>
            <Database className="h-6 w-6 text-indigo-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-white">PostgreSQL 17</p>
          <p className="text-xs text-green-500 mt-1">Healthy • 5432</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-400">Redis Broker</span>
            <Activity className="h-6 w-6 text-indigo-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-white">7-Alpine</p>
          <p className="text-xs text-green-500 mt-1">Running • 6379</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-400">System Logs</span>
            <ShieldAlert className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-white">0 Errors</p>
          <p className="text-xs text-slate-400 mt-1">Verified 1 min ago</p>
        </div>
      </div>

      {/* Quick Status Logs */}
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
        <h3 className="text-lg font-bold text-white mb-4">Latest System Events</h3>
        <div className="space-y-2 font-mono text-xs">
          {systemLogs.slice(0, 3).map(log => (
            <div key={log.id} className="flex gap-4 p-2 rounded bg-slate-950 border border-slate-800">
              <span className="text-slate-500">{log.time}</span>
              <span className={log.type === "success" ? "text-green-400" : "text-blue-400"}>[{log.type.toUpperCase()}]</span>
              <span className="text-slate-300">{log.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
