import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  Award,
  BookOpen,
  TrendingUp,
  FileText,
  Activity,
  Award as Prize,
  CheckCircle,
  AlertTriangle,
  Info,
  Clock,
  Sparkles,
  Download,
  Share2
} from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-20' : 'left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-12 h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-12">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input 
            type="text" 
            placeholder="Search mock results..." 
            className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full py-2.5 pl-12 pr-6 text-xs w-[300px] focus:outline-none focus:border-purple-500/50 transition-all text-slate-900 dark:text-white placeholder-white/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mr-4">
          <span className="cursor-pointer hover:text-slate-900 dark:text-white transition-colors" onClick={() => onNavigate('dashboard')}>Dashboard</span>
          <span className="cursor-pointer hover:text-slate-900 dark:text-white transition-colors" onClick={() => onNavigate('analytics')}>Courses</span>
          <span className="text-slate-900 dark:text-white cursor-pointer hover:text-slate-900 dark:text-white transition-colors" onClick={() => onNavigate('exams')}>Exams</span>
        </div>
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

const ResultPage = ({ onNavigate, isSidebarCollapsed }) => {
  const [checklist, setChecklist] = React.useState({
    revise: false,
    practice: false,
    balance: false
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-10%] left-[20%] w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"></div>
      </div>

      

      <main className="relative z-10 pt-6 pb-32 max-w-[1200px] mx-auto px-12">

        {/* Hero Orbit Section */}
        <section className="relative h-[320px] rounded-[48px] bg-gradient-to-b from-[#160B28]/40 to-transparent border border-slate-200 dark:border-white/5 p-12 flex flex-col justify-end items-center overflow-hidden mb-16 shadow-2xl">
          {/* Cosmic curves SVG overlay */}
          <div className="absolute top-[-50%] w-[700px] h-[700px] border border-purple-500/10 rounded-full flex items-center justify-center opacity-70 pointer-events-none">
            <div className="w-[550px] h-[550px] border border-indigo-500/15 rounded-full flex items-center justify-center relative">
              {/* Floating Orbit Symbols */}
              <div className="absolute top-10 left-12 text-purple-400/35 font-space font-black">★</div>
              <div className="absolute top-36 right-4 text-cyan-400/30 font-space font-black">π</div>
              <div className="absolute bottom-20 left-4 text-pink-400/30 font-space font-black">%</div>
              <div className="absolute bottom-12 right-20 text-indigo-400/35 font-space font-black">⚛</div>
              
              <div className="w-[400px] h-[400px] border border-cyan-500/10 rounded-full"></div>
            </div>
          </div>

          <div className="relative z-10 text-center max-w-2xl">
            <h1 className="text-4xl font-black font-space leading-[1.1] tracking-tight mb-4 uppercase">
              Analyse your performance<br />
              <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic font-black font-space pr-2">
                Improve your Result
              </span>
            </h1>
            <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wide">
              Track your marks, identify weak areas and boost your academic performance with smart insights powered by scholarly analytics.
            </p>
          </div>
        </section>

        {/* Large Score Card & Subject Mini Blocks */}
        <section className="grid grid-cols-12 gap-8 mb-12">
          {/* Large main dashboard stats */}
          <div className="col-span-8 bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl flex justify-between items-center relative overflow-hidden h-[240px]">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-black uppercase text-purple-400 tracking-widest block mb-1">Total Score</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black font-space text-slate-900 dark:text-white leading-none">78</span>
                  <span className="text-sm font-bold text-white/30">/ 100</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-white/40 block mt-2">JEE Main Mock Test #14</span>
              </div>

              <div className="flex gap-8 border-t border-slate-200 dark:border-white/5 pt-4">
                <div>
                  <span className="text-[7px] font-black text-white/30 uppercase tracking-widest block leading-none mb-1">Rank</span>
                  <span className="text-xs font-black font-space text-slate-900 dark:text-white leading-none">#5</span>
                </div>
                <div>
                  <span className="text-[7px] font-black text-white/30 uppercase tracking-widest block leading-none mb-1">Accuracy</span>
                  <span className="text-xs font-black font-space text-cyan-400 leading-none">82%</span>
                </div>
                <div>
                  <span className="text-[7px] font-black text-white/30 uppercase tracking-widest block leading-none mb-1">Time</span>
                  <span className="text-xs font-black font-space text-purple-400 leading-none">1h 42m</span>
                </div>
              </div>
            </div>

            {/* Circular Percentile Radial */}
            <div className="flex flex-col items-center justify-center shrink-0">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-95" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="6" />
                  <circle cx="50" cy="50" r="40" fill="transparent" stroke="#A855F7" strokeWidth="6" strokeDasharray="251.2" strokeDashoffset="55.2" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
                  <span className="text-lg font-black font-space text-slate-900 dark:text-white leading-none">78%</span>
                  <span className="text-[7px] font-black text-slate-500 dark:text-white/40 uppercase tracking-widest mt-0.5">Percentile</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subject score grids */}
          <div className="col-span-4 grid grid-cols-2 gap-4 h-[240px]">
            {/* Math */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-4 flex flex-col justify-between hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-black uppercase text-indigo-400 tracking-widest">Math</span>
                <span className="text-[7px] font-black tracking-widest px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Top 2%</span>
              </div>
              <span className="text-lg font-black font-space text-slate-900 dark:text-white leading-none">28/30</span>
            </div>

            {/* Chemistry */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-4 flex flex-col justify-between hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-black uppercase text-purple-400 tracking-widest">Chemistry</span>
                <span className="text-[7px] font-black tracking-widest px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Active</span>
              </div>
              <span className="text-lg font-black font-space text-slate-900 dark:text-white leading-none">22/30</span>
            </div>

            {/* Physics */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-4 flex flex-col justify-between hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-black uppercase text-pink-400 tracking-widest">Physics</span>
                <span className="text-[7px] font-black tracking-widest px-1.5 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">Needs Work</span>
              </div>
              <span className="text-lg font-black font-space text-slate-900 dark:text-white leading-none">18/30</span>
            </div>

            {/* Biology */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-4 flex flex-col justify-between hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex justify-between items-center">
                <span className="text-[8px] font-black uppercase text-emerald-400 tracking-widest">Biology</span>
                <span className="text-[7px] font-black tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Perfect</span>
              </div>
              <span className="text-lg font-black font-space text-slate-900 dark:text-white leading-none">10/10</span>
            </div>
          </div>
        </section>

        {/* Charts Row */}
        <section className="grid grid-cols-3 gap-6 mb-12">
          {/* Card 1: Marks By Subject */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 shadow-xl h-[240px] flex flex-col justify-between">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Marks By Subject</span>
            
            <div className="flex justify-around items-end h-[120px] pb-2 border-b border-slate-200 dark:border-white/5">
              {/* PHY */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-5 bg-pink-500 rounded-t-lg h-[60px] shadow-[0_0_10px_rgba(236,72,153,0.3)]"></div>
                <span className="text-[7px] font-black text-white/30 uppercase tracking-widest">PHY</span>
              </div>
              {/* CHE */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-5 bg-purple-500 rounded-t-lg h-[80px] shadow-[0_0_10px_rgba(168,85,247,0.3)]"></div>
                <span className="text-[7px] font-black text-white/30 uppercase tracking-widest">CHE</span>
              </div>
              {/* MAT */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-5 bg-indigo-500 rounded-t-lg h-[95px] shadow-[0_0_10px_rgba(99,102,241,0.3)]"></div>
                <span className="text-[7px] font-black text-white/30 uppercase tracking-widest">MAT</span>
              </div>
              {/* BIO */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-5 bg-emerald-500 rounded-t-lg h-[45px] shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                <span className="text-[7px] font-black text-white/30 uppercase tracking-widest">BIO</span>
              </div>
            </div>
          </div>

          {/* Card 2: Accuracy Split */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 shadow-xl h-[240px] flex flex-col justify-between items-center text-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 self-start">Accuracy Split</span>
            
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(236,72,153,0.15)" strokeWidth="8" />
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#06B6D4" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="45.2" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-black font-space text-slate-900 dark:text-white">
                82%
              </div>
            </div>

            <div className="flex gap-4 text-[7px] font-black uppercase tracking-widest text-white/30">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Accuracy</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> Errors</span>
            </div>
          </div>

          {/* Card 3: Rank Trend */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 shadow-xl h-[240px] flex flex-col justify-between">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Rank Trend</span>
            
            <div className="h-[120px] w-full flex items-center justify-center relative">
              <svg className="w-full h-[90px]" viewBox="0 0 100 50">
                <path d="M 0,35 Q 25,15 50,28 T 100,10" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="100" cy="10" r="2.5" fill="#A855F7" />
              </svg>
            </div>
            
            <span className="text-[7px] font-black text-white/30 uppercase tracking-widest text-center block">Past 5 Mock Tests</span>
          </div>
        </section>

        {/* Strong Areas vs Weak Areas */}
        <section className="grid grid-cols-2 gap-8 mb-12">
          {/* Strong Areas */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 shadow-xl">
            <span className="text-[9px] font-black uppercase tracking-widest text-indigo-400 mb-6 flex items-center gap-1.5">
              ★ Strong Areas
            </span>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-4">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white/80">Organic Chemistry</span>
                <span className="text-xs font-black font-space text-indigo-400">88%</span>
              </div>
              <div className="flex justify-between items-center bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-4">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white/80">Algebra</span>
                <span className="text-xs font-black font-space text-indigo-400">92%</span>
              </div>
            </div>
          </div>

          {/* Weak Areas */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 shadow-xl">
            <span className="text-[9px] font-black uppercase tracking-widest text-pink-400 mb-6 flex items-center gap-1.5">
              ⚠ Weak Areas
            </span>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-4">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white/80">Electricity Numericals</span>
                <span className="text-xs font-black font-space text-pink-400">42%</span>
              </div>
              <div className="flex justify-between items-center bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-4">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white/80">Geometry</span>
                <span className="text-xs font-black font-space text-pink-400">38%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mistake Analysis & Checklist Grid */}
        <section className="grid grid-cols-12 gap-8 mb-12">
          {/* Mistake Analysis */}
          <div className="col-span-7 bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 shadow-xl">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-6 block">Mistake Analysis</span>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Silly mistakes */}
              <div className="bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-white/60">Silly Mistakes</span>
                  <span className="text-xs font-black font-space text-white/90">04</span>
                </div>
                <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: '40%' }}></div>
                </div>
              </div>

              {/* Conceptual */}
              <div className="bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-white/60">Conceptual Errors</span>
                  <span className="text-xs font-black font-space text-white/90">09</span>
                </div>
                <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-pink-500" style={{ width: '90%' }}></div>
                </div>
              </div>

              {/* Time management */}
              <div className="bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-white/60">Time Management</span>
                  <span className="text-xs font-black font-space text-white/90">02</span>
                </div>
                <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500" style={{ width: '20%' }}></div>
                </div>
              </div>

              {/* Out of syllabus */}
              <div className="bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-white/60">Out of Syllabus</span>
                  <span className="text-xs font-black font-space text-white/90">03</span>
                </div>
                <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white/20" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="col-span-5 bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 shadow-xl flex flex-col justify-between">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-4 block">Improvement Checklist</span>

            <div className="space-y-4">
              {/* Row 1 */}
              <div 
                onClick={() => setChecklist({ ...checklist, revise: !checklist.revise })}
                className="flex items-start gap-3 cursor-pointer select-none group"
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checklist.revise ? 'border-purple-500 bg-purple-500/10 text-purple-400' : 'border-slate-400 dark:border-white/20 text-transparent group-hover:border-white/40'
                }`}>
                  ✓
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-900 dark:text-white">Revise Electricity</h5>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Solve previous year questions and check diagrams.</p>
                </div>
              </div>

              {/* Row 2 */}
              <div 
                onClick={() => setChecklist({ ...checklist, practice: !checklist.practice })}
                className="flex items-start gap-3 cursor-pointer select-none group"
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checklist.practice ? 'border-purple-500 bg-purple-500/10 text-purple-400' : 'border-slate-400 dark:border-white/20 text-transparent group-hover:border-white/40'
                }`}>
                  ✓
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-900 dark:text-white">Practice 10 numericals</h5>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Solve questions from mock test within 12 min limit.</p>
                </div>
              </div>

              {/* Row 3 */}
              <div 
                onClick={() => setChecklist({ ...checklist, balance: !checklist.balance })}
                className="flex items-start gap-3 cursor-pointer select-none group"
              >
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                  checklist.balance ? 'border-purple-500 bg-purple-500/10 text-purple-400' : 'border-slate-400 dark:border-white/20 text-transparent group-hover:border-white/40'
                }`}>
                  ✓
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-900 dark:text-white">Spend less time on Biology</h5>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Optimize reading speed, balance revision time for Physics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benchmark Analysis */}
        <section className="mb-12">
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-6 block">Benchmark Analysis</span>

          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 grid grid-cols-3 gap-8">
            {/* Relative score */}
            <div className="flex flex-col justify-between h-[100px] border-r border-slate-200 dark:border-white/5 pr-8">
              <span className="text-[8px] font-black text-white/30 uppercase tracking-widest block leading-none">Relative Performance</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black font-space text-purple-400 leading-none">+12</span>
                <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">marks improved since mock #13</span>
              </div>
            </div>

            {/* Peer comparison */}
            <div className="flex flex-col justify-between h-[100px] border-r border-slate-200 dark:border-white/5 px-4">
              <span className="text-[8px] font-black text-white/30 uppercase tracking-widest block leading-none">Peer Comparison</span>
              
              <div className="space-y-2">
                <div className="w-full">
                  <div className="flex justify-between text-[7px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-1">
                    <span>You</span>
                    <span>78 Marks</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: '78%' }}></div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between text-[7px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-1">
                    <span>Peer Average</span>
                    <span>62 Marks</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-white/20" style={{ width: '62%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Batch standard */}
            <div className="flex flex-col justify-between h-[100px] pl-8">
              <span className="text-[8px] font-black text-white/30 uppercase tracking-widest block leading-none">Batch Standard</span>
              
              <div className="relative pt-6">
                <div className="w-full h-1 bg-slate-100 dark:bg-white/5 rounded-full relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-[78%] w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#A855F7] cursor-pointer"></div>
                </div>
                <div className="flex justify-between text-[7px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mt-3">
                  <span>Low</span>
                  <span className="text-purple-400">Top Ranker</span>
                  <span>High</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Result Insight */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[#1C0F2C]/40 to-[#0D0D0F]/80 border border-purple-500/10 rounded-[28px] p-6 shadow-xl relative overflow-hidden flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Sparkles size={18} className="animate-pulse" />
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-bold uppercase tracking-wider max-w-2xl">
                You are strong in <span className="text-indigo-400 font-black">Chemistry</span> but losing marks in <span className="text-pink-400 font-black">Physics</span> due to calculations. Focus on <span className="text-purple-400 font-black">Physics numericals</span> and reduce silly mistakes in calculation to break into the Top 3.
              </p>
            </div>
          </div>
        </section>

        {/* Action Buttons Row */}
        <section className="flex gap-4 mb-16">
          <button className="bg-purple-600 hover:bg-purple-500 text-slate-900 dark:text-white px-8 py-3.5 rounded-2xl text-[9px] font-black uppercase tracking-[0.25em] transition-all hover:scale-105 shadow-lg shadow-purple-500/15 flex items-center gap-2">
            <Download size={12} /> PDF Report
          </button>
          <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-8 py-3.5 rounded-2xl text-[9px] font-black uppercase tracking-[0.25em] transition-all hover:scale-105">
            Parent Report
          </button>
          <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-8 py-3.5 rounded-2xl text-[9px] font-black uppercase tracking-[0.25em] transition-all hover:scale-105">
            Detailed Analysis
          </button>
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

export default ResultPage;
