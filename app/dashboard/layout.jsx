import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex w-full h-screen bg-[#f5f7fb]">
      {/* LEFT SIDEBAR (shared) */}
      <Sidebar />

      {/* PAGE CONTENT */}
      <main className="flex-1 h-screen">
        {children}
      </main>
    </div>
  );
}
