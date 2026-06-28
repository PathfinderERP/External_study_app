"use client";

import React from "react";
import { Users, BookOpen, FileText, Award } from "lucide-react";

export default function Overview({ user }) {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white shadow-md">
        <h2 className="text-2xl font-bold md:text-3xl">Welcome Back, {user?.full_name?.split(" ")[0] || "Professor"}!</h2>
        <p className="mt-2 text-emerald-100 max-w-xl">You have 15 pending assignments to grade. Classroom attendance overall is strong this week.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Active Students</span>
            <Users className="h-6 w-6 text-emerald-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">128</p>
          <p className="text-xs text-slate-500 mt-1">Across 3 active courses</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Total Courses</span>
            <BookOpen className="h-6 w-6 text-emerald-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">3</p>
          <p className="text-xs text-slate-500 mt-1">CS-301, MA-102, PH-201</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Pending Grading</span>
            <FileText className="h-6 w-6 text-yellow-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">15</p>
          <p className="text-xs text-yellow-600 mt-1">Due soon</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Average Class Pass Rate</span>
            <Award className="h-6 w-6 text-green-500" />
          </div>
          <p className="mt-3 text-3xl font-bold text-slate-800">96.8%</p>
          <p className="text-xs text-green-600 mt-1">↑ 1.2% this term</p>
        </div>
      </div>

      {/* Assignments / Grading Quick Check */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Pending Submissions</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div>
              <p className="text-sm font-bold text-slate-800">Assignment 3: BFS & DFS Implementation</p>
              <p className="text-xs text-slate-500">Course: Data Structures & Algorithms • 8 pending</p>
            </div>
            <button className="rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-xs font-semibold text-white">Grade Now</button>
          </div>

          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div>
              <p className="text-sm font-bold text-slate-800">Calculus Quiz 2: Integration</p>
              <p className="text-xs text-slate-500">Course: Linear Algebra & Calculus • 7 pending</p>
            </div>
            <button className="rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-xs font-semibold text-white">Grade Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
