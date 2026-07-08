import React from 'react';
import { Search, Bell, User, Mail, Phone, ShieldCheck, Wallet, Flame, TrendingUp, Award, Clock, ChevronRight, Zap, Target } from 'lucide-react';

const ProfileCard = ({ title, children, className = "", titleAction = null, titleClassName = "text-slate-900 dark:text-white" }) => (
  <div className={`bg-white dark:bg-[#150a2e] border-2 border-[#F382FF] rounded-[24px] md:rounded-[32px] p-6 md:p-8 shadow-2xl group hover:shadow-[0_0_30px_rgba(243,130,255,0.4)] transition-all duration-500 flex flex-col ${className}`}>
    <div className="flex justify-between items-center mb-6">
      <h3 className={`text-xl md:text-2xl font-bold ${titleClassName}`} style={{ fontFamily: '"Strelka", sans-serif' }}>{title}</h3>
      {titleAction}
    </div>
    <div className="flex-1 flex flex-col">
      {children}
    </div>
  </div>
);

const Profile = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">

      <main className="pb-8 md:pb-32 w-full px-0 md:px-8 relative">

        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16 mt-[-20px] md:mt-[-20px] relative flex flex-col items-center">
          <img
            src="./images/profile/profile.png"
            alt="Profile Robot"
            className='w-[155px] h-[190px] sm:w-[240px] sm:h-[240px] md:w-[400px] md:h-[300px] object-contain mx-auto relative -mb-[40px] sm:-mb-[64px] md:-mb-[80px]'
            style={{ clipPath: 'inset(0 0 26.6% 0)' }}
          />

          {/* Lower section containing SVG Arch and Text */}
          <div className="relative w-full z-0 flex flex-col items-center">

            {/* Background SVG Separator perfectly aligned to the top of this container */}
            <div 
              className="absolute top-[-72px] md:top-[-64.5px] left-1/2 -translate-x-1/2 pointer-events-none z-0"
              style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 60%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 60%)' }}
            >
              <img src="./images/profile/Background+HorizontalBorder.svg" alt="Background Line" className="w-[1536px] h-[400px] max-w-none" />
            </div>

            {/* Text inside the arch */}
            <div className="relative z-20 mt-6 md:mt-8">
              <h4 className="text-[14px] sm:text-[18px] md:text-[24px] font-normal tracking-[3px] md:tracking-[5px] leading-[18px] md:leading-[25px] text-slate-500 dark:text-[#FFFFFF] mb-0 md:mb-0 uppercase" style={{ fontFamily: '"Arsenal SC", sans-serif' }}>
                welcome to
              </h4>
              <h1 className="text-[36px] sm:text-[50px] md:text-[100px] lg:text-[100px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-white dark:to-white whitespace-nowrap pr-4" style={{ fontFamily: '"Organetto", sans-serif' }}>Your Profile</h1>
            </div>
          </div>
        </div>

        {/* Top Grid: Personal, Guardian, Fee */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-8 relative z-50">
          <ProfileCard title="PERSONAL INFO">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full border-2 border-purple-500/30 overflow-hidden p-1">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" className="w-full h-full rounded-full" alt="" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-space">Alex Chen</h4>
                <p className="text-xs text-slate-500 dark:text-white/40 font-bold uppercase tracking-widest">ID: STU-88291</p>
              </div>
            </div>
            <div className="space-y-4 w-full overflow-hidden">
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-white/60 w-full">
                <Mail size={16} className="text-purple-400 shrink-0" />
                <span className="truncate">alex.chen@studyadda.edu</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-white/60 w-full">
                <Phone size={16} className="text-purple-400 shrink-0" />
                <span className="truncate">+1 (555) 0123-4567</span>
              </div>
            </div>
          </ProfileCard>

          <ProfileCard title="GUARDIAN INFO">
            <div className="mb-8">
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">PRIMARY GUARDIAN</p>
              <h4 className="text-xl font-bold font-space">Sarah Chen</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest mb-1">RELATION</p>
                <p className="text-sm font-bold">Mother</p>
              </div>
              <div>
                <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest mb-1">CONTACT</p>
                <p className="text-sm font-bold">+1 (555) 0123-8899</p>
              </div>
            </div>
            <button className="w-full py-3 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-200 dark:bg-white/10 transition-all">
              <ShieldCheck size={14} className="text-green-400" />
              Verified Profile High
            </button>
          </ProfileCard>

          <ProfileCard title="FEE STATUS">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h4 className="text-3xl font-bold font-space tracking-tight">$12,450.00</h4>
                <p className="text-[8px] font-bold text-white/20 uppercase tracking-widest mt-1">Academic Year 2023-2024 Total</p>
              </div>
              <span className="text-[8px] font-black bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/20 uppercase tracking-widest">● Paid</span>
            </div>
            <div className="space-y-2 mb-8">
              <div className="flex justify-between text-[10px] font-bold">
                <span className="text-slate-500 dark:text-white/40 uppercase tracking-widest">Progress Amount</span>
                <span>100%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-red-500/5 border border-red-500/10 rounded-xl">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shrink-0"></div>
              <p className="text-[10px] font-bold text-red-400/80 uppercase tracking-widest">Next invoice generated on Aug 15</p>
            </div>
          </ProfileCard>
        </div>

        {/* Middle Grid: Progress, Velocity, Streaks */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-8">
          <ProfileCard title="YOUR PROGRESS">
            <div className="flex justify-center items-center py-4">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <circle
                    cx="50" cy="50" r="45" fill="none"
                    stroke="url(#gradient-purple)"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset={283 * 0.25}
                    strokeLinecap="round"
                    className="rotate-[-90deg] origin-center transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient id="gradient-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold font-space">75%</span>
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/20">Overall</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
              <span className="text-white/20">Current vs Last Week Comparison</span>
              <span className="text-blue-400">+14% Up</span>
            </div>
          </ProfileCard>

          <ProfileCard title="LEARNING VELOCITY">
            <div className="flex justify-between items-end mb-8">
              <div>
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Growth Rate</p>
                <h4 className="text-2xl font-bold font-space">Top 4%</h4>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Monthly Growth</p>
                <h4 className="text-xl font-bold font-space text-green-400">+12.4%</h4>
              </div>
            </div>
            <div className="h-[120px] w-full relative group">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                <path
                  d="M0,35 Q25,35 50,20 T100,5"
                  fill="none" stroke="url(#line-grad)" strokeWidth="2"
                  className="animate-draw-path"
                />
                <circle cx="100" cy="5" r="3" fill="#A855F7" className="animate-pulse shadow-[0_0_10px_#A855F7]" />
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </svg>
              <div className="absolute bottom-[-20px] left-0 w-full flex justify-between text-[8px] font-bold text-white/20 uppercase tracking-widest">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
              </div>
            </div>
          </ProfileCard>

          <ProfileCard title="LEARNING STREAKS" titleClassName="text-orange-500">
            <div className="flex flex-col items-center justify-center py-6">
              <div className="w-20 h-20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <img src="/images/profile/Margin.png" alt="Flame Streak" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.6)] scale-150" />
              </div>
              <h4 className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 tracking-tight">15 Day Streak</h4>
              <p className="text-sm text-slate-500 dark:text-white/60 font-medium">You're on fire! Keep it up.</p>

              <div className="mt-8 flex gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i <= 5 ? 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'bg-orange-950/50'}`}></div>
                ))}
              </div>
              <p className="mt-4 text-[9px] font-black uppercase tracking-[0.2em] text-white/40">THIS WEEK'S PROGRESS</p>
            </div>
          </ProfileCard>
        </div>

        {/* Bottom Grid: Achievements, Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <ProfileCard title="ACHIEVEMENTS" className="lg:col-span-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[Award, Zap, Target, ShieldCheck].map((Icon, i) => (
                <div key={i} className="aspect-square rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-purple-400 hover:border-purple-500/30 transition-all cursor-pointer group/item">
                  <Icon size={24} className="group-hover/item:scale-110 transition-transform" />
                </div>
              ))}
            </div>
            <div className="p-6 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-3xl flex items-center gap-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                <Award size={24} />
              </div>
              <div>
                <h5 className="text-sm font-bold tracking-tight">Physics Maven</h5>
                <p className="text-[10px] text-slate-500 dark:text-white/40 font-bold uppercase tracking-widest">Earned 2 stars in Quantum Mechanics</p>
              </div>
            </div>
          </ProfileCard>

          <ProfileCard title="RECENT ACTIVITY" className="lg:col-span-7">
            <div className="space-y-6">
              {[
                { label: 'Completed Calculus III Quiz', time: '2 hours ago', icon: Clock, color: 'text-green-400' },
                { label: 'Earned 200 XP in Chemistry', time: '5 hours ago', icon: Zap, color: 'text-purple-400' },
                { label: 'Joined Physics Adda Group', time: 'Yesterday', icon: User, color: 'text-blue-400' },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between group/act">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center ${activity.color} group-hover/act:bg-slate-200 dark:bg-white/10 transition-all`}>
                      <activity.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold tracking-tight">{activity.label}</p>
                      <p className="text-[10px] text-slate-500 dark:text-white/40 font-bold uppercase tracking-widest">{activity.time}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-white/10 group-hover/act:text-slate-900 dark:text-white transition-colors" />
                </div>
              ))}
            </div>
          </ProfileCard>
        </div>

        {/* Strategic Improvement Section */}
        <div className="bg-gradient-to-r from-[#1A0B2E] via-[#0D0D0F] to-[#0D0D0F] border border-red-500/20 rounded-[40px] p-6 sm:p-10 mb-12 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 relative overflow-hidden group text-center lg:text-left">
          <div className="absolute top-0 right-0 w-[600px] h-full bg-red-500/5 blur-[100px] pointer-events-none"></div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 relative z-10">
            <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 shadow-2xl">
              <TrendingUp size={32} />
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-2">Strategic Improvement Required</h5>
              <p className="text-sm font-bold text-white/70 max-w-sm leading-relaxed">
                Tougher analytes suggest prioritizing <span className="text-slate-900 dark:text-white">Physics</span> to boost your overall rank.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 sm:gap-12 relative z-10">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">CURRENT</span>
              <span className="text-2xl font-bold font-space text-red-500">40%</span>
            </div>
            <div className="text-white/10">
              <ChevronRight size={32} />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20 mb-2">TARGET</span>
              <span className="text-2xl font-bold font-space text-green-400">65%</span>
            </div>
          </div>
        </div>

        {/* AI Insight Footer */}
        <div className="bg-gradient-to-r from-[#0D0D0F] via-[#0D0D0F] to-[#1A0B2E] border border-slate-200 dark:border-white/5 rounded-[40px] p-6 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/5 pb-8 lg:pb-0 pr-0 lg:pr-12">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-4">WHAT DOES THIS MEAN?</h5>
            <p className="text-sm font-bold text-white/70 leading-relaxed">
              Your profile reflects an <span className="text-purple-400">Elite Category</span> rank with exceptional community engagement. While you are strong in Chemistry, you currently need improvement in Physics to maintain your competitive rank.
            </p>
          </div>
          <div className="flex-1 pl-0 lg:pl-12 flex flex-col items-center lg:items-end w-full lg:w-auto">
            <div className="text-center lg:text-right mb-6">
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mb-2">NEXT ACTION</h5>
              <p className="text-sm font-bold text-white/90 font-space italic">"Focus on Physics and maintain your streak."</p>
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 text-slate-900 dark:text-white px-10 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-purple-600/20">
              Optimize My Path
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
