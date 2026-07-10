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
  // status: 'checked' | 'active' | 'empty' | 'broken'
  return (
    <div className="flex flex-col items-center gap-3 md:gap-4 flex-shrink-0 md:flex-1 min-w-[50px] md:min-w-0">
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">{day}</span>
      {status === 'checked' && (
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 hover:scale-105 transition-transform">
          <Check strokeWidth={3} className="w-4 h-4 md:w-[16px] md:h-[16px]" />
        </div>
      )}
      {status === 'active' && (
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-xl shadow-purple-500/25 relative animate-pulse scale-110">
          <span className="absolute inset-0 bg-purple-500/30 rounded-full animate-ping"></span>
          <Zap fill="white" className="w-4 h-4 md:w-[16px] md:h-[16px]" />
        </div>
      )}
      {status === 'broken' && (
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 dark:bg-[#1a1025] border border-slate-300 dark:border-white/10 flex items-center justify-center hover:scale-105 transition-transform">
          <img src="/images/attendence/brocken heart momentum.png" alt="missed" className="w-5 h-5 md:w-7 md:h-7 object-contain" />
        </div>
      )}
      {status === 'empty' && (
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 dark:bg-white/[0.02] border border-slate-300 dark:border-white/10 flex items-center justify-center transition-all">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-slate-400 dark:border-white/20"></div>
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
        <div className="flex justify-between items-start gap-2 mb-2">
          <h4 className="font-bold text-sm tracking-tight text-white/90 uppercase pr-2">{subject}</h4>
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



      <main className="relative z-10 pt-0 pb-8 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">

        {/* Hero Section */}
        <section className="text-center mb-16 md:mb-28 relative pt-4 md:pt-10">
          <div className="relative z-10">
            <h1 className="text-[32px] sm:text-5xl md:text-[96px] font-bold tracking-tight mb-4 md:mb-6 leading-[1.2] md:leading-[1.1]" style={{ fontFamily: '"Organetto", sans-serif' }}>
              Track Your Attendance<br className="hidden md:block" />
              <span className="text-slate-500 dark:text-[#888888]"> Effortlessly.</span>
            </h1>

            <p className="text-slate-500 dark:text-white/40 text-xs sm:text-sm md:text-[15px] font-medium tracking-wide max-w-[480px] mx-auto mb-8 md:mb-10 px-2 md:px-0 leading-relaxed">
              Monitor your academic journey with precision. Visualize your presence across subjects with our ethereal tracking engine.
            </p>

            <div className="relative z-20 flex flex-row justify-center gap-3 md:gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-5 md:px-8 py-3 md:py-3.5 rounded-full text-[11px] md:text-[13px] font-bold shadow-lg shadow-purple-500/20 transition-all hover:scale-105 whitespace-nowrap flex-1 sm:flex-none max-w-[140px] md:max-w-none">
                View Details
              </button>
              <button className="border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 bg-white/5 text-slate-700 dark:text-white/80 px-5 md:px-8 py-3 md:py-3.5 rounded-full text-[11px] md:text-[13px] font-bold transition-all hover:scale-105 whitespace-nowrap flex-1 sm:flex-none max-w-[140px] md:max-w-none">
                Export Report
              </button>
            </div>
          </div>
        </section>

        {/* Background Curve SVG — same as Analytics page */}
        <div className="relative w-full flex justify-center mt-[-750px] md:mt-[-800px] z-[-1] pointer-events-none">
          <img
            src="/images/common/1.svg"
            alt="Background curve"
            className="w-[1536px] max-w-none opacity-60 mix-blend-screen"
          />
        </div>

        {/* Weekly Momentum Row */}
        <section className="mb-8 mt-12">
          <div className="bg-white dark:bg-[#0D0A14] border border-slate-200 dark:border-white/5 rounded-[24px] md:rounded-[32px] p-5 md:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex justify-between items-center mb-6 md:mb-8 gap-4">
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-tight">Weekly<br className="block md:hidden"/> Momentum</h3>
              <div className="flex items-center gap-1.5 md:gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-300 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[10px] md:text-[11px] font-bold shrink-0">
                <img src="/images/attendence/des_Icon.png" alt="streak" className="w-3 h-3 md:w-4 md:h-4 object-contain" />
                Streak Restored
              </div>
            </div>

            <div className="flex justify-between items-center gap-3 md:gap-2 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/5 p-4 md:p-6 rounded-2xl overflow-x-auto w-full" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style dangerouslySetInnerHTML={{ __html: `
                .overflow-x-auto::-webkit-scrollbar { display: none; }
              ` }} />
              <DayIndicator day="Mon" status="checked" />
              <DayIndicator day="Tue" status="broken" />
              <DayIndicator day="Wed" status="checked" />
              <DayIndicator day="Thu" status="empty" />
              <DayIndicator day="Fri" status="empty" />
              <DayIndicator day="Sat" status="empty" />
              <DayIndicator day="Sun" status="empty" />
            </div>
          </div>
        </section>

        {/* Streak Broken Challenge Card */}
        <section className="mb-8 md:mb-20">
          <div className="bg-white dark:bg-[#0D0A14] border border-slate-200 dark:border-white/5 rounded-[24px] md:rounded-[32px] p-5 sm:p-6 md:p-8 shadow-xl dark:shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600/5 rounded-full blur-[60px] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5 md:gap-6 relative z-10">
              {/* Broken heart icon box */}
              <div className="relative flex-shrink-0">
                <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-slate-100 dark:bg-[#1a1025] border border-slate-200 dark:border-white/10 rounded-2xl flex items-center justify-center">
                  <img src="/images/attendence/brocken heart.png" alt="Broken streak" className="w-8 h-8 md:w-10 md:h-10 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(7480%) hue-rotate(1deg) brightness(102%) contrast(112%)' }} />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFB4AB' }}>
                  <img src="/images/attendence/des_Icon.png" alt="alert" className="w-3 h-3 md:w-3.5 md:h-3.5 object-contain" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-1">
                  Streak Broken <img src="/images/attendence/brocken heart.png" alt="💔" className="inline w-5 h-5 md:w-6 md:h-6 object-contain align-middle" style={{ filter: 'brightness(0) saturate(100%) invert(18%) sepia(96%) saturate(7480%) hue-rotate(1deg) brightness(102%) contrast(112%)' }} />
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-white/40 font-medium mb-5">You missed a day, but you can restore your streak.</p>

                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-purple-500 dark:text-purple-400 mb-4 block">Restore your streak by completing a challenge</span>

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 sm:gap-6 mb-4 w-full">
                  <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-snug max-w-[320px] text-center sm:text-left">
                    Solve 10 questions from Physics Numericals (Hard)
                  </h4>
                  <div className="text-center sm:text-right flex-shrink-0">
                    <span className="text-xs md:text-sm font-bold text-slate-900 dark:text-white">7 / 10 Questions</span><br />
                    <span className="text-[10px] md:text-xs text-slate-500 dark:text-white/40">Completed</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden mb-6">
                  <div className="h-full w-[70%] bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"></div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-4 w-full">
                  <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all hover:scale-105 shadow-lg shadow-purple-500/20">
                    <ArrowRight size={14} />
                    Continue Challenge
                  </button>
                  <button className="w-full sm:w-auto border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attendance Main stats section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-20">

          {/* Left Column: Overall Presence circular rating */}
          <div className="col-span-1 md:col-span-4 bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col justify-between items-center shadow-2xl relative overflow-hidden h-auto md:h-[420px] mb-8 md:mb-0">
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
          <div className="col-span-1 md:col-span-8 flex flex-col justify-between h-auto md:h-[420px]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0 mb-6">
              <h3 className="text-xl font-bold font-space text-slate-900 dark:text-white tracking-tight">Subject-wise Attendance</h3>
              <a href="#" className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors">See Schedule</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 flex-1">
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
        <section className="mb-4">
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[24px] md:rounded-[40px] p-5 sm:p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[90px] pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 lg:gap-0 mb-4 md:mb-10 w-full">
              <div>
                <h3 className="text-xl font-bold font-space text-slate-900 dark:text-white mb-2">Attendance Trends</h3>
                <p className="text-xs text-slate-500 dark:text-white/40 font-medium max-w-sm">Predictive analytics based on your current engagement levels.</p>
              </div>

              <div className="flex bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 p-1 rounded-xl w-full sm:w-auto justify-between sm:justify-start">
                {['weekly', 'monthly', 'semester'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setTrendTab(tab)}
                    className={`px-3 sm:px-4 py-2 sm:py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all flex-1 sm:flex-none text-center ${trendTab === tab
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
            <div className="w-full h-24 sm:h-40 md:h-64 relative mt-2 md:mt-8">
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
                <line x1="0" y1="40" x2="1000" y2="40" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" className="text-slate-900 dark:text-white" />
                <line x1="0" y1="100" x2="1000" y2="100" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" className="text-slate-900 dark:text-white" />
                <line x1="0" y1="160" x2="1000" y2="160" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" className="text-slate-900 dark:text-white" />
                <line x1="0" y1="220" x2="1000" y2="220" stroke="currentColor" strokeOpacity="0.05" strokeWidth="1" className="text-slate-900 dark:text-white" />

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
              <div className="absolute -bottom-4 md:bottom-[-24px] left-0 w-full flex justify-between px-2 sm:px-10 text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-slate-400 dark:text-white/30">
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



      </main>
    </div>
  );
};

export default Attendance;
