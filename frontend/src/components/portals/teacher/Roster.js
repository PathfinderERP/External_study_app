"use client";

import React from "react";

export default function Roster({ students, onAssignGrade }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Student Grade Management</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 text-sm font-medium">
              <th className="py-3 px-4">Student Name</th>
              <th className="py-3 px-4">Class</th>
              <th className="py-3 px-4">Attendance</th>
              <th className="py-3 px-4">Grade</th>
              <th className="py-3 px-4 text-center">Change Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {students.map((student) => (
              <tr key={student.id}>
                <td className="py-4 px-4 font-semibold text-slate-800">{student.name}</td>
                <td className="py-4 px-4 text-slate-600">{student.class}</td>
                <td className="py-4 px-4 text-slate-600">{student.attendance}</td>
                <td className="py-4 px-4 font-bold text-emerald-600">{student.grade}</td>
                <td className="py-4 px-4 text-center">
                  <select 
                    value={student.grade}
                    onChange={(e) => onAssignGrade(student.id, e.target.value)}
                    className="rounded border border-slate-300 px-2 py-1 bg-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  >
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
