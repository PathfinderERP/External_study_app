"use client";

import React from "react";
import { TrendingUp, CheckCircle, FileText, User } from "lucide-react";

export default function Overview({ user }) {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white shadow-md">
        <h2 className="text-2xl font-bold md:text-3xl">Welcome Back, {user?.full_name?.split(" ")[0] || "Student"}!</h2>
        <p className="mt-2 text-blue-100 max-w-xl">You have 3 assignments pending this week. Your current overall attendance stands at 94.2%.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">GPA</span>
            <TrendingUp className="h-6 w-6 text-green-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">3.84</p>
          <p className="text-xs text-green-600 mt-1">↑ Top 10% of class</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Attendance Rate</span>
            <CheckCircle className="h-6 w-6 text-blue-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">94.2%</p>
          <p className="text-xs text-blue-600 mt-1">Goal is above 90%</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Assignments Completed</span>
            <FileText className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">18 / 21</p>
          <p className="text-xs text-slate-500 mt-1">3 outstanding</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Class Rank</span>
            <User className="h-6 w-6 text-indigo-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">#12</p>
          <p className="text-xs text-slate-500 mt-1">Out of 120 students</p>
        </div>
      </div>

      {/* Lower Section split */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Upcoming Schedule */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Today's Class Schedule</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center font-bold text-blue-600">CS</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Data Structures & Algorithms</p>
                  <p className="text-xs text-slate-500">Instructor: Prof. Sarah Jenkins</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-700">09:00 AM</p>
                <span className="inline-block text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Present</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">MA</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Linear Algebra & Calculus</p>
                  <p className="text-xs text-slate-500">Instructor: Dr. Richard Fey</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-700">11:30 AM</p>
                <span className="inline-block text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Present</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center font-bold text-purple-600">PH</div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Introductory Quantum Physics</p>
                  <p className="text-xs text-slate-500">Instructor: Prof. Albert Wayne</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-700">02:30 PM</p>
                <span className="inline-block text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full font-bold">Upcoming</span>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Panel */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Announcements</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-3 py-1">
              <p className="text-xs text-slate-400">June 27, 2026</p>
              <p className="text-sm font-semibold text-slate-800">Summer Semester Registration</p>
              <p className="text-xs text-slate-600">Registration is open until next Friday.</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-3 py-1">
              <p className="text-xs text-slate-400">June 26, 2026</p>
              <p className="text-sm font-semibold text-slate-800">Physics Lab Postponed</p>
              <p className="text-xs text-slate-600">Friday lab is shifted to Monday morning.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
