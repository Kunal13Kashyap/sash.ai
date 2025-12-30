"use client";

import { useState } from "react";

export default function UploadResume() {
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");

  async function upload() {
    if (!file) return setMsg("Select a file");

    const fd = new FormData();
    fd.append("resume", file);

    const res = await fetch("/api/resume", {
      method: "POST",
      body: fd,
    });

    const data = await res.json();
    setMsg(res.ok ? "Uploaded ✅" : data.error);
  }

  return (
    <div className="border p-4 rounded">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={upload} className="ml-3 bg-black text-white px-3 py-1">
        Upload Resume
      </button>
      {msg && <p className="mt-2 text-sm">{msg}</p>}
    </div>
  );
}
