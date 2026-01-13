"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JobCard from "./JobCard";
import SwipeActions from "./SwipeActions";

const MOCK_JOBS = [
  {
    id: 1,
    role: "Frontend Engineer",
    company: "Google",
    description:
      "Build scalable UI systems and work closely with design and product teams.",
    tags: ["React", "TypeScript", "UI"],
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    role: "Product Designer",
    company: "Spotify",
    description:
      "Design intuitive user experiences for millions of listeners worldwide.",
    tags: ["Figma", "UX", "Design"],
    location: "Berlin",
    type: "Hybrid",
  },
  {
    id: 3,
    role: "Backend Engineer",
    company: "Amazon",
    description:
      "Work on high-scale distributed systems powering global commerce.",
    tags: ["Node.js", "AWS", "Databases"],
    location: "Bangalore",
    type: "Full-time",
  },
];

export default function JobCardStack() {
  const [jobs, setJobs] = useState(MOCK_JOBS);

  const handleSwipe = (direction) => {
    setJobs((prev) => prev.slice(1));
    // later: API call for apply/skip
  };

  return (
    <div className="flex flex-col items-center">
      {/* CARD STACK */}
      <div className="relative h-[460px] w-[360px]">
        <AnimatePresence>
          {jobs.slice(0, 2).map((job, index) => (
            <motion.div
              key={job.id}
              drag={index === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 120) handleSwipe("right");
                if (info.offset.x < -120) handleSwipe("left");
              }}
              style={{
                zIndex: jobs.length - index,
              }}
              animate={{
                scale: index === 0 ? 1 : 0.95,
                y: index * 10,
              }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ACTION BUTTONS */}
      <SwipeActions
        onLike={() => handleSwipe("right")}
        onSkip={() => handleSwipe("left")}
      />
    </div>
  );
}
