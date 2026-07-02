import React from 'react';
import { Search, Bell, User, Plus, MessageSquare, BookOpen, Star, Trophy, Wallet, ChevronRight } from 'lucide-react';



const StudyAdda = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">


      {/* Hero Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-purple-600/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-blue-600/10 rounded-full blur-[180px]"></div>
      </div>

      <main className="relative z-10 pt-4 md:pt-6 pb-4 md:pb-8 max-w-[1440px] mx-auto px-0 md:px-8">

        {/* Rocket Image Floating */}
        <div className="absolute left-[10px] top-[140px] md:left-[80px] md:top-[120px] w-[120px] md:w-[280px] animate-float z-20 pointer-events-none opacity-40 md:opacity-80">
          <img src="/images/figma_assets/community/rocket.png" alt="Rocket" className="w-full h-auto" />
        </div>

        {/* Hero Content */}
        <div className="text-center mb-16 md:mb-40">
          <h1 className="text-[42px] md:text-[100px] font-bold font-space leading-[1] md:leading-[0.9] tracking-tighter mb-6 md:mb-8">
            Connect. Learn.<br />
            <span className="text-[#888888]">Grow Together.</span>
          </h1>
          <button className="bg-[#1C1C1E] border border-slate-300 dark:border-white/10 text-white px-8 py-4 rounded-full text-sm font-bold flex items-center gap-3 mx-auto hover:bg-[#2A2A2E] dark:hover:bg-white/10 transition-all group shadow-xl">
            <div className="bg-slate-200 dark:bg-white/10 p-1 rounded-md group-hover:bg-purple-500 transition-colors">
              <Plus size={14} className="text-slate-900 dark:text-white" />
            </div>
            Join now
          </button>
        </div>

        {/* Mid Section: 2 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24 relative z-30">
          {/* Ask a Doubt */}
          <div className="bg-gradient-to-br from-[#1A0B2E] to-[#0D0D0F] border border-purple-500/20 rounded-[32px] md:rounded-[48px] p-8 md:p-12 min-h-[250px] md:h-[350px] flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-500 shadow-2xl">
            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
              <MessageSquare size={24} />
            </div>
            <div>
                <h3 className="text-4xl font-bold font-space mb-4 tracking-tight text-white">Ask a Doubt</h3>
                <p className="text-[#999999] text-lg max-w-sm">Get answers from experts and peers within minutes.</p>
            </div>
          </div>

          {/* My Feed */}
          <div
            onClick={() => onNavigate('feed')}
            className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[32px] md:rounded-[48px] p-8 md:p-12 min-h-[250px] md:h-[350px] flex flex-col justify-between group hover:border-slate-400 dark:border-white/20 transition-all duration-500 shadow-2xl cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-10 right-10 flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-[#0D0D0F] bg-slate-100 dark:bg-white/5 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-4 border-[#0D0D0F] bg-slate-200 dark:bg-white/10 flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-white/40">+8</div>
            </div>

            <div className="w-full h-[1px] bg-slate-200 dark:bg-white/10 mb-8 opacity-50"></div>

            <div>
              <h3 className="text-4xl font-bold font-space mb-4 tracking-tight">My Feed</h3>
              <p className="text-[#666666] text-lg max-w-sm">
                Share your knowledge. Solve doubts.<br />
                Earn rewards while you learn.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: 3 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 relative z-30">
          {/* Coins & Rewards */}
          <div className="md:col-span-3 bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[32px] md:rounded-[40px] p-6 md:p-8 flex flex-col justify-between min-h-[300px] md:h-[380px] group hover:border-slate-300 dark:border-white/10 transition-all duration-500 shadow-xl">
            <div className="flex items-center gap-3 text-[#FACC15]">
              <Wallet size={20} />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase">Coins & Rewards</span>
            </div>

            <div className="space-y-1">
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold font-space">$500</span>
                <span className="text-purple-400 font-bold mb-2">+$120</span>
              </div>
              <p className="text-xs text-[#444444] font-bold uppercase tracking-widest">Total balance earned today</p>
            </div>

            <button className="w-full py-4 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-200 dark:bg-white/10 transition-all">
              Visit Rewards Store
            </button>
          </div>

          {/* Weekly Top Helpers */}
          <div className="md:col-span-4 bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[32px] md:rounded-[40px] p-6 md:p-8 min-h-[300px] md:h-[380px] group hover:border-slate-300 dark:border-white/10 transition-all duration-500 shadow-xl">
            <div className="flex items-center gap-3 text-purple-400 mb-8">
              <Trophy size={20} />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase">Weekly Top Helpers</span>
            </div>

            <div className="space-y-6">
              {[
                { name: 'Alex Quantum', xp: '2.4k XP', rank: 1, color: '#FFD700' },
                { name: 'Sarah_Mind2', xp: '1.9k XP', rank: 2, color: '#C0C0C0' },
                { name: 'Rahul_IIT', xp: '1.6k XP', rank: 3, color: '#CD7F32' },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between group/item">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-white/20 w-4">{user.rank}</span>
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="" />
                    </div>
                    <div>
                      <p className="text-sm font-bold tracking-tight">{user.name}</p>
                      <p className="text-[10px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest">{user.xp}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-white/20 group-hover/item:text-purple-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Study Challenger */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-white dark:bg-[#0D0D0F] border border-purple-500/20 rounded-[32px] p-8 flex justify-between items-center h-[177px] group hover:border-purple-500/40 transition-all">
              <div className="space-y-4">
                <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400">
                  <Star size={18} />
                </div>
                <div>
                  <h4 className="font-bold font-space text-xl">Topper's Secret</h4>
                  <p className="text-xs text-[#666666] font-medium">How I cleared JEE with 99.9%tile</p>
                </div>
              </div>
              <button className="w-10 h-10 bg-slate-100 dark:bg-white/5 rounded-full flex items-center justify-center hover:bg-purple-500 transition-all group/btn">
                <Plus size={18} className="group-hover/btn:rotate-90 transition-transform" />
              </button>
            </div>

            <div className="bg-white dark:bg-[#0D0D0F] border border-pink-500/20 rounded-[32px] p-8 flex justify-between items-center h-[177px] group hover:border-pink-500/40 transition-all">
              <div className="space-y-4">
                <div className="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-400">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="font-bold font-space text-xl">Live: Organic Mech</h4>
                  <p className="text-xs text-[#666666] font-medium">Streaming now with Mentor Raj</p>
                </div>
              </div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.5)]"></div>
            </div>
          </div>
        </div>


      </main>
    </div>
  );
};

export default StudyAdda;
