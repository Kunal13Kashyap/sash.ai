"use client";

import { useState } from "react";

export default function AddNewInterview() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    if (!title.trim()) return;

    setLoading(true);

    await fetch("/api/interviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    setLoading(false);
    window.location.reload();
  }

  return (
    <div className="border p-5 rounded">
      <input
        className="border p-2 w-full mb-3"
        placeholder="Interview title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleCreate}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Creating..." : "Add Interview"}
      </button>
    </div>
  );
}
