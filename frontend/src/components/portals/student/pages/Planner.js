import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  Sparkles, 
  BookOpen, 
  ArrowRight,
  Zap,
  Bookmark,
  CheckCircle,
  HelpCircle,
  Clock,
  Calendar,
  AlertTriangle,
  Trophy,
  Coins,
  Lightbulb
} from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-20' : 'left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-12 h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-12">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input 
            type="text" 
            placeholder="Search resources..." 
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

const Planner = ({ onNavigate, isSidebarCollapsed }) => {
  const [selectedDay, setSelectedDay] = React.useState('WED 18');

  const days = [
    { label: 'MON', num: '16', status: 'line' },
    { label: 'TUE', num: '17', status: 'double-line' },
    { label: 'WED', num: '18', status: 'active' },
    { label: 'THU', num: '19', status: 'none' },
    { label: 'FRI', num: '20', status: 'none' },
    { label: 'SAT', num: '21', status: 'none' },
    { label: 'SUN', num: '22', status: 'none' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-10%] left-[20%] w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"></div>
      </div>

      

      <main className="relative z-10 pt-6 pb-32 max-w-[1200px] mx-auto px-12">

        {/* Hero Section */}
        <section className="text-center mb-16 relative pt-6">
          <h1 className="text-5xl font-black font-space leading-[1.1] tracking-tight mb-4 uppercase">
            We've redefined your study<br />
            <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic font-black font-space pr-2">
              immersion experience
            </span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-white/40 font-bold uppercase tracking-widest">
            Optimized paths based on your cognitive load and upcoming deadlines.
          </p>
        </section>

        {/* Immersion Cards Grid */}
        <section className="grid grid-cols-2 gap-8 mb-6">
          {/* Physics Card */}
          <div className="bg-[#1C0F2C]/40 border border-purple-500/20 rounded-[32px] p-8 flex flex-col justify-between h-[300px] relative overflow-hidden group hover:border-purple-500/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div>
              <span className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-[#FF00BF]/10 text-[#FF00BF] border border-[#FF00BF]/20 w-fit block mb-6">
                High Priority
              </span>
              <h3 className="text-3xl font-black font-space mb-3 text-slate-900 dark:text-white uppercase">Physics</h3>
              <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wide max-w-md">
                Focus on Thermodynamics core principles. Analysis shows a <span className="text-[#FF00BF]">22% drop</span> in retention here.
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-[9px] font-black uppercase tracking-widest text-white/30 flex items-center gap-2">
                <Clock size={12} className="text-[#FF00BF]" /> 5:00 - 5:45 PM • Session I
              </span>
              <button className="bg-[#FF00BF] hover:bg-[#FF00BF]/80 text-slate-900 dark:text-white px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.25em] transition-all hover:scale-105 shadow-lg shadow-[#FF00BF]/20">
                Start Immersion
              </button>
            </div>
          </div>

          {/* Calculus II Card */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-8 flex flex-col justify-between h-[300px] group hover:border-slate-400 dark:border-white/20 transition-all duration-500">
            <div>
              <span className="text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/25 w-fit block mb-6">
                Important
              </span>
              <h3 className="text-3xl font-black font-space mb-3 text-slate-900 dark:text-white uppercase">Calculus II</h3>
              <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wide max-w-md">
                Advanced Integration techniques. <span className="text-purple-400">86 days</span> until JEE Main.
              </p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <span className="text-[9px] font-black uppercase tracking-widest text-white/30 flex items-center gap-2">
                <Clock size={12} className="text-purple-400" /> 6:00 - 6:45 PM • Session II
              </span>
              <button className="border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:border-white/20 hover:bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.25em] transition-all hover:scale-105">
                Continue Progress
              </button>
            </div>
          </div>
        </section>

        {/* English Literature Review Strip */}
        <section className="mb-12">
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex justify-between items-center hover:bg-white/[0.02] cursor-pointer group transition-all">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-white/40">
                <BookOpen size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white/90">English Literature Review</h4>
                <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mt-1">Offline study • 7:00 PM</p>
              </div>
            </div>
            <ArrowRight size={16} className="text-slate-500 dark:text-white/40 group-hover:text-slate-900 dark:text-white group-hover:translate-x-1 transition-all" />
          </div>
        </section>

        {/* Weekly Planner & Smart AI Plan Row */}
        <section className="grid grid-cols-12 gap-8 mb-12">
          {/* Weekly Planner Date Selector */}
          <div className="col-span-8">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="flex justify-between items-center mb-8">
                <h3 className="text-lg font-bold font-space text-slate-900 dark:text-white uppercase">Weekly Planner</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">October 16 - 22</span>
              </div>

              {/* Horizontal calendar day cards */}
              <div className="grid grid-cols-7 gap-3 mb-4">
                {days.map((day, idx) => {
                  const isActive = selectedDay === `${day.label} ${day.num}`;
                  return (
                    <div 
                      key={idx}
                      onClick={() => setSelectedDay(`${day.label} ${day.num}`)}
                      className={`flex flex-col items-center justify-center p-4 rounded-2xl border cursor-pointer transition-all duration-300 relative ${
                        isActive 
                          ? 'bg-purple-900/10 border-cyan-400 text-slate-900 dark:text-white shadow-lg' 
                          : 'bg-white dark:bg-[#050505]/40 border-slate-200 dark:border-white/5 text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white hover:border-slate-300 dark:border-white/10'
                      }`}
                    >
                      <span className="text-[8px] font-black uppercase tracking-wider mb-2">{day.label}</span>
                      <span className="text-lg font-black font-space">{day.num}</span>

                      {/* Day status indicator underlines */}
                      {day.status === 'line' && (
                        <div className="absolute bottom-2.5 w-6 h-0.5 bg-purple-500 rounded-full"></div>
                      )}
                      {day.status === 'double-line' && (
                        <div className="absolute bottom-2.5 flex flex-col gap-0.5">
                          <div className="w-6 h-0.5 bg-purple-500 rounded-full"></div>
                          <div className="w-6 h-0.5 bg-purple-500 rounded-full"></div>
                        </div>
                      )}
                      {day.status === 'active' && (
                        <div className="absolute bottom-2.5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Smart AI Plan Card */}
          <div className="col-span-4">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[40px] pointer-events-none"></div>

              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                    <Sparkles size={12} /> Smart AI Plan
                  </h3>
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Optimized Path</span>
                </div>
                
                <h4 className="font-bold text-sm tracking-tight text-white/90 uppercase mb-3">Why This Plan?</h4>
                <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wide">
                  "Because your Physics score is dropping and your test is in 2 days, we recommend 45 minutes of Physics daily to bridge the conceptual gap in Thermodynamics."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Goals & Streak Row */}
        <section className="grid grid-cols-12 gap-8 mb-12">
          {/* Academic Goal progress */}
          <div className="col-span-4 bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 hover:border-slate-300 dark:border-white/10 transition-all duration-300 flex flex-col justify-between h-[150px]">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Academic Goal</span>
              <h4 className="text-lg font-black font-space mt-2 text-slate-900 dark:text-white uppercase">Score above 80%</h4>
            </div>
            <div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mb-2">
                <div className="w-[68%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
              </div>
              <div className="flex justify-between items-center text-[9px] font-bold text-white/30 uppercase tracking-widest">
                <span>Current Progress</span>
                <span className="text-purple-400 font-extrabold">68% Done</span>
              </div>
            </div>
          </div>

          {/* Practice Target progress */}
          <div className="col-span-4 bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 hover:border-slate-300 dark:border-white/10 transition-all duration-300 flex flex-col justify-between h-[150px]">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Practice Target</span>
              <h4 className="text-lg font-black font-space mt-2 text-slate-900 dark:text-white uppercase">Complete 100 tests</h4>
            </div>
            <div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mb-2">
                <div className="w-[40%] h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
              <div className="flex justify-between items-center text-[9px] font-bold text-white/30 uppercase tracking-widest">
                <span>Current Progress</span>
                <span className="text-cyan-400 font-extrabold">40% Done</span>
              </div>
            </div>
          </div>

          {/* Streak Card */}
          <div className="col-span-4 bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 hover:border-slate-300 dark:border-white/10 transition-all duration-300 flex flex-col justify-between h-[150px] relative overflow-hidden">
            {/* Custom vector graphics outline inside streak card background */}
            <div className="absolute right-4 bottom-4 w-16 h-16 opacity-10 text-slate-900 dark:text-white pointer-events-none">
              <Zap size={64} />
            </div>

            <div className="flex gap-6">
              <div>
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Current Streak</span>
                <h4 className="text-2xl font-black font-space mt-1 text-[#FF00BF]">8 Days</h4>
              </div>
              <div>
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Longest Streak</span>
                <h4 className="text-2xl font-black font-space mt-1 text-slate-600 dark:text-white/60">14 Days</h4>
              </div>
            </div>
            
            <p className="text-[9px] font-bold text-white/50 leading-relaxed uppercase tracking-wider">
              You are just <span className="text-[#FF00BF]">2 days</span> away from your best streak.
            </p>
          </div>
        </section>

        {/* Missed Tasks & Exam Countdown Row */}
        <section className="grid grid-cols-2 gap-8 mb-12">
          {/* Missed Tasks Checklist */}
          <div>
            <h3 className="text-lg font-space font-bold text-slate-900 dark:text-white mb-6 uppercase">Missed Tasks</h3>
            
            <div className="space-y-4">
              {/* Task 1 */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex justify-between items-center hover:border-slate-300 dark:border-white/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                    <AlertTriangle size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/90">Biology Notes</h4>
                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mt-1">Yesterday's task</p>
                  </div>
                </div>
                <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all">
                  Reschedule for today
                </button>
              </div>

              {/* Task 2 */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex justify-between items-center hover:border-slate-300 dark:border-white/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400">
                    <AlertTriangle size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/90">Math Practice</h4>
                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mt-1">Mon, 10/16</p>
                  </div>
                </div>
                <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all">
                  Reschedule for today
                </button>
              </div>
            </div>
          </div>

          {/* Exam Countdown Cards */}
          <div>
            <h3 className="text-lg font-space font-bold text-slate-900 dark:text-white mb-6 uppercase">Exam Countdown</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {/* JEE Main countdown */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 h-[142px] flex flex-col justify-between hover:border-slate-300 dark:border-white/10 transition-all duration-300">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">JEE Main</span>
                  <h4 className="text-3xl font-black font-space mt-1 text-slate-900 dark:text-white">86 <span className="text-xs font-bold text-white/20 uppercase">Days</span></h4>
                </div>
                <span className="text-[8px] font-black tracking-widest text-[#BD6AFF] uppercase">Focus: Organic Chem</span>
              </div>

              {/* Physics Test countdown */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 h-[142px] flex flex-col justify-between hover:border-slate-300 dark:border-white/10 transition-all duration-300">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Physics Test</span>
                  <h4 className="text-3xl font-black font-space mt-1 text-slate-900 dark:text-white">4 <span className="text-xs font-bold text-white/20 uppercase">Days</span></h4>
                </div>
                <span className="text-[8px] font-black tracking-widest text-[#22D3EE] uppercase">Focus: Revision PYQ</span>
              </div>
            </div>
          </div>
        </section>

        {/* Rewards Quest Circular Layout */}
        <section className="mb-12">
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl flex items-center justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex items-center gap-8">
              {/* Circular Progress Gauge */}
              <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.02)" strokeWidth="6" fill="transparent" />
                  <circle 
                    cx="48" 
                    cy="48" 
                    r="40" 
                    stroke="#22D3EE" 
                    strokeWidth="6" 
                    fill="transparent" 
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 * (1 - 0.70)}
                  />
                </svg>
                <div className="absolute w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Trophy size={20} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-space font-bold text-slate-900 dark:text-white uppercase mb-2">Rewards Quest</h3>
                <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wide max-w-xl">
                  Complete today's plan to earn <span className="text-cyan-400">25 Nexus Coins</span>. You are <span className="text-[#22D3EE]">70%</span> towards your next rank badge!
                </p>
                
                <div className="flex gap-4 mt-4">
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#22D3EE]">
                    <Coins size={12} /> 1,248
                  </div>
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-purple-400">
                    <Trophy size={12} /> Elite II
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Study Insight */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#08182B] via-[#0D0D0F] to-[#0D0D0F] border border-cyan-500/20 rounded-[32px] p-8 shadow-2xl relative overflow-hidden flex items-start gap-6 hover:border-cyan-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
              <Lightbulb size={24} />
            </div>

            <div>
              <h3 className="text-lg font-space font-bold text-slate-900 dark:text-white uppercase mb-3">Your Study Insight</h3>
              <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-bold uppercase tracking-wide">
                "You are focusing well on concepts but missing revision consistency. Analysis of your last session shows a <span className="text-[#22D3EE]">22% drop</span> in retention after 48 hours. <span className="text-cyan-400 cursor-pointer hover:underline">Complete today's Physics revision</span> and attempt 15 practice questions to solidify your long-term memory."
              </p>
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

export default Planner;
