"use client";

import React from "react";
import { Clock, Download } from "lucide-react";

export default function Courses() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-800">Course Materials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">Data Structures & Algorithms</h3>
          <p className="text-sm text-slate-500 mt-1">CS-301 • Spring Semester</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-700">Lecture 10: Graphs.pdf</span>
              </div>
              <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"><Download className="h-4 w-4" /></button>
            </div>
            <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-700">Assignment 3: BFS & DFS.docx</span>
              </div>
              <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"><Download className="h-4 w-4" /></button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800">Linear Algebra & Calculus</h3>
          <p className="text-sm text-slate-500 mt-1">MA-102 • Spring Semester</p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-700">Lecture 8: Eigenvalues.pdf</span>
              </div>
              <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg"><Download className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
