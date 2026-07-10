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
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-0 sm:left-20' : 'left-0 sm:left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-4 sm:px-8 md:px-12 h-16 sm:h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-4 sm:gap-12 flex-1 min-w-0">
        <div className="relative w-full max-w-[200px] sm:max-w-[300px]">
          <Search size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full py-2 sm:py-2.5 pl-9 sm:pl-12 pr-4 sm:pr-6 text-xs w-full focus:outline-none focus:border-purple-500/50 transition-all text-slate-900 dark:text-white placeholder-white/30"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:bg-white/5 transition-all">
          <Bell size={16} />
        </button>
        <button className="hidden sm:flex w-10 h-10 rounded-full border border-slate-300 dark:border-white/10 items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white hover:bg-slate-100 dark:bg-white/5 transition-all">
          <Globe size={18} />
        </button>
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-300 dark:border-white/10 overflow-hidden cursor-pointer hover:scale-105 transition-all" onClick={() => onNavigate('profile')}>
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Subhranil" alt="Avatar" />
        </div>
      </div>
    </nav>
  );
};



const CategoryTab = ({ icon: Icon, imgSrc, label, active, colorClass }) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 sm:gap-4 p-3 sm:p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 cursor-pointer w-full text-center hover:-translate-y-1 ${active ? 'text-white' : 'text-white/70 hover:text-white'
      }`}>
      {imgSrc ? (
        <img src={imgSrc} alt={label} className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-xl" />
      ) : (
        <div className={`w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center ${colorClass}`}>
          <Icon size={20} className="sm:hidden" />
          <Icon size={32} className="hidden sm:block" />
        </div>
      )}
      <span className="text-[10px] sm:text-[12px] md:text-[13px] font-bold tracking-wide leading-tight">{label}</span>
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
    <div className={`border rounded-[32px] p-8 flex flex-col justify-between transition-all duration-500 relative overflow-hidden ${active
      ? 'bg-gradient-to-b from-[#1C0D35] to-[#0D0D0F] border-purple-500/30 shadow-2xl shadow-purple-500/5'
      : 'bg-white dark:bg-[#0D0D0F] border-slate-200 dark:border-white/5 hover:border-slate-300 dark:border-white/10'
      }`}>
      {active && (
        <div className="absolute top-0 right-0 w-56 h-56 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      )}

      <div>
        <div className="flex justify-between items-center mb-8">
          <span className={`text-[9px] font-black uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full flex items-center gap-1.5 ${active
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
    <div className="min-h-screen bg-[#F8F9FF] dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Glow Overlay (Now visible in both light & dark mode) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.04] dark:opacity-[0.03]"></div>
        <div className="absolute top-[-10%] left-[10%] md:left-[20%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-purple-500/15 dark:bg-purple-600/10 rounded-full blur-[120px] md:blur-[160px]"></div>
        <div className="absolute top-[30%] right-[-10%] w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-blue-500/15 dark:bg-blue-600/5 rounded-full blur-[100px] md:blur-[140px]"></div>
      </div>



      <main className="relative z-10 pt-0 pb-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-[80px]">

        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-20 relative pt-4 md:pt-10">
          {/* Floating Badges */}
          <div className="absolute left-[0%] md:left-[2%] top-[60px] sm:top-[20px] md:top-[10px] animate-float z-20">
            <div
              className="flex w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 p-1.5 sm:p-2.5 items-center justify-center -rotate-12 hover:scale-105 transition-transform cursor-default"
              style={{ backgroundImage: "url('/images/exam/Rectangle 30.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <img src="/images/exam/Floating 3D Elements (Decorative Icons).png" alt="Decorative" className="w-full h-full object-contain" style={{ filter: 'hue-rotate(-20deg)' }} />
            </div>
          </div>
          
          <div className="absolute right-[0%] md:right-[2%] top-[60px] sm:top-[40px] md:top-[100px] animate-float [animation-delay:2s] z-20">
            <div
              className="flex w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 p-1.5 sm:p-2.5 items-center justify-center rotate-12 hover:scale-105 transition-transform cursor-default"
              style={{ backgroundImage: "url('/images/exam/Rectangle 30.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <img src="/images/exam/Floating 3D Elements (Decorative Icons).png" alt="Decorative" className="w-full h-full object-contain" style={{ filter: 'hue-rotate(180deg)' }} />
            </div>
          </div>

          <div className="absolute left-[10%] sm:left-[15%] md:left-[22%] bottom-[120px] sm:bottom-[150px] animate-float [animation-delay:4s] z-20">
            <div
              className="flex w-9 h-9 sm:w-14 sm:h-14 md:w-16 md:h-16 p-1.5 sm:p-2 items-center justify-center -rotate-6 hover:scale-105 transition-transform cursor-default"
              style={{ backgroundImage: "url('/images/exam/Rectangle 30.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <img src="/images/exam/book.png" alt="Book" className="w-full h-full object-contain scale-110" />
            </div>
          </div>

          <h1 className="text-[28px] xs:text-[32px] sm:text-5xl md:text-[96px] font-bold tracking-tight mb-4 md:mb-6 leading-[1.2] md:leading-[1.1] px-6 sm:px-0" style={{ fontFamily: '"Organetto", sans-serif' }}>
            The Next Generation of<br className="hidden md:block" />
            <span className="text-slate-500 dark:text-[#888888]"> Smart Exams.</span>
          </h1>

          <div className="flex justify-center items-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap px-2">
            <div className="bg-[#1a1525] border border-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full shadow-[0_0_8px_#A855F7]"></span>
              2M+ STUDENTS
            </div>
            <div className="bg-[#111e25] border border-[#22D3EE]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#22D3EE] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#22D3EE] rounded-full shadow-[0_0_8px_#22D3EE]"></span>
              95% ACCURACY
            </div>
            <div className="bg-[#1a1525] border border-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-white/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#A855F7] rounded-full shadow-[0_0_8px_#A855F7]"></span>
              AI EVALUATION SYSTEM
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 sm:gap-10">
            <button className="bg-white border-slate-200 dark:bg-white/5 border dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-900 dark:text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-[11px] font-bold tracking-wide flex items-center gap-3 transition-all duration-300 shadow-xl group">
              <img src="/images/exam/start test button.png" alt="Start Test" className="w-4 h-4 object-contain group-hover:scale-110 transition-transform dark:brightness-100 brightness-0" />
              Start Test
            </button>

            <div className="-mt-2 mb-4 flex justify-center w-full relative z-10">
              <button className="transition-all relative hover:-translate-y-1 hover:opacity-80">
                <img src="/images/exam/Scroll Indicator_margin.png" alt="Scroll Down" className="h-12 sm:h-16 object-contain" />
              </button>
            </div>
          </div>
        </section>

        {/* Curved Line Divider */}
        <div className="relative w-full flex justify-center mt-[-2rem] z-0 pointer-events-none">
          <div
            className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[1536px]"
            style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 60%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 60%)' }}
          >
            <img src="/images/exam/Background+HorizontalBorder.svg" alt="Background Line" className="w-full h-auto object-cover dark:opacity-80 dark:mix-blend-screen" />
          </div>
        </div>

        {/* Category Grid Section */}
        <section className="-mt-[30px] sm:-mt-[50px] mb-16 sm:mb-28 max-w-[1100px] mx-auto relative z-10">
          <div
            className="w-full flex justify-between items-center px-3 sm:px-6 md:px-10 py-4 sm:py-6 rounded-2xl sm:rounded-[32px] shadow-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #3A2371 0%, #150E28 100%)',
              boxShadow: '0 20px 60px -15px rgba(107, 33, 168, 0.5)'
            }}
          >
            <div className="absolute inset-0 bg-[url('/images/exam/Overlay.png')] bg-cover opacity-50 mix-blend-overlay"></div>
            <div className="relative z-10 grid grid-cols-4 w-full gap-1 sm:gap-2">
              <CategoryTab imgSrc="/images/exam/Overlay.png" label="MCQ Test" active colorClass="bg-white/10 text-white shadow-inner" />
              <CategoryTab imgSrc="/images/exam/2nd menu.png" label="Subject-wise" colorClass="bg-blue-500/20 text-blue-400" />
              <CategoryTab imgSrc="/images/exam/chapter.png" label="Chapter Test" colorClass="bg-pink-500/20 text-pink-400" />
              <CategoryTab imgSrc="/images/exam/subtopic.png" label="Subtopic Quiz" colorClass="bg-purple-500/20 text-purple-400" />
            </div>
          </div>
        </section>

        {/* Ongoing Challenges Section */}
        <section className="mb-16 sm:mb-28">
          <div className="flex justify-between items-end mb-8 sm:mb-12">
            <div>
              <h2 className="text-xl sm:text-3xl font-bold font-space text-slate-900 dark:text-white mb-1 sm:mb-2 tracking-tight">Ongoing Challenges</h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-white/40 font-medium hidden sm:block">Master your curriculum with our precision-engineered assessment modules.</p>
            </div>
            <a href="#" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#25CCF4] hover:text-blue-400 transition-colors shrink-0">
              View All
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
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
        <section className="mb-16 sm:mb-28">
          <div className="flex justify-between items-end mb-8 sm:mb-12">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#A855F7] rounded-full"></div>
              <h2 className="text-xl sm:text-3xl font-bold font-space text-slate-900 dark:text-white tracking-tight">Priority Assessments</h2>
            </div>
            <a href="#" className="flex items-center gap-2.5 text-xs font-black uppercase tracking-widest text-slate-500 dark:text-white/40 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0">
              <span className="hidden sm:inline">View Calendar</span>
              <Calendar size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
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
        <section className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-6 sm:mb-10">
            <div className="w-1.5 h-6 bg-[#25CCF4] rounded-full"></div>
            <h2 className="text-xl sm:text-3xl font-bold font-space text-slate-900 dark:text-white tracking-tight">Performance History</h2>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] overflow-hidden shadow-2xl">
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

          {/* Mobile card list */}
          <div className="md:hidden flex flex-col gap-4">
            {[
              { testName: 'Macroeconomics Mock #1', score: '90/100', date: '20 Apr 2024', value: 90, status: 'Elite', statusColor: 'text-[#7545F0]', barColor: 'bg-[#7545F0]' },
              { testName: 'Thermodynamics Quiz', score: '78/100', date: '09 Apr 2024', value: 78, status: 'Stable', statusColor: 'text-[#25CCF4]', barColor: 'bg-[#25CCF4]' },
              { testName: 'Wave Optics Test', score: '64/100', date: '28 Mar 2024', value: 64, status: 'Critical', statusColor: 'text-[#F76171]', barColor: 'bg-[#F76171]' },
            ].map((row) => (
              <div key={row.testName} className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-sm text-slate-700 dark:text-white/80 leading-tight">{row.testName}</span>
                  <span className={`text-base font-black font-space ${row.statusColor}`}>{row.score}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${row.barColor}`} style={{ width: `${row.value}%` }}></div>
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${row.statusColor} bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5`}>{row.status}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider">{row.date}</span>
                  <button className="text-xs font-black uppercase tracking-widest text-[#3B82F6] hover:text-blue-400 transition-colors">Retake</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Arena Intelligence Insight Card */}
        <section className="mb-10 sm:mb-12">
          <div className="bg-gradient-to-r from-[#1A0B2E] via-[#0D0D0F] to-[#0D0D0F] border border-pink-500/20 rounded-2xl sm:rounded-[40px] p-6 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[600px] h-full bg-pink-500/5 blur-[100px] pointer-events-none"></div>

            <div className="flex items-start sm:items-center gap-5 sm:gap-8 relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-500/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-pink-500 shadow-2xl relative shrink-0">
                <span className="absolute inset-0 bg-pink-500/20 rounded-xl sm:rounded-2xl animate-ping opacity-60"></span>
                <Activity size={24} />
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-pink-500 mb-1.5 sm:mb-2 font-space">Arena Intelligence Insight</h5>
                <p className="text-xs sm:text-sm font-bold text-white/70 max-w-[650px] leading-relaxed">
                  You are attempting tests regularly but <span className="text-slate-900 dark:text-white">struggling in Physics</span>. Revise Electricity and attempt another mock test tomorrow to stabilize your trajectory.
                </p>
              </div>
            </div>

            <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-slate-900 dark:text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-pink-500/20 relative z-10 shrink-0">
              START SESSION
            </button>
          </div>
        </section>

        {/* Bottom Helper Links */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-10">
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


      </main>
    </div>
  );
};

export default Exams;
