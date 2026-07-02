"use client";

import React from "react";

export default function Overview({ user, onLogout }) {
  // Extract student name dynamically or use default
  const firstName = user?.full_name ? user.full_name.split(" ")[0].toUpperCase() : "SUBHRANIL";
  const fullName = user?.full_name ? user.full_name.toUpperCase() : "SUBHRANIL SARKAR";
  const classNameStr = user?.class_name || "Class X";

  return (
    <div className="bg-transparent text-slate-900 dark:text-white transition-colors duration-300" style={{ fontFamily: '"Roboto", sans-serif', minHeight: "100vh", overflowX: "hidden" }}>

      {/* Responsive Styles Injection */}
      <style>{`
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
          .left_content_box h1 {
            font-size: 22px !important;
          }
          .left_content_box p {
            font-size: 13px !important;
          }
          .left_content_box em {
            font-size: 12px !important;
            margin-left: 35px !important;
          }
          .left_content_box em span {
            left: -35px !important;
            width: 25px !important;
          }

          /* Center cards exactly in the middle of mobile screen */
          .cards_scroll_wrapper {
            overflow: visible !important;
            display: flex !important;
            justify-content: center !important;
            width: 100% !important;
            margin-bottom: -620px !important; /* Offset for scaled down height to overlap bottom div */
          }
          
          /* Scale overlapping cards row to fit perfectly on phone width with exact overlaps */
          .card_main_subject_list {
            display: flex !important;
            flex-wrap: nowrap !important;
            width: auto !important;
            transform: scale(0.35) !important; /* Fits the 1030px wide cards row perfectly inside a 375px phone screen */
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
      <div
        className="box_model relative z-10 pt-[80px] overflow-hidden bg-gradient-to-b from-blue-50/60 to-transparent dark:from-[#1a0e316b] dark:to-[#502b976b]"
      >
        {/* Background Grid Pattern Overlay */}
        <div
          className="absolute inset-0 bg-[url('/images/student_portal_home_page/grid_pattern_bg.png')] bg-no-repeat bg-center bg-cover -z-20 invert opacity-40 dark:invert-0 dark:opacity-80"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute left-0 top-0 w-full h-[382px] -z-10 bg-gradient-to-b from-slate-200/50 to-transparent dark:bg-[linear-gradient(179.42deg,#4F6295_-71.87%,rgba(17,18,22,0.37)_90.36%),linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2))]"
        />

        <div className="text_box animate-fade-in px-4 md:px-[50px]">
          <div className="container" style={{ maxWidth: "1600px", width: "100%", margin: "0 auto" }}>
            <div className="flex flex-wrap items-center justify-between gap-6 md:flex-nowrap">
              <div className="w-full md:w-[55%]">
                <div className="left_content_box">
                  <em
                    className="line_text"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      fontWeight: 400,
                      letterSpacing: "3px",
                      fontSize: "20px",
                      marginBottom: "10px",
                      marginLeft: "80px",
                      background: "linear-gradient(to right, #FFAE00 0%, #F26D00 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block"
                    }}
                  >
                    {/* Decorative Orange Line */}
                    <span
                      style={{
                        position: "absolute",
                        left: "-80px",
                        bottom: "8px",
                        width: "65px",
                        height: "1px",
                        backgroundColor: "#F26D00"
                      }}
                    />
                    STUDENT INTELLIGENCE HUB
                  </em>
                  <h1
                    className="text-slate-900 dark:text-white text-[40px] font-black leading-[1.2] m-0"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    WELCOME BACK,{" "}
                    <span
                      style={{
                        background: "linear-gradient(to right, #FF6C03 0%, #FFC300 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}
                    >
                      {firstName}!
                    </span>
                  </h1>
                  <p
                    className="text-slate-700 dark:text-white font-thin text-[18px] leading-[1.4] my-[10px]"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Your comprehensive learning snapshot is ready. We've analyzed your <br /> progress and prepared <strong>AI-powered insights</strong> for your goals today.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex w-full md:w-[50%] gap-6">
                {/* Academic Summary Card */}
                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm flex flex-col justify-between w-[240px]">
                  <div>
                    <h3 className="text-[11px] font-bold tracking-wider mb-6 text-slate-800 dark:text-white">ACADEMIC SUMMARY</h3>
                    <div className="text-center mb-6">
                      <span className="text-[42px] font-bold block mb-1 leading-none text-slate-900 dark:text-white">3.82</span>
                      <span className="text-[11px] text-slate-600 dark:text-slate-400">High Level e.g.or GPA</span>
                    </div>
                  </div>
                  <div>
                    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                      <div className="h-full bg-[#E87E04] w-[75%]"></div>
                      <div className="h-full bg-slate-200 dark:bg-slate-700 w-[25%]"></div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity Card */}
                <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm flex-1 relative flex flex-col">
                  <div className="absolute right-2 top-12 bottom-6 w-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden hidden"><div className="h-1/3 bg-slate-300 dark:bg-slate-600 rounded-full"></div></div>
                  <h3 className="text-[11px] font-bold tracking-wider mb-5 text-slate-800 dark:text-white shrink-0">RECENT ACTIVITY</h3>
                  <div className="space-y-4 overflow-y-auto pr-4 h-[110px] custom-scrollbar flex-1 relative">
                    <div className="flex gap-3 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center shrink-0 z-10 border-2 border-white dark:border-[#0D0D0F]">
                        <span className="text-orange-500 text-[12px]">📅</span>
                      </div>
                      <div className="pr-2">
                        <p className="text-[11px] font-medium leading-[1.3] text-slate-800 dark:text-slate-200">John Doe: Cellular Respiration Exam - May 15</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 relative z-10">
                      <div className="absolute left-[15px] -top-[30px] w-[2px] h-[40px] bg-slate-100 dark:bg-slate-800 -z-10"></div>
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center shrink-0 z-10 border-2 border-white dark:border-[#0D0D0F]">
                        <span className="text-green-500 text-[12px]">📄</span>
                      </div>
                      <div className="pr-2">
                        <p className="text-[11px] font-medium leading-[1.3] text-slate-800 dark:text-slate-200">John Doe in Cellular Respiration Exam</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex gap-3 relative z-10">
                      <div className="absolute left-[15px] -top-[30px] w-[2px] h-[40px] bg-slate-100 dark:bg-slate-800 -z-10"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 z-10 border-2 border-white dark:border-[#0D0D0F]">
                        <span className="text-slate-500 dark:text-slate-300 text-[12px] font-bold">J</span>
                      </div>
                      <div className="pr-2">
                        <p className="text-[11px] font-medium leading-[1.3] text-slate-800 dark:text-slate-200">John Doe students@pathfinder.edu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OVERLAPPING ROTATED CARDS WRAPPER */}
        <div className="cards_scroll_wrapper">
          <div
            className="card_main_subject_list flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 lg:gap-0 relative z-[55] mb-[-240px] pt-2"
            style={{ height: "auto" }}
          >
            {/* Attendance Card */}
            <div
              className="subject_card shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7545F0, #8463D7)",
                borderRadius: "40px",
                color: "white",
                padding: "20px",
                transform: "rotate(-9deg)",
                position: "relative",
                zIndex: 1,
                marginTop: "320px",
                marginRight: "-150px",
                overflow: "hidden"
              }}
            >
              <div className="subject_box flex flex-col justify-between h-full relative z-10">
                <div className="flex items-start justify-between">
                  <div className="subject_content">
                    <h3 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "24px", color: "#fff", paddingTop: "5px", lineHeight: 1.2 }}>
                      ATTENDANCE <br /> RATE
                    </h3>
                  </div>
                  <div className="avareg_content mt-2">
                    <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "12px", display: "block", background: "#17171745", borderRadius: "100px", padding: "5px 10px" }}>
                      Avg : 88%
                    </span>
                  </div>
                </div>
                {/* Background Line Graph Texture */}
                <img
                  src="/images/student_portal_home_page/card_item1.png"
                  alt="card texture"
                  className="absolute left-0 top-[-10%] w-[120%] -translate-x-[10%] opacity-50 z-0 pointer-events-none"
                />

                <div className="icon_list flex justify-end items-end h-full relative z-10 pb-4 pr-4">
                  <img
                    className="aten_last_img"
                    src="/images/student_portal_home_page/92_percent.png"
                    alt="percentage"
                    style={{ width: "90px", opacity: 0.9 }}
                  />
                </div>
              </div>
            </div>

            {/* Physics Card */}
            <div
              className="subject_card shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                width: "380px",
                height: "520px",
                background: "linear-gradient(135deg, #F76171, #EE3E48)",
                borderRadius: "40px",
                color: "white",
                padding: "20px",
                marginLeft: "-46px",
                transform: "rotate(-9deg)",
                zIndex: 2,
                marginTop: "130px"
              }}
            >
              <div className="subject_box flex items-center justify-between">
                <div className="subject_content">
                  <em style={{ fontFamily: "Inter", fontWeight: 200, fontSize: "14px", fontStyle: "normal" }}>Need Improvement</em>
                  <h3 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "24px", color: "#000", paddingTop: "5px", lineHeight: 1.2 }}>
                    PHYSICS
                  </h3>
                </div>
              </div>
              <div className="icon_list flex flex-wrap-reverse justify-end gap-[3px] mt-0">
                <img src="/images/student_portal_home_page/card_item2.png" alt="card" />
              </div>
            </div>

            {/* Chemistry Card (Center Focus) */}
            <div
              className="subject_card shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                width: "380px",
                height: "520px",
                background: "linear-gradient(135deg, #25CCF4, #5580E9)",
                borderRadius: "40px",
                color: "white",
                padding: "20px",
                marginLeft: "-80px",
                zIndex: 3
              }}
            >
              <div className="subject_box flex items-center justify-between">
                <div className="subject_content">
                  <em style={{ fontFamily: "Inter", fontWeight: 200, fontSize: "14px", fontStyle: "normal" }}>Strong Subject</em>
                  <h3 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "24px", color: "#000", paddingTop: "5px", lineHeight: 1.2 }}>
                    CHEMISTRY
                  </h3>
                </div>
              </div>
              <div className="icon_list multiple_list flex flex-wrap-reverse justify-end gap-[3px] mt-0" style={{ width: "280px" }}>
                <img src="/images/student_portal_home_page/card_item3.png" alt="card" style={{ width: "110px", height: "110px" }} />
                <img src="/images/student_portal_home_page/card_item3.png" alt="card" style={{ width: "110px", height: "110px" }} />
                <img src="/images/student_portal_home_page/card_item3.png" alt="card" style={{ width: "110px", height: "110px" }} />
                <img src="/images/student_portal_home_page/card_item3.png" alt="card" style={{ width: "110px", height: "110px" }} />
                <img src="/images/student_portal_home_page/card_item3.png" alt="card" style={{ width: "110px", height: "110px" }} />
              </div>
            </div>

            {/* Biology Card */}
            <div
              className="subject_card shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                width: "380px",
                height: "520px",
                background: "linear-gradient(135deg, #37DBAD, #27DED4)",
                borderRadius: "40px",
                color: "white",
                padding: "20px",
                marginLeft: "-46px",
                transform: "rotate(3deg)",
                zIndex: 2,
                marginTop: "90px"
              }}
            >
              <div className="subject_box flex items-center justify-between">
                <div className="subject_content" style={{ marginLeft: "20px" }}>
                  <em style={{ fontFamily: "Inter", fontWeight: 200, fontSize: "14px", fontStyle: "normal" }}>Next Exam</em>
                  <h3 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "24px", color: "#000", paddingTop: "5px", lineHeight: 1.2 }}>
                    BIOLOGY
                  </h3>
                </div>
              </div>
              <div className="icon_list flex flex-wrap-reverse justify-end gap-[3px] mt-[-40px]">
                <img src="/images/student_portal_home_page/card_item4.png" alt="card" />
              </div>
            </div>

            {/* Streak Card */}
            <div
              className="subject_card shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                width: "380px",
                height: "520px",
                background: "linear-gradient(135deg, #3A4DE7, #4D6AEA)",
                borderRadius: "40px",
                color: "white",
                padding: "20px",
                transform: "rotate(9deg)",
                zIndex: 1,
                marginTop: "240px",
                marginLeft: "-200px"
              }}
            >
              <div className="subject_box" style={{ textAlign: "end" }}>
                <div className="subject_content">
                  <h3 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: "24px", color: "#fff", paddingTop: "5px", lineHeight: 1.2 }}>
                    STUDY <br /> STREAK
                  </h3>
                </div>
              </div>
              <div className="icon_list flex flex-wrap-reverse justify-end gap-[3px] mt-[-50px]">
                <img src="/images/student_portal_home_page/card_item5.png" alt="card" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION 2: TODAY'S PLAN & TIMELINE */}
      <div
        className="your_plan_sec relative pt-[100px] pb-[40px] bg-transparent dark:bg-[#251448]"
      >
        {/* Background Texture Layers */}
        <div
          className="absolute inset-0 bg-[url('/images/student_portal_home_page/your_plan_texture_bg.png')] bg-no-repeat bg-center bg-cover -z-20 opacity-0 dark:opacity-100"
        />
        <div
          className="absolute inset-0 bg-[url('/images/student_portal_home_page/your_plan_bg.png')] bg-no-repeat bg-center bg-cover -z-30 opacity-0 dark:opacity-100"
        />

        <div className="container px-4 md:px-[35px]" style={{ maxWidth: "1600px", width: "100%", margin: "0 auto" }}>
            {/* MOBILE ONLY: Summary & History Cards placed after the rotated cards */}
            <div className="flex md:hidden flex-col gap-6 mb-12 relative z-10 w-full pt-4">
              {/* Academic Summary Card */}
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-[11px] font-bold tracking-wider mb-6 text-slate-800 dark:text-white">ACADEMIC SUMMARY</h3>
                  <div className="text-center mb-6">
                    <span className="text-[42px] font-bold block mb-1 leading-none text-slate-900 dark:text-white">3.82</span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400">High Level e.g.or GPA</span>
                  </div>
                </div>
                <div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                    <div className="h-full bg-[#E87E04] w-[75%]"></div>
                    <div className="h-full bg-slate-200 dark:bg-slate-700 w-[25%]"></div>
                  </div>
                </div>
              </div>

              {/* Recent Activity Card */}
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-sm w-full relative flex flex-col">
                <div className="absolute right-2 top-12 bottom-6 w-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden hidden"><div className="h-1/3 bg-slate-300 dark:bg-slate-600 rounded-full"></div></div>
                <h3 className="text-[11px] font-bold tracking-wider mb-5 text-slate-800 dark:text-white shrink-0">RECENT ACTIVITY</h3>
                <div className="space-y-4 overflow-y-auto pr-4 h-[110px] custom-scrollbar flex-1 relative">
                  <div className="flex gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center shrink-0 z-10 border-2 border-white dark:border-[#0D0D0F]">
                      <span className="text-orange-500 text-[12px]">📅</span>
                    </div>
                    <div className="pr-2">
                      <p className="text-[11px] font-medium leading-[1.3] text-slate-800 dark:text-slate-200">John Doe: Cellular Respiration Exam - May 15</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 relative z-10">
                    <div className="absolute left-[15px] -top-[30px] w-[2px] h-[40px] bg-slate-100 dark:bg-slate-800 -z-10"></div>
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-500/20 flex items-center justify-center shrink-0 z-10 border-2 border-white dark:border-[#0D0D0F]">
                      <span className="text-green-500 text-[12px]">📄</span>
                    </div>
                    <div className="pr-2">
                      <p className="text-[11px] font-medium leading-[1.3] text-slate-800 dark:text-slate-200">John Doe in Cellular Respiration Exam</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-3 relative z-10">
                    <div className="absolute left-[15px] -top-[30px] w-[2px] h-[40px] bg-slate-100 dark:bg-slate-800 -z-10"></div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 z-10 border-2 border-white dark:border-[#0D0D0F]">
                      <span className="text-slate-500 dark:text-slate-300 text-[12px] font-bold">J</span>
                    </div>
                    <div className="pr-2">
                      <p className="text-[11px] font-medium leading-[1.3] text-slate-800 dark:text-slate-200">John Doe students@pathfinder.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap justify-between gap-12">

            {/* LEFT PLAN PANEL */}
            <div className="w-full lg:w-[58%]">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Your Plan for Today</h1>
                <span style={{ color: "#00e0ff" }}>Oct 24, 2023</span>
              </div>

              {/* ITEM 1 */}
              <div
                className="flex items-center justify-between mb-8 p-[30px_20px] rounded-xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-6">
                  <div className="text-center opacity-70">
                    <div className="font-light text-sm">09:00</div>
                    <small className="text-xs font-light block">AM</small>
                  </div>
                  <div>
                    <h2 className="m-0 text-2xl font-semibold pb-1.5">Calculus Quiz</h2>
                    <span
                      style={{
                        background: "#006875",
                        fontWeight: 500,
                        padding: "6px 10px",
                        borderRadius: "20px",
                        fontSize: "10px"
                      }}
                    >
                      MATHEMATICS
                    </span>
                  </div>
                </div>
                <button
                  className="bg-[#00E3FD] border-none p-[10px_25px] rounded-[25px] text-black font-semibold cursor-pointer transition-transform hover:scale-105 active:scale-95"
                >
                  Start
                </button>
              </div>

              {/* ITEM 2 (Missed) */}
              <div
                className="flex items-center justify-between mb-8 p-[30px_20px] rounded-xl bg-red-50/50 dark:bg-white/[0.01] border border-red-100 dark:border-transparent border-l-[4px] border-l-[#ff6b81] dark:border-l-[#ff6b81]"
              >
                <div className="flex items-center gap-6">
                  <div className="text-center text-[#FF6F7C]">
                    <div className="font-light text-sm">11:30</div>
                    <small className="text-xs font-light block">AM</small>
                  </div>
                  <div>
                    <h2 className="m-0 text-2xl font-semibold pb-1.5 text-slate-800 dark:text-white">Organic Chemistry</h2>
                    <span
                      style={{
                        background: "#FC2A53",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        color: "#000",
                        fontSize: "12px",
                        fontWeight: "600"
                      }}
                    >
                      MISSED
                    </span>
                  </div>
                </div>
                <button
                  className="bg-red-50 dark:bg-[#32283C] border border-red-200 dark:border-[#FF6F7C4D] p-[10px_20px] rounded-[25px] text-[#ff6b81] font-semibold cursor-pointer transition-transform hover:scale-105 active:scale-95"
                >
                  Reschedule
                </button>
              </div>

              {/* ITEM 3 */}
              <div
                className="flex items-center justify-between p-[30px_20px] rounded-xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
              >
                <div className="flex items-center gap-6">
                  <div className="text-center opacity-70">
                    <div className="font-light text-sm">02:00</div>
                    <small className="text-xs font-light block">PM</small>
                  </div>
                  <div>
                    <h2 className="m-0 text-2xl font-semibold pb-1.5">Physics Lab Session</h2>
                    <span
                      style={{
                        background: "#BA88FF",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        color: "#000",
                        fontSize: "12px",
                        fontWeight: "600"
                      }}
                    >
                      SCIENCE
                    </span>
                  </div>
                </div>
                <button
                  className="bg-purple-50 dark:bg-[#32283C] border border-purple-200 dark:border-[#C59AFF4D] p-[10px_20px] rounded-[25px] text-[#C59AFF] font-semibold cursor-pointer transition-transform hover:scale-105 active:scale-95"
                >
                  Preview
                </button>
              </div>
            </div>

            {/* RIGHT ACTIVITY & ACTIONS PANEL */}
            <div className="w-full lg:w-[33%]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Activity Timeline</h3>
              </div>

              {/* Timeline Items */}
              <div className="mb-10 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 flex-shrink-0">
                    <img src="/images/student_portal_home_page/Background+Border1.png" alt="icon" />
                  </div>
                  <div>
                    <strong className="text-base font-normal text-slate-800 dark:text-white">Completed: Thermodynamics</strong>
                    <br />
                    <small className="opacity-60 text-xs font-light">Today at 10:45 AM</small>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 flex-shrink-0">
                    <img src="/images/student_portal_home_page/Background+Border2.png" alt="icon" />
                  </div>
                  <div>
                    <strong className="text-base font-normal text-slate-800 dark:text-white">New Grade: Algebra III</strong>
                    <br />
                    <small className="opacity-60 text-xs font-light">Yesterday at 04:30 PM</small>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 flex-shrink-0">
                    <img src="/images/student_portal_home_page/Background+Border3.png" alt="icon" />
                  </div>
                  <div>
                    <strong className="text-base font-normal text-slate-800 dark:text-white">Enrolled: Quantum Theory</strong>
                    <br />
                    <small className="opacity-60 text-xs font-light">2 days ago</small>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <h3 className="pb-5 text-xl font-semibold">Quick Actions</h3>

              <div
                className="flex items-center gap-4 border border-slate-200 dark:border-white/5 p-4 mb-4 rounded-lg bg-white dark:bg-white/[0.02] transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.05]"
              >
                <div className="w-10 h-10 bg-[#C59AFF1A] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/images/student_portal_home_page/Container.png" alt="icon" />
                </div>
                <div>
                  <strong className="text-slate-800 dark:text-white">Continue Lecture</strong>
                  <br />
                  <small className="opacity-60 font-light text-xs">Modern Physics • 42% left</small>
                </div>
              </div>

              <div
                className="flex items-center gap-4 border border-slate-200 dark:border-white/5 p-4 rounded-lg bg-white dark:bg-white/[0.02] transition-colors hover:bg-slate-50 dark:hover:bg-white/[0.05]"
              >
                <div className="w-10 h-10 bg-[#00E3FD1A] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src="/images/student_portal_home_page/Icon.png" alt="icon" />
                </div>
                <div>
                  <strong className="text-slate-800 dark:text-white">Attempt Test</strong>
                  <br />
                  <small className="opacity-60 font-light text-xs">3 pending assessments</small>
                </div>
              </div>

              {/* Logout option built into layout */}
              <button
                onClick={onLogout}
                className="mt-8 w-full border border-red-500/20 bg-red-950/10 hover:bg-red-950/30 text-red-400 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                Sign Out Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: UPCOMING EXAMS & GRAPH */}
      <div
        className="upcom_exam_sec relative flex flex-col gap-[30px] pt-[40px] pb-[100px]"
      >
        {/* Background Texture */}
        <div
          className="absolute inset-0 bg-[url('/images/student_portal_home_page/your_plan_bg.png')] bg-no-repeat bg-center bg-cover -z-30 opacity-0 dark:opacity-100"
        />

        <div className="container px-4 md:px-[35px]" style={{ maxWidth: "1600px", width: "100%", margin: "0 auto" }}>

          {/* Top AI Strategic Insight Card */}
          <div
            className="flex flex-col md:flex-row justify-between items-center gap-6 p-[30px] rounded-[32px] border border-slate-200 dark:border-[#C59AFF1A] bg-gradient-to-br from-white to-slate-50 dark:from-[#251C2D] dark:to-[#120C18]"
          >
            <div className="flex flex-col gap-2.5">
              <span className="text-[#00E3FD] text-base font-semibold flex items-center gap-2">
                <img src="/images/student_portal_home_page/Container_ai_icon.png" alt="AI Icon" />
                AI STRATEGIC INSIGHT
              </span>
              <span className="text-xl font-light text-slate-700 dark:text-[#F4E7F9] leading-relaxed">
                Your <span className="text-[#00E3FD] font-semibold">Chemistry</span> performance improved by{" "}
                <span className="text-[#00E3FD] font-semibold">12%</span> <br /> this week. Strengthening Organic bonds <br /> seems to be your new catalyst.
              </span>
            </div>

            {/* Graph Icon */}
            <div className="flex items-end gap-1 flex-shrink-0">
              <img src="/images/student_portal_home_page/Container_exam.png" alt="Strategic graph representation" />
            </div>
          </div>

          {/* Upcoming Exams Grid */}
          <div className="flex flex-col gap-4 mt-12">
            <span className="text-2xl font-bold">Upcoming Exams</span>

            <div className="upcoming_main_sec flex flex-col md:flex-row gap-6 md:gap-12 mt-4">

              {/* Card 1 */}
              <div
                className="flex-1 backdrop-blur-md border border-slate-200 dark:border-[#4D45531A] bg-white/80 dark:bg-[#2B223499] p-[50px_30px] flex flex-col gap-2.5 rounded-2xl"
              >
                <span className="text-xl font-medium pb-2.5 relative text-slate-800 dark:text-white">
                  Calculus III
                  <sup className="text-[#00E3FD] text-xs font-semibold ml-2">Nov 12</sup>
                </span>
                <span className="text-xs text-slate-500 dark:text-[#B2A7B9]">
                  Prep Progress <span className="text-[#00E3FD] font-bold">88%</span>
                </span>
                <div className="h-[7px] bg-slate-200 dark:bg-[#2B2234] rounded-[50px] w-full max-w-[150px]">
                  <div className="h-[7px] bg-[#00E3FD] rounded-[50px]" style={{ width: "88%" }} />
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="flex-1 backdrop-blur-md border border-slate-200 dark:border-[#4D45531A] bg-white/80 dark:bg-[#2B223499] p-[50px_30px] flex flex-col gap-2.5 rounded-2xl"
              >
                <span className="text-xl font-medium pb-2.5 relative text-slate-800 dark:text-white">
                  Macromolecules
                  <sup className="text-[#C59AFF] text-xs font-semibold ml-2">Nov 18</sup>
                </span>
                <span className="text-xs text-slate-500 dark:text-[#B2A7B9]">
                  Prep Progress <span className="text-[#C59AFF] font-bold">45%</span>
                </span>
                <div className="h-[7px] bg-slate-200 dark:bg-[#2B2234] rounded-[50px] w-full max-w-[150px]">
                  <div className="h-[7px] bg-[#C59AFF] rounded-[50px]" style={{ width: "45%" }} />
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="flex-1 backdrop-blur-md border border-slate-200 dark:border-[#4D45531A] bg-white/80 dark:bg-[#2B223499] p-[50px_30px] flex flex-col gap-2.5 rounded-2xl"
              >
                <span className="text-xl font-medium pb-2.5 relative text-slate-800 dark:text-white">
                  Thermodynamics
                  <sup className="text-[#FF6F7C] text-xs font-semibold ml-2">DEC 02</sup>
                </span>
                <span className="text-xs text-slate-500 dark:text-[#B2A7B9]">
                  Prep Progress <span className="text-[#FF6F7C] font-bold">12%</span>
                </span>
                <div className="h-[7px] bg-slate-200 dark:bg-[#2B2234] rounded-[50px] w-full max-w-[150px]">
                  <div className="h-[7px] bg-[#FF6F7C] rounded-[50px]" style={{ width: "12%" }} />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Insights Box */}
          <div className="box_insight_main mt-16 w-full max-w-[710px]">
            <div
              className="baground-insight relative z-10 p-[60px_30px] flex flex-col gap-2.5 rounded-[32px] overflow-hidden border border-slate-200 dark:border-transparent bg-white dark:bg-gradient-to-r dark:from-[#C59AFF4D] dark:via-[#00E3FD4D] dark:to-[#C59AFF4D]"
            >
              {/* Background texture layers */}
              <div
                className="absolute left-[7px] top-[6px] w-[98.3%] h-[100%] bg-[url('/images/student_portal_home_page/Background.png')] bg-no-repeat bg-center bg-cover -z-10 opacity-0 dark:opacity-100"
              />

              <div className="content_box relative z-[99]">
                <span className="text-3xl font-semibold pb-4 text-slate-800 dark:text-[#F4E7F9] block">
                  Your Dashboard Insight
                </span>

                <p className="text-lg text-slate-600 dark:text-[#B2A7B9] font-light leading-relaxed pb-5">
                  Based on your last 7 days of activity, you are 15% ahead of your semester schedule. However, late-night retention is dropping. Shift your complex Physics study sessions to 10:00 AM for peak cognitive efficiency.
                </p>

                <div className="flex flex-wrap gap-5">
                  <a href="#" className="text-lg text-[#C59AFF] font-medium leading-relaxed hover:underline">
                    What does this mean? →
                  </a>
                  <a href="#" className="text-lg text-[#00E3FD] font-medium leading-relaxed hover:underline">
                    What should you do next? →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
