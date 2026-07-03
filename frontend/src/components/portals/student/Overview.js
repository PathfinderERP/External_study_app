"use client";

import React from "react";

export default function Overview({ user, onLogout }) {
  // Extract student name dynamically or use default
  const firstName = user?.full_name ? user.full_name.split(" ")[0].toUpperCase() : "SUBHRANIL";
  const fullName = user?.full_name ? user.full_name.toUpperCase() : "SUBHRANIL SARKAR";
  const classNameStr = user?.class_name || "Class X";

  return (
    <div className="overview-container text-slate-900 dark:text-white transition-colors duration-300" style={{ fontFamily: '"Roboto", sans-serif', minHeight: "100vh", overflowX: "hidden" }}>

      {/* Responsive Styles Injection */}
      <style>{`
        .hero_banner {
          background-image: url('/images/student_portal_home_page/home_bg_1.png');
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* Default Card Sizes (Desktop) */
        .subject_card {
          width: 380px !important;
          height: 520px !important;
          position: relative !important;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }

        /* Bring card to front on hover or tap */
        .subject_card:hover, .subject_card:active {
          z-index: 99 !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6) !important;
        }

        /* TABLET STYLING */
        @media (max-width: 1024px) {
          .box_model {
            padding-top: 25px !important;
          }
          .text_box {
            margin: 0 15px !important;
          }
          .left_content_box h1 {
            font-size: 28px !important;
          }
          .left_content_box p {
            font-size: 16px !important;
            line-height: 1.4 !important;
          }
          .left_content_box em {
            font-size: 14px !important;
            margin-left: 45px !important;
          }
          .left_content_box em span {
            left: -45px !important;
            width: 35px !important;
          }
          
          /* Centered container for scaled row */
          .cards_scroll_wrapper {
            overflow: visible !important;
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
            margin-bottom: -120px !important; /* Adjusted margin for scale */
          }
          
          /* Scale down card row dynamically & center */
          .card_main_subject_list {
            display: flex !important;
            flex-wrap: nowrap !important;
            width: auto !important;
            transform: scale(0.7) !important; /* Fits 1030px width inside 768px tablet */
            transform-origin: top center;
            margin: 0 !important;
            padding-top: 60px !important;
            gap: 0px !important; /* Remove Tailwind's default gap-6 on small screens */
          }

          /* Overlap overrides: apply tight overlaps ONLY on small screens (tablet & mobile) */
          .subject_card:nth-child(2) {
            margin-left: -140px !important;
          }
          .subject_card:nth-child(3) {
            margin-left: -180px !important;
          }
          .subject_card:nth-child(4) {
            margin-left: -140px !important;
          }
          .subject_card:nth-child(5) {
            margin-left: -260px !important;
          }

          /* Shift Chemistry images down slightly on small screens to prevent title collision */
          .multiple_list {
            margin-top: 40px !important;
          }

          /* Plan / Timeline / Exams */
          .your_plan_sec {
            padding: 60px 0 !important;
          }
          .your_plan_sec h1 {
            font-size: 22px !important;
          }
          .your_plan_sec h2 {
            font-size: 18px !important;
          }
          .your_plan_sec p, .your_plan_sec span, .your_plan_sec button {
            font-size: 12px !important;
          }
          .your_plan_sec button {
            padding: 8px 16px !important;
          }
          .upcom_exam_sec {
            padding: 60px 0 !important;
          }
        }

        /* MOBILE STYLING */
        @media (max-width: 768px) {
          .hero_banner {
            background-image: url('/images/student_portal_home_page/home_bg_sm.png') !important;
            background-size: cover !important;
          }
          .left_content_box h1 {
            font-size: 28px !important;
          }
          .left_content_box p {
            font-size: 14px !important;
          }
          .left_content_box em {
            font-size: 12px !important;
            letter-spacing: 2px !important;
            margin-left: 0 !important;
            padding-left: 0 !important;
          }

          /* Center cards exactly in the middle of mobile screen */
          .cards_scroll_wrapper {
            overflow: visible !important;
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
            margin-top: -30px !important; /* Pull cards up slightly without hitting text */
            margin-bottom: -260px !important; /* Offset for scaled down height to overlap bottom div */
          }
          
          /* Scale overlapping cards row to fit perfectly on phone width with exact overlaps */
          .card_main_subject_list {
            display: flex !important;
            flex-wrap: nowrap !important;
            width: 800px !important;
            max-width: 800px !important;
            transform: scale(0.40) !important; /* Fits the 800px wide cards row perfectly inside phone screen */
            transform-origin: top center;
            margin: 0 !important;
            padding-top: 20px !important;
            gap: 0px !important; /* Remove Tailwind's default gap-6 on small screens */
          }

          /* Compensate card text sizes for mobile container scaling */
          .subject_card h3 {
            font-size: 36px !important;
            line-height: 1.1 !important;
          }
          .subject_card em {
            font-size: 22px !important;
          }
          .subject_card span {
            font-size: 20px !important;
            padding: 8px 16px !important;
          }
        }
      `}</style>

      {/* SECTION 1: HEADER & ROTATED SUBJECT CARDS */}
      <div className="box_model hero_banner relative z-10 pt-[40px] md:pt-[60px] overflow-visible md:overflow-hidden rounded-none md:rounded-[20px] border-none md:border border-white/10 mx-0 md:mx-8 lg:mx-12 mt-0 md:mt-4 shadow-2xl">
        <div className="text_box animate-fade-in px-4 md:px-[40px] relative z-20">
          <div className="container" style={{ maxWidth: "1600px", width: "100%", margin: "0 auto" }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              
              {/* LEFT: TEXT CONTENT */}
              <div className="w-full md:w-[45%] lg:w-[40%] flex-shrink-0">
                <div className="left_content_box">
                  <em
                    className="line_text flex items-start md:items-center gap-2"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      fontWeight: 500,
                      letterSpacing: "3px",
                      fontSize: "14px",
                      marginBottom: "15px",
                      color: "#FFC300",
                      fontStyle: "italic",
                      textShadow: "0 0 10px rgba(255,195,0,0.5)"
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 md:mt-0">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#FFC300"/>
                    </svg>
                    <span className="whitespace-nowrap text-[10px] sm:text-[12px] md:text-[14px]">
                      STUDENT INTELLIGENCE HUB
                    </span>
                  </em>
                  <h1
                    className="text-white text-[38px] md:text-[54px] lg:text-[64px] font-black leading-[1.1] m-0 mb-4 tracking-tight"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    WELCOME BACK,<br/>
                    <span
                      style={{
                        background: "linear-gradient(to right, #FF6C03 0%, #FFC300 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block"
                      }}
                    >
                      {firstName || "JOHN"}!
                    </span>
                  </h1>
                  
                  {/* Decorative underline for name */}
                  <div className="h-[3px] w-24 md:w-32 rounded-full mb-8" style={{ background: "linear-gradient(to right, #FF6C03, #6C38FF)" }}></div>
                  
                  <p
                    className="text-slate-300 font-normal text-[15px] md:text-[17px] leading-[1.6]"
                    style={{ fontFamily: "'Inter', sans-serif", maxWidth: "420px" }}
                  >
                    Your comprehensive learning snapshot is ready. We've analyzed your progress and prepared <br className="hidden lg:block" />
                    <strong className="text-[#8B5CF6] font-semibold tracking-wide drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]">AI-powered insights</strong> for your goals today.
                  </p>
                </div>
              </div>

              {/* RIGHT: OVERLAPPING ROTATED CARDS */}
              <div className="cards_scroll_wrapper w-full md:w-[55%] lg:w-[60%] flex flex-col items-center justify-center relative mt-16 md:mt-0 h-[480px]">
                <div className="card_main_subject_list relative w-full max-w-[800px] h-full flex justify-center items-center">
                  
                  {/* Card 1: Study Streak */}
                  <div
                    className="absolute shadow-2xl rounded-[28px] p-5 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-4 hover:scale-105 hover:!z-50"
                    style={{
                      width: "180px",
                      height: "280px",
                      background: "linear-gradient(180deg, #6C38FF, #3E16A8)",
                      left: "10%",
                      transform: "translate(-50%, 40px) rotate(-12deg)",
                      zIndex: 1,
                    }}
                  >
                    <div className="text-center mt-2 relative z-10">
                      <em className="text-white/80 font-medium text-[9px] tracking-wider uppercase block mb-0.5">Study</em>
                      <h3 className="font-bold text-white text-lg leading-tight uppercase tracking-wide">Streak</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1 relative z-10 w-full mt-2">
                      <div className="w-28 h-28 mb-2 relative flex items-center justify-center">
                        <img 
                          src="/images/student_portal_home_page/card_item5.png" 
                          alt="Flame Streak" 
                          className="w-full object-contain drop-shadow-[0_0_15px_rgba(255,108,3,0.6)] scale-110" 
                        />
                      </div>
                      <div className="text-center">
                        <span className="text-white font-black text-3xl block leading-none mb-1">7</span>
                        <span className="text-white/80 text-[10px] font-medium tracking-wide">Days</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Physics */}
                  <div
                    className="absolute shadow-2xl rounded-[32px] p-6 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-4 hover:scale-105 hover:!z-50"
                    style={{
                      width: "220px",
                      height: "340px",
                      background: "linear-gradient(180deg, #FF455B, #D61B3B)",
                      left: "30%",
                      transform: "translate(-50%, 20px) rotate(-6deg)",
                      zIndex: 2,
                    }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <div className="bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1 inline-flex items-center gap-1.5 mb-4 border border-white/10">
                        <span className="text-white text-[9px]">★</span>
                        <span className="text-white text-[9px] font-semibold tracking-wide">Need Improvement</span>
                      </div>
                      <h3 className="font-black text-white text-[20px] tracking-wide">PHYSICS</h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative mt-4">
                      <img 
                        src="/images/student_portal_home_page/card_item2.png" 
                        alt="Physics Brain Lightbulb" 
                        className="w-full max-h-[170px] object-contain drop-shadow-2xl relative z-10 scale-110" 
                      />
                    </div>
                    <div className="flex items-end justify-between w-full relative z-10">
                      <p className="text-white/90 text-[11px] font-medium leading-snug max-w-[100px]">Focus more to boost your score</p>
                      <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors border border-white/10 shrink-0 relative z-20">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </button>
                    </div>
                  </div>

                  {/* Card 3: Chemistry (Center) */}
                  <div
                    className="absolute shadow-[0_20px_50px_rgba(0,140,255,0.4)] rounded-[32px] p-7 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-4 hover:scale-105 hover:!z-50"
                    style={{
                      width: "280px",
                      height: "420px",
                      background: "linear-gradient(180deg, #1DA1F2, #0056D2)",
                      left: "50%",
                      transform: "translate(-50%, 0) rotate(0deg)",
                      zIndex: 3,
                      border: "1px solid rgba(255,255,255,0.1)"
                    }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#00E3FD]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                    <div className="relative z-10">
                      <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 inline-flex items-center gap-1.5 mb-4 border border-white/10">
                        <span className="text-white text-[10px]">★</span>
                        <span className="text-white text-[10px] font-semibold tracking-wide">Strong Subject</span>
                      </div>
                      <h3 className="font-black text-white text-[24px] tracking-wide drop-shadow-md">CHEMISTRY</h3>
                    </div>
                    
                    {/* 4 Li blocks pyramid: 1 on top, 3 on bottom */}
                    <div className="flex-1 flex flex-col items-center justify-center relative mt-4 gap-2">
                      {/* Top Row */}
                      <div className="flex justify-center w-full">
                        <img src="/images/student_portal_home_page/card_item3.png" alt="Li block" style={{ width: "70px", height: "70px" }} className="drop-shadow-lg" />
                      </div>
                      {/* Bottom Row */}
                      <div className="flex justify-center gap-2 w-full">
                        <img src="/images/student_portal_home_page/card_item3.png" alt="Li block" style={{ width: "70px", height: "70px" }} className="drop-shadow-lg" />
                        <img src="/images/student_portal_home_page/card_item3.png" alt="Li block" style={{ width: "70px", height: "70px" }} className="drop-shadow-lg" />
                        <img src="/images/student_portal_home_page/card_item3.png" alt="Li block" style={{ width: "70px", height: "70px" }} className="drop-shadow-lg" />
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-between w-full mt-4">
                      <p className="text-white/95 text-[13px] font-medium leading-snug max-w-[130px]">Keep up the excellent work!</p>
                      <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.2)] shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </button>
                    </div>
                  </div>

                  {/* Card 4: Biology */}
                  <div
                    className="absolute shadow-2xl rounded-[32px] p-6 flex flex-col justify-between overflow-hidden transition-transform duration-300 hover:-translate-y-4 hover:scale-105 hover:!z-50"
                    style={{
                      width: "220px",
                      height: "340px",
                      background: "linear-gradient(180deg, #0BA37F, #04654D)",
                      left: "70%",
                      transform: "translate(-50%, 20px) rotate(6deg)",
                      zIndex: 2,
                    }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-300/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <div className="bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1 inline-flex items-center gap-1.5 mb-4 border border-white/10">
                        <span className="text-white text-[9px]">★</span>
                        <span className="text-white text-[9px] font-semibold tracking-wide">Good Progress</span>
                      </div>
                      <h3 className="font-black text-white text-[20px] tracking-wide">BIOLOGY</h3>
                    </div>
                    <div className="flex-1 flex items-center justify-center relative mt-2 -mb-2">
                      <img 
                        src="/images/student_portal_home_page/card_item4.png" 
                        alt="Biology Bacteria" 
                        className="w-full max-h-[150px] object-contain drop-shadow-2xl translate-x-2 scale-[1.35] relative z-0" 
                      />
                    </div>
                    <div className="flex items-end justify-between w-full relative z-10">
                      <p className="text-white/90 text-[11px] font-medium leading-snug max-w-[100px]">You're making great progress!</p>
                      <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors border border-white/10 shrink-0 relative z-20">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </button>
                    </div>
                  </div>

                  {/* Card 5: Study Strategies */}
                  <div
                    className="absolute shadow-2xl rounded-[28px] p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-4 hover:scale-105 hover:!z-50"
                    style={{
                      width: "180px",
                      height: "280px",
                      background: "linear-gradient(180deg, #6C38FF, #3E16A8)",
                      left: "90%",
                      transform: "translate(-50%, 40px) rotate(12deg)",
                      zIndex: 1,
                    }}
                  >
                    <div className="text-center mt-2 relative z-10">
                      <em className="text-white/80 font-medium text-[9px] tracking-wider uppercase block mb-0.5">Study</em>
                      <h3 className="font-bold text-white text-lg leading-tight uppercase tracking-wide">Strategies</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1 mt-4">
                      <div className="w-24 h-24 relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#CC99FF]/20 blur-xl rounded-full"></div>
                        <span className="text-[5.5rem] relative z-10 drop-shadow-lg leading-none">📚</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#CC99FF] shadow-[0_0_8px_rgba(204,153,255,0.8)]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION: ACADEMIC SUMMARY & RECENT INSIGHTS */}
      <div className="relative pt-[16px] md:pt-[24px] pb-[80px] bg-transparent z-10">
        <div className="mx-4 md:mx-8 lg:mx-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            
            {/* LEFT COLUMN: ACADEMIC SUMMARY */}
            <div className="bg-white dark:bg-[#150a2e]/60 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-[20px] p-6 lg:p-8 shadow-2xl relative flex flex-col h-full md:min-h-[440px]">
              {/* Top Row */}
              <div className="flex justify-between items-center mb-4 md:mb-8">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#6C38FF] flex items-center justify-center shadow-[0_0_10px_rgba(108,56,255,0.5)]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"></path><path d="M12 20V4"></path><path d="M6 20V14"></path></svg>
                  </div>
                  <h3 className="text-[10px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.1em] text-slate-900 dark:text-white whitespace-nowrap">ACADEMIC SUMMARY</h3>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                  This Week
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-3.5 md:h-3.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
              </div>

              {/* Middle Row (Desktop) */}
              <div className="hidden md:flex flex-col md:flex-row items-center gap-8 lg:gap-12 mb-10 flex-1">
                {/* Circular Progress & GPA */}
                <div className="relative w-48 h-48 flex items-center justify-center shrink-0">
                  <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_10px_rgba(255,108,3,0.3)]">
                    <circle cx="96" cy="96" r="86" fill="none" stroke="#251448" strokeWidth="12" />
                    <circle cx="96" cy="96" r="86" fill="none" stroke="url(#gpa_gradient)" strokeWidth="12" strokeDasharray="540" strokeDashoffset="54" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="gpa_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6C38FF" />
                        <stop offset="100%" stopColor="#FF6C03" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="text-center relative z-10 flex flex-col items-center justify-center">
                    <span className="text-[48px] font-black leading-none tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white via-indigo-200 to-orange-400">3.82</span>
                    <span className="text-sm text-slate-400 font-medium">GPA</span>
                  </div>
                  {/* Star Badge at Bottom */}
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#150a2e] border-4 border-[#150a2e] flex items-center justify-center z-20">
                    <div className="w-full h-full rounded-full bg-[#FFC300]/20 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFC300" stroke="#FFC300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </div>
                  </div>
                </div>

                {/* Right Side: Linear Progress */}
                <div className="flex-1 w-full pt-4 md:pt-0">
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-3">High Level e.g.or GPA</p>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 mb-8">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    <span className="text-xs font-semibold text-emerald-400">+0.28 vs last week</span>
                  </div>
                  
                  <div className="relative">
                    {/* Linear Progress Bar */}
                    <div className="h-2 w-full bg-slate-200 dark:bg-[#251448] rounded-full overflow-visible relative">
                      <div className="h-full bg-gradient-to-r from-[#FF6C03] via-[#ff3b8d] to-[#6C38FF] rounded-full relative" style={{ width: "95%" }}>
                        {/* Thumb indicator */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                        <div className="absolute right-0 -top-7 text-white font-bold text-sm translate-x-1/2">3.82</div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-slate-500 font-medium">
                      <span>0.00</span>
                      <span>4.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE LAYOUT: ACADEMIC SUMMARY */}
              <div className="flex md:hidden flex-col h-full mt-2">
                {/* Center Content */}
                <div className="flex justify-between items-center w-full mb-4 mt-2">
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-[36px] font-black leading-none tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#6C38FF] via-[#ff3b8d] to-[#FF6C03]">3.82</span>
                    <span className="text-slate-400 font-medium text-[10px] mb-3">High Level e.g.or GPA</span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                      <span className="text-[9px] font-semibold text-emerald-400">+0.28 vs last week</span>
                    </div>
                  </div>
                  
                  {/* Trophy Icon on right side */}
                  <div className="w-[90px] h-[90px] shrink-0 rounded-full border-[2px] border-l-[#6C38FF] border-t-[#FF6C03] border-r-[#FF6C03] border-b-[#6C38FF] flex items-center justify-center shadow-[0_0_15px_rgba(255,108,3,0.15)] bg-gradient-to-br from-transparent to-[#FF6C03]/10">
                    <span className="text-4xl drop-shadow-md">🏆</span>
                  </div>
                </div>

                {/* Bottom Row: N Logo + Progress Bar */}
                <div className="flex items-center gap-4 mt-2 pt-2 pb-1">
                  {/* Circular N Logo */}
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#1A1033] border border-white/10 flex items-center justify-center shadow-lg">
                    <span className="text-white font-medium text-lg tracking-wider">N</span>
                  </div>
                  {/* Linear Progress Bar */}
                  <div className="flex-1">
                    <div className="h-1.5 w-full bg-[#251448] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF6C03] via-[#ff3b8d] to-[#6C38FF] rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row Stats (Desktop) */}
              <div className="hidden md:block bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-[16px] p-5 mt-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    <div>
                      <strong className="text-slate-900 dark:text-white text-lg block leading-tight">85%</strong>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Overall Score</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CC99FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                    <div>
                      <strong className="text-slate-900 dark:text-white text-lg block leading-tight">12</strong>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Topics Mastered</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#CC99FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <div>
                      <strong className="text-slate-900 dark:text-white text-lg block leading-tight">24h</strong>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Study Time</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFC300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    <div>
                      <strong className="text-slate-900 dark:text-white text-lg block leading-tight">7</strong>
                      <span className="text-slate-500 dark:text-slate-400 text-[11px]">Day Streak</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: RECENT INSIGHTS */}
            <div className="bg-white dark:bg-[#150a2e]/60 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-[20px] p-6 lg:p-8 shadow-2xl relative flex flex-col h-full min-h-[440px]">
              {/* Top Row */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFC300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <h3 className="text-[13px] font-bold tracking-[0.1em] text-slate-900 dark:text-white">RECENT INSIGHTS</h3>
                </div>
                <a href="#" className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  View All
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>

              <div className="flex-1 space-y-3">
                {/* Item 1 */}
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl bg-[#6C38FF]/20 flex items-center justify-center shrink-0 border border-[#6C38FF]/30 group-hover:scale-105 transition-transform">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CC99FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.5-.9 2.8-2 3.5v2.5a2 2 0 0 1-4 0V9.5c-1.1-.7-2-2-2-3.5a4 4 0 0 1 4-4z"></path><path d="M7.5 13a4.5 4.5 0 0 0-4.5 4.5v1.5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1.5A4.5 4.5 0 0 0 16.5 13"></path></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[12px] sm:text-[14px] md:text-[15px] font-bold text-slate-900 dark:text-white mb-0.5 whitespace-nowrap truncate">Strength Alert</h4>
                    <p className="text-[10px] sm:text-[11px] md:text-xs text-slate-500 dark:text-slate-400 leading-tight truncate">Chemistry is your strongest subject this week!</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-500 font-medium">Today</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl bg-[#FF6C03]/20 flex items-center justify-center shrink-0 border border-[#FF6C03]/30 group-hover:scale-105 transition-transform">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFC300" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[12px] sm:text-[14px] md:text-[15px] font-bold text-slate-900 dark:text-white mb-0.5 whitespace-nowrap truncate">Improvement Opportunity</h4>
                    <p className="text-[10px] sm:text-[11px] md:text-xs text-slate-500 dark:text-slate-400 leading-tight truncate">Focus more on Physics to improve your score.</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-500 font-medium">Today</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M7 4h10M5 4h14v5a7 7 0 0 1-14 0V4z"></path></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[12px] sm:text-[14px] md:text-[15px] font-bold text-slate-900 dark:text-white mb-0.5 whitespace-nowrap truncate">Great Progress</h4>
                    <p className="text-[10px] sm:text-[11px] md:text-xs text-slate-500 dark:text-slate-400 leading-tight truncate">You've increased your study time by 15%!</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-500 font-medium">Yesterday</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl p-4 flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl bg-[#3399FF]/20 flex items-center justify-center shrink-0 border border-[#3399FF]/30 group-hover:scale-105 transition-transform">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3399FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[12px] sm:text-[13px] font-bold text-slate-900 dark:text-white mb-0.5 whitespace-nowrap truncate">Consistency</h4>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 leading-tight truncate">You've hit your daily goal 4 days in a row.</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-slate-500 font-medium">Yesterday</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  );
}
