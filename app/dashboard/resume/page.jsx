"use client";

import { useState } from "react";

import ResumeUpload from "./_components/ResumeUpload";
import ResumeOverview from "./_components/ResumeOverview";
import MatchInsights from "./_components/MatchInsights";
import ResumePreview from "./_components/ResumePreview";
import ImprovementSuggestions from "./_components/ImprovementSuggestions";

// OpenResume editor
import { Provider } from "react-redux";
import { store } from "@/openresume/lib/redux/store";
import { ResumeForm } from "@/openresume/components/ResumeForm";
import { Resume } from "@/openresume/components/Resume";

export default function ResumePage() {
  const [mode, setMode] = useState("view"); // "view" | "edit"

  /* ================= EDIT MODE ================= */
  if (mode === "edit") {
    return (
      <Provider store={store}>
        <div className="flex w-full h-full bg-gray-50">
          {/* OpenResume Editor */}
          <div className="flex-1 grid grid-cols-2 h-full">
            <div className="overflow-y-auto bg-white border-r">
              <ResumeForm />
            </div>
            <div className="overflow-y-auto bg-gray-50">
              <Resume />
            </div>
          </div>
        </div>
      </Provider>
    );
  }

  /* ================= VIEW MODE ================= */
  return (
    <div className="flex w-full h-full">
      {/* LEFT COLUMN */}
      <div className="flex-1 flex flex-col gap-6 p-6">
        <ResumeUpload onUpload={() => setMode("edit")} />

        <div className="flex-1 bg-white rounded-xl border overflow-y-auto">
          <ResumePreview />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-[360px] flex flex-col gap-6 p-6">
        <ResumeOverview />
        <MatchInsights />
        <ImprovementSuggestions />
      </div>
    </div>
  );
}
