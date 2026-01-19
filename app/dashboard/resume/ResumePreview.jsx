"use client";

export default function ResumePreview() {
  return (
    <div className="h-full overflow-y-auto p-6">
      {/* EXPERIENCE */}
      <section className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 mb-3">
          EXPERIENCE
        </h3>

        <div className="mb-4">
          <p className="font-medium text-gray-900">
            Frontend Intern · ABC Corp
          </p>
          <p className="text-sm text-gray-500">
            Jun 2023 – Sep 2023
          </p>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              Built UI components using <span className="bg-blue-50 px-1 rounded">React</span>
            </li>
            <li>
              Worked closely with designers on UI/UX improvements
            </li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-8">
        <h3 className="text-sm font-semibold text-gray-500 mb-3">
          PROJECTS
        </h3>

        <div>
          <p className="font-medium text-gray-900">
            JobSwipe App · 2023
          </p>
          <ul className="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              Implemented swipe logic using <span className="bg-blue-50 px-1 rounded">React</span> & Framer Motion
            </li>
          </ul>
        </div>
      </section>

      {/* Add more sections freely — scrolling is handled */}
    </div>
  );
}
