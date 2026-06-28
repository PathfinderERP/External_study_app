"use client";

import React from "react";

export default function Schedule() {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Attendance & Schedule</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 text-sm font-medium">
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Total Sessions</th>
              <th className="py-3 px-4">Present</th>
              <th className="py-3 px-4">Absent</th>
              <th className="py-3 px-4">Percentage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            <tr>
              <td className="py-4 px-4 font-semibold text-slate-800">Data Structures & Algorithms</td>
              <td className="py-4 px-4 text-slate-600">30</td>
              <td className="py-4 px-4 text-slate-600">29</td>
              <td className="py-4 px-4 text-slate-600">1</td>
              <td className="py-4 px-4 font-bold text-green-600">96.7%</td>
            </tr>
            <tr>
              <td className="py-4 px-4 font-semibold text-slate-800">Linear Algebra & Calculus</td>
              <td className="py-4 px-4 text-slate-600">24</td>
              <td className="py-4 px-4 text-slate-600">22</td>
              <td className="py-4 px-4 text-slate-600">2</td>
              <td className="py-4 px-4 font-bold text-green-600">91.6%</td>
            </tr>
            <tr>
              <td className="py-4 px-4 font-semibold text-slate-800">Introductory Quantum Physics</td>
              <td className="py-4 px-4 text-slate-600">28</td>
              <td className="py-4 px-4 text-slate-600">26</td>
              <td className="py-4 px-4 text-slate-600">2</td>
              <td className="py-4 px-4 font-bold text-green-600">92.8%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
