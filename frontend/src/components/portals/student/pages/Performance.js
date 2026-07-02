import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  TrendingUp, 
  TrendingDown, 
  Sparkles, 
  Target, 
  Clock, 
  BookOpen, 
  AlertCircle, 
  ArrowRight,
  Zap,
  Bookmark,
  CheckCircle,
  HelpCircle,
  Compass
} from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-20' : 'left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-12 h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-12">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input 
            type="text" 
            placeholder="Search performance insights..." 
            className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full py-2.5 pl-12 pr-6 text-xs w-[300px] focus:outline-none focus:border-purple-500/50 transition-all text-slate-900 dark:text-white placeholder-white/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:bg-white/5 transition-all">
          <Bell size={18} />
        </button>
        <button className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:bg-white/5 transition-all">
          <Globe size={18} />
        </button>
        <div className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/10 overflow-hidden cursor-pointer hover:scale-105 transition-all" onClick={() => onNavigate('profile')}>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Subhranil" alt="Avatar" />
        </div>
      </div>
    </nav>
  );
};

const Performance = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"></div>
      </div>

      

      <main className="relative z-10 pt-6 pb-32 max-w-[1200px] mx-auto px-12">

        {/* Header Block */}
        <section className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-black font-space tracking-tight text-slate-900 dark:text-white mb-2">Performance Summary</h1>
            <p className="text-xs text-slate-500 dark:text-white/40 font-medium">Comprehensive analysis of <span className="text-purple-400 font-bold">128 academic variables</span> for March.</p>
          </div>
          
          <div className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-white/60">
            March 2026
          </div>
        </section>

        {/* KPI Metrics Grid */}
        <section className="grid grid-cols-4 gap-6 mb-12">
          {/* Global Rank */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 hover:border-slate-300 dark:border-white/10 transition-all duration-300">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Global Rank</span>
            <h4 className="text-3xl font-black font-space mt-3 text-slate-900 dark:text-white">#18 <span className="text-sm font-bold text-white/20">/ 238</span></h4>
            <div className="mt-4 flex items-center gap-1.5 bg-[#FFBF00]/10 border border-[#FFBF00]/25 text-[#FFBF00] px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest w-fit">
              <Sparkles size={8} /> Top 8% Percentile
            </div>
          </div>

          {/* Average Score */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 hover:border-slate-300 dark:border-white/10 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Average Score</span>
              <div className="flex items-baseline gap-2 mt-3">
                <h4 className="text-3xl font-black font-space text-slate-900 dark:text-white">74%</h4>
                <span className="text-[10px] font-bold text-[#10B981]">+6.2%</span>
              </div>
            </div>
            <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full mt-4 overflow-hidden">
              <div className="w-[74%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
            </div>
          </div>

          {/* Best Field */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 hover:border-slate-300 dark:border-white/10 transition-all duration-300">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Best Field</span>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                <Target size={16} />
              </div>
              <div>
                <h4 className="text-lg font-black font-space text-slate-900 dark:text-white leading-none">Biology</h4>
                <p className="text-[9px] text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider mt-1.5">Current Grade: A+</p>
              </div>
            </div>
          </div>

          {/* Next Milestone */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 hover:border-slate-300 dark:border-white/10 transition-all duration-300">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Next Milestone</span>
            <h4 className="text-lg font-black font-space mt-3 text-slate-900 dark:text-white">Calculus</h4>
            <p className="text-[9px] text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider mt-1">Final Exam scheduled</p>
            <div className="mt-2.5 text-[8px] font-black uppercase tracking-widest text-[#F76171]">
              In 2 Days
            </div>
          </div>
        </section>

        {/* Subjects & Topic Proficiency Row */}
        <section className="grid grid-cols-12 gap-8 mb-12">
          {/* Left Column - Subject Progress Cards */}
          <div className="col-span-7 space-y-4">
            {/* Physics */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[110px] hover:border-red-500/20 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <h4 className="font-bold text-sm tracking-tight text-white/90 uppercase">Physics</h4>
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">Critical</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black font-space text-red-400">52%</span>
                  <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest ml-2">Avg: 68%</span>
                </div>
              </div>
              <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full" style={{ width: '52%' }}></div>
              </div>
            </div>

            {/* Chemistry */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[110px] hover:border-purple-500/20 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <h4 className="font-bold text-sm tracking-tight text-white/90 uppercase">Chemistry</h4>
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Average</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black font-space text-purple-400">75%</span>
                  <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest ml-2">Avg: 72%</span>
                </div>
              </div>
              <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#BD6AFF] rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Biology */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[110px] hover:border-cyan-500/20 transition-all duration-300">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <h4 className="font-bold text-sm tracking-tight text-white/90 uppercase">Biology</h4>
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 text-[#22D3EE] border border-cyan-500/20">Strong</span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black font-space text-cyan-400">90%</span>
                  <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest ml-2">Avg: 85%</span>
                </div>
              </div>
              <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          {/* Right Column - Topic Proficiency Card */}
          <div className="col-span-5">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 h-full flex flex-col justify-between shadow-2xl">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-white/40 mb-6">Topic Proficiency</h3>
                
                <div className="space-y-4">
                  {/* Mechanics */}
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 border-b border-slate-200 dark:border-white/5 pb-2">
                    <span>Mechanics</span>
                    <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-[#37DBAD]/10 text-[#37DBAD] border border-[#37DBAD]/20">High</span>
                  </div>

                  {/* Thermodynamics */}
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 border-b border-slate-200 dark:border-white/5 pb-2">
                    <span>Thermodynamics</span>
                    <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-[#37DBAD]/10 text-[#37DBAD] border border-[#37DBAD]/20">High</span>
                  </div>

                  {/* Optics & Wave */}
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 border-b border-slate-200 dark:border-white/5 pb-2">
                    <span>Optics & Wave</span>
                    <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">Mid</span>
                  </div>

                  {/* Electricity */}
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 pb-2">
                    <span>Electricity</span>
                    <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">Low</span>
                  </div>
                </div>
              </div>

              {/* Study Library Link Card */}
              <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-2xl p-4 mt-6 flex justify-between items-center hover:bg-white/[0.02] cursor-pointer group transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-900 dark:text-white">Study Library</h5>
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Access learning resources</p>
                  </div>
                </div>
                <ArrowRight size={14} className="text-slate-500 dark:text-white/40 group-hover:text-slate-900 dark:text-white group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </div>
        </section>

        {/* Trajectory & Strategy Focus Row */}
        <section className="grid grid-cols-12 gap-8 mb-12">
          {/* Trajectory Chart */}
          <div className="col-span-8">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl flex flex-col justify-between h-[380px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold font-space text-slate-900 dark:text-white">Trajectory</h3>
                  <p className="text-xs text-slate-500 dark:text-white/40 font-medium">Performance trend across last 5 assessments</p>
                </div>
                
                <span className="text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span> Academic Score
                </span>
              </div>

              {/* Chart SVG */}
              <div className="w-full h-44 relative mt-6">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 800 160">
                  <defs>
                    <linearGradient id="trajGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EE3E48" />
                      <stop offset="50%" stopColor="#BD6AFF" />
                      <stop offset="100%" stopColor="#22D3EE" />
                    </linearGradient>
                    <linearGradient id="trajAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(189, 106, 255, 0.12)" />
                      <stop offset="100%" stopColor="rgba(189, 106, 255, 0)" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid lines */}
                  <line x1="0" y1="20" x2="800" y2="20" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
                  <line x1="0" y1="60" x2="800" y2="60" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
                  <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
                  <line x1="0" y1="140" x2="800" y2="140" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />

                  {/* Shaded Area */}
                  <path 
                    d="M 50 110 C 200 110, 250 120, 380 90 C 510 60, 580 50, 750 50 L 750 140 L 50 140 Z" 
                    fill="url(#trajAreaGradient)" 
                  />

                  {/* Bezier Path */}
                  <path 
                    d="M 50 110 C 200 110, 250 120, 380 90 C 510 60, 580 50, 750 50" 
                    fill="none" 
                    stroke="url(#trajGradient)" 
                    strokeWidth="3" 
                  />

                  {/* Coordinate node points */}
                  <circle cx="380" cy="90" r="4" fill="#BD6AFF" />
                  <circle cx="750" cy="50" r="4" fill="#22D3EE" />
                </svg>

                {/* X-Axis labels */}
                <div className="absolute bottom-[-16px] left-0 w-full flex justify-between px-8 text-[8px] font-black uppercase tracking-widest text-white/30">
                  <span>Assessment 01</span>
                  <span>Assessment 02</span>
                  <span>Assessment 03</span>
                  <span>Assessment 04</span>
                  <span>Mid-Term</span>
                </div>
              </div>

              {/* Alert Message Box */}
              <div className="border border-slate-200 dark:border-white/5 bg-white/[0.01] px-5 py-3 rounded-2xl flex items-center gap-3 mt-4">
                <AlertCircle size={14} className="text-purple-400 shrink-0 animate-pulse" />
                <p className="text-[9px] text-white/50 leading-relaxed font-bold uppercase tracking-wider">
                  Positive growth in <span className="text-purple-400 font-extrabold">Chemistry</span>. Critical review needed for <span className="text-red-400 font-extrabold">Electromagnetism</span> modules to maintain trajectory.
                </p>
              </div>
            </div>
          </div>

          {/* Strategy Focus */}
          <div className="col-span-4">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl h-[380px] flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-white/40 mb-6 flex items-center gap-2">
                  <Compass size={12} className="text-purple-400" /> Strategy Focus
                </h3>

                <ul className="space-y-4">
                  <li className="flex gap-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1 shrink-0"></span>
                    <span>Review Physics Electricity modules.</span>
                  </li>
                  <li className="flex gap-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1 shrink-0"></span>
                    <span>Complete Term 2 Chemistry Lab.</span>
                  </li>
                  <li className="flex gap-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-white/80">
                    <span className="w-1.5 h-1.5 bg-[#22D3EE] rounded-full mt-1 shrink-0"></span>
                    <span>Attend Algebra Workshop.</span>
                  </li>
                </ul>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-slate-900 dark:text-white rounded-2xl text-[9px] font-black uppercase tracking-[0.25em] transition-all hover:scale-[1.02] shadow-lg shadow-purple-500/15 mt-6">
                Unlock Full Roadmap
              </button>
            </div>
          </div>
        </section>

        {/* Contextual Analysis & Personalized Roadmap */}
        <section className="grid grid-cols-2 gap-8 mb-16">
          {/* AI Contextual Analysis */}
          <div>
            <h3 className="text-lg font-space font-bold text-slate-900 dark:text-white mb-6">What does this mean?</h3>
            
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-8 h-[340px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none"></div>

              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#22D3EE] mb-6 block">AI Contextual Analysis</span>
                
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#37DBAD] mt-1.5 shrink-0"></span>
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-bold uppercase tracking-wide">
                      Your <span className="text-slate-900 dark:text-white">74% average</span> confirms your position in the <span className="text-[#37DBAD]">top 8% of the cohort</span>, maintaining a strong trajectory toward honors.
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#BD6AFF] mt-1.5 shrink-0"></span>
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-bold uppercase tracking-wide">
                      Your <span className="text-slate-900 dark:text-white">Biology</span> performance is now considered <span className="text-[#BD6AFF]">"elite,"</span> placing you as a potential candidate for the Summer Research Fellowship.
                    </p>
                  </div>

                  <div className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full bg-[#F76171] mt-1.5 shrink-0"></span>
                    <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-bold uppercase tracking-wide">
                      The recent <span className="text-[#F76171]">Physics dip</span> matches a broader mid-term trend across 68% of students following the Electromagnetism module.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Personalized Action Plan */}
          <div>
            <h3 className="text-lg font-space font-bold text-slate-900 dark:text-white mb-6">What should I do next?</h3>
            
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-8 h-[340px] flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-purple-400 mb-6 block">Personalized Roadmap</span>
                
                <div className="space-y-4">
                  {/* Task 1 */}
                  <div className="bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center justify-between hover:border-slate-300 dark:border-white/10 transition-all">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-white/20 shrink-0 cursor-pointer hover:text-[#37DBAD] transition-colors" />
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-white/80">Complete Electromagnetism module</span>
                    </div>
                    <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">High Priority</span>
                  </div>

                  {/* Task 2 */}
                  <div className="bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center justify-between hover:border-slate-300 dark:border-white/10 transition-all">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-white/20 shrink-0 cursor-pointer hover:text-[#37DBAD] transition-colors" />
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-white/80">Schedule 1:1 with Dr. Smith (Physics)</span>
                    </div>
                    <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Suggested</span>
                  </div>

                  {/* Task 3 */}
                  <div className="bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center justify-between hover:border-slate-300 dark:border-white/10 transition-all">
                    <div className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#37DBAD] shrink-0 cursor-pointer" />
                      <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-white/40 line-through">Review Calculus Lab Notes</span>
                    </div>
                    <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-white/40 border border-slate-200 dark:border-white/5">Tomorrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-6 border-t border-slate-200 dark:border-white/5 flex justify-between items-center text-slate-400 dark:text-white/20">
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Galactic Nexus</span>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Support</a>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest">© 2026 StudyAdda</span>
        </footer>
      </main>
    </div>
  );
};

export default Performance;
