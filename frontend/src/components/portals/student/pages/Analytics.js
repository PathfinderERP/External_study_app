import React from 'react';
import { AlertCircle, Clock, Zap, Sparkles, Brain, Gauge, CheckCircle2, AlertTriangle, TrendingUp, HelpCircle, MessageSquare, Eye, AlignLeft, BarChart2, Sun, Moon, Info } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090514] text-slate-900 dark:text-white font-manrope overflow-x-hidden relative flex flex-col">

      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[100px] right-[-5%] w-[700px] h-[700px] bg-violet-500/8 dark:bg-violet-600/8 rounded-full blur-[140px]"></div>
        <div className="absolute top-[200px] right-[10%] w-[400px] h-[400px] bg-purple-400/9 dark:bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>

      <main className="relative z-10 pt-6 md:pt-5 pb-8 max-w-[1350px] mx-auto px-4 md:px-8 flex flex-col items-center w-full">
        {/* Title Section */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-5xl md:text-[96px] font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]" style={{ fontFamily: '"Organetto", sans-serif' }}>
            Understand Your<br />
            <span className="text-slate-500 dark:text-[#888888]">Learning Pattern.</span>
          </h1>
          <p className="text-slate-500 dark:text-white/40 text-sm md:text-[15px] font-medium tracking-wide max-w-[280px] md:max-w-none mx-auto">
            AI-powered insights to improve your performance smarter, not harder.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 w-full max-w-[900px]">
          {/* Card 1: Biggest Problem */}
          <div className="bg-white dark:bg-[#1C1433]/40 border border-pink-300 dark:border-[#FF4D8D]/60 shadow-xl dark:shadow-none rounded-[28px] p-4 w-full md:w-1/3 backdrop-blur-xl relative overflow-hidden group dark:hover:bg-[#1C1433]/60 transition-all flex flex-col gap-1.5">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-pink-500 dark:text-[#FF4D8D]">
                BIGGEST PROBLEM
              </span>
            </div>
            <div>
              <h2 className="text-[28px] font-bold leading-none text-slate-900 dark:text-white mb-0 mt-0.5">38%</h2>
              <p className="text-xs text-slate-500 dark:text-white/50 font-medium mt-0.5">Silly Mistakes</p>
            </div>
            <AlertCircle size={36} className="absolute top-1/2 -translate-y-1/2 right-5 text-pink-100 dark:text-[#FF4D8D]/10 stroke-[1.5]" />
          </div>

          {/* Card 2: Key Weakness */}
          <div className="bg-white dark:bg-[#1C1433]/40 border border-cyan-300 dark:border-[#00E5FF]/60 shadow-xl dark:shadow-none rounded-[28px] p-4 w-full md:w-1/3 backdrop-blur-xl relative overflow-hidden group dark:hover:bg-[#1C1433]/60 transition-all flex flex-col gap-1.5">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-500 dark:text-[#00E5FF]">
                KEY WEAKNESS
              </span>
            </div>
            <div>
              <h2 className="text-[17px] font-bold leading-tight text-slate-900 dark:text-white mb-0 mt-0.5">Time Management</h2>
              <p className="text-xs text-slate-500 dark:text-white/50 font-medium mt-0.5">Focused in Math</p>
            </div>
            <Clock size={36} className="absolute top-1/2 -translate-y-1/2 right-5 text-cyan-100 dark:text-[#00E5FF]/10 stroke-[1.5]" />
          </div>

          {/* Card 3: Student Type */}
          <div className="bg-white dark:bg-[#1C1433]/40 border border-purple-300 dark:border-[#B388FF]/60 shadow-xl dark:shadow-none rounded-[28px] p-4 w-full md:w-1/3 backdrop-blur-xl relative overflow-hidden group dark:hover:bg-[#1C1433]/60 transition-all flex flex-col gap-1.5">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-purple-600 dark:text-[#B388FF]">
                STUDENT TYPE
              </span>
            </div>
            <div>
              <h2 className="text-[17px] font-bold leading-tight text-slate-900 dark:text-white mb-0 mt-0.5">Fast Learner</h2>
              <p className="text-xs text-slate-500 dark:text-white/50 font-medium mt-0.5">Needs Discipline</p>
            </div>
            <Zap size={36} className="absolute top-1/2 -translate-y-1/2 right-5 text-purple-100 dark:text-[#B388FF]/10 stroke-[1.5]" />
          </div>
        </div>

        {/* Action Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-[#D4B3FF] dark:hover:bg-[#c296ff] dark:text-[#2C1A4A] px-8 py-3.5 rounded-full text-[13px] font-bold flex items-center gap-2 transition-all shadow-xl dark:shadow-[0_0_30px_rgba(212,179,255,0.15)] dark:hover:shadow-[0_0_40px_rgba(212,179,255,0.25)] hover:scale-105 z-10 relative">
          <Sparkles size={16} className="text-white dark:text-[#2C1A4A]" />
          Generate Study Path
        </button>

        {/* Background Curve (Placed after button) */}
        <div className="relative w-full flex justify-center mt-[-670px] z-[-1] pointer-events-none">
          <img
            src="/images/Analytic/1.svg"
            alt="Background curve"
            className="w-[1536px] max-w-none opacity-60 mix-blend-screen"
          />
        </div>

        {/* NEW ANALYTICS SECTIONS */}
        <div className="w-full mt-16 space-y-12 relative z-20">

          {/* Where You Lose Marks */}
          <div>
            <h3 className="text-xl font-bold mb-6">Where You Lose Marks</h3>

            <div className="bg-white/5 dark:bg-[#161026] border border-slate-200 dark:border-white/5 rounded-[30px] p-8">
              {/* Pills */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="px-6 py-2.5 rounded-full border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-white/60 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  Concept Not Clear
                </button>
                <button className="px-6 py-2.5 rounded-full border border-pink-500/50 bg-pink-500/10 text-pink-600 dark:text-[#FF4D8D] text-sm font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(255,77,141,0.2)]">
                  <div className="w-2 h-2 rounded-full bg-pink-500 dark:bg-[#FF4D8D] shadow-[0_0_8px_#FF4D8D]" />
                  Silly Mistake
                </button>
                <button className="px-6 py-2.5 rounded-full border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-white/60 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  Time Pressure
                </button>
                <button className="px-6 py-2.5 rounded-full border border-slate-200 dark:border-white/10 text-sm font-medium text-slate-600 dark:text-white/60 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  Calculation Error
                </button>
              </div>

              {/* Mentor Insight */}
              <div className="bg-pink-50/50 dark:bg-[#FF4D8D]/5 border border-pink-100 dark:border-[#FF4D8D]/10 rounded-2xl p-6 flex items-start gap-4">
                <Brain className="text-pink-500 dark:text-[#FF4D8D] shrink-0 mt-1 opacity-80" size={24} />
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500 dark:text-[#FF4D8D] mb-2">Mentor Insight</h4>
                  <p className="text-sm text-slate-700 dark:text-white/70 leading-relaxed">
                    You lose most marks due to <span className="text-pink-600 dark:text-[#FF4D8D] font-bold">Silly Mistakes</span>, particularly in transitioning between steps. Your fundamental knowledge is strong.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Your Speed Pattern */}
            <div>
              <h3 className="text-xl font-bold mb-6">Your Speed Pattern</h3>
              <div className="space-y-4">
                {/* Physics */}
                <div className="bg-white/5 dark:bg-[#161026] border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-[#FF4D8D]/5 flex items-center justify-center">
                      <Gauge className="text-pink-500 dark:text-[#FF4D8D] opacity-80" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Physics</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-white/40 mt-1">Too Slow</p>
                    </div>
                  </div>
                  <AlertTriangle className="text-pink-500/50 dark:text-[#FF4D8D]/50" size={20} />
                </div>

                {/* Biology */}
                <div className="bg-white/5 dark:bg-[#161026] border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-[#00E5FF]/10 flex items-center justify-center">
                      <CheckCircle2 className="text-cyan-500 dark:text-[#00E5FF]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Biology</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-white/40 mt-1">Perfect Speed</p>
                    </div>
                  </div>
                </div>

                {/* Math */}
                <div className="bg-pink-50/50 dark:bg-[#1A191E]/40 border-y border-r border-l-0 border-[#FF68A8] rounded-2xl p-6 flex items-center justify-between backdrop-blur-xl shadow-[-5px_0_15px_rgba(255,104,168,0.2)] relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#FF68A8]" />
                  <div className="flex items-center gap-4 pl-1">
                    <div className="w-12 h-12 rounded-full bg-[#FF68A8]/10 flex items-center justify-center">
                      <Zap className="text-[#FF68A8]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">Math</h4>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-white/50 mt-1">Rushing</p>
                    </div>
                  </div>
                  <div className="text-[#FF68A8] font-black text-xl px-2">!</div>
                </div>

                {/* Math Insight */}
                <div className="flex items-start gap-2 px-2 mt-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 dark:bg-[#B388FF] mt-1.5 shrink-0 shadow-[0_0_5px_#B388FF]" />
                  <p className="text-xs text-slate-500 dark:text-white/50">
                    You rush the last part of Math, causing avoidable errors.
                  </p>
                </div>
              </div>
            </div>

            {/* Confidence Check */}
            <div>
              <h3 className="text-xl font-bold mb-6">Confidence Check</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* Overconfident */}
                <div className="bg-white/5 dark:bg-[#161026] border border-slate-200 dark:border-white/5 rounded-[24px] p-6 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full bg-pink-500/10 dark:bg-[#FF4D8D]/10 flex items-center justify-center mb-4">
                    <TrendingUp className="text-pink-600 dark:text-[#FF4D8D]" size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-[15px] mb-1.5">Overconfident</h4>
                  <p className="text-[10px] text-slate-500 dark:text-white/40 font-medium leading-tight">High Confidence + Wrong</p>
                </div>

                {/* Underconfident */}
                <div className="bg-purple-50/50 dark:bg-[#B388FF]/5 border border-purple-200/50 dark:border-[#B388FF]/20 rounded-[24px] p-6 flex flex-col items-center justify-center text-center shadow-[0_0_15px_rgba(179,136,255,0.05)]">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 dark:bg-[#B388FF]/10 flex items-center justify-center mb-4">
                    <Brain className="text-purple-600 dark:text-[#B388FF]" size={20} />
                  </div>
                  <h4 className="font-bold text-purple-600 dark:text-[#B388FF] text-[15px] mb-1.5">Underconfident</h4>
                  <p className="text-[10px] text-slate-500 dark:text-white/40 font-medium leading-tight">Low Confidence + Correct</p>
                </div>
              </div>

              {/* Self-Correction Insight */}
              <div className="bg-slate-100/50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl p-6 relative overflow-hidden mt-8">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-[#B388FF] shadow-[0_0_5px_#B388FF]" />
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-600 dark:text-[#B388FF]">Self-Correction Insight</h4>
                </div>
                <p className="text-sm text-slate-700 dark:text-white/70 leading-relaxed relative z-10">
                  You know more than you think in <span className="text-purple-600 dark:text-[#B388FF] font-bold">Biology</span> but hesitate to attempt questions you could easily solve.
                </p>
                <MessageSquare className="absolute -bottom-6 -right-6 text-slate-200/50 dark:text-white/5 w-32 h-32 z-0" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Your Learning Style & When You Perform Best */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Your Learning Style */}
            <div className="md:col-span-2 bg-white dark:bg-[#100B1A] border border-slate-200 dark:border-white/5 rounded-[40px] p-8 md:p-10 flex flex-col justify-between">
              <h3 className="text-[28px] font-bold text-slate-900 dark:text-white mb-8">Your Learning Style</h3>
              <div className="flex flex-wrap gap-4 mb-16">
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-5 py-3">
                  <Eye size={18} className="text-slate-400 dark:text-white/40" />
                  <span className="text-sm font-medium text-slate-500 dark:text-white/40">Visual Learner</span>
                </div>
                <div className="flex items-center gap-3 bg-purple-50 dark:bg-[#B388FF]/10 border border-purple-200 dark:border-[#B388FF]/30 shadow-[0_0_15px_rgba(179,136,255,0.15)] rounded-full px-5 py-3 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 dark:bg-[#B388FF]" />
                  <Zap size={18} className="text-purple-600 dark:text-[#B388FF]" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white">Fast Learner</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full px-5 py-3">
                  <AlignLeft size={18} className="text-slate-400 dark:text-white/40" />
                  <span className="text-sm font-medium text-slate-500 dark:text-white/40">Logical Weaver</span>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-[#1A1525] border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex items-center gap-4">
                <BarChart2 size={24} className="text-purple-600 dark:text-[#B388FF]" />
                <p className="text-sm font-medium text-slate-600 dark:text-white/60">
                  You perform <span className="text-slate-900 dark:text-white font-bold">22%</span> better after revision than lectures.
                </p>
              </div>
            </div>

            {/* When You Perform Best */}
            <div className="bg-white dark:bg-[#100B1A] border-y border-r border-slate-200 dark:border-[#00E5FF]/20 border-l-[3px] border-l-cyan-500 dark:border-l-[#00E5FF] rounded-[40px] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500 dark:bg-[#00E5FF]" />
              <div>
                <h3 className="text-[28px] font-bold text-slate-900 dark:text-white mb-8 leading-tight">When You Perform<br />Best</h3>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun size={14} className="text-cyan-500 dark:text-[#00E5FF]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 dark:text-[#00E5FF]">PEAK FOCUS</span>
                  </div>
                  <div className="text-[32px] font-bold text-slate-900 dark:text-white">6 PM – 8 PM</div>
                </div>

                <div className="w-full h-px bg-slate-200 dark:bg-white/5 mb-8" />

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Moon size={14} className="text-slate-400 dark:text-white/40" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-white/40">WEAK TIME</span>
                  </div>
                  <div className="text-xl font-bold text-slate-500 dark:text-white/40">After 11 PM</div>
                </div>
              </div>

              <div className="mt-8 pt-8">
                <p className="text-xs text-slate-500 dark:text-white/40 leading-relaxed font-medium">
                  Study difficult subjects in your peak focus hours to maximize retention.
                </p>
              </div>
            </div>
          </div>

          {/* Consistency Meter */}
          <div className="mt-16 w-full">
            <div className="flex items-center justify-between mb-12">
              <h3 className="text-[28px] font-bold text-slate-900 dark:text-white">Consistency Meter</h3>
              <div className="border border-pink-500/30 bg-pink-50 dark:bg-pink-500/10 rounded-full px-5 py-2 shadow-[0_0_15px_rgba(255,77,141,0.15)]">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-600 dark:text-pink-500">INCONSISTENT BUT IMPROVING</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 px-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-white/40 mb-3">STUDY DAYS</span>
                <div className="text-[40px] font-bold text-slate-900 dark:text-white leading-none">
                  18 <span className="text-lg text-slate-400 dark:text-white/30 font-medium">/ 30</span>
                </div>
              </div>

              <div className="flex flex-col relative">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-white/40 mb-3">CURRENT STREAK</span>
                <div className="text-[40px] font-bold text-purple-600 dark:text-[#B388FF] leading-none mb-3">
                  5 Days
                </div>
                <div className="absolute -bottom-4 left-0 w-full h-[3px] bg-purple-500 dark:bg-[#B388FF] shadow-[0_0_15px_rgba(179,136,255,0.5)] rounded-full" />
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-white/40 mb-3">MISSED DAYS</span>
                <div className="text-[40px] font-bold text-pink-600 dark:text-pink-500 leading-none">
                  4
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-white/40 mb-3">AVG SESSION</span>
                <div className="text-[40px] font-bold text-slate-900 dark:text-white leading-none">
                  4.2 <span className="text-lg text-slate-400 dark:text-white/30 font-medium">Hrs</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-pink-50 dark:bg-[#100B1A] border-y border-r border-pink-200 dark:border-pink-500/20 border-l-[3px] border-l-pink-500 rounded-3xl p-8 shadow-[-5px_0_15px_rgba(255,77,141,0.05)] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pink-500" />
                <div className="flex items-center gap-2 mb-4">
                  <Info size={16} className="text-pink-600 dark:text-pink-500" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-600 dark:text-pink-500">WHAT DOES THIS MEAN?</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-white/60 leading-relaxed font-medium">
                  Your "Inconsistent but Improving" status means you are over-committing on 'good days' and burning out, leading to missed days. Your 5-day streak is the first sign of a healthy stabilization.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-[#100B1A] border-y border-r border-purple-200 dark:border-[#B388FF]/20 border-l-[3px] border-l-purple-500 dark:border-l-[#B388FF] rounded-3xl p-8 shadow-[-5px_0_15px_rgba(179,136,255,0.05)] relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-purple-500 dark:bg-[#B388FF]" />
                <div className="flex items-center gap-2 mb-4">
                  <Zap size={16} className="text-purple-600 dark:text-[#B388FF]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-600 dark:text-[#B388FF]">WHAT SHOULD I DO NEXT?</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-white/60 leading-relaxed font-medium">
                  Start a <span className="text-purple-600 dark:text-[#B388FF] font-bold">5-Minute Non-Negotiable</span> habit. Even on your busiest days, commit to opening one book for just 5 minutes. This maintains the "neural pathway of showing up," ensuring you never have a 0-day again.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Identity */}
          <div className="mt-16 w-full mb-20">
            <div className="bg-white dark:bg-[#100B1A] border border-slate-200 dark:border-white/5 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden">
              {/* Large glowing circle */}
              <div className="relative shrink-0 flex items-center justify-center md:ml-4">
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-purple-400 dark:from-[#B388FF] to-cyan-400 dark:to-[#00E5FF] shadow-[0_0_60px_rgba(0,229,255,0.3)] animate-pulse" />
                <div className="absolute border border-slate-200 dark:border-white/10 w-48 h-48 md:w-56 md:h-56 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-[#100B1A] rounded-full flex items-center justify-center z-10 shadow-inner">
                  <Brain size={20} className="text-purple-600 dark:text-[#B388FF]" />
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-600 dark:text-[#B388FF]">YOUR LEARNING IDENTITY</span>
                </div>
                <h2 className="text-4xl md:text-[48px] font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-2">
                  Fast Learner,
                </h2>
                <h2 className="text-4xl md:text-[48px] font-black text-slate-300 dark:text-white/30 leading-[1.1] tracking-tight mb-8">
                  Needs More Discipline.
                </h2>

                <div className="flex flex-wrap items-center gap-4">
                  <button className="flex items-center gap-2 bg-purple-600 dark:bg-[#B388FF] text-white dark:text-[#100B1A] px-6 py-3 md:px-8 md:py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-all shadow-[0_0_20px_rgba(179,136,255,0.4)]">
                    <Sparkles size={16} />
                    Generate Study Path
                  </button>
                  <button className="px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-slate-300 dark:border-white/10 text-slate-600 dark:text-white font-bold text-sm hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                    Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
