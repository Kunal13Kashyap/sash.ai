"use client";

export default function ResumeUpload({ onUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // ⚠️ Parsing will come later
    // For now: immediately open editor
    onUpload?.(file);
  };

  return (
    <div className="bg-white rounded-xl border p-6 flex flex-col items-center justify-center text-center">
      <div className="text-4xl mb-4">☁️</div>

      <h3 className="font-semibold text-lg">Upload Your Resume</h3>
      <p className="text-sm text-gray-500 mt-1">
        PDF or DOCX, max 5MB
      </p>

      <label className="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white text-sm cursor-pointer">
        Upload Resume
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
