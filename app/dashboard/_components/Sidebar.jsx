"use client";

import { useRouter } from "next/navigation";
import {
  Home,
  Flame,
  FileText,
  Bookmark,
  BarChart3,
  File,
  Bell,
  Settings,
  Star,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Swipe Jobs", icon: Flame },
  { label: "Applications", icon: FileText },
  { label: "Saved Jobs", icon: Bookmark },
  { label: "Analytics", icon: BarChart3 },
  { label: "Resume", icon: File },
  { label: "Notifications", icon: Bell, badge: 5 },
];

export default function Sidebar() {
  const router = useRouter();
  const active = "Dashboard"; // later make dynamic

  return (
    <aside
      className="
        w-[260px]
        bg-gradient-to-b from-white/90 to-blue-50/70
        backdrop-blur-xl
        border-r border-blue-100
        flex flex-col
      "
    >
      {/* ================= LOGO ================= */}
      <div
        onClick={() => router.push("/")}
        className="
          flex items-center gap-3 px-6 py-5 cursor-pointer
          hover:bg-blue-50 transition-colors
        "
      >
        <div
          className="
            w-9 h-9 rounded-lg
            bg-gradient-to-br from-blue-600 to-indigo-600
            text-white flex items-center justify-center
            font-bold shadow-md
          "
        >
          CS
        </div>
        <span className="font-semibold text-gray-900">
          Sash<span className="text-blue-600">.AI</span>
        </span>
      </div>

      {/* ================= NAV ================= */}
      <nav className="flex-1 px-3 pt-2 space-y-1">
        {navItems.map(({ label, icon: Icon, badge }) => {
          const isActive = label === active;

          return (
            <div
              key={label}
              className={`
                relative group flex items-center gap-3
                px-4 py-2 rounded-xl cursor-pointer
                transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-medium shadow-sm"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                }
              `}
            >
              {/* Active Indicator */}
              {isActive && (
                <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-blue-600" />
              )}

              <Icon
                size={18}
                className={`
                  transition-transform duration-300
                  ${isActive ? "scale-110" : "group-hover:scale-110"}
                `}
              />

              <span className="flex-1">{label}</span>

              {badge && (
                <span className="text-xs bg-red-500 text-white rounded-full px-2">
                  {badge}
                </span>
              )}
            </div>
          );
        })}
      </nav>

      {/* ================= BOTTOM ================= */}
      <div className="px-3 pb-4 space-y-2">
        <div
          className="
            flex items-center gap-3 px-4 py-2 rounded-xl
            bg-gradient-to-r from-blue-600 to-indigo-600
            text-white shadow-md cursor-pointer
            hover:opacity-90 transition
          "
        >
          <Star size={18} />
          <span>Upgrade</span>
        </div>

        <div
          className="
            flex items-center gap-3 px-4 py-2 rounded-xl
            text-gray-600 hover:bg-blue-50 hover:text-blue-600
            transition-all cursor-pointer
          "
        >
          <Settings size={18} />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
}
