"use client";

export default function PreferencesPanel() {
  return (
    <div className="w-[300px] bg-white rounded-xl p-4 border flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Preferences</h3>
        <button className="text-sm text-blue-600">Edit</button>
      </div>

      {/* Job Type */}
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">
          Job Type
        </p>
        <div className="flex gap-2">
          <button className="flex-1 py-1.5 rounded-lg bg-blue-600 text-white text-sm">
            Intern
          </button>
          <button className="flex-1 py-1.5 rounded-lg bg-gray-100 text-gray-600 text-sm">
            Full-time
          </button>
        </div>
      </div>

      {/* Location */}
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">
          Location
        </p>
        <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
          <span className="text-sm text-gray-700">
            Remote
          </span>
          <div className="w-10 h-5 bg-blue-600 rounded-full relative">
            <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5" />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Tailwind", "JavaScript"].map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">
          Experience Level
        </p>
        <div className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700">
          Entry Level
        </div>
      </div>

      <button className="mt-auto py-2 rounded-lg bg-blue-600 text-white text-sm">
        Update Preferences
      </button>
    </div>
  );
}
