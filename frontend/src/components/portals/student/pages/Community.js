import React from 'react';
import { MessageSquare, Users, HelpCircle, Sparkles, ChevronDown, Plus } from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-8 ${isSidebarCollapsed ? 'left-[calc(50%+40px)]' : 'left-[calc(50%+144px)]'} -translate-x-1/2 w-full max-w-[1200px] z-50 px-8 transition-all duration-300`}>
      <div className="bg-slate-100 dark:bg-white/5 backdrop-blur-xl border border-slate-300 dark:border-white/10 rounded-full h-16 flex items-center justify-between px-8 shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('dashboard')}>
          <div className="w-8 h-8 bg-[#9F7AEA] rounded flex items-center justify-center text-slate-900 dark:text-white text-[10px] font-bold">SA</div>
          <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">StudyAdda</span>
        </div>
        
        <div className="flex items-center gap-10">
          <NavLink label="Home" active />
          <NavLink label="Community" onClick={() => onNavigate('community')} />
          <NavLink label="Doubts" />
        </div>

        <div className="flex items-center gap-8">
          <button className="text-xs font-bold text-white/70 hover:text-slate-900 dark:text-white transition-colors">Login</button>
          <button className="bg-[#D671Z6] bg-gradient-to-r from-[#FF7EEF] to-[#BD6AFF] text-slate-900 dark:text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-purple-500/20">
            Join Community
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`text-xs font-bold uppercase tracking-[0.15em] transition-all hover:text-slate-900 dark:text-white ${active ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-white/40'}`}
  >
    {label}
  </button>
);

const Community = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px]"></div>
      </div>

      

      <main className="relative z-10 pt-6 pb-32 max-w-[1440px] mx-auto px-[80px]">
        
        {/* Rocket Image Floating */}
        <div className="absolute left-[-40px] top-[400px] w-[350px] animate-float z-20 pointer-events-none opacity-90">
          <img src="/images/figma_assets/community/rocket.png" alt="Rocket" className="w-full h-auto drop-shadow-[0_0_80px_rgba(168,85,247,0.3)]" />
        </div>

        {/* Hero Section */}
        <section className="text-center mb-60 relative">
          <h1 className="text-[110px] font-bold font-space leading-[0.9] tracking-tighter mb-10">
            Connect. Learn.<br />
            <span className="text-[#888888] font-bold">Grow Together.</span>
          </h1>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
            The ultimate Ethereal Laboratory for the next generation of scholars.<br />
            Experience real-time collaboration and AI-driven insights.
          </p>
          
          <div className="flex flex-col items-center gap-12">
            <button className="bg-[#1C1C1E] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white px-8 py-4 rounded-full text-sm font-bold flex items-center gap-3 hover:bg-slate-200 dark:bg-white/10 transition-all group shadow-xl">
              <div className="bg-slate-200 dark:bg-white/10 p-1 rounded-md group-hover:bg-purple-500 transition-colors">
                <Plus size={14} className="text-slate-900 dark:text-white" />
              </div>
              Join now
            </button>
            
            <div className="w-12 h-12 border border-slate-300 dark:border-white/10 rounded-full flex items-center justify-center text-slate-500 dark:text-white/40 cursor-pointer hover:border-white/30 hover:text-slate-900 dark:text-white transition-all">
              <ChevronDown size={20} />
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-12 gap-8">
          
          {/* Card 1: Live Chat */}
          <div className="col-span-8 bg-white dark:bg-[#0D0D0F] border border-purple-500/20 rounded-[40px] p-12 h-[500px] relative overflow-hidden group hover:border-purple-500/40 transition-all duration-700 shadow-2xl">
            <div className="absolute top-10 right-10 w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
              <MessageSquare size={24} />
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <h3 className="text-4xl font-bold font-space mb-4">Live Chat Rooms</h3>
                <p className="text-[#666666] text-lg max-w-sm">Instant global communication across all subjects.</p>
              </div>
              
              <div className="space-y-6 w-3/4">
                <div className="flex gap-4 items-end">
                  <div className="w-10 h-10 bg-slate-100 dark:bg-white/5 rounded-lg border border-slate-300 dark:border-white/10 flex items-center justify-center text-xs overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
                  </div>
                  <div className="bg-[#1C1C1E] p-4 rounded-2xl rounded-bl-none text-sm font-medium border border-slate-200 dark:border-white/5 shadow-lg">
                    Hey guys, studying for finals?
                  </div>
                </div>
                <div className="flex gap-4 items-end flex-row-reverse">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg border border-purple-500/20 flex items-center justify-center text-xs">
                    SS
                  </div>
                  <div className="bg-purple-600/20 p-4 rounded-2xl rounded-br-none text-sm font-medium border border-purple-500/20 shadow-lg text-purple-100">
                    Yep! Working on Calculus.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Ask a Doubt */}
          <div className="col-span-4 bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] p-12 h-[500px] flex flex-col justify-between group hover:border-slate-400 dark:border-white/20 transition-all duration-700 shadow-2xl">
            <div>
              <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] mb-10">
                <HelpCircle size={24} />
              </div>
              <h3 className="text-3xl font-bold font-space mb-4">Ask a Doubt</h3>
              <p className="text-[#666666] text-lg">Get answers from experts and peers within minutes.</p>
            </div>
            
            <div className="bg-[#121214] border border-slate-200 dark:border-white/5 p-6 rounded-3xl shadow-inner">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#F76171]">Physics</span>
                <span className="text-[10px] font-bold text-[#444444]">2 mins ago</span>
              </div>
              <p className="text-sm font-semibold leading-relaxed text-[#AAAAAA]">
                How does time dilation work near a black hole event horizon?
              </p>
            </div>
          </div>

          {/* Card 3: Study Groups */}
          <div className="col-span-4 bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] p-12 h-[500px] flex flex-col justify-between group hover:border-slate-400 dark:border-white/20 transition-all duration-700 shadow-2xl">
            <div>
              <div className="w-12 h-12 bg-[#F43F5E]/10 rounded-2xl flex items-center justify-center text-[#F43F5E] mb-10">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-bold font-space mb-4">Study Groups</h3>
              <p className="text-[#666666] text-lg">Form deep-focus squads for intensive learning sessions.</p>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#0D0D0F] bg-[#1C1C1E] overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} alt="user" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-[#0D0D0F] bg-[#222224] flex items-center justify-center text-[10px] font-bold text-[#666666]">
                  +12
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: AI Assistant */}
          <div className="col-span-8 bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] p-12 h-[500px] flex flex-col justify-between group hover:border-slate-400 dark:border-white/20 transition-all duration-700 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 bg-slate-200 dark:bg-white/10 rounded-2xl flex items-center justify-center text-slate-900 dark:text-white">
                <Sparkles size={24} />
              </div>
              <div className="bg-[#121214] border border-slate-300 dark:border-white/10 p-6 rounded-3xl w-[350px]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,1)]"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-white/40">AI Processing</span>
                </div>
                <div className="flex items-end gap-3 h-24">
                  {[40, 70, 100, 60, 30].map((h, i) => (
                    <div 
                      key={i} 
                      className="flex-1 bg-gradient-to-t from-purple-600 to-purple-400 rounded-md" 
                      style={{ height: `${h}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-bold font-space mb-4">AI Assistant</h3>
              <p className="text-[#666666] text-lg max-w-md">Personalized learning paths and code debugging powered by advanced neural networks.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-60 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col gap-20">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold tracking-tight text-white/90">The Galactic Nexus</h2>
            <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em] text-[#444444]">
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

export default Community;
