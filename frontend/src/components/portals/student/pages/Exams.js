import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  ChevronDown, 
  Play, 
  Calendar, 
  Clock, 
  Zap, 
  Compass, 
  Layers, 
  FileText, 
  BookOpen, 
  Calculator, 
  ArrowRight, 
  Flame,
  CheckCircle,
  HelpCircle,
  Activity,
  LayoutGrid,
  Monitor
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



const CategoryTab = ({ icon: Icon, label, active, colorClass }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-4 p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
      active 
        ? 'bg-purple-900/10 border-purple-500/30 text-slate-900 dark:text-white shadow-lg shadow-purple-500/5' 
        : 'bg-white dark:bg-[#0D0D0F]/40 border-slate-200 dark:border-white/5 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:text-white hover:border-slate-300 dark:border-white/10 hover:bg-white dark:bg-[#0D0D0F]'
    } w-full`}>
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colorClass}`}>
        <Icon size={22} />
      </div>
      <span className="text-xs font-bold tracking-wider">{label}</span>
    </div>
  );
};

const ChallengeCard = ({ subject, difficulty, title, chapter, questions, time, badgeColor, difficultyColor }) => {
  return (
    <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[32px] p-8 flex flex-col justify-between group hover:border-purple-500/20 transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-md border ${badgeColor}`}>
            {subject}
          </span>
          <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-md border ${difficultyColor}`}>
            {difficulty}
          </span>
        </div>
        
        <h4 className="text-2xl font-bold font-space text-slate-900 dark:text-white mb-2 group-hover:text-purple-400 transition-colors">
          {title}
        </h4>
        <p className="text-xs text-slate-500 dark:text-white/40 font-medium mb-8 uppercase tracking-wider">{chapter}</p>
      </div>

      <div>
        <div className="flex items-center gap-6 text-[11px] font-bold text-slate-600 dark:text-white/60 uppercase tracking-widest mb-6">
          <div className="flex items-center gap-2">
            <FileText size={14} className="text-purple-400" />
            <span>{questions}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-purple-400" />
            <span>{time}</span>
          </div>
        </div>

        <button className="w-full py-3.5 bg-slate-100 dark:bg-white/5 hover:bg-purple-600 border border-slate-300 dark:border-white/10 hover:border-purple-500 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] text-slate-700 dark:text-white/80 hover:text-slate-900 dark:text-white transition-all">
          Begin Challenge
        </button>
      </div>
    </div>
  );
};

