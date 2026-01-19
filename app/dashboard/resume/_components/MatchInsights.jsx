export default function MatchInsights() {
  return (
    <div className="bg-white rounded-xl border p-5">
      <h3 className="font-semibold mb-4">Match Insights</h3>

      <div className="mb-3">
        <p className="text-sm font-medium text-green-600">Strong Matches</p>
        <div className="flex gap-2 mt-1">
          <span className="px-2 py-1 text-xs bg-blue-50 rounded">React</span>
          <span className="px-2 py-1 text-xs bg-blue-50 rounded">UI</span>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-sm font-medium text-yellow-600">Partial Matches</p>
        <span className="px-2 py-1 text-xs bg-gray-100 rounded mt-1 inline-block">
          Next.js
        </span>
      </div>

      <div>
        <p className="text-sm font-medium text-gray-500">Missing Skills</p>
        <div className="flex gap-2 mt-1">
          <span className="px-2 py-1 text-xs bg-gray-100 rounded">
            REST APIs
          </span>
          <span className="px-2 py-1 text-xs bg-gray-100 rounded">
            TypeScript
          </span>
        </div>
      </div>
    </div>
  );
}
