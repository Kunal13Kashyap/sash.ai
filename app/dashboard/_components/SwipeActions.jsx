"use client";

import { X, Heart } from "lucide-react";

export default function SwipeActions({ onLike, onSkip }) {
  return (
    <div className="flex gap-8 mt-6">
      {/* SKIP */}
      <button
        onClick={onSkip}
        className="
          w-14 h-14
          rounded-full
          bg-red-100
          flex items-center justify-center
          hover:bg-red-200
          transition
          shadow-md
        "
      >
        <X className="text-red-600" />
      </button>

      {/* APPLY */}
      <button
        onClick={onLike}
        className="
          w-16 h-16
          rounded-full
          bg-blue-600
          flex items-center justify-center
          hover:bg-blue-700
          transition
          shadow-lg
        "
      >
        <Heart className="text-white fill-white" />
      </button>
    </div>
  );
}
