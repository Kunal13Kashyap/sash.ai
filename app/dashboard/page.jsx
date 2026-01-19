import TopBar from "./_components/TopBar";
import JobCardStack from "./_components/JobCardStack";
import PreferencesPanel from "./_components/PreferencesPanel";
import SwipeActions from "./_components/SwipeActions";

export default function Dashboard() {
  return (
    <div className="flex w-full h-screen bg-[#f5f7fb]">
      

      {/* DASHBOARD CANVAS */}
      <div
        className="relative flex-1"
        style={{
          /* 🎛 MASTER COORDINATES — EDIT ONLY THESE */
          "--topbar-y": "24px",

          "--jobcard-x": "33%",
          "--jobcard-y": "130px",

          "--actions-x": "33%",
          "--actions-y": "540px",

          "--preferences-x": "calc(100% - 360px)",
          "--preferences-y": "130px",
        }}
      >
        {/* TOP BAR */}
        <div
          className="absolute left-0 right-0 px-6"
          style={{ top: "var(--topbar-y)" }}
        >
          <TopBar />
        </div>

        {/* JOB CARD STACK */}
        <div
          className="absolute"
          style={{
            top: "var(--jobcard-y)",
            left: "var(--jobcard-x)",
            transform: "translateX(-50%)",
          }}
        >
          <JobCardStack />
        </div>

        {/* SWIPE ACTION BUTTONS */}
        <div
          className="absolute"
          style={{
            top: "var(--actions-y)",
            left: "var(--actions-x)",
            transform: "translateX(-50%)",
          }}
        >
          <SwipeActions />
        </div>

        {/* PREFERENCES PANEL */}
        <div
          className="absolute"
          style={{
            top: "var(--preferences-y)",
            left: "var(--preferences-x)",
          }}
        >
          <PreferencesPanel />
        </div>
      </div>
    </div>
  );
}
