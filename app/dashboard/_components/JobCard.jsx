"use client";

import { motion } from "framer-motion";

export default function JobCard({ job }) {
  return (
    <motion.div
      className="
        absolute
        w-[340px] h-[420px]
        bg-gradient-to-br from-white to-blue-50
        rounded-3xl
        shadow-xl
        border border-blue-100
        p-6
        flex flex-col
      "
      initial={{ scale: 0.96, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      {/* COMPANY */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {job.company[0]}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{job.role}</h3>
          <p className="text-sm text-gray-500">{job.company}</p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1">
        {job.description}
      </p>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2 mt-4">
        {job.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* FOOTER */}
      <div className="mt-6 text-xs text-gray-500">
        {job.location} · {job.type}
      </div>
    </motion.div>
  );
}
