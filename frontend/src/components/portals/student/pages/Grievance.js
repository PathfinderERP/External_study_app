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
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-0 sm:left-20' : 'left-0 sm:left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-4 sm:px-8 md:px-12 h-16 sm:h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-4 sm:gap-12 flex-1 min-w-0">
        <div className="relative w-full max-w-[200px] sm:max-w-[300px]">
          <Search size={16} className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input
            type="text"
            placeholder="Search issues..."
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

const Grievance = ({ onNavigate, isSidebarCollapsed }) => {
  const [selectedCategory, setSelectedCategory] = React.useState('academic');
  const [priority, setPriority] = React.useState('IMPORTANT');
  const [isAnonymous, setIsAnonymous] = React.useState(false);
  const [selectedRating, setSelectedRating] = React.useState(4);

  const categories = [
    { id: 'academic', label: 'Academic Problem', icon: '/images/grievance/Icon1.png' },
    { id: 'teacher', label: 'Teacher Issue', icon: '/images/grievance/Icon2.png' },
    { id: 'technical', label: 'Technical Problem', icon: '/images/grievance/Icon3.png' },
    { id: 'payment', label: 'Payment Issue', icon: '/images/grievance/Icon4.png' },
    { id: 'mental', label: 'Mental Stress', icon: '/images/grievance/Icon5.png' },
    { id: 'suggestion', label: 'Suggestion', icon: '/images/grievance/Icon6.png' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-white font-manrope overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-[0.03]"></div>
        <div className="absolute top-[-10%] left-[20%] w-[900px] h-[900px] bg-purple-600/10 rounded-full blur-[200px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px]"></div>
      </div>



      <main className="relative z-10 pt-0 sm:pt-6 pb-10 lg:pb-32 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">

        {/* Hero Section */}
        <section
          className="mb-6 sm:mb-16 relative overflow-hidden rounded-none sm:rounded-[32px] -mx-4 sm:mx-0 min-h-[280px] sm:min-h-[320px] flex items-center shadow-2xl shadow-purple-900/30"
          style={{
            backgroundImage: "url('/images/grievance/home%20_bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* subtle dark overlay for text legibility */}
          <div className="absolute inset-0 bg-[#050318]/40 rounded-[32px]" />

          {/* Left text content */}
          <div className="relative z-10 flex-1 px-6 sm:px-12 py-8 sm:py-10">
            <h1 className="text-[28px] sm:text-[44px] md:text-[80px] font-bold tracking-tight mb-4 sm:mb-5 leading-[1.15] sm:leading-[1.1] text-white" style={{ fontFamily: '"Organetto", sans-serif' }}>
              We're Here<br />
              <span className="text-[#888888]">
                to Help You
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-medium mb-6 sm:mb-8 max-w-[280px] sm:max-w-sm">
              Your peace of mind matters. Share your issue anonymously or directly, and we'll support you every step of the way.
            </p>
            <button
              className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-[20px] text-xs sm:text-sm font-bold tracking-wide transition-all hover:scale-105 shadow-lg"
              style={{ background: 'linear-gradient(to right, #400071, #DDB7FF)' }}
            >
              Raise an Issue
            </button>
          </div>

          {/* Right sphere — Container.png */}
          <div className="relative z-10 shrink-0 pr-8 sm:pr-12 hidden sm:block">
            <img
              src="/images/grievance/Container.png"
              alt="Support sphere"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Bottom glowing border line */}
          <div
            className="absolute bottom-0 left-0 w-full h-[3px] z-20 opacity-60"
            style={{ background: 'linear-gradient(to right, transparent 0%, #9333ea 40%, #DDB7FF 60%, transparent 100%)' }}
          />
        </section>



        {/* Category of Concern */}
        <section className="mb-8 lg:mb-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Category of Concern</h2>
          <p className="text-sm text-slate-500 dark:text-white/40 font-medium mb-8">Select a category to help us route your request to the right team.</p>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4">
            {categories.map((cat, idx) => {
              const isActive = selectedCategory === cat.id;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex flex-col gap-2 sm:gap-4 p-4 sm:p-6 min-h-[96px] sm:min-h-0 rounded-[20px] border cursor-pointer transition-all duration-300 backdrop-blur-sm justify-center sm:justify-start ${isActive
                    ? 'bg-purple-100 dark:bg-[#643cb4]/25 border-purple-400 dark:border-[#a064ff]/60 shadow-[0_0_20px_rgba(139,92,246,0.15)]'
                    : 'bg-white dark:bg-[#2c273d]/40 border-slate-200 dark:border-[#4d4354]/10 shadow-sm dark:shadow-none hover:bg-purple-50 dark:hover:bg-[#2c273d]/60 hover:border-purple-200 dark:hover:border-[#4d4354]/30'
                    }`}
                >
                  {/* Icon top-left */}
                  <img
                    src={cat.icon}
                    alt={cat.label}
                    className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                    style={{ imageRendering: 'auto' }}
                  />
                  {/* Label below */}
                  <span className="text-[11px] sm:text-sm font-bold text-slate-800 dark:text-white leading-tight break-words">{cat.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Grievance Form & Live Support Grid */}
        <section className="flex flex-col lg:grid lg:grid-cols-12 gap-8 mb-8 lg:mb-16">
          {/* Formal Grievance Form */}
          <div className="w-full lg:col-span-7">
            <div className="h-full bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col">
              <h3 className="text-xl font-bold font-space text-slate-900 dark:text-white uppercase mb-8">Formal Grievance Form</h3>

              <form onSubmit={e => e.preventDefault()} className="space-y-5">
                {/* Topic field */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/80 mb-2 block">Topic</label>
                  <input
                    type="text"
                    placeholder="Short summary of issue"
                    className="w-full bg-slate-50 dark:bg-[#050505] border border-slate-200 dark:border-transparent rounded-2xl px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/40 placeholder-slate-300 dark:placeholder-white/20 transition-all font-bold uppercase tracking-wider shadow-inner"
                  />
                </div>

                {/* Priority Selection */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/80 mb-2 block">Priority</label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {['NORMAL', 'IMPORTANT', 'URGENT'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setPriority(level)}
                        className={`py-2 px-1 sm:px-5 rounded-xl text-[8px] xs:text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest border transition-all flex items-center justify-center ${priority === level
                          ? 'border-purple-500 text-purple-400 bg-purple-500/5 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                          : 'border-slate-200 dark:border-transparent text-slate-500 dark:text-white/40 bg-slate-50 dark:bg-[#050505] hover:text-slate-700 dark:text-white/60'
                          }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Detailed Description */}
                <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/80 mb-2 block">Detailed Description</label>
                  <textarea
                    rows={4}
                    placeholder="Explain your concern in detail..."
                    className="w-full bg-slate-50 dark:bg-[#050505] border border-slate-200 dark:border-transparent rounded-2xl px-4 py-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/40 placeholder-slate-300 dark:placeholder-white/20 transition-all font-bold uppercase tracking-wider resize-none shadow-inner"
                  ></textarea>
                </div>

                {/* File Upload & Anonymous toggle */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 sm:gap-0 border-t border-slate-200 dark:border-white/5 pt-5">
                  {/* Upload */}
                  <div className="flex items-center gap-3 cursor-pointer hover:text-slate-900 dark:text-white text-slate-500 dark:text-white/40 transition-colors">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0">
                      <img src="/images/grievance/upload_file.png" alt="Upload" className="w-3 h-3 object-contain" />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-900 dark:text-white leading-tight">Upload Supporting Files</h5>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-white/30 mt-0.5">Max size 10MB</p>
                    </div>
                  </div>

                  {/* Toggle */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-3 border-t sm:border-none border-slate-100 dark:border-white/5 pt-3 sm:pt-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40">Submit Anonymously</span>
                    <button
                      type="button"
                      onClick={() => setIsAnonymous(!isAnonymous)}
                      className={`w-9 h-5 rounded-full p-1 transition-all shrink-0 ${!isAnonymous ? 'bg-slate-200 dark:bg-[#050505] border border-slate-300 dark:border-white/5' : ''
                        }`}
                      style={isAnonymous ? { background: 'linear-gradient(to right, #400071, #DDB7FF)' } : {}}
                    >
                      <div className={`w-3 h-3 rounded-full bg-white transition-all transform ${isAnonymous ? 'translate-x-4' : 'translate-x-0'
                        }`}></div>
                    </button>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 text-white rounded-2xl text-xs font-black uppercase tracking-[0.25em] transition-all hover:scale-[1.02] shadow-lg shadow-purple-500/15 mt-5"
                  style={{ background: 'linear-gradient(to right, #400071, #DDB7FF)' }}
                >
                  Submit Grievance
                </button>
              </form>
            </div>
          </div>

          {/* Live Support Column */}
          <div className="col-span-12 lg:col-span-5 flex flex-col h-full">
            <h3 className="text-xl font-bold font-space text-slate-900 dark:text-white uppercase mb-6">Live Support</h3>

            <div className="flex-1 flex flex-col justify-between gap-4">
              {/* Chat with Support */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[20px] p-5 flex flex-col justify-center gap-4 hover:border-slate-300 dark:border-white/10 transition-all flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                    <img src="/images/grievance/Chat%20support.png" alt="Support" className="w-4 h-4 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Chat with Support</h4>
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Available 24/7</p>
                  </div>
                </div>
                <button className="w-full h-[46px] bg-slate-100 dark:bg-[#2C273D] hover:bg-slate-200 dark:hover:bg-[#3a3350] rounded-lg text-xs font-black uppercase tracking-wider border border-slate-300 dark:border-[#4D4354]/20 text-slate-900 dark:text-white transition-all">
                  Start Chat
                </button>
              </div>

              {/* Chat with Mentor */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[20px] p-5 flex flex-col justify-center gap-4 hover:border-slate-300 dark:border-white/10 transition-all flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <img src="/images/grievance/Chat_mentor.png" alt="Mentor" className="w-4 h-4 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Chat with Mentor</h4>
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Subject specific queries</p>
                  </div>
                </div>
                <button className="w-full h-[46px] bg-slate-100 dark:bg-[#2C273D] hover:bg-slate-200 dark:hover:bg-[#3a3350] rounded-lg text-xs font-black uppercase tracking-wider border border-slate-300 dark:border-[#4D4354]/20 text-slate-900 dark:text-white transition-all">
                  Connect Now
                </button>
              </div>

              {/* Talk to Counselor */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[20px] p-5 flex flex-col justify-center gap-4 hover:border-slate-300 dark:border-white/10 transition-all flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400">
                    <img src="/images/grievance/Chat_counselor.png" alt="Counselor" className="w-4 h-4 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Talk to Counselor</h4>
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Confidential mental health care</p>
                  </div>
                </div>
                <button className="w-full h-[46px] bg-slate-100 dark:bg-[#2C273D] hover:bg-slate-200 dark:hover:bg-[#3a3350] rounded-lg text-xs font-black uppercase tracking-wider border border-slate-300 dark:border-[#4D4354]/20 text-slate-900 dark:text-white transition-all">
                  Call Counselor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Ticket Tracking */}
        <section className="mb-8 lg:mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Ticket Tracking</h2>
            <button className="text-sm font-semibold text-purple-600 dark:text-purple-300 hover:underline">View All History →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ticket 1 */}
            <div className="bg-white dark:bg-[#171324] rounded-2xl p-5 flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-[#1a1529] transition-all border-l-4 border-l-[#8B5CF6] border-y border-r border-slate-200 dark:border-y-white/5 dark:border-r-white/5 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-slate-500 dark:text-white/40">#ETH-8821</span>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] uppercase tracking-wider">Under Review</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Teacher feedback delay</h4>
              <p className="text-xs text-slate-500 dark:text-white/40 leading-relaxed mb-4 line-clamp-2">Mathematics Module 4 assignment has not been graded for 12 days...</p>
              <div className="mt-auto">
                <span className="text-[10px] text-slate-500 dark:text-white/30 flex items-center gap-1.5">
                  <Clock size={12} className="text-slate-400 dark:text-white/20" /> Updated 2h ago
                </span>
              </div>
            </div>

            {/* Ticket 2 */}
            <div className="bg-white dark:bg-[#171324] rounded-2xl p-5 flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-[#1a1529] transition-all border-l-4 border-l-[#3B82F6] border-y border-r border-slate-200 dark:border-y-white/5 dark:border-r-white/5 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-slate-500 dark:text-white/40">#ETH-7490</span>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] uppercase tracking-wider">Submitted</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Portal Login Issues</h4>
              <p className="text-xs text-slate-500 dark:text-white/40 leading-relaxed mb-4 line-clamp-2">Facing 404 errors during peak study hours in the library...</p>
              <div className="mt-auto">
                <span className="text-[10px] text-slate-500 dark:text-white/30 flex items-center gap-1.5">
                  <Clock size={12} className="text-slate-400 dark:text-white/20" /> Yesterday
                </span>
              </div>
            </div>

            {/* Ticket 3 */}
            <div className="bg-white dark:bg-[#171324] rounded-2xl p-5 flex flex-col justify-between hover:bg-slate-50 dark:hover:bg-[#1a1529] transition-all border-l-4 border-l-[#10B981] border-y border-r border-slate-200 dark:border-y-white/5 dark:border-r-white/5 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-medium text-slate-500 dark:text-white/40">#ETH-6122</span>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] uppercase tracking-wider">Resolved</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">Refund Processing</h4>
              <p className="text-xs text-slate-500 dark:text-white/40 leading-relaxed mb-4 line-clamp-2">Duplicate payment for the Data Science specialization track...</p>
              <div className="mt-auto">
                <span className="text-[10px] text-slate-500 dark:text-white/30 flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-slate-400 dark:text-white/20" /> Completed
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Need Help Relaxing Content */}
        <section className="mb-8 lg:mb-16">
          <div className="bg-white dark:bg-[#171324] border border-slate-200 dark:border-white/5 rounded-[32px] p-6 sm:p-8 shadow-2xl flex flex-col lg:grid lg:grid-cols-12 gap-8 relative overflow-hidden">
            {/* Left side tags & audio */}
            <div className="w-full lg:col-span-6 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">Need Help?</h3>
              <p className="text-sm text-slate-500 dark:text-white/50 mb-6 sm:mb-8 leading-relaxed max-w-md">Student life is demanding. Don't carry the weight alone.</p>

              {/* tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                {['Feeling stressed', 'Exam fear', 'Low confidence', 'Pressure'].map((tag, idx) => (
                  <div key={idx} className="bg-slate-100 dark:bg-[#201B30] rounded-xl px-3 py-2 sm:px-5 sm:py-3 flex items-center border border-slate-200 dark:border-transparent">
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-white/80">{tag}</span>
                  </div>
                ))}
              </div>

              {/* audio widget */}
              <div className="bg-slate-50 dark:bg-transparent border border-slate-200 dark:border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-white/[0.02] cursor-pointer group transition-all">
                <div className="w-12 h-12 rounded-full bg-[#FFA3BA] flex items-center justify-center text-[#5A1B2C] group-hover:scale-105 transition-all shadow-lg shadow-pink-500/20">
                  <Play size={20} fill="currentColor" className="ml-1" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Play Calming Audio</h5>
                  <p className="text-[11px] font-medium text-slate-500 dark:text-white/40">10 Min Deep Breathing Guide</p>
                </div>
              </div>
            </div>

            {/* Right side Forest Image overlay */}
            <div className="w-full lg:col-span-6 relative rounded-2xl overflow-hidden h-[250px] sm:h-[398px] border border-slate-200 dark:border-white/5 group">
              <img
                src="/images/grievance/Peaceful%20Forest.png"
                alt="Calming forest background"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <img
                src="/images/grievance/forest%20bgGradient.png"
                alt="Gradient overlay"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <p className="text-base font-medium text-white/90 leading-relaxed italic mb-6 max-w-sm">
                  "You don't have to be perfect to be amazing. Take a breath, we've got you."
                </p>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 h-[50px] flex items-center justify-center rounded-lg text-sm font-semibold backdrop-blur-md border border-white/20 transition-all self-start shadow-lg">
                  Talk to Counselor
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Suggestion Box & Resolution Feedback Row */}
        <section className="flex flex-col lg:grid lg:grid-cols-12 gap-8 mb-8 lg:mb-16">
          {/* Suggestion Box */}
          <div className="w-full lg:col-span-6">
            <div className="bg-white dark:bg-[#120F18] border border-slate-200 dark:border-white/5 rounded-[32px] p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                  <img src="/images/grievance/Suggestion_box.png" className="w-6 h-6" alt="Suggestion box icon" />
                  Suggestion Box
                </h3>

                <textarea
                  rows={4}
                  placeholder="Tell us how we can improve your experience..."
                  className="w-full bg-slate-50 dark:bg-[#0D0B12] border border-slate-200 dark:border-white/5 rounded-2xl px-5 py-4 text-base text-slate-900 dark:text-white focus:outline-none focus:border-purple-500/40 placeholder-slate-400 dark:placeholder-white/30 transition-all font-medium resize-none mb-6"
                ></textarea>
              </div>

              <button className="w-full py-3.5 bg-slate-100 dark:bg-[#252035] hover:bg-slate-200 dark:hover:bg-[#2A253D] rounded-2xl text-base font-semibold text-slate-900 dark:text-white transition-all shadow-sm">
                Submit Suggestion
              </button>
            </div>
          </div>

          {/* Resolution Feedback */}
          <div className="w-full lg:col-span-6">
            <div className="bg-white dark:bg-[#120F18] border border-slate-200 dark:border-white/5 rounded-[32px] p-6 sm:p-8 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">Resolution Feedback</h3>

                <p className="text-base text-slate-600 dark:text-white/60 font-medium mb-8 text-center">Was your recent issue resolved satisfactorily?</p>

                <div className="flex flex-wrap gap-2 sm:gap-4 justify-center mb-10">
                  {['YES', 'PARTIALLY', 'NO'].map((ans) => (
                    <button
                      key={ans}
                      className="px-4 py-2 sm:px-6 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-slate-200 dark:border-white/10 bg-transparent text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-all"
                    >
                      {ans}
                    </button>
                  ))}
                </div>
              </div>

              {/* Star rating control */}
              <div className="text-center">
                <div className="flex justify-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      onClick={() => setSelectedRating(star)}
                      fill={star <= selectedRating ? '#A6B3FB' : 'none'}
                      className={`cursor-pointer transition-colors ${star <= selectedRating ? 'text-[#A6B3FB]' : 'text-white/20'}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-slate-500 dark:text-white/40">RATE OUR SUPPORT SPEED</span>
              </div>
            </div>
          </div>
        </section>

        {/* Support Insight */}
        <section>
          <div className="bg-gradient-to-br from-[#2C273D] to-[#211C32] rounded-[32px] px-6 lg:px-8 py-3 md:py-0 md:min-h-[156px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center md:items-stretch justify-center md:justify-between gap-4 md:gap-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <div className="w-12 h-12 shrink-0">
                <img src="/images/grievance/Suppot%20insight.png" alt="Support Insight Icon" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Your Support Insight</h4>
                <p className="text-xs sm:text-sm font-medium text-[#E7DEFC]/60">
                  You have <span className="text-[#DDB7FF]">1 issue under review</span> and support is in progress. Check updates regularly or start a chat for faster help.
                </p>
              </div>
            </div>

            <button className="bg-white hover:bg-slate-100 text-[#100B20] px-8 h-12 flex items-center justify-center rounded-[20px] text-sm font-bold transition-all whitespace-nowrap shrink-0 w-full md:w-auto mt-2 md:mt-0 md:self-center">
              Check Status
            </button>
          </div>
        </section>



      </main>
    </div>
  );
};

export default Grievance;
