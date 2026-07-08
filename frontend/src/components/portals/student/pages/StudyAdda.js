import React from 'react';
import { Search, Bell, User, Plus, MessageSquare, BookOpen, Star, Trophy, Wallet, ChevronRight, Settings, Sparkles, ChevronDown, Video } from 'lucide-react';

const StudyAdda = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Hero Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-200/60 via-slate-50 to-slate-50 dark:from-purple-900/10 dark:via-[#050505] dark:to-[#050505]"></div>
      </div>

      <main className="relative z-10 pt-16 md:pt-5 pb-8 max-w-[1350px] mx-auto px-4 md:px-8">

        {/* Hero Content */}
        <div className="text-center  relative z-10">
          <h1 className="text-5xl md:text-[96px]  font-bold tracking-tight mb-8 leading-[1.1]" style={{ fontFamily: '"Organetto", sans-serif' }}>
            Connect. Learn.<br />
            <span className="text-slate-500 dark:text-[#888888]">Grow Together.</span>
          </h1>
          <button className="bg-white border-slate-200 text-slate-900 dark:bg-[#1C1C1E] border dark:border-white/10 dark:text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 mx-auto hover:bg-slate-50 dark:hover:bg-white/10 transition-all shadow-xl">
            <Sparkles size={16} className="text-slate-400 dark:text-white/70" />
            Join now
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 mt-8 flex justify-center z-10">
            <img src="/images/study_adda/Scroll Indicator_margin.png" alt="Scroll Indicator" className="w-[40px] h-auto cursor-pointer hover:opacity-80 transition-opacity" />
          </div>
        </div>

        {/* Curved Line Divider */}
        <div className="relative w-full flex justify-center mt-[-2rem] z-0 pointer-events-none">
          <div 
            className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1536px]"
            style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 60%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 60%)' }}
          >
            <img src="/images/profile/Background+HorizontalBorder.svg" alt="Background Line" className="w-full h-auto object-cover dark:opacity-80 dark:mix-blend-screen" />
          </div>
        </div>

        {/* Mid Section: 2 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 relative z-10 mt-[120px]">
          {/* Ask a Doubt */}
          <div className="bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[40px] p-10 h-[210px] flex items-center relative group hover:border-purple-300 dark:hover:border-white/20 transition-all duration-500 shadow-xl dark:shadow-none">
            {/* Placeholder for Rocket Image */}
            <div className="absolute -left-[51px] top-1/2 -translate-y-1/2 w-[291px] h-[372px] pointer-events-none rotate-[12.44deg]">
              <img src="/images/figma_assets/community/rocket.png" alt="Rocket" className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
            </div>
            <div className="relative z-10 ml-40 md:ml-48">
              <h3 className="text-3xl font-bold mb-3 text-slate-900 dark:text-white">Ask a Doubt</h3>
              <p className="text-slate-500 dark:text-[#999999] text-sm max-w-[200px] leading-relaxed">Get answers from experts and peers within minutes.</p>
            </div>
          </div>

          {/* My Feed */}
          <div
            onClick={() => onNavigate && onNavigate('feed')}
            className="bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-[40px] p-10 h-[210px] flex items-center group hover:border-purple-300 dark:hover:border-white/20 transition-all duration-500 cursor-pointer relative shadow-xl dark:shadow-none"
          >
            <div className="flex justify-between items-center w-full h-full">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">My Feed</h3>
              </div>
              <div className="w-[1px] h-24 bg-slate-200 dark:bg-white/10 mx-6 hidden md:block"></div>
              <div className="flex-1 flex flex-col justify-center text-left relative">
                <div className="absolute right-0 -top-2 w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-500/20 flex items-center justify-center text-pink-500 dark:text-pink-400 shrink-0">
                  <User size={16} />
                </div>
                <p className="text-slate-500 dark:text-[#888888] text-sm mb-4 leading-relaxed pr-8">
                  Share your knowledge. Solve doubts.<br /> Earn rewards while you learn.
                </p>
                <div className="flex -space-x-3 mt-1">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0D0D0F] bg-slate-100 dark:bg-[#1A1A1A] overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#0D0D0F] bg-slate-200 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-white/50">+12</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Coins & Rewards */}
          <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-none rounded-[32px] p-6 flex flex-col justify-between h-[300px] group">
            <div className="flex items-center gap-2 text-purple-500 dark:text-purple-400">
              <Star size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">Coins & Rewards</span>
            </div>

            <div className="mt-8 mb-auto">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-5xl font-bold text-slate-900 dark:text-white">$500</span>
                <span className="text-pink-500 font-bold text-base">+$120</span>
              </div>
              <div className="flex justify-between">
                <p className="text-xs text-slate-500 dark:text-[#555555]">Current Balance</p>
                <p className="text-xs text-slate-500 dark:text-[#555555]">Earned today</p>
              </div>
            </div>

            <button className="w-full py-3 bg-slate-100 dark:bg-white/5 rounded-2xl text-sm font-semibold text-slate-700 dark:text-white/80 hover:bg-slate-200 dark:hover:bg-white/10 transition-all">
              Visit Rewards Store
            </button>
          </div>

          {/* Weekly Top Helpers */}
          <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-none rounded-[32px] p-6 h-[300px] flex flex-col">
            <div className="text-blue-500 dark:text-[#3B82F6] text-xs font-bold tracking-widest uppercase mb-6">
              Weekly Top Helpers
            </div>
            <div className="space-y-5 flex-1 mt-2">
              {[
                { name: 'Alex.Quantum', xp: '2.4K XP', rank: 1, icon: true },
                { name: 'Sara_Studz', xp: '1.9K XP', rank: 2, icon: false },
                { name: 'Rahul_IIT', xp: '1.5K XP', rank: 3, icon: false },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-bold w-3 text-center ${user.rank === 1 ? 'text-slate-400 dark:text-[#888]' : 'text-slate-300 dark:text-[#555]'}`}>{user.rank}</span>
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-gradient-to-br dark:from-[#1E293B] dark:to-[#0F172A] border border-slate-200 dark:border-white/10 overflow-hidden relative flex items-center justify-center text-sm font-bold text-blue-500 dark:text-blue-400 shadow-inner">
                      {user.rank}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white/90">{user.name}</p>
                      <p className="text-[10px] text-slate-500 dark:text-[#555]">{user.xp}</p>
                    </div>
                  </div>
                  {user.icon && <Trophy size={14} className="text-purple-500 dark:text-purple-400" />}
                </div>
              ))}
            </div>
          </div>

          {/* Study Challenges */}
          <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-none rounded-[32px] p-6 h-[300px]">
            <div className="text-pink-500 text-xs font-bold tracking-widest uppercase mb-8">
              Study Challenges
            </div>

            <div className="space-y-8 mt-4">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-sm font-bold text-slate-800 dark:text-white/90">Solve 20 Physics doubts</p>
                  <p className="text-xs text-slate-500 dark:text-[#555]">15/20</p>
                </div>
                <div className="h-1 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[75%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <p className="text-sm font-bold text-slate-800 dark:text-white/90">Upload 3 Summary Notes</p>
                  <p className="text-xs text-slate-500 dark:text-[#555]">1/3</p>
                </div>
                <div className="h-1 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 dark:bg-[#3B82F6] w-[33%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards */}
          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-none rounded-[24px] p-5 flex items-center gap-4 group hover:border-purple-300 dark:hover:border-purple-500/40 transition-all cursor-pointer h-full">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-400 shrink-0">
                <Star size={18} />
              </div>
              <div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white/90 leading-tight mb-1">Topper's Secret</h4>
                <p className="text-xs text-slate-500 dark:text-[#666666] leading-snug">How I cleared JEE with 99.9%tile</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A0B1A] dark:to-[#0D0D0F] border border-slate-200 dark:border-pink-500/20 shadow-xl dark:shadow-none rounded-[24px] p-5 flex items-center gap-4 group hover:border-pink-300 dark:hover:border-pink-500/40 transition-all cursor-pointer h-full relative overflow-hidden">
              <div className="w-10 h-10 bg-pink-50 dark:bg-pink-500/20 rounded-full flex items-center justify-center text-pink-500 dark:text-pink-400 shrink-0">
                <Video size={18} />
              </div>
              <div className="z-10 relative">
                <h4 className="font-bold text-base text-slate-900 dark:text-white/90 leading-tight mb-1">Live: Organic Mech</h4>
                <p className="text-xs text-slate-500 dark:text-[#888888] leading-snug">streaming now with Mentor Raj</p>
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)] z-10"></div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default StudyAdda;