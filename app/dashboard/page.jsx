import Sidebar from "./_components/Sidebar";
import TopBar from "./_components/TopBar";
import JobCardStack from "./_components/JobCardStack";

export default function Dashboard() {
  return (
    <div className="flex w-full min-h-screen">
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col gap-6 p-6">
        {/* TOP BAR */}
        <TopBar />

        {/* CENTER STACK */}
        <div className="flex-1 flex justify-center items-start">
          <JobCardStack />
        </div>
      </div>

      {/* RIGHT PANEL (future preferences) */}
      {/* <PreferencesPanel /> */}
    </div>
  );
}
