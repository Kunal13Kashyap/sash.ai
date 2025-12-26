"use client";

import { useEffect, useState } from "react";

export default function InterviewList() {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/interviews")
      .then((res) => res.json())
      .then((data) => {
        setInterviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading interviews...</p>;

  if (!interviews.length) {
    return <p className="text-gray-500">No interviews yet</p>;
  }

  return (
    <div className="mt-5">
      {interviews.map((item) => (
        <div key={item.id} className="border p-3 rounded mb-2">
          <h3 className="font-semibold">{item.title}</h3>
        </div>
      ))}
    </div>
  );
}
