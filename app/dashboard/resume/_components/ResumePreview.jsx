export default function ResumePreview() {
  return (
    <div className="h-full overflow-y-auto p-6 space-y-8">
      <section>
        <h4 className="text-sm font-semibold text-gray-500 mb-2">
          EXPERIENCE
        </h4>
        <p className="font-medium">Frontend Intern · ABC Corp</p>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
          <li>Built UI components using React</li>
          <li>Worked with designers on UX</li>
        </ul>
      </section>

      <section>
        <h4 className="text-sm font-semibold text-gray-500 mb-2">
          PROJECTS
        </h4>
        <p className="font-medium">JobSwipe App</p>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
          <li>Implemented swipe logic</li>
          <li>Used Framer Motion</li>
        </ul>
      </section>

      {/* Duplicate sections to test scrolling */}
      <section className="h-[400px] bg-gray-50 rounded" />
    </div>
  );
}
