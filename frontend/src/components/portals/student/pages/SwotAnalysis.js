import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  Target,
  RefreshCw,
  Zap,
  TrendingUp,
  Brain,
  ShieldAlert,
  Flame,
  Award,
  BookOpen,
  Calendar,
  Activity,
  Heart
} from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-20' : 'left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-12 h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-12">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input 
            type="text" 
            placeholder="Search analytics, standings..." 
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

const SwotAnalysis = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-10%] left-[20%] w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"></div>
      </div>

      

      <main className="relative z-10 pt-6 pb-32 max-w-[1200px] mx-auto px-12">

        {/* SWOT Header */}
        <section className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black font-space tracking-tight mb-2 uppercase">
              Your Celestial <span className="bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent italic">SWOT</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-white/40 font-bold uppercase tracking-wider">
              An intelligent reflection of your current academic standing and untapped potential.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-2xl px-5 py-3 shrink-0">
            <div>
              <span className="text-[7px] font-black uppercase text-white/30 tracking-widest block leading-none mb-1">Last Evaluated</span>
              <span className="text-[10px] font-black uppercase text-purple-400 tracking-wider">24 Dec 2026</span>
            </div>
            <button className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 flex items-center justify-center text-slate-900 dark:text-white transition-colors">
              <RefreshCw size={14} className="animate-spin-slow text-purple-400" />
            </button>
          </div>
        </section>

        {/* SWOT Matrix Grid */}
        <section className="grid grid-cols-2 gap-8 mb-16 relative">
          {/* Centered target visual overlap */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="w-[450px] h-[450px] rounded-full border border-slate-200 dark:border-white/5 flex items-center justify-center">
              <div className="w-[300px] h-[300px] rounded-full border border-dashed border-slate-200 dark:border-white/5 flex items-center justify-center">
                <div className="w-[150px] h-[150px] rounded-full bg-purple-500/5 blur-xl"></div>
              </div>
            </div>
          </div>

          {/* Quadrant 1: Strengths */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-purple-500/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden h-[260px] flex flex-col justify-between hover:border-purple-500/25 transition-all group z-10">
            {/* S indicator box */}
            <div className="absolute top-6 left-6 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-space font-black text-xl shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:scale-105 transition-all">
              S
            </div>
            <div className="pl-16">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-purple-400 mb-4 block">Strengths</span>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-white/90">✦ What does this mean?</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-wider mt-1">
                    You have a solid foundation in electromagnetics, particularly biology and electrostatics. Match your execution with 80% consistency.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-purple-400">✦ What should you do next?</h4>
                  <p className="text-[10px] text-slate-500 dark:text-white/40 leading-relaxed font-bold uppercase tracking-wider mt-1">
                    Leverage this mastery to mentor others in the Community, or apply for an advanced electromagnetics project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quadrant 2: Weaknesses */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-cyan-500/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden h-[260px] flex flex-col justify-between hover:border-cyan-500/25 transition-all group z-10">
            {/* W indicator box */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-space font-black text-xl shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:scale-105 transition-all">
              W
            </div>
            <div className="pr-16">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-400 mb-4 block">Weaknesses</span>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-white/90">✦ What does this mean?</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-wider mt-1">
                    Deviation curves in chemistry suggest a slower response time during electrochemical calculations.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-cyan-400">✦ What should you do next?</h4>
                  <p className="text-[10px] text-slate-500 dark:text-white/40 leading-relaxed font-bold uppercase tracking-wider mt-1">
                    Practice timed calculation drill sheets to build cognitive confidence. Work on at least 15 calculations daily to reduce error rate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quadrant 3: Opportunities */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-blue-500/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden h-[260px] flex flex-col justify-between hover:border-blue-500/25 transition-all group z-10">
            {/* O indicator box */}
            <div className="absolute bottom-6 left-6 w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-space font-black text-xl shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-105 transition-all">
              O
            </div>
            <div className="pl-16">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 mb-4 block">Opportunities</span>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-white/90">✦ What does this mean?</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-wider mt-1">
                    You show high potential of a grade surge in Physics. A stellar final project output is your unique ticket to a scholarship.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-blue-400">✦ What should you do next?</h4>
                  <p className="text-[10px] text-slate-500 dark:text-white/40 leading-relaxed font-bold uppercase tracking-wider mt-1">
                    Focus on top-tier project topics, consult teachers, and apply for the Nebula Excellence Scholarship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quadrant 4: Threats */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-rose-500/10 rounded-[32px] p-8 shadow-2xl relative overflow-hidden h-[260px] flex flex-col justify-between hover:border-rose-500/25 transition-all group z-10">
            {/* T indicator box */}
            <div className="absolute bottom-6 right-6 w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-space font-black text-xl shadow-[0_0_15px_rgba(244,63,94,0.15)] group-hover:scale-105 transition-all">
              T
            </div>
            <div className="pr-16">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-400 mb-4 block">Threats</span>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-white/90">✦ What does this mean?</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-wider mt-1">
                    Your current high intensity work pattern without structured breaks indicates susceptibility to burnout.
                  </p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-wider text-rose-400">✦ What should you do next?</h4>
                  <p className="text-[10px] text-slate-500 dark:text-white/40 leading-relaxed font-bold uppercase tracking-wider mt-1">
                    Implement mandatory 15-min offline breaks between study sessions. Maintain 7-8 hours daily sleep to prevent long-term fatigue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Behavioral Intelligence Section */}
        <section className="mb-16 border-l border-purple-500/20 pl-8 space-y-8">
          <h2 className="text-xl font-bold font-space uppercase text-slate-900 dark:text-white mb-8">
            Deep Behavioral Intelligence
          </h2>

          {/* Personality Indicators */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[24px] p-6 shadow-xl relative overflow-hidden">
            <span className="text-[9px] font-black uppercase tracking-widest text-purple-400 mb-6 block">Personality Indicators</span>
            
            <div className="space-y-4">
              {/* Indicator 1 */}
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white/80">Self-Confidence</span>
                <span className="text-[8px] font-black tracking-widest px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Very High</span>
              </div>

              {/* Indicator 2 */}
              <div className="flex justify-between items-center border-b border-slate-200 dark:border-white/5 pb-3">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white/80">Academic Discipline</span>
                <span className="text-[8px] font-black tracking-widest px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">Positive</span>
              </div>

              {/* Indicator 3 */}
              <div className="flex justify-between items-center pb-1">
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-white/80">Cognitive Adaptability</span>
                <span className="text-[8px] font-black tracking-widest px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">High</span>
              </div>
            </div>
          </div>

          {/* Behavioral Insights */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[24px] p-6 shadow-xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Brain size={18} />
            </div>
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400 mb-2 block">Behavioral Insights</span>
              <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-bold uppercase tracking-wider">
                "Our models indicate that you perform significantly better under moderate pressure. You tend to reach 'flow state' 15 minutes into complex mathematical tasks."
              </p>
            </div>
          </div>

          {/* Hidden Potential */}
          <div className="bg-gradient-to-r from-[#1C0F2C]/40 to-[#0D0D0F]/80 border border-purple-500/20 rounded-[24px] p-6 shadow-xl relative overflow-hidden flex items-start gap-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Award size={18} />
            </div>
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-[#FF00BF] mb-2 block">Hidden Potential</span>
              <p className="text-sm font-black font-space uppercase tracking-wide text-slate-900 dark:text-white leading-relaxed">
                "You possess strong analytical thinking patterns that are currently under-utilized in your current elective choices."
              </p>
            </div>
          </div>

          {/* 30-Day Growth Plan */}
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[24px] p-6 shadow-xl">
            <span className="text-[9px] font-black uppercase tracking-widest text-purple-400 mb-6 block">Your Next 30-Day Growth Plan</span>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Item 1 */}
              <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Activity size={14} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-white/95">Practice Speed Calculations</h5>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">15 mins daily calculations</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <BookOpen size={14} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-white/95">Electromagnetics Project</h5>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Work on advanced project</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <Calendar size={14} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-white/95">Structured Break Rituals</h5>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Mandatory breaks between sessions</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 shrink-0">
                  <Heart size={14} />
                </div>
                <div>
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-white/95">Mindfulness Sessions</h5>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">10 mins daily meditation</p>
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

export default SwotAnalysis;
