"use client";

import { Search } from "lucide-react";

export default function TopBar() {
  return (
    <div
      className="
        flex items-center justify-between
        bg-gradient-to-r from-white/90 to-blue-50/70
        backdrop-blur-xl
        rounded-2xl
        px-5 py-4
        shadow-sm
        border border-blue-100
      "
    >
      {/* SEARCH */}
      <div
        className="
          flex items-center gap-3
          w-full max-w-lg
          bg-white/70
          rounded-xl
          px-4 py-2
          border border-blue-100
          focus-within:ring-2 focus-within:ring-blue-500/30
          transition
        "
      >
        <Search size={18} className="text-blue-500" />
        <input
          placeholder="Search jobs or companies..."
          className="
            w-full bg-transparent outline-none
            text-sm text-gray-700
            placeholder:text-gray-400
          "
        />
      </div>

      {/* STATUS */}
      <div
        className="
          hidden md:flex items-center gap-2
          text-sm font-medium
          text-gray-600
          bg-white/70
          px-4 py-2
          rounded-xl
          border border-blue-100
        "
      >
        <span className="text-blue-600 font-semibold">23</span>
        jobs remaining
        <span className="text-gray-300">•</span>
        <span className="text-xs text-gray-500">Updated 2 mins ago</span>
      </div>
    </div>
  );
}