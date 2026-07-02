import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  ChevronDown, 
  Check, 
  Zap, 
  Calendar, 
  Clock, 
  Flame, 
  BarChart2, 
  ArrowRight,
  TrendingUp,
  Sliders,
  FileSpreadsheet
} from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-20' : 'left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-12 h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-12">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input 
            type="text" 
            placeholder="Search knowledge..." 
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

const DayIndicator = ({ day, status }) => {
  // status: 'checked' | 'active' | 'empty'
  return (
    <div className="flex flex-col items-center gap-4 flex-1">
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">{day}</span>
      {status === 'checked' && (
        <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-lg shadow-purple-500/5 hover:scale-105 transition-transform">
          <Check size={16} strokeWidth={3} />
        </div>
      )}
      {status === 'active' && (
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-slate-900 dark:text-white shadow-xl shadow-purple-500/25 relative animate-pulse scale-110">
          <span className="absolute inset-0 bg-purple-500/30 rounded-full animate-ping"></span>
          <Zap size={16} fill="white" />
        </div>
      )}
      {status === 'empty' && (
        <div className="w-12 h-12 rounded-full bg-white/[0.02] border border-slate-200 dark:border-white/5 flex items-center justify-center text-white/20 hover:border-slate-300 dark:border-white/10 hover:bg-white/[0.04] transition-all">
          <div className="w-3 h-3 rounded-full border border-slate-400 dark:border-white/20"></div>
        </div>
      )}
    </div>
  );
};

