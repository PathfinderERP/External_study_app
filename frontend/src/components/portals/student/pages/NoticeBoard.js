import React from 'react';
import { 
  Search, 
  Bell, 
  Globe, 
  Megaphone,
  BookOpen, 
  Calendar, 
  FileText, 
  Video, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Info,
  Bookmark,
  Share2,
  ChevronRight,
  TrendingUp,
  Mail,
  CreditCard
} from 'lucide-react';

const TopNavBar = ({ onNavigate, isSidebarCollapsed }) => {
  return (
    <nav className={`fixed top-0 ${isSidebarCollapsed ? 'left-20' : 'left-72'} right-0 z-50 bg-white dark:bg-[#050505]/80 backdrop-blur-2xl border-b border-slate-200 dark:border-white/5 px-12 h-20 flex justify-between items-center transition-all duration-300`}>
      <div className="flex items-center gap-12">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-white/40" />
          <input 
            type="text" 
            placeholder="Search notices, events..." 
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

const NoticeBoard = ({ onNavigate, isSidebarCollapsed }) => {
  const [selectedFilter, setSelectedFilter] = React.useState('All');
  const [bookmarkedNotices, setBookmarkedNotices] = React.useState(['lab-schedule', 'science-fair', 'maintenance']);

  const toggleBookmark = (id) => {
    if (bookmarkedNotices.includes(id)) {
      setBookmarkedNotices(bookmarkedNotices.filter(item => item !== id));
    } else {
      setBookmarkedNotices([...bookmarkedNotices, id]);
    }
  };

  const filters = ['All', 'Academic', 'Exam', 'Event', 'Competition', 'Portal Update', 'Emergency'];

  const events = [
    { day: 'SUN', date: '24', title: 'Mock Test', time: '10:00 AM - 01:00 PM' },
    { day: 'FRI', date: '22', title: 'Webinar: Career Paths', time: '04:00 PM' },
    { day: 'TUE', date: '21', title: 'Doubt Session', time: '03:00 PM' },
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

        {/* Important Announcements & Upcoming Events */}
        <section className="grid grid-cols-12 gap-8 mb-12">
          {/* Important Announcements */}
          <div className="col-span-8">
            <h2 className="text-xl font-bold font-space uppercase text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              Important Announcements 📌
            </h2>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Physics post */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 hover:border-slate-300 dark:border-white/10 transition-all flex flex-col justify-between h-[180px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Exam Update</span>
                    <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">10h ago</span>
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-white/90">Physics test postponed</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-wider mt-2">
                    The internal assessment scheduled for Friday has been moved to next Tuesday.
                  </p>
                </div>
                <button className="text-[8px] font-black uppercase tracking-widest text-purple-400 hover:text-purple-300 self-start mt-2">
                  Read Details →
                </button>
              </div>

              {/* Chemistry post */}
              <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-3xl p-6 hover:border-slate-300 dark:border-white/10 transition-all flex flex-col justify-between h-[180px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none"></div>
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">New Content</span>
                    <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">2h ago</span>
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-white/90">New Chemistry lecture uploaded</h4>
                  <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-wider mt-2">
                    Module 4: Organic Chemistry (Carbonyl Compounds) is now live on the portal.
                  </p>
                </div>
                <button className="text-[8px] font-black uppercase tracking-widest text-cyan-400 hover:text-cyan-300 self-start mt-2">
                  Watch Now →
                </button>
              </div>
            </div>

            {/* Scholarship Banner */}
            <div className="bg-gradient-to-br from-[#0B0C10] via-[#0D0D0F] to-[#0D0D0F] border border-slate-200 dark:border-white/5 rounded-[32px] p-6 hover:border-slate-300 dark:border-white/10 transition-all flex items-center justify-between h-[120px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 overflow-hidden flex items-center justify-center text-purple-400">
                  <Megaphone size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">Scholarship</span>
                    <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Closes in 2 days</span>
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-white/90">Scholarship exam open</h4>
                  <p className="text-[9px] font-bold text-slate-500 dark:text-white/40 uppercase tracking-widest mt-1">
                    Apply for the Nebula Excellence Grant before Sunday 11:58 PM.
                  </p>
                </div>
              </div>

              <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-6 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                Apply Now
              </button>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="col-span-4 flex flex-col h-full justify-between">
            <h2 className="text-xl font-bold font-space uppercase text-slate-900 dark:text-white mb-6">Upcoming Events</h2>

            <div className="space-y-4">
              {events.map((ev, idx) => (
                <div key={idx} className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex justify-between items-center hover:border-slate-300 dark:border-white/10 transition-all h-[74px]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5 flex flex-col items-center justify-center shrink-0">
                      <span className="text-[7px] font-black uppercase text-purple-400 tracking-wider leading-none mb-1">{ev.day}</span>
                      <span className="text-sm font-black font-space leading-none text-slate-900 dark:text-white">{ev.date}</span>
                    </div>
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-white/90 leading-tight">{ev.title}</h4>
                      <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">{ev.time}</p>
                    </div>
                  </div>
                  <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all">
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Pills */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-2.5">
            {filters.map((fil, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFilter(fil)}
                className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-wider border transition-all ${
                  selectedFilter === fil 
                    ? 'bg-white text-[#050505] border-white shadow-lg' 
                    : 'bg-white dark:bg-[#0D0D0F]/40 border-slate-200 dark:border-white/5 text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white hover:border-slate-300 dark:border-white/10'
                }`}
              >
                {fil}
              </button>
            ))}
          </div>
        </section>

        {/* Personalized Notice Feed */}
        <section className="mb-12">
          <h2 className="text-xl font-bold font-space uppercase text-slate-900 dark:text-white mb-6">Personalized Notice Feed</h2>

          <div className="space-y-4">
            {/* Notice 1 */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[24px] p-6 hover:border-slate-300 dark:border-white/10 transition-all flex justify-between items-center relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">★ New</span>
                  <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Academic • 2 hours ago</span>
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white mb-2">Updated Lab Schedules for Semester 2</h3>
                <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wider">
                  Please review the updated lab groups and timings for the upcoming semester. Ensure you check your assigned station number...
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0 ml-6">
                <button 
                  onClick={() => toggleBookmark('lab-schedule')}
                  className="w-10 h-10 rounded-xl border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white transition-colors"
                >
                  <Bookmark size={16} fill={bookmarkedNotices.includes('lab-schedule') ? 'currentColor' : 'none'} className={bookmarkedNotices.includes('lab-schedule') ? 'text-purple-400' : ''} />
                </button>
                <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                  View Notice
                </button>
              </div>
            </div>

            {/* Notice 2 */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[24px] p-6 hover:border-slate-300 dark:border-white/10 transition-all flex justify-between items-center relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Urgent</span>
                  <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Event • 5 hours ago</span>
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white mb-2">Annual Science Fair Registration</h3>
                <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wider">
                  The registration for the "Ignite" Science Fair is now open. Team submissions are allowed with a maximum of 3 members...
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0 ml-6">
                <button 
                  onClick={() => toggleBookmark('science-fair')}
                  className="w-10 h-10 rounded-xl border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white transition-colors"
                >
                  <Bookmark size={16} fill={bookmarkedNotices.includes('science-fair') ? 'currentColor' : 'none'} className={bookmarkedNotices.includes('science-fair') ? 'text-purple-400' : ''} />
                </button>
                <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                  View Notice
                </button>
              </div>
            </div>

            {/* Notice 3 */}
            <div className="bg-[#1C0F2C]/20 border border-purple-500/20 rounded-[24px] p-6 hover:border-purple-500/30 transition-all flex justify-between items-center relative overflow-hidden">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/25">Important</span>
                  <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest">Portal Update • Yesterday</span>
                </div>
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white mb-2">Scheduled Maintenance: Academic Portal</h3>
                <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wider">
                  The portal will be offline for maintenance on Saturday from 12:00 AM to 04:00 AM. Please save your work accordingly.
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0 ml-6">
                <button 
                  onClick={() => toggleBookmark('maintenance')}
                  className="w-10 h-10 rounded-xl border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-white/40 hover:text-slate-900 dark:text-white transition-colors"
                >
                  <Bookmark size={16} fill={bookmarkedNotices.includes('maintenance') ? 'currentColor' : 'none'} className={bookmarkedNotices.includes('maintenance') ? 'text-purple-400' : ''} />
                </button>
                <button className="bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white px-5 py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                  View Notice
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Uploads Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-500 dark:text-white/40">Recent Uploads</span>
            <div className="flex-1 h-px bg-slate-100 dark:bg-white/5"></div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Upload 1 */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                <Video size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white/90">Trigonometry Part II</h4>
                <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Video Lecture • 45m</p>
              </div>
            </div>

            {/* Upload 2 */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                <FileText size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white/90">Electricity Notes</h4>
                <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">PDF Document • 2.4MB</p>
              </div>
            </div>

            {/* Upload 3 */}
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-300 dark:border-white/10 transition-all">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                <Megaphone size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-white/90">Physics Mock Test</h4>
                <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Practice Quiz • 30 Qs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Row */}
        <section className="grid grid-cols-12 gap-8 mb-16">
          {/* Parental Updates */}
          <div className="col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 dark:text-white/40 mb-4 block">Parental Updates</span>
              
              <div className="space-y-3">
                {/* Update 1 */}
                <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex items-center gap-3">
                  <div className="text-cyan-400">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-white/90">Attendance Update</h5>
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Sent 2 hours ago</p>
                  </div>
                </div>

                {/* Update 2 */}
                <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex items-center gap-3">
                  <div className="text-purple-400">
                    <AlertTriangle size={14} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-white/90">Fee Reminder</h5>
                    <p className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-0.5">Due in 3 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Notice Insight */}
          <div className="col-span-7">
            <div className="bg-white dark:bg-[#0D0D0F]/80 border border-slate-200 dark:border-white/5 rounded-[40px] p-8 shadow-2xl flex items-center justify-between relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Megaphone size={20} className="animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-space font-bold text-slate-900 dark:text-white uppercase mb-2">Your Notice Insight</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-bold uppercase tracking-wide max-w-md">
                    You have <span className="text-purple-400 font-extrabold">2 unread</span> important notices and <span className="text-[#37DBAD] font-extrabold">1 upcoming test</span> this week.
                  </p>
                </div>
              </div>

              <button className="bg-purple-600 hover:bg-purple-500 text-slate-900 dark:text-white px-8 py-3.5 rounded-2xl text-[9px] font-black uppercase tracking-[0.25em] transition-all hover:scale-105 shadow-lg shadow-purple-500/15 shrink-0 ml-4">
                Action Center
              </button>
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

export default NoticeBoard;
