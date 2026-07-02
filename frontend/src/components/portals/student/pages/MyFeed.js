import React from 'react';
import { Search, Bell, User, Plus, MessageSquare, Image, Video, HelpCircle, Heart, MessageCircle, Share2, Bookmark, ExternalLink, Trophy, Wallet } from 'lucide-react';

const StoryCircle = ({ name, active, color }) => (
  <div className="flex flex-col items-center gap-2 group cursor-pointer">
    <div className={`p-1 rounded-full border-2 transition-all duration-300 ${active ? 'border-purple-500 scale-110' : 'border-slate-300 dark:border-white/10 grayscale group-hover:grayscale-0'}`}>
      <div className="w-14 h-14 rounded-full border-2 border-black bg-[#1A1A1C] overflow-hidden flex items-center justify-center">
        {name === '+' ? (
          <Plus size={24} className="text-slate-500 dark:text-white/40" />
        ) : (
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`} alt={name} />
        )}
      </div>
    </div>
    <span className="text-[10px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest">{name.length > 8 ? name.substring(0, 8) + '...' : name}</span>
  </div>
);

const FeedCard = ({ user, time, subject, content, image, tags }) => (
  <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] p-8 mb-8 group hover:border-slate-300 dark:border-white/10 transition-all shadow-2xl">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full border border-slate-300 dark:border-white/10 overflow-hidden">
          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user}`} alt="" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-sm">{user}</h4>
            <span className="text-[10px] bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-black uppercase tracking-widest">Mentor</span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-white/40 font-bold uppercase tracking-widest">{time}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 px-3 py-1.5 border border-slate-300 dark:border-white/10 rounded-full">{subject}</span>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 px-3 py-1.5 border border-slate-300 dark:border-white/10 rounded-full">CLASS X</span>
      </div>
    </div>

    <div className="text-[#AAAAAA] text-sm leading-relaxed mb-8 font-medium">
      {content}
    </div>

    {image && (
      <div className="relative rounded-3xl overflow-hidden mb-8 border border-slate-300 dark:border-white/10">
        <img src={image} className="w-full h-auto object-cover max-h-[500px]" alt="" />
        <div className="absolute bottom-6 right-6">
          <button className="bg-black/60 backdrop-blur-md text-slate-900 dark:text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border border-slate-300 dark:border-white/10 hover:bg-black/80 transition-all">
            <ExternalLink size={14} />
            View Full
          </button>
        </div>
      </div>
    )}

    <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-white/5">
      <div className="flex items-center gap-8">
        <button className="flex items-center gap-2 text-slate-500 dark:text-white/40 hover:text-red-400 transition-colors">
          <Heart size={18} />
          <span className="text-xs font-bold">128</span>
        </button>
        <button className="flex items-center gap-2 text-slate-500 dark:text-white/40 hover:text-purple-400 transition-colors">
          <MessageCircle size={18} />
          <span className="text-xs font-bold">24</span>
        </button>
        <button className="flex items-center gap-2 text-slate-500 dark:text-white/40 hover:text-blue-400 transition-colors">
          <Share2 size={18} />
          <span className="text-xs font-bold">Share</span>
        </button>
      </div>
      <button className="text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white transition-colors">
        <Bookmark size={18} />
      </button>
    </div>
  </div>
);

const MyFeed = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden">
      <main className="pt-6 pb-32 max-w-[900px] mx-auto px-4">
        
        {/* Stories */}
        <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar">
          <StoryCircle name="+" active />
          <StoryCircle name="Rahul_S" active />
          <StoryCircle name="Sarah_K" />
          <StoryCircle name="Live_Now" active />
          <StoryCircle name="Notes_UX" />
          <StoryCircle name="Exam_Prep" />
          <StoryCircle name="Physics" />
        </div>

        {/* Create Post */}
        <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] p-8 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 rounded-full border border-slate-300 dark:border-white/10 overflow-hidden shrink-0">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Subhranil" alt="" />
            </div>
            <div className="flex-1">
              <textarea 
                placeholder="What do you want to share today?"
                className="w-full bg-transparent border-none text-lg font-medium placeholder:text-[#333333] focus:outline-none resize-none h-24 pt-2"
              ></textarea>
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-6">
                  <button className="flex items-center gap-2 text-slate-500 dark:text-white/40 hover:text-purple-400 transition-all text-xs font-bold uppercase tracking-widest">
                    <MessageSquare size={16} />
                    Post Text
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 dark:text-white/40 hover:text-blue-400 transition-all text-xs font-bold uppercase tracking-widest">
                    <Image size={16} />
                    Image
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 dark:text-white/40 hover:text-pink-400 transition-all text-xs font-bold uppercase tracking-widest">
                    <Video size={16} />
                    Video
                  </button>
                  <button className="flex items-center gap-2 text-slate-500 dark:text-white/40 hover:text-green-400 transition-all text-xs font-bold uppercase tracking-widest">
                    <HelpCircle size={16} />
                    Ask Doubt
                  </button>
                </div>
                <button className="bg-purple-600 hover:bg-purple-500 text-slate-900 dark:text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-purple-600/20">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed Articles */}
        <FeedCard 
          user="Sarah K."
          time="2 hrs ago"
          subject="Physics"
          content={
            <div className="space-y-6">
              <p>Can someone explain the derivation of Gauss's Law from Coulomb's Law? I'm getting stuck at the integration over the non-spherical surface.</p>
              <div className="bg-black/40 border border-slate-200 dark:border-white/5 p-4 rounded-2xl italic text-slate-600 dark:text-white/60 text-xs">
                "If the flux through a closed surface is zero, does it mean the electric field is zero everywhere on the surface?"
              </div>
              
              {/* Best Answer Section */}
              <div className="mt-8 border-l-2 border-purple-500 pl-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                      <User size={14} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-purple-400">Dr. Verma (Mentor)</p>
                      <p className="text-[8px] text-slate-500 dark:text-white/40 uppercase tracking-widest font-bold">IIT-B Professor</p>
                    </div>
                  </div>
                  <span className="text-[8px] font-black bg-purple-500 text-slate-900 dark:text-white px-2 py-0.5 rounded uppercase tracking-widest">Best Answer</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  Not necessarily. The net flux is zero if net charge enclosed is zero. The E-field could be entering from one side and leaving the other. Watch out for the dot product!
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Write a reply..." 
                    className="flex-1 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full py-1.5 px-4 text-[10px] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          }
        />

        <FeedCard 
          user="Rohit M."
          time="4 hrs ago"
          subject="Organic Chemistry"
          content="Finished my summary for Aldehydes and Ketones mechanisms. Hope this helps with the upcoming mid-term! 🚀"
          image="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop"
        />

        {/* Bottom Grid Cards */}
        <div className="grid grid-cols-3 gap-8 mt-24">
          <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] p-8 h-[250px] flex flex-col justify-between">
            <div className="flex items-center gap-3 text-pink-400">
              <Trophy size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Leaderboard</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aman" alt="" />
                  </div>
                  <span className="text-xs font-bold">Aman Gupta</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-white/40">2.4k XP</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Isha" alt="" />
                  </div>
                  <span className="text-xs font-bold">Isha Rao</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500 dark:text-white/40">1.9k XP</span>
              </div>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-slate-900 dark:text-white transition-all text-center">View All Rankings</button>
          </div>

          <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] p-8 h-[250px] flex flex-col justify-between">
            <div className="flex items-center gap-3 text-blue-400">
              <Plus size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest">Suggested Addas</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">Physics Adda</span>
                <button className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border border-purple-500/20">Join</button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold">Chemistry Adda</span>
                <button className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border border-purple-500/20">Join</button>
              </div>
            </div>
            <div className="h-2 w-full"></div>
          </div>

          <div className="bg-white dark:bg-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[40px] p-8 h-[250px] flex flex-col justify-between border-red-500/20 group relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path d="M20,50 L40,50 L50,30 L60,70 L70,50 L90,50" fill="none" stroke="currentColor" strokeWidth="1" className="text-red-500" />
              </svg>
            </div>
            <div className="flex items-center gap-3 text-red-500 relative z-10">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-widest">Live Now</span>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-white/5 relative z-10">
              <p className="text-[10px] font-bold text-slate-600 dark:text-white/60 mb-2 uppercase tracking-widest">Organic Chemistry</p>
              <div className="flex items-center -space-x-2">
                {[1, 2].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0D0D0F] bg-gray-700"></div>)}
                <span className="text-[8px] font-bold ml-4 text-slate-500 dark:text-white/40">+2.4k</span>
              </div>
            </div>
            <button className="bg-red-500/10 text-red-500 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500/20 transition-all relative z-10">Watch Now</button>
          </div>
        </div>

        {/* Floating AI Insight Card at the bottom */}
        <div className="mt-20 bg-gradient-to-r from-[#1A0B2E] via-[#0D0D0F] to-[#0A1A2E] border border-slate-200 dark:border-white/5 rounded-[40px] p-10 flex items-center justify-between relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10 flex-1 border-r border-slate-200 dark:border-white/5 pr-10">
            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-4">WHAT DOES THIS MEAN?</h5>
            <p className="text-sm font-bold leading-relaxed max-w-sm">
              You are currently in an <span className="text-purple-400">"Engaging"</span> phase, but your "Helping" ratio has dropped by 12% this week.
            </p>
          </div>
          <div className="relative z-10 flex-1 pl-10 flex items-center gap-6">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shadow-2xl">
              <HelpCircle size={32} />
            </div>
            <div>
              <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">WHAT SHOULD YOU DO NEXT?</h5>
              <p className="text-sm font-bold leading-relaxed">
                Answer <span className="text-blue-400">3 doubts</span> in Physics to reclaim your "Top Helper" streak.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-40 pt-6 border-t border-slate-200 dark:border-white/5 flex justify-between items-center text-slate-400 dark:text-white/20">
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">The Galactic Nexus</span>
          <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Support</a>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest">© 2024 StudyAdda</span>
        </footer>
      </main>
    </div>
  );
};

export default MyFeed;
