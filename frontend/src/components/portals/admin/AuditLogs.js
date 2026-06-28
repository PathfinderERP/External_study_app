"use client";

import React from "react";

export default function AuditLogs({ systemLogs }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-white mb-6">Complete Audit Trail</h2>
      <div className="space-y-3 font-mono text-xs">
        {systemLogs.map(log => (
          <div key={log.id} className="flex gap-4 p-3 rounded bg-slate-950 border border-slate-800">
            <span className="text-slate-500">{log.time}</span>
            <span className={log.type === "success" ? "text-green-400" : "text-blue-400"}>[{log.type.toUpperCase()}]</span>
            <span className="text-slate-300">{log.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
