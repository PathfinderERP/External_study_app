"use client";

import React, { useState } from "react";

export default function UserControl({ onAddUser }) {
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState("STUDENT");
  const [newUserFullName, setNewUserFullName] = useState("");
  const [createMsg, setCreateMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newUserEmail || !newUserFullName) {
      setCreateMsg("Please fill out all fields.");
      return;
    }
    onAddUser({ fullName: newUserFullName, email: newUserEmail, role: newUserRole });
    setCreateMsg(`Successfully created user: ${newUserFullName}!`);
    setNewUserEmail("");
    setNewUserFullName("");
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Creation form */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-white mb-4">Add User to Database</h3>
        {createMsg && (
          <div className="mb-4 text-xs font-semibold p-3 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
            {createMsg}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400">Full Name</label>
            <input 
              type="text" 
              value={newUserFullName}
              onChange={e => setNewUserFullName(e.target.value)}
              placeholder="Jane Doe" 
              className="w-full rounded-lg bg-slate-950 border border-slate-800 px-4 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400">Email Address</label>
            <input 
              type="email" 
              value={newUserEmail}
              onChange={e => setNewUserEmail(e.target.value)}
              placeholder="jane.doe@pathfinder.edu" 
              className="w-full rounded-lg bg-slate-950 border border-slate-800 px-4 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400">User Role</label>
            <select 
              value={newUserRole}
              onChange={e => setNewUserRole(e.target.value)}
              className="w-full rounded-lg bg-slate-950 border border-slate-800 px-4 py-2 text-sm text-slate-100 outline-none focus:border-indigo-500"
            >
              <option value="STUDENT">STUDENT</option>
              <option value="TEACHER">TEACHER</option>
              <option value="SCHOOL_ADMIN">SCHOOL ADMIN</option>
            </select>
          </div>
          <button type="submit" className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 font-semibold text-white transition-colors text-sm">
            Register User
          </button>
        </form>
      </div>

      {/* Roles Description */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-white mb-4">Permissions Guide</h3>
        <div className="space-y-3 text-sm text-slate-300">
          <p><strong className="text-indigo-400">STUDENT:</strong> View grades, access lectures, schedule, and attendance tracker.</p>
          <p><strong className="text-indigo-400">TEACHER:</strong> Modify grades, roster control, assign materials.</p>
          <p><strong className="text-indigo-400">SCHOOL_ADMIN:</strong> Total control over servers, db access, configuration settings, user creation.</p>
        </div>
      </div>
    </div>
  );
}