const PriorityCard = ({ title, active, badge, time, duration, syllabus, difficulty, icon: Icon, iconBg }) => {
  return (
    <div className={`border rounded-[32px] p-8 flex flex-col justify-between transition-all duration-500 relative overflow-hidden ${
      active 
        ? 'bg-gradient-to-b from-[#1C0D35] to-[#0D0D0F] border-purple-500/30 shadow-2xl shadow-purple-500/5' 
        : 'bg-white dark:bg-[#0D0D0F] border-slate-200 dark:border-white/5 hover:border-slate-300 dark:border-white/10'
    }`}>
      {active && (
        <div className="absolute top-0 right-0 w-56 h-56 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      )}
      
      <div>
        <div className="flex justify-between items-center mb-8">
          <span className={`text-[9px] font-black uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full flex items-center gap-1.5 ${
            active 
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/20' 
              : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-white/40 border border-slate-200 dark:border-white/5'
          }`}>
            {active && <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping shadow-[0_0_8px_#A855F7]"></span>}
            {badge}
          </span>
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${iconBg}`}>
            <Icon size={16} />
          </div>
        </div>

        <h4 className="text-2xl font-bold font-space text-slate-900 dark:text-white mb-6">{title}</h4>

        <div className="space-y-4 mb-8">
          {time && (
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider">Date & Time</span>
              <span className="font-bold text-slate-700 dark:text-white/80">{time}</span>
            </div>
          )}
          {duration && (
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider">Duration</span>
              <span className="font-bold text-slate-700 dark:text-white/80">{duration}</span>
            </div>
          )}
          {difficulty && (
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider">Difficulty</span>
              <span className="font-black text-[#F76171] uppercase tracking-widest">{difficulty}</span>
            </div>
          )}
          {syllabus && (
            <div className="flex flex-col gap-1.5 pt-2 text-xs">
              <span className="text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider">Syllabus</span>
              <span className="font-medium text-slate-700 dark:text-white/80 leading-relaxed bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 p-3 rounded-xl">{syllabus}</span>
            </div>
          )}
        </div>
      </div>

      <div>
        {active ? (
          <div className="space-y-4">
            <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-slate-900 dark:text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] transition-all shadow-lg shadow-purple-500/20">
              START EXAM
            </button>
            <div className="flex justify-center gap-6 text-[9px] font-black uppercase tracking-widest text-white/30 pt-1">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors border-b border-slate-300 dark:border-white/10 hover:border-white pb-0.5">Syllabus</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors border-b border-slate-300 dark:border-white/10 hover:border-white pb-0.5">Past Yrs</a>
            </div>
          </div>
        ) : (
          <button className="w-full py-4 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] text-slate-900 dark:text-white transition-all">
            VIEW DETAILS
          </button>
        )}
      </div>
    </div>
  );
};

const PerformanceRow = ({ testName, score, date, value, status, statusColor, barColor }) => {
  return (
    <tr className="border-b border-slate-200 dark:border-white/5 hover:bg-white/[0.02] transition-colors">
      <td className="py-6 pl-8 font-bold text-sm text-slate-700 dark:text-white/80">{testName}</td>
      <td className={`py-6 font-black font-space text-base ${statusColor}`}>{score}</td>
      <td className="py-6 text-xs text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider">{date}</td>
      <td className="py-6">
        <div className="flex items-center gap-4">
          <div className="w-32 h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${barColor}`} style={{ width: `${value}%` }}></div>
          </div>
          <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${statusColor} bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5`}>
            {status}
          </span>
        </div>
      </td>
      <td className="py-6 pr-8 text-right">
        <button className="text-xs font-black uppercase tracking-widest text-[#3B82F6] hover:text-blue-400 transition-colors">
          Retake
        </button>
      </td>
    </tr>
  );
};

const ExamInstructionCard = ({ icon: Icon, title, description, iconColor }) => {
  return (
    <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[32px] p-8 flex items-center justify-between group hover:border-white/15 cursor-pointer transition-all duration-300">
      <div className="flex items-center gap-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 ${iconColor}`}>
          <Icon size={24} />
        </div>
        <div>
          <h4 className="font-bold text-base mb-1 tracking-tight text-slate-900 dark:text-white">{title}</h4>
          <p className="text-xs text-slate-500 dark:text-white/40 font-medium">{description}</p>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-white/40 group-hover:text-slate-900 dark:text-white group-hover:bg-slate-200 dark:bg-white/10 transition-all">
        <ArrowRight size={18} />
      </div>
    </div>
  );
};

const Exams = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Glow Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-10%] left-[20%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute top-[30%] right-[-10%] w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[140px]"></div>
      </div>

      

      <main className="relative z-10 pt-6 pb-32 max-w-[1440px] mx-auto px-[80px]">

        {/* Hero Section */}
        <section className="text-center mb-28 relative pt-12">
          {/* Floating Badges */}
          <div className="absolute left-10 top-0 w-16 h-16 bg-gradient-to-br from-[#7545F0] to-[#8463D7] rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20 rotate-[-12deg] animate-float z-20">
            <FileText size={28} className="text-slate-900 dark:text-white" />
          </div>
          <div className="absolute right-12 top-6 w-16 h-16 bg-gradient-to-br from-[#25CCF4] to-[#5580E9] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 rotate-[15deg] animate-float [animation-delay:2s] z-20">
            <Calculator size={28} className="text-slate-900 dark:text-white" />
          </div>
          <div className="absolute left-20 bottom-0 w-16 h-16 bg-gradient-to-br from-[#F43F5E] to-[#E11D48] rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/20 rotate-[8deg] animate-float [animation-delay:4s] z-20">
            <BookOpen size={28} className="text-slate-900 dark:text-white" />
          </div>

          <h1 className="text-5xl font-black font-space leading-[1.1] tracking-tight mb-8">
            The Next Generation of<br />
            <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic font-black font-space pr-2">
              Smart Exams
            </span>
          </h1>

          <div className="flex justify-center items-center gap-4 mb-10 flex-wrap">
            <div className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-white/80 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full shadow-[0_0_8px_#10B981] animate-pulse"></span>
              24/7 Students
            </div>
            <div className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-white/80 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-[#22D3EE] rounded-full shadow-[0_0_8px_#22D3EE] animate-pulse"></span>
              98% Accuracy
            </div>
            <div className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-700 dark:text-white/80 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full shadow-[0_0_8px_#A855F7] animate-pulse"></span>
              AI Evaluation System
            </div>
          </div>

          <div className="flex flex-col items-center gap-12">
            <button className="bg-[#111216]/60 border border-purple-500/30 hover:bg-purple-600 hover:border-purple-500 text-slate-900 dark:text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3 transition-all duration-300 shadow-xl group">
              <Play size={12} className="fill-white text-slate-900 dark:text-white group-hover:scale-110 transition-transform" />
              Start Test
            </button>
            <button className="w-10 h-10 border border-slate-300 dark:border-white/10 rounded-full flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white hover:border-white/30 transition-all">
              <ChevronDown size={18} />
            </button>
          </div>
        </section>

        {/* Category Grid Section */}
        <section className="mb-28 max-w-[1000px] mx-auto">
          <div className="bg-white dark:bg-[#09090B]/60 backdrop-blur-xl border border-slate-200 dark:border-white/5 p-4 rounded-[40px] shadow-2xl flex gap-4">
            <CategoryTab icon={FileText} label="MCQ Test" active colorClass="bg-purple-500/10 text-purple-400" />
            <CategoryTab icon={Compass} label="Subject-wise" colorClass="bg-blue-500/10 text-blue-400" />
            <CategoryTab icon={Layers} label="Chapter Test" colorClass="bg-pink-500/10 text-pink-400" />
            <CategoryTab icon={Zap} label="Subtopic Quiz" colorClass="bg-purple-500/10 text-purple-400" />
          </div>
        </section>

        {/* Ongoing Challenges Section */}
        <section className="mb-28">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold font-space text-slate-900 dark:text-white mb-2 tracking-tight">Ongoing Challenges</h2>
              <p className="text-sm text-slate-500 dark:text-white/40 font-medium">Master your curriculum with our precision-engineered assessment modules.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#25CCF4] hover:text-blue-400 transition-colors">
              View All
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <ChallengeCard 
              subject="Physics"
              difficulty="Class X"
              title="Quantum Mechanics"
              chapter="Chapter 6: Wave-Particle Duality"
              questions="20 MCQs"
              time="45 Mins"
              badgeColor="text-[#25CCF4] border-[#25CCF4]/20 bg-[#25CCF4]/5"
              difficultyColor="text-slate-500 dark:text-white/40 border-slate-200 dark:border-white/5 bg-white/[0.02]"
            />
            <ChallengeCard 
              subject="Chemistry"
              difficulty="Medium"
              title="Organic Synthesis"
              chapter="Chapter 12: Carbon Compounds"
              questions="25 MCQs"
              time="60 Mins"
              badgeColor="text-[#37DBAD] border-[#37DBAD]/20 bg-[#37DBAD]/5"
              difficultyColor="text-slate-500 dark:text-white/40 border-slate-200 dark:border-white/5 bg-white/[0.02]"
            />
            <ChallengeCard 
              subject="Mathematics"
              difficulty="Easy"
              title="Vector Calculus"
              chapter="Chapter 7: Flux & Divergence"
              questions="15 MCQs"
              time="30 Mins"
              badgeColor="text-[#A855F7] border-[#A855F7]/20 bg-[#A855F7]/5"
              difficultyColor="text-slate-500 dark:text-white/40 border-slate-200 dark:border-white/5 bg-white/[0.02]"
            />
          </div>
        </section>

        {/* Priority Assessments Section */}
        <section className="mb-28">
          <div className="flex justify-between items-end mb-12">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#A855F7] rounded-full"></div>
              <h2 className="text-3xl font-bold font-space text-slate-900 dark:text-white tracking-tight">Priority Assessments</h2>
            </div>
            <a href="#" className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors">
              View Calendar
              <Calendar size={14} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <PriorityCard 
              title="Physics Final"
              active={true}
              badge="Starting Now"
              time="15 April, 7:00 PM"
              duration="180 Minutes"
              difficulty="Hardcore"
              syllabus="Electricity + Magnetism (Module IV-IX)"
              icon={Zap}
              iconBg="bg-purple-500/10 text-purple-400"
            />
            <PriorityCard 
              title="Organic Chemistry"
              badge="15 Apr"
              time="10:30 AM"
              duration="90 Min"
              syllabus="Hydrocarbons + Ethers"
              icon={Layers}
              iconBg="bg-blue-500/10 text-blue-400"
            />
            <PriorityCard 
              title="Calculus III"
              badge="16 Apr"
              time="2:00 PM"
              duration="120 Min"
              syllabus="Multivariable Int."
              icon={Clock}
              iconBg="bg-red-500/10 text-red-400"
            />
          </div>
        </section>

        {/* Performance History Section */}
        <section className="mb-28">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1.5 h-6 bg-[#25CCF4] rounded-full"></div>
            <h2 className="text-3xl font-bold font-space text-slate-900 dark:text-white tracking-tight">Performance History</h2>
          </div>

          <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] overflow-hidden shadow-2xl">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/5 bg-white/[0.01] text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                  <th className="py-6 pl-8 font-black">Test Name</th>
                  <th className="py-6 font-black">Score</th>
                  <th className="py-6 font-black">Date</th>
                  <th className="py-6 font-black">Analysis</th>
                  <th className="py-6 pr-8 text-right font-black">Action</th>
                </tr>
              </thead>
              <tbody>
                <PerformanceRow 
                  testName="Macroeconomics Mock #1"
                  score="90/100"
                  date="20 Apr 2024"
                  value={90}
                  status="Elite"
                  statusColor="text-[#7545F0]"
                  barColor="bg-[#7545F0]"
                />
                <PerformanceRow 
                  testName="Thermodynamics Quiz"
                  score="78/100"
                  date="09 Apr 2024"
                  value={78}
                  status="Stable"
                  statusColor="text-[#25CCF4]"
                  barColor="bg-[#25CCF4]"
                />
                <PerformanceRow 
                  testName="Wave Optics Test"
                  score="64/100"
                  date="28 Mar 2024"
                  value={64}
                  status="Critical"
                  statusColor="text-[#F76171]"
                  barColor="bg-[#F76171]"
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* Arena Intelligence Insight Card */}
        <section className="mb-28">
          <div className="bg-gradient-to-r from-[#1A0B2E] via-[#0D0D0F] to-[#0D0D0F] border border-pink-500/20 rounded-[40px] p-10 flex items-center justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[600px] h-full bg-pink-500/5 blur-[100px] pointer-events-none"></div>
            
            <div className="flex items-center gap-8 relative z-10">
              <div className="w-14 h-14 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500 shadow-2xl relative shrink-0">
                <span className="absolute inset-0 bg-pink-500/20 rounded-2xl animate-ping opacity-60"></span>
                <Activity size={28} />
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500 mb-2 font-space">Arena Intelligence Insight</h5>
                <p className="text-sm font-bold text-white/70 max-w-[650px] leading-relaxed">
                  You are attempting tests regularly but <span className="text-slate-900 dark:text-white">struggling in Physics</span>. Revise Electricity and attempt another mock test tomorrow to stabilize your trajectory.
                </p>
              </div>
            </div>

            <button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-slate-900 dark:text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-pink-500/20 relative z-10 shrink-0">
              START SESSION
            </button>
          </div>
        </section>

        {/* Bottom Helper Links */}
        <section className="grid grid-cols-2 gap-8 mb-28">
          <ExamInstructionCard 
            icon={FileText}
            title="Exam Instructions"
            description="Review rules and policies thoroughly"
            iconColor="text-indigo-400"
          />
          <ExamInstructionCard 
            icon={Monitor}
            title="Live Exam UI Demo"
            description="Test the interface before the event"
            iconColor="text-purple-400"
          />
        </section>

        {/* Brand Footer */}
        <footer className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col gap-20">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold tracking-tight text-slate-500 dark:text-white/40">The Galactic Nexus</h2>
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

export default Exams;
