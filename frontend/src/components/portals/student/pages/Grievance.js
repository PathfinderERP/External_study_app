import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  HelpCircle, 
  BookOpen, 
  User, 
  Laptop, 
  Wallet, 
  Heart, 
  MessageSquare, 
  ArrowRight,
  Upload,
  MessageCircle,
  PhoneCall,
  Activity,
  Play,
  Volume2,
  Star,
  CheckCircle,
  Info,
  Clock
} from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-20' : 'left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-12 h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-12">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input 
            type="text" 
            placeholder="Search issues, events..." 
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

const Grievance = ({ onNavigate, isSidebarCollapsed }) => {
  const [selectedCategory, setSelectedCategory] = React.useState('academic');
  const [priority, setPriority] = React.useState('IMPORTANT');
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [selectedRating, setSelectedRating] = React.useState(4);

  const categories = [
    { id: 'academic', label: 'Academic Problem', icon: BookOpen },
    { id: 'teacher', label: 'Teacher Issue', icon: User },
    { id: 'technical', label: 'Technical Support', icon: Laptop },
    { id: 'payment', label: 'Payment Issue', icon: Wallet },
    { id: 'mental', label: 'Mental Stress', icon: Heart },
    { id: 'suggestion', label: 'Suggestion', icon: HelpCircle },
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

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1C0F2C]/40 via-[#0D0D0F]/80 to-[#0D0D0F]/80 border border-purple-500/10 rounded-[48px] p-12 mb-16 relative overflow-hidden flex items-center justify-between shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="max-w-xl relative z-10">
            <h1 className="text-5xl font-black font-space leading-[1.1] tracking-tight mb-6 uppercase">
              We're Here<br />
              <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent italic font-black font-space pr-2">
                to Help You
              </span>
            </h1>
            <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wide mb-8">
              Your peace of mind matters. Share your issue anonymously or directly, and we'll support you every step of the way.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-slate-900 dark:text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:scale-105 shadow-lg shadow-purple-500/20">
              Raise an Issue
            </button>
          </div>

          {/* Right Swirling Graphic */}
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-purple-500/20 to-cyan-500/10 relative overflow-hidden flex items-center justify-center shrink-0 border border-slate-200 dark:border-white/5 shadow-inner">
            <div className="absolute inset-4 rounded-full border border-slate-300 dark:border-white/10 animate-spin-slow"></div>
            <div className="absolute inset-8 rounded-full border border-slate-200 dark:border-white/5 border-dashed"></div>
            <div className="absolute inset-12 rounded-full bg-white dark:bg-[#050505]/60 flex items-center justify-center border border-slate-200 dark:border-white/5">
              <HelpCircle size={40} className="text-purple-400 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Category of Concern */}
        <section className="mb-16">
          <h2 className="text-lg font-space font-bold uppercase text-slate-900 dark:text-white mb-2">Category of Concern</h2>
          <p className="text-xs text-slate-500 dark:text-white/40 font-medium mb-8">Select a category to help us route your request to the right team.</p>

          <div className="grid grid-cols-6 gap-4">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <div 
                  key={idx}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex flex-col items-center justify-center gap-4 p-6 rounded-3xl border transition-all duration-300 cursor-pointer text-center ${
                    isActive 
                      ? 'bg-purple-900/10 border-purple-500/30 text-slate-900 dark:text-white shadow-lg shadow-purple-500/5 scale-[1.02]' 
                      : 'bg-white dark:bg-[#0D0D0F]/40 border-slate-200 dark:border-white/5 text-slate-600 dark:text-white/60 hover:text-slate-900 dark:text-white hover:border-slate-300 dark:border-white/10 hover:bg-white dark:bg-[#0D0D0F]'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    isActive ? 'bg-purple-500/15 text-purple-400' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-white/40'
                  }`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider">{cat.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Grievance Form & Live Support Grid */}
        <section className="grid grid-cols-12 gap-8 mb-16">
          {/* Formal Grievance Form */}
          <div className="col-span-7">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl relative overflow-hidden">
              <h3 className="text-xl font-bold font-space text-slate-900 dark:text-white uppercase mb-8">Formal Grievance Form</h3>
              
              <form onSubmit={e => e.preventDefault()} className="space-y-6">
                {/* Topic field */}
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-2.5 block">Topic</label>
                  <input 
                    type="text" 
                    placeholder="Short summary of issue" 
                    className="w-full bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-2xl px-5 py-4 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/40 placeholder-white/20 transition-all font-bold uppercase tracking-wider"
                  />
                </div>

                {/* Priority Selection */}
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-2.5 block">Priority</label>
                  <div className="flex gap-3">
                    {['NORMAL', 'IMPORTANT', 'URGENT'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setPriority(level)}
                        className={`px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${
                          priority === level 
                            ? 'border-purple-500 text-purple-400 bg-purple-500/5' 
                            : 'border-slate-200 dark:border-white/5 text-slate-500 dark:text-white/40 hover:text-slate-700 dark:text-white/80 hover:bg-white/[0.01]'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Detailed Description */}
                <div>
                  <label className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-2.5 block">Detailed Description</label>
                  <textarea 
                    rows={4}
                    placeholder="Explain your concern in detail..."
                    className="w-full bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-2xl px-5 py-4 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/40 placeholder-white/20 transition-all font-bold uppercase tracking-wider resize-none"
                  ></textarea>
                </div>

                {/* File Upload & Anonymous toggle */}
                <div className="flex justify-between items-center border-t border-slate-200 dark:border-white/5 pt-6">
                  {/* Upload */}
                  <div className="flex items-center gap-3 cursor-pointer hover:text-slate-900 dark:text-white text-slate-500 dark:text-white/40 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center">
                      <Upload size={14} />
                    </div>
                    <div>
                      <h5 className="text-[9px] font-black uppercase tracking-wider text-slate-900 dark:text-white">Upload Supporting Files</h5>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-white/30 mt-0.5">Max size 10MB</p>
                    </div>
                  </div>

                  {/* Toggle */}
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Submit Anonymously</span>
                    <button 
                      type="button"
                      onClick={() => setIsAnonymous(!isAnonymous)}
                      className={`w-10 h-6 rounded-full p-1 transition-all ${
                        isAnonymous ? 'bg-purple-600' : 'bg-slate-200 dark:bg-white/10'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transition-all transform ${
                        isAnonymous ? 'translate-x-4' : 'translate-x-0'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* Submit button */}
                <button type="submit" className="w-full py-4.5 bg-purple-600 hover:bg-purple-500 text-slate-900 dark:text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:scale-[1.02] shadow-lg shadow-purple-500/15 mt-6">
                  Submit Grievance
                </button>
              </form>
            </div>
          </div>

          {/* Live Support Column */}
          <div className="col-span-5 space-y-6">
            <h3 className="text-xl font-bold font-space text-slate-900 dark:text-white uppercase">Live Support</h3>

            {/* Chat with Support */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[115px] hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <MessageCircle size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Chat with Support</h4>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Available 24/7</p>
                </div>
              </div>
              <button className="w-full py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 rounded-xl text-[9px] font-black uppercase tracking-wider border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white transition-all">
                Start Chat
              </button>
            </div>

            {/* Chat with Mentor */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[115px] hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Chat with Mentor</h4>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Subject specific queries</p>
                </div>
              </div>
              <button className="w-full py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 rounded-xl text-[9px] font-black uppercase tracking-wider border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white transition-all">
                Connect Now
              </button>
            </div>

            {/* Talk to Counselor */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[115px] hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                  <PhoneCall size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Talk to Counselor</h4>
                  <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Confidential mental health care</p>
                </div>
              </div>
              <button className="w-full py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 rounded-xl text-[9px] font-black uppercase tracking-wider border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white transition-all">
                Call Counselor
              </button>
            </div>
          </div>
        </section>

        {/* Ticket Tracking */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-space font-bold uppercase text-slate-900 dark:text-white">Ticket Tracking</h2>
            <button className="text-[9px] font-black uppercase tracking-widest text-purple-400 hover:underline">Show All History →</button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Ticket 1 */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[130px] hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex justify-between items-start">
                <span className="text-[8px] font-black tracking-widest text-white/30 uppercase">#ATH-4821</span>
                <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Under Review</span>
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white/90 mt-4">Teacher feedback delay</h4>
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5 mt-2">
                <Clock size={10} className="text-purple-400" /> updated 12h ago
              </span>
            </div>

            {/* Ticket 2 */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[130px] hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex justify-between items-start">
                <span className="text-[8px] font-black tracking-widest text-white/30 uppercase">#ATH-3104</span>
                <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Submitted</span>
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white/90 mt-4">Portal Login Issues</h4>
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5 mt-2">
                <Clock size={10} className="text-blue-400" /> updated yesterday
              </span>
            </div>

            {/* Ticket 3 */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 flex flex-col justify-between h-[130px] hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="flex justify-between items-start">
                <span className="text-[8px] font-black tracking-widest text-white/30 uppercase">#ATH-0251</span>
                <span className="text-[8px] font-black tracking-widest px-2 py-0.5 rounded bg-[#37DBAD]/10 text-[#37DBAD] border border-[#37DBAD]/20">Resolved</span>
              </div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white/90 mt-4">Refund Processing</h4>
              <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest flex items-center gap-1.5 mt-2">
                <Clock size={10} className="text-[#37DBAD]" /> completed
              </span>
            </div>
          </div>
        </section>

        {/* Need Help Relaxing Content */}
        <section className="mb-16">
          <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl grid grid-cols-12 gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Left side tags & audio */}
            <div className="col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black font-space text-slate-900 dark:text-white uppercase mb-2">Need Help?</h3>
                <p className="text-xs text-slate-500 dark:text-white/40 font-bold uppercase tracking-widest mb-6">Student life is demanding. Don't carry the weight alone.</p>
                
                {/* tags */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {['Feeling stressed', 'Exam fear', 'Low confidence', 'Pressure'].map((tag, idx) => (
                    <span key={idx} className="text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* audio widget */}
              <div className="bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center justify-between hover:bg-white/[0.02] cursor-pointer group transition-all max-w-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-all">
                    <Play size={16} fill="currentColor" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-900 dark:text-white">Play Calming Audio</h5>
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">5 min focus breathing guide</p>
                  </div>
                </div>
                <Volume2 size={16} className="text-white/30 group-hover:text-slate-900 dark:text-white transition-colors" />
              </div>
            </div>

            {/* Right side Forest Image overlay */}
            <div className="col-span-5 relative rounded-3xl overflow-hidden h-[240px] group border border-slate-200 dark:border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=600" 
                alt="Calming forest background" 
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-between">
                <p className="text-[11px] font-bold uppercase tracking-wide text-slate-700 dark:text-white/80 leading-relaxed italic">
                  "You don't have to be perfect to be amazing. Take a breath, we believe in you."
                </p>
                <button className="bg-slate-200 dark:bg-white/10 hover:bg-white/20 text-slate-900 dark:text-white px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest backdrop-blur-md border border-slate-300 dark:border-white/10 transition-all self-start">
                  Talk to Counselor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Suggestion Box & Resolution Feedback Row */}
        <section className="grid grid-cols-12 gap-8 mb-16">
          {/* Suggestion Box */}
          <div className="col-span-6">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#FF00BF] mb-6 flex items-center gap-1.5">
                  <Activity size={12} /> Suggestion Box
                </h3>
                
                <textarea 
                  rows={4}
                  placeholder="Tell us how we can improve your experience..."
                  className="w-full bg-white dark:bg-[#050505]/60 border border-slate-200 dark:border-white/5 rounded-2xl px-5 py-4 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/40 placeholder-white/20 transition-all font-bold uppercase tracking-wider resize-none mb-6"
                ></textarea>
              </div>

              <button className="w-full py-3.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:bg-white/10 border border-slate-300 dark:border-white/10 rounded-2xl text-[9px] font-black uppercase tracking-wider text-slate-900 dark:text-white transition-all">
                Submit Suggestion
              </button>
            </div>
          </div>

          {/* Resolution Feedback */}
          <div className="col-span-6">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-cyan-400 mb-6 uppercase">Resolution Feedback</h3>
                
                <p className="text-xs text-slate-600 dark:text-white/60 font-bold uppercase tracking-wider mb-6 text-center">Was your recent issue resolved satisfactorily?</p>
                
                <div className="flex gap-3 justify-center mb-8">
                  {['YES', 'PARTIALLY', 'NO'].map((ans) => (
                    <button
                      key={ans}
                      className="px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest border border-slate-200 dark:border-white/5 bg-white dark:bg-[#050505]/40 text-white/50 hover:text-slate-900 dark:text-white hover:border-slate-300 dark:border-white/10 transition-all"
                    >
                      {ans}
                    </button>
                  ))}
                </div>
              </div>

              {/* Star rating control */}
              <div className="border-t border-slate-200 dark:border-white/5 pt-6 text-center">
                <div className="flex justify-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      size={18}
                      onClick={() => setSelectedRating(star)}
                      fill={star <= selectedRating ? '#FFBF00' : 'none'}
                      className={`cursor-pointer transition-colors ${star <= selectedRating ? 'text-[#FFBF00]' : 'text-white/20'}`}
                    />
                  ))}
                </div>
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30">Rate Our Support Speed</span>
              </div>
            </div>
          </div>
        </section>

        {/* Support Insight */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[#1C0F2C]/40 via-[#0D0D0F]/80 to-[#0D0D0F]/80 border border-purple-500/10 rounded-[32px] p-6 shadow-2xl relative overflow-hidden flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Info size={20} className="animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white">Your Support Insight</h4>
                <p className="text-[9px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest mt-1">
                  You have <span className="text-purple-400 font-extrabold">1 issue under review</span> and support is in progress. Check updates regularly.
                </p>
              </div>
            </div>
            
            <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
              Check Status
            </button>
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

export default Grievance;
