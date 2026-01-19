"use client";

import JobCardStack from "./_components/JobCardStack";
import PreferencesPanel from "./_components/PreferencesPanel";
import { demoJobs } from "./_data/demoJobs";

export default function DashboardClient() {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* TOP BAR */}
      <div className="h-[72px] flex items-center justify-between px-8 bg-white border-b shrink-0">
        <input
          placeholder="Search jobs or companies..."
          className="w-[420px] px-4 py-2 rounded-lg border bg-gray-50 text-sm"
        />
        <div className="text-sm text-gray-500">
          <span className="text-blue-600 font-semibold">23</span> jobs remaining ·
          Updated 2 mins ago
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 px-8 py-4 gap-6 overflow-hidden">
        {/* CENTER SWIPE AREA */}
        <div className="flex-1 flex flex-col items-center justify-center overflow-hidden">
          <JobCardStack jobs={demoJobs} />

          {/* ACTION BUTTONS */}
          <div className="flex gap-6 mt-4">
            <button className="w-14 h-14 rounded-xl bg-red-100 text-red-500 text-xl hover:scale-105 transition">
              ✕
            </button>
            <button className="w-14 h-14 rounded-xl bg-yellow-100 text-yellow-500 text-xl hover:scale-105 transition">
              ★
            </button>
            <button className="w-14 h-14 rounded-xl bg-green-100 text-green-500 text-xl hover:scale-105 transition">
              ❤
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-3">
            Swipe left to skip · Swipe right to apply
          </p>
        </div>

        {/* RIGHT PANEL */}
        <PreferencesPanel />
      </div>
    </div>
  );
}