const SubjectAttendanceCard = ({ subject, percentage, instructor, colorClass, barWidth }) => {
  const isHigh = percentage >= 90;
  const isMed = percentage >= 80 && percentage < 90;
  const percentColor = isHigh ? 'text-[#22D3EE]' : isMed ? 'text-[#C59AFF]' : 'text-[#F76171]';

  return (
    <div className="bg-white dark:bg-[#0D0D0F]/60 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between group hover:border-slate-300 dark:border-white/10 transition-all duration-300">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-sm tracking-tight text-white/90 uppercase">{subject}</h4>
          <span className={`text-sm font-black font-space ${percentColor}`}>{percentage}%</span>
        </div>
        <p className="text-[10px] text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider mb-6">{instructor}</p>
      </div>
      
      <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${colorClass}`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

const Attendance = ({ onNavigate, isSidebarCollapsed }) => {
  const [trendTab, setTrendTab] = React.useState('weekly');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-15%] right-[-10%] w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"></div>
      </div>

      

      <main className="relative z-10 pt-6 pb-32 max-w-[1440px] mx-auto px-[80px]">

        {/* Hero Section */}
        <section className="text-center mb-28 relative pt-12">
          {/* Concentric Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] border border-purple-500/5 rounded-full pointer-events-none z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] border border-blue-500/5 rounded-full pointer-events-none z-0"></div>

          <div className="relative z-10">
            <h1 className="text-5xl font-black font-space leading-[1.1] tracking-tight mb-8">
              Track Your Attendance<br />
              <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic font-black font-space pr-2">
                Effortlessly
              </span>
            </h1>
            
            <p className="text-sm text-slate-500 dark:text-white/40 max-w-[550px] mx-auto leading-relaxed mb-10 font-medium">
              Monitor your academic journey with precision. Visualize your presence across subjects with our ethereal tracking engine.
            </p>

            <div className="flex justify-center gap-6">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-slate-900 dark:text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-purple-500/10 transition-all">
                View Details
              </button>
              <button className="border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:bg-white/5 hover:border-slate-400 dark:border-white/20 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all">
                Export Report
              </button>
            </div>
          </div>
        </section>

        {/* Weekly Momentum Row */}
        <section className="mb-20">
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-xl font-bold font-space text-slate-900 dark:text-white mb-2">Weekly Momentum</h3>
                <p className="text-xs text-slate-500 dark:text-white/40 font-medium">You haven't missed a day this week. Keep it up!</p>
              </div>
              
              <div className="flex items-center gap-2 bg-[#FF5722]/10 border border-[#FF5722]/20 text-[#FF5722] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider shadow-lg shadow-[#FF5722]/5">
                <Flame size={14} className="fill-[#FF5722]" />
                7 Day Streak
              </div>
            </div>

            <div className="flex justify-between items-center gap-2 bg-black/20 border border-slate-200 dark:border-white/5 p-8 rounded-3xl">
              <DayIndicator day="Mon" status="checked" />
              <DayIndicator day="Tue" status="checked" />
              <DayIndicator day="Wed" status="active" />
              <DayIndicator day="Thu" status="checked" />
              <DayIndicator day="Fri" status="checked" />
              <DayIndicator day="Sat" status="empty" />
              <DayIndicator day="Sun" status="empty" />
            </div>
          </div>
        </section>

        {/* Attendance Main stats section */}
        <section className="grid grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: Overall Presence circular rating */}
          <div className="col-span-4 bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 flex flex-col justify-between items-center shadow-2xl relative overflow-hidden h-[420px]">
            <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-[50px] pointer-events-none"></div>
            
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-white/40 self-start mb-6">Overall Presence</h3>

            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Radial gradient SVG progress circle */}
              <svg className="w-full h-full transform rotate-[-90deg]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="6" fill="transparent" />
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="url(#radialGradient)" 
                  strokeWidth="7" 
                  fill="transparent" 
                  strokeDasharray="251.2" 
                  strokeDashoffset={251.2 * (1 - 0.94)} 
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="radialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22D3EE" />
                    <stop offset="100%" stopColor="#7545F0" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black font-space text-slate-900 dark:text-white tracking-tighter">94%</span>
                <span className="text-[9px] font-bold text-[#10B981] uppercase tracking-widest mt-1">Target Met</span>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 border-t border-slate-200 dark:border-white/5 pt-6 mt-6">
              <div className="text-center border-r border-slate-200 dark:border-white/5">
                <span className="text-2xl font-black font-space text-[#22D3EE]">186</span>
                <p className="text-[9px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest mt-1">Present</p>
              </div>
              <div className="text-center">
                <span className="text-2xl font-black font-space text-[#F76171]">12</span>
                <p className="text-[9px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest mt-1">Absent</p>
              </div>
            </div>
          </div>

          {/* Right Column: Subject-wise grid */}
          <div className="col-span-8 flex flex-col justify-between h-[420px]">
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-xl font-bold font-space text-slate-900 dark:text-white tracking-tight">Subject-wise Attendance</h3>
              <a href="#" className="text-xs font-black uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors">See Schedule</a>
            </div>

            <div className="grid grid-cols-2 gap-6 flex-1">
              <SubjectAttendanceCard 
                subject="Quantum Physics" 
                percentage={98} 
                instructor="Lec: Dr. Anis Therese" 
                colorClass="bg-[#22D3EE]" 
              />
              <SubjectAttendanceCard 
                subject="Biology" 
                percentage={82} 
                instructor="Lab: Prof. Elene" 
                colorClass="bg-[#C59AFF]" 
              />
              <SubjectAttendanceCard 
                subject="Mathematics" 
                percentage={71} 
                instructor="Sem: Alan Turing Inst." 
                colorClass="bg-[#F76171]" 
              />
              <SubjectAttendanceCard 
                subject="Chemistry" 
                percentage={95} 
                instructor="Lec: Satoshi Hall" 
                colorClass="bg-[#22D3EE]" 
              />
            </div>
          </div>

        </section>

        {/* Attendance Trends (Line chart visualization) */}
        <section className="mb-20">
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[90px] pointer-events-none"></div>

            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-xl font-bold font-space text-slate-900 dark:text-white mb-2">Attendance Trends</h3>
                <p className="text-xs text-slate-500 dark:text-white/40 font-medium">Predictive analytics based on your current engagement levels.</p>
              </div>
              
              <div className="flex bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 p-1 rounded-xl">
                {['weekly', 'monthly', 'semester'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setTrendTab(tab)}
                    className={`px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${
                      trendTab === tab 
                        ? 'bg-purple-600 text-slate-900 dark:text-white shadow-lg' 
                        : 'text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom SVG Line Chart with glow effects and grid */}
            <div className="w-full h-64 relative mt-6">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 240">
                {/* Defs for gradients and glow filters */}
                <defs>
                  <linearGradient id="chartLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7545F0" />
                    <stop offset="50%" stopColor="#C59AFF" />
                    <stop offset="100%" stopColor="#22D3EE" />
                  </linearGradient>
                  
                  <linearGradient id="chartFillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(34, 211, 238, 0.15)" />
                    <stop offset="100%" stopColor="rgba(117, 69, 240, 0)" />
                  </linearGradient>
                  
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Grid Lines */}
                <line x1="0" y1="40" x2="1000" y2="40" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
                <line x1="0" y1="100" x2="1000" y2="100" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
                <line x1="0" y1="160" x2="1000" y2="160" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
                <line x1="0" y1="220" x2="1000" y2="220" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />

                {/* Filled Area under the curve */}
                <path 
                  d="M 50 180 C 180 180, 220 150, 350 150 C 480 150, 520 110, 650 110 C 780 110, 820 90, 950 90 L 950 220 L 50 220 Z" 
                  fill="url(#chartFillGradient)" 
                />

                {/* Smooth Bezier Line Path */}
                <path 
                  d="M 50 180 C 180 180, 220 150, 350 150 C 480 150, 520 110, 650 110 C 780 110, 820 90, 950 90" 
                  fill="none" 
                  stroke="url(#chartLineGradient)" 
                  strokeWidth="3.5" 
                  filter="url(#glow)"
                  className="transition-all duration-700"
                />

                {/* Glowing coordinate nodes */}
                {/* Node at WK 2 */}
                <circle cx="350" cy="150" r="6" fill="#22D3EE" className="animate-pulse shadow-lg" />
                <circle cx="350" cy="150" r="12" fill="none" stroke="#22D3EE" strokeWidth="1.5" className="animate-ping opacity-45" />

                {/* Node at WK 4 */}
                <circle cx="650" cy="110" r="6" fill="#C59AFF" className="animate-pulse shadow-lg" />
                <circle cx="650" cy="110" r="12" fill="none" stroke="#C59AFF" strokeWidth="1.5" className="animate-ping opacity-45" />
              </svg>

              {/* Time Label Row */}
              <div className="absolute bottom-[-24px] left-0 w-full flex justify-between px-10 text-[9px] font-black uppercase tracking-[0.2em] text-white/30">
                <span>WK 1</span>
                <span>WK 2</span>
                <span>WK 3</span>
                <span>WK 4</span>
                <span>WK 5</span>
                <span>WK 6</span>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Footer */}
        <footer className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col gap-20">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold tracking-tight text-slate-500 dark:text-white/40">The Study Portal</h2>
            <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-[#444444]">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Support</a>
            </div>
            <div className="text-[10px] font-bold text-[#444444] uppercase tracking-widest">
              © 2024 The Galactic Nexus. Engineered for the Future of Learning.
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default Attendance;
