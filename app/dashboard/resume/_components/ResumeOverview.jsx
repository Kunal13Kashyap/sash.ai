export default function ResumeOverview() {
  return (
    <div className="bg-white rounded-xl border p-5">
      <h3 className="font-semibold mb-4">Resume Overview</h3>

      <p className="text-sm text-gray-600 mb-2">
        Status: <span className="text-green-600 font-medium">Uploaded</span>
      </p>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Resume Strength</span>
          <span className="font-medium">82%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded">
          <div className="h-2 bg-blue-600 rounded w-[82%]" />
        </div>
      </div>

      <p className="text-sm text-gray-500">
        Detected Level: <span className="font-medium">Entry Level</span>
      </p>
    </div>
  );
}
