"use client";

import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

export default function DashboardClient() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-2xl">Welcome to Dashboard</h2>
      <h2 className="text-gray-500">
        Create and start your mock interview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterview />
      </div>

      <InterviewList />
    </div>
  );
}
