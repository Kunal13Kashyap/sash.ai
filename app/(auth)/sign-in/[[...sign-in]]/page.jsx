"use client";

import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white min-h-screen">
      <div className="lg:grid lg:grid-cols-12 min-h-screen">
        
        {/* LEFT PANEL */}
        <section className="relative hidden lg:flex lg:col-span-5 xl:col-span-6 items-end bg-gray-900">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="relative z-10 p-12 text-white">
            <h2 className="text-4xl font-bold">PrepAI 🦑</h2>
            <p className="mt-4 text-white/90">
              Sign in to continue your interview preparation journey.
            </p>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <main className="flex items-center justify-center px-8 py-12 lg:col-span-7 xl:col-span-6">
          <div className="w-full max-w-md">
            <SignIn />
          </div>
        </main>

      </div>
    </section>
  );
}
