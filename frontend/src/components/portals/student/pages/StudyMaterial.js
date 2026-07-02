import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  Library,
  BookOpen, 
  Play,
  RotateCcw,
  CheckCircle,
  Lock,
  Download,
  Star,
  PlusCircle,
  FileText,
  HelpCircle,
  ArrowRight,
  TrendingUp,
  Info
} from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-20' : 'left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-12 h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-12">
        {/* NeonAcademy Logo/Brand */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-black font-space tracking-wider uppercase bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            NeonAcademy
          </span>
          <div className="h-4 w-px bg-slate-200 dark:bg-white/10 hidden md:block"></div>
          <div className="hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">
            <span className="text-slate-900 dark:text-white cursor-pointer hover:text-slate-900 dark:text-white transition-colors">Dashboard</span>
            <span className="cursor-pointer hover:text-slate-900 dark:text-white transition-colors">My Subjects</span>
            <span className="cursor-pointer hover:text-slate-900 dark:text-white transition-colors">Learning Path</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input 
            type="text" 
            placeholder="Search resources..." 
            className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full py-2 pl-10 pr-6 text-xs w-[220px] focus:outline-none focus:border-purple-500/50 transition-all text-slate-900 dark:text-white placeholder-white/30"
          />
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

const StudyMaterial = ({ onNavigate, isSidebarCollapsed }) => {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [liked, setLiked] = React.useState(false);

  const subjects = [
    { name: 'Physics', desc: 'Advanced Mechanics & Optics', progress: 87, chapters: '13 / 15' },
    { name: 'Biology', desc: 'Genetics & Human Anatomy', progress: 42, chapters: '5 / 12' },
    { name: 'Chemistry', desc: 'Organic & Inorganic Structures', progress: 15, chapters: '2 / 13' },
  ];

  const recentlyViewed = [
    'Friction Part I',
    'Chemical Bonding PDF',
    'Cell Biology Quiz'
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

        {/* Recommended For You Section */}
        <section className="bg-gradient-to-r from-[#1C0F2C]/40 to-[#0D0D0F]/80 border border-purple-500/10 rounded-[32px] p-8 mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-2xl">
          <div>
            <h2 className="text-xl font-bold font-space uppercase text-slate-900 dark:text-white mb-2">Recommended For You</h2>
            <p className="text-xs text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider">Based on your recent activity and goals.</p>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            {/* Rec 1 */}
            <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-between h-[90px] w-[180px] hover:border-slate-300 dark:border-white/10 transition-all cursor-pointer">
              <span className="text-[8px] font-black uppercase tracking-widest text-purple-400">Continue</span>
              <h4 className="text-[10px] font-black uppercase tracking-wider text-white/95 leading-tight truncate">Friction Part 2</h4>
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Physics • 14m left</span>
            </div>

            {/* Rec 2 */}
            <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-between h-[90px] w-[180px] hover:border-slate-300 dark:border-white/10 transition-all cursor-pointer">
              <span className="text-[8px] font-black uppercase tracking-widest text-cyan-400">Revise</span>
              <h4 className="text-[10px] font-black uppercase tracking-wider text-white/95 leading-tight truncate">Electricity Notes</h4>
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Physics • 2.4MB PDF</span>
            </div>

            {/* Rec 3 */}
            <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex flex-col justify-between h-[90px] w-[180px] hover:border-slate-300 dark:border-white/10 transition-all cursor-pointer">
              <span className="text-[8px] font-black uppercase tracking-widest text-indigo-400">Watch</span>
              <h4 className="text-[10px] font-black uppercase tracking-wider text-white/95 leading-tight truncate">Genetics Video</h4>
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Biology • 25 mins</span>
            </div>
          </div>
        </section>

        {/* Search Library & Recently Viewed */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Search Library */}
          <div className="w-full md:w-[320px]">
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-2.5 block">Search Library</span>
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input 
                type="text" 
                placeholder="Topics, chapters, files..." 
                className="w-full bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-2xl py-3.5 pl-12 pr-6 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/40 placeholder-white/20 transition-all font-bold uppercase tracking-wider"
              />
            </div>
          </div>

          {/* Recently Viewed */}
          <div>
            <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-2.5 block">Recently Viewed</span>
            <div className="flex gap-3">
              {recentlyViewed.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-white/60 hover:text-slate-900 dark:text-white cursor-pointer transition-colors"
                >
                  📄 {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Subject Library Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-space font-bold uppercase text-slate-900 dark:text-white">Subject Library</h2>
            <button className="text-[9px] font-black uppercase tracking-widest text-purple-400 hover:underline">View All →</button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {subjects.map((sub, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[24px] p-6 hover:border-slate-300 dark:border-white/10 transition-all flex flex-col justify-between h-[200px]"
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-black uppercase tracking-wider text-white/90">{sub.name}</h3>
                    <span className="text-xs font-black font-space text-slate-500 dark:text-white/40">{sub.progress}%</span>
                  </div>
                  <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-6">{sub.desc}</p>
                  
                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-purple-500" style={{ width: `${sub.progress}%` }}></div>
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Chapters Completed: {sub.chapters}</span>
                </div>

                <button className="w-full py-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 rounded-xl text-[9px] font-black uppercase tracking-wider border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white transition-all">
                  Continue Learning
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Video Player & Laws of Motion Grid */}
        <section className="grid grid-cols-12 gap-8 mb-12">
          {/* Left Column: Player & Learning Flow */}
          <div className="col-span-8 space-y-6">
            {/* Simulated Video Player */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] overflow-hidden shadow-2xl">
              <div className="relative aspect-video w-full bg-slate-50 dark:bg-[#050505] flex items-center justify-center border-b border-slate-200 dark:border-white/5 group cursor-pointer">
                {/* Chemistry Beaker Thumbnail */}
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=1200" 
                  alt="Physics Chemistry Experiment Lab" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Play Button Overlay */}
                <div className="w-16 h-16 rounded-full bg-purple-600/90 text-slate-900 dark:text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all z-10">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>

                {/* Control bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-slate-700 dark:text-white/80 z-10 text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-4">
                    <span>14:20 / 45:00</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hover:text-slate-900 dark:text-white">1.5x</span>
                    <span className="hover:text-slate-900 dark:text-white">⚙️</span>
                    <span className="hover:text-slate-900 dark:text-white">⛶</span>
                  </div>
                </div>
              </div>

              {/* Title Info & Actions */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">Friction & Normal Forces Part 2</h3>
                  <p className="text-[9px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest mt-1">Chapter 4 • Laws of Motion • Physics</p>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setLiked(!liked)}
                    className="px-4 py-2 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:border-white/10 rounded-xl text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-white/60 hover:text-slate-900 dark:text-white flex items-center gap-1.5 transition-all"
                  >
                    <Star size={12} fill={liked ? 'currentColor' : 'none'} className={liked ? 'text-yellow-400' : ''} /> Favorite
                  </button>
                  <button className="px-4 py-2 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:border-white/10 rounded-xl text-[9px] font-black uppercase tracking-wider text-slate-600 dark:text-white/60 hover:text-slate-900 dark:text-white flex items-center gap-1.5 transition-all">
                    <Download size={12} /> Download
                  </button>
                  <button className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-xl text-[9px] font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5 transition-all hover:scale-105">
                    <PlusCircle size={12} /> Add Doubt
                  </button>
                </div>
              </div>
            </div>

            {/* Learning Flow Checklist */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 shadow-2xl">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-6">Learning Flow</h3>

              <div className="space-y-4">
                {/* Node 1 */}
                <div className="flex items-center justify-between bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                      <CheckCircle size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-white/90">Introduction Video</h4>
                      <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">10 min • Completed</p>
                    </div>
                  </div>
                </div>

                {/* Node 2 */}
                <div className="flex items-center justify-between bg-[#1C0F2C]/30 border border-purple-500/20 rounded-2xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                      <Play size={14} fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-white/95">Main Lecture Videos</h4>
                      <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">12 min of 45m left</p>
                    </div>
                  </div>
                  <span className="text-[7px] font-black tracking-widest px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 uppercase">Watching</span>
                </div>

                {/* Node 3 */}
                <div className="flex items-center justify-between bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4 opacity-50">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-white/30">
                      <Lock size={14} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-white/40">Notes PDF & Formula Sheets</h4>
                      <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">10 pages • Locked</p>
                    </div>
                  </div>
                </div>

                {/* Node 4 */}
                <div className="flex items-center justify-between bg-white dark:bg-[#050505]/40 border border-slate-200 dark:border-white/5 rounded-2xl p-4 opacity-50">
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-white/30">
                      <Lock size={14} />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-white/40">Mini Quiz</h4>
                      <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">15 Questions • Locked</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sections & Attachments */}
          <div className="col-span-4 space-y-6">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[32px] p-6 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-6">
                  Laws of Motion • Chapter 4
                </h3>

                <div className="space-y-3 mb-6">
                  {/* Sec 1 */}
                  <div className="bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center gap-3">
                    <div className="text-emerald-400">
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-wider text-white/95">1. Newton's First Law</h5>
                      <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">12 min • 3 PDF files</p>
                    </div>
                  </div>

                  {/* Sec 2 */}
                  <div className="bg-[#1C0F2C]/30 border border-purple-500/20 rounded-2xl p-4 flex items-center gap-3">
                    <div className="text-purple-400">
                      <Play size={12} fill="currentColor" />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-wider text-white/95">2. Friction & Normal Forces</h5>
                      <p className="text-[8px] font-bold text-purple-400 uppercase tracking-widest mt-0.5">15 min • 2 PDF files</p>
                    </div>
                  </div>

                  {/* Sec 3 */}
                  <div className="bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center gap-3 opacity-55">
                    <div className="text-white/30">
                      <Lock size={12} />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-wider text-white/90">3. Circular Motion Intro</h5>
                      <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">8 min • 1 PDF file</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-white/5 pt-6">
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mb-4 block">Section Resources</span>
                  
                  <div className="space-y-3">
                    {/* Res 1 */}
                    <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-xl p-3 flex justify-between items-center hover:border-slate-300 dark:border-white/10 cursor-pointer transition-colors">
                      <div className="flex items-center gap-2">
                        <FileText size={14} className="text-purple-400" />
                        <span className="text-[9px] font-black uppercase tracking-wider text-white/90 truncate max-w-[150px]">Friction_Notes_Summary.pdf</span>
                      </div>
                      <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">1.2MB</span>
                    </div>

                    {/* Res 2 */}
                    <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-xl p-3 flex justify-between items-center hover:border-slate-300 dark:border-white/10 cursor-pointer transition-colors">
                      <div className="flex items-center gap-2">
                        <HelpCircle size={14} className="text-cyan-400" />
                        <span className="text-[9px] font-black uppercase tracking-wider text-white/90 truncate max-w-[150px]">Friction_Quiz_1.html</span>
                      </div>
                      <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Quiz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Your Study Insight */}
        <section className="mb-16">
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-wider text-slate-900 dark:text-white">Your Study Insight</h3>
                  <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mt-0.5">AI powered material suggestion</p>
                </div>
              </div>

              <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                Apply Schedule
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* Insight Col 1 */}
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-[#FF00BF] mb-3 flex items-center gap-1.5">
                  <Info size={10} /> What does this mean?
                </h4>
                <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-bold uppercase tracking-wider">
                  We've analyzed <span className="text-purple-400 font-extrabold">88% of Kinematics</span> and you're showing strong retention. However, your Chemistry dashboard shows you haven't started Thermodynamics yet, which typically requires 15 hours of focused study.
                </p>
              </div>

              {/* Insight Col 2 */}
              <div>
                <h4 className="text-[9px] font-black uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-1.5">
                  <Info size={10} /> What should I do next?
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-white/60 font-bold uppercase tracking-wider list-disc list-inside">
                  <li>Complete the Thermodynamics intro video: 20 mins of basic theory.</li>
                  <li>Take the 5-minute practice quiz on Friction to solidify Newton's Laws.</li>
                </ul>
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

export default StudyMaterial;
