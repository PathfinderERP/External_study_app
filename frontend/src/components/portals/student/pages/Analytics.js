import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  AlertTriangle, 
  Clock, 
  Zap, 
  Sparkles, 
  X, 
  AlertCircle, 
  TrendingUp, 
  TrendingDown, 
  Bookmark, 
  Calendar,
  Smile,
  ShieldAlert,
  Flame,
  MousePointer
} from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-20' : 'left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-12 h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-12">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input 
            type="text" 
            placeholder="Search analytics insights..." 
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

const Analytics = ({ onNavigate, isSidebarCollapsed }) => {
  const [activeLoseMarksTab, setActiveLoseMarksTab] = React.useState('silly');
  const [activeStyleTab, setActiveStyleTab] = React.useState('fast');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-10%] left-[20%] w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px]"></div>
      </div>

      

      <main className="relative z-10 pt-6 pb-32 max-w-[1200px] mx-auto px-12">

        {/* Hero Section */}
        <section className="text-center mb-20 relative pt-10">
          <h1 className="text-6xl font-black font-space leading-[1.05] tracking-tight mb-4 flex flex-col md:flex-row items-center justify-center gap-3">
            Understand Your
            <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic font-black font-space pr-2">
              Learning Pattern
            </span>
          </h1>
          <p className="text-sm text-slate-500 dark:text-white/40 max-w-[500px] mx-auto leading-relaxed mb-12 font-medium">
            AI-powered insights to improve your performance smarter, not harder.
          </p>

          {/* Three Metric Blocks */}
          <div className="grid grid-cols-3 gap-6 max-w-[960px] mx-auto mb-10">
            {/* Biggest Problem */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex items-start gap-4 hover:border-red-500/30 transition-all duration-300 text-left">
              <div className="w-10 h-10 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                <AlertTriangle size={18} />
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-wider text-red-400">Biggest Problem</span>
                <h4 className="text-2xl font-black font-space mt-1 text-slate-900 dark:text-white">38%</h4>
                <p className="text-[10px] text-slate-500 dark:text-white/40 font-medium uppercase mt-0.5">Silly Mistakes</p>
              </div>
            </div>

            {/* Key Progress */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex items-start gap-4 hover:border-blue-500/30 transition-all duration-300 text-left">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-wider text-blue-400">Key Progress</span>
                <h4 className="text-lg font-black font-space mt-1 text-slate-900 dark:text-white leading-tight">Time Management</h4>
                <p className="text-[10px] text-slate-500 dark:text-white/40 font-medium uppercase mt-0.5">Focus on Math</p>
              </div>
            </div>

            {/* Student Type */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex items-start gap-4 hover:border-purple-500/30 transition-all duration-300 text-left">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                <Zap size={18} />
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-wider text-purple-400">Student Type</span>
                <h4 className="text-lg font-black font-space mt-1 text-slate-900 dark:text-white leading-tight">Fast Learner</h4>
                <p className="text-[10px] text-slate-500 dark:text-white/40 font-medium uppercase mt-0.5">Needs Discipline</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-slate-900 dark:text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-purple-500/10 transition-all hover:scale-105">
              <Sparkles size={14} />
              Generate Study Path
            </button>
          </div>
        </section>

        {/* Where You Lose Marks Section */}
        <section className="mb-16">
          <h3 className="text-lg font-bold font-space text-slate-900 dark:text-white mb-6">Where You Lose Marks</h3>
          
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-8 shadow-2xl">
            {/* Tabs Row */}
            <div className="flex gap-4 mb-8">
              {[
                { id: 'concept', label: 'Concept Not Clear' },
                { id: 'silly', label: 'Silly Mistake', icon: X, activeColor: 'border-red-500/50 text-red-400 bg-red-500/5' },
                { id: 'pressure', label: 'Time Pressure' },
                { id: 'calculation', label: 'Calculation Error' }
              ].map((tab) => {
                const isActive = activeLoseMarksTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveLoseMarksTab(tab.id)}
                    className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-wider border transition-all flex items-center gap-2 ${
                      isActive 
                        ? tab.activeColor || 'border-purple-500/50 text-purple-400 bg-purple-500/5 shadow-md shadow-purple-500/5' 
                        : 'border-slate-200 dark:border-white/5 text-slate-500 dark:text-white/40 hover:text-slate-700 dark:text-white/80 hover:bg-white/[0.01]'
                    }`}
                  >
                    {tab.icon && <tab.icon size={10} />}
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Alert/Card Display */}
            {activeLoseMarksTab === 'silly' && (
              <div className="border-l-4 border-red-500 bg-red-950/15 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                  <ShieldAlert size={16} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-1.5">ANALYTICS INSIGHT</h5>
                  <p className="text-sm font-bold text-slate-700 dark:text-[#DDDDDD] leading-relaxed">
                    You lose marks to <span className="text-red-400">silly mistakes</span> particularly in transitioning between steps. Your fundamental knowledge is strong.
                  </p>
                </div>
              </div>
            )}
            {activeLoseMarksTab !== 'silly' && (
              <div className="border-l-4 border-purple-500 bg-purple-950/10 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <AlertCircle size={16} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-1.5">ANALYTICS INSIGHT</h5>
                  <p className="text-sm font-bold text-slate-700 dark:text-[#DDDDDD] leading-relaxed">
                    Analyzing metrics for <span className="text-purple-400">"{activeLoseMarksTab}"</span>. Focus remains on step accuracy and visual feedback adjustments.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Speed Pattern & Confidence Check Grid */}
        <section className="grid grid-cols-2 gap-8 mb-16">
          {/* Speed Pattern */}
          <div>
            <h3 className="text-lg font-bold font-space text-slate-900 dark:text-white mb-6">Your Speed Pattern</h3>
            
            <div className="space-y-4">
              {/* Physics */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-5 flex items-center justify-between hover:border-slate-300 dark:border-white/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <TrendingUp size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white/90">Physics</h5>
                    <p className="text-[9px] text-slate-500 dark:text-white/40 uppercase tracking-wider font-semibold">Standard Speed</p>
                  </div>
                </div>
                <span className="text-xs font-black font-space text-slate-900 dark:text-white">23 m/q</span>
              </div>

              {/* Biology */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-5 flex items-center justify-between hover:border-slate-300 dark:border-white/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <TrendingDown size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white/90">Biology</h5>
                    <p className="text-[9px] text-slate-500 dark:text-white/40 uppercase tracking-wider font-semibold">Careful Speed</p>
                  </div>
                </div>
                <span className="text-xs font-black font-space text-slate-900 dark:text-white">42 m/q</span>
              </div>

              {/* Math */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-red-500/40 rounded-3xl p-5 flex items-center justify-between shadow-lg shadow-red-500/5 hover:border-red-500/60 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                    <AlertCircle size={16} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-red-400">Math</h5>
                    <p className="text-[9px] text-red-400/60 uppercase tracking-wider font-bold">Critically Fast</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black font-space text-red-400">14 m/q</span>
                  <AlertTriangle size={14} className="text-red-500 animate-pulse" />
                </div>
              </div>

              <p className="text-[10px] text-red-400 font-bold uppercase tracking-wider pl-2">
                * You exceed the time limit of Math, causing avoidable mistakes.
              </p>
            </div>
          </div>

          {/* Confidence Check */}
          <div>
            <h3 className="text-lg font-bold font-space text-slate-900 dark:text-white mb-6">Confidence Check</h3>
            
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 h-[252px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[40px] pointer-events-none"></div>

              <div className="grid grid-cols-2 gap-4">
                {/* Overconfident */}
                <div className="bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex flex-col gap-2 hover:border-slate-300 dark:border-white/10 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400">
                    <TrendingUp size={14} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white/95">Overconfident</h5>
                    <p className="text-[9px] text-slate-500 dark:text-white/40 uppercase tracking-wider font-semibold mt-0.5">High Speed • Low Accuracy</p>
                  </div>
                </div>

                {/* Underconfident */}
                <div className="bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex flex-col gap-2 hover:border-slate-300 dark:border-white/10 transition-all">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <Zap size={14} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white/95">Underconfident</h5>
                    <p className="text-[9px] text-slate-500 dark:text-white/40 uppercase tracking-wider font-semibold mt-0.5">Low Speed • High Accuracy</p>
                  </div>
                </div>
              </div>

              {/* Bottom Config report */}
              <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 p-4 rounded-xl flex gap-3 items-center">
                <Bookmark size={14} className="text-purple-400 shrink-0" />
                <p className="text-[10px] text-slate-600 dark:text-white/60 leading-relaxed font-bold uppercase tracking-wider">
                  <span className="text-purple-400">YOUR CONFIGURATION REPORT:</span> Your pattern indicates you tend to Biology and calculations, active questions required next time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Style & Performance Best Row */}
        <section className="grid grid-cols-2 gap-8 mb-16">
          {/* Learning Style */}
          <div>
            <h3 className="text-lg font-bold font-space text-slate-900 dark:text-white mb-6">Your Learning Style</h3>
            
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-8 h-[220px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] pointer-events-none"></div>

              <div className="flex flex-wrap gap-3">
                {[
                  { id: 'visual', label: 'Visual Learner' },
                  { id: 'fast', label: 'Fast Learner' },
                  { id: 'practice', label: 'Practice Focused' }
                ].map((style) => {
                  const isActive = activeStyleTab === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() => setActiveStyleTab(style.id)}
                      className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider border transition-all ${
                        isActive 
                          ? 'border-purple-500 text-purple-400 bg-purple-500/5' 
                          : 'border-slate-200 dark:border-white/5 text-slate-500 dark:text-white/40 hover:text-slate-700 dark:text-white/80 hover:bg-white/[0.01]'
                      }`}
                    >
                      {style.label}
                    </button>
                  );
                })}
              </div>

              <div className="bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 p-4 rounded-2xl flex items-center gap-3">
                <Smile size={16} className="text-blue-400 shrink-0" />
                <p className="text-[10px] text-slate-600 dark:text-white/60 font-bold uppercase tracking-wider leading-relaxed">
                  You retain <span className="text-blue-400">22% better</span> after solving mock questions.
                </p>
              </div>
            </div>
          </div>

          {/* When You Perform Best */}
          <div>
            <h3 className="text-lg font-bold font-space text-slate-900 dark:text-white mb-6">When You Perform Best</h3>
            
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 h-[220px] flex flex-col justify-between shadow-2xl border-cyan-500/10">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#22D3EE] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse"></span> Peak Focus
                  </span>
                  <h4 className="text-2xl font-black font-space mt-2">6 PM – 8 PM</h4>
                </div>

                <div className="text-right">
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Weak Time</span>
                  <h4 className="text-lg font-black font-space mt-2 text-slate-600 dark:text-white/60">After 11 PM</h4>
                </div>
              </div>

              <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-white/40 border-t border-slate-200 dark:border-white/5 pt-4">
                Accuracy drops by <span className="text-red-400">32% after 11 PM</span>, try to avoid mock tests then.
              </div>
            </div>
          </div>
        </section>

        {/* Consistency Meter */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold font-space text-slate-900 dark:text-white">Consistency Meter</h3>
            <button className="px-4 py-2 border border-slate-300 dark:border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:bg-white/5 transition-all">
              Show past 30 days statistics
            </button>
          </div>

          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl">
            {/* Stats row */}
            <div className="grid grid-cols-4 gap-8 pb-8 border-b border-slate-200 dark:border-white/5 mb-8">
              {/* Streak */}
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Streak</span>
                <h4 className="text-3xl font-black font-space mt-2">18 <span className="text-sm font-bold text-white/30">/ 30</span></h4>
              </div>

              {/* Longest Streak */}
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Longest Streak</span>
                <h4 className="text-3xl font-black font-space mt-2 text-purple-400">5 Days</h4>
                <div className="w-24 h-1 bg-purple-500/20 rounded-full mt-2 overflow-hidden">
                  <div className="w-1/2 h-full bg-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Active Time */}
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Active Time</span>
                <h4 className="text-3xl font-black font-space mt-2">4</h4>
              </div>

              {/* Avg Session */}
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Avg Session</span>
                <h4 className="text-3xl font-black font-space mt-2">4.2 <span className="text-sm font-bold text-white/30">/ hr</span></h4>
              </div>
            </div>

            {/* Alert boxes */}
            <div className="grid grid-cols-2 gap-6">
              {/* Streak Break Preventer */}
              <div className="bg-purple-950/10 border border-purple-500/10 p-5 rounded-2xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Flame size={16} />
                </div>
                <div>
                  <h5 className="text-[9px] font-black uppercase tracking-widest text-purple-400 mb-1.5">Streak Break Preventer</h5>
                  <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-bold uppercase tracking-wider">
                    Your streak is about to break, solve 3 questions to save your streak. Good study habits are developed by constant study patterns.
                  </p>
                </div>
              </div>

              {/* Study Pattern Intensity */}
              <div className="bg-cyan-950/10 border border-cyan-500/10 p-5 rounded-2xl flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <h5 className="text-[9px] font-black uppercase tracking-widest text-cyan-400 mb-1.5">Study Pattern Intensity</h5>
                  <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-bold uppercase tracking-wider">
                    Also we found that you are studying more during evening session (6-8 PM) as compared to morning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call-To-Action Identity Card */}
        <section className="bg-gradient-to-r from-[#1E0E3D] via-[#0D0D0F] to-[#0D1D2D] border border-slate-300 dark:border-white/10 rounded-[40px] p-8 shadow-2xl flex items-center gap-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none transition-opacity group-hover:opacity-100 opacity-60"></div>
          
          {/* Avatar circle */}
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-1 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/10">
            <div className="w-full h-full rounded-full bg-slate-50 dark:bg-[#050505] flex items-center justify-center text-purple-400">
              <Zap size={36} fill="#A855F7" />
            </div>
            <span className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-slate-900 dark:text-white border-2 border-[#050505]">
              <Sparkles size={10} />
            </span>
          </div>

          <div className="flex-1">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-purple-400 mb-2 block">YOUR LEARNING IDENTITY</span>
            <h2 className="text-3xl font-black font-space text-white leading-tight">
              Fast Learner,<br />
              <span className="text-white/50">Needs More Discipline.</span>
            </h2>

            <div className="flex gap-4 mt-6">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-md transition-all hover:scale-[1.03]">
                Generate Study Path
              </button>
              <button className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                Full Report
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-6 border-t border-slate-200 dark:border-white/5 flex justify-between items-center text-slate-400 dark:text-slate-400 dark:text-white/20">
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Galactic Nexus</span>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Support</a>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest">© 2024 StudyAdda</span>
        </footer>
      </main>
    </div>
  );
};

export default Analytics;
