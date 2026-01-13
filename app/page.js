"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden text-gray-900">

      {/* ================= DYNAMIC BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100" />

        {/* Animated blobs */}
        <motion.div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-blue-400/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-180px] right-[-160px] w-[620px] h-[620px] bg-sky-400/20 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              CS
            </div>
            <span className="font-semibold">
              Sash<span className="text-blue-600">.AI</span>
            </span>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <button
              onClick={() => router.push("/pricing")}
              className="hover:text-blue-600"
            >
              Pricing
            </button>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4">
            <button
              onClick={() => router.push("/sign-in")}
              className="text-sm text-gray-600 hover:text-blue-600"
            >
              Sign in
            </button>
            <button
              onClick={() => router.push("/sign-up")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="pt-32 px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            AI Interview Preparation,
            <br />
            <span className="text-blue-600">Reimagined</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-xl mb-8">
            Practice real interview questions with AI, get instant feedback,
            and track every job application in one clean dashboard.
          </p>

          <button
            onClick={() => router.push("/sign-up")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg"
          >
            Get Started Free
          </button>

          <p className="text-sm text-gray-500 mt-3">
            Start free · No credit card · Cancel anytime
          </p>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -14 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="relative soft-card p-6 max-w-md"
        >
          <p className="text-sm font-semibold text-gray-500 mb-2">
            Project Management Interview
          </p>

          <p className="text-lg font-medium mb-6">
            Tell me about a time you led a cross-functional team under a tight deadline.
          </p>

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">AI Feedback Preview</p>
            <div className="flex items-center gap-3">
              <div className="h-2 flex-1 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full w-[86%]" />
              </div>
              <span className="text-sm font-semibold">8.6</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
            Swipe for Next →
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Private & secure · No recordings stored
          </p>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="mt-32 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Prepare for Your Dream Job
        </h2>
        <p className="text-gray-600 text-center mb-16">
          Everything you need to practice, apply, and track — in one place.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["AI Resume Builder", "Parse and edit your resume intelligently."],
            ["Job Swiping", "Swipe right to apply, left to skip."],
            ["Application Tracking", "Track applied, rejected, shortlisted roles."],
          ].map(([title, desc]) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 160 }}
              className="soft-card p-6 bg-gradient-to-br from-white via-blue-50 to-white"
            >
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

{/* ================= ABOUT ================= */}
<section
  id="about"
  className="relative z-10 mt-32 px-10 max-w-6xl mx-auto text-center"
>
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
  >
    About Us
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="text-gray-600 mb-16 max-w-3xl mx-auto"
  >
    Two people building something useful, practical, and better than what already exists.
  </motion.p>

  <div className="grid md:grid-cols-2 gap-12">
    {[
      {
        name: "Saaransh Jain",
        img: "/about/saaransh.jpeg",
        desc: "Builds things. Breaks them. Fixes them again.",
      },
      {
        name: "Kunal Kashyap",
        img: "/about/kunal.jpeg",
        desc: "Thinks deeply, questions assumptions, and keeps things grounded.",
      },
    ].map(({ name, img, desc }, i) => (
      <motion.div
        key={name}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
        whileHover={{ y: -12, scale: 1.04 }}
        className="relative rounded-3xl p-8 overflow-hidden border border-blue-100 shadow-xl bg-white"
      >
        {/* ===== Gradient Background (NO opacity) ===== */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-100" />

        {/* ===== Animated Glow ===== */}
        <motion.div
          className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/25 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ===== Hover Light Sweep ===== */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent via-white/40 to-transparent pointer-events-none" />

        {/* ===== CONTENT ===== */}
        <div className="relative flex flex-col items-center text-center">
          {/* Image wrapper — centered */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl" />
            <img
              src={img}
              alt={name}
              className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Name — solid color */}
          <h3 className="text-lg font-semibold text-gray-900">
            {name}
          </h3>

          {/* Description — readable */}
          <p className="text-sm text-gray-700 mt-2 max-w-xs">
            {desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>



      {/* ================= FOOTER ================= */}
      <footer className="mt-32 pb-16 text-center text-sm text-gray-500">
        Trusted by professionals at top companies
        <div className="flex justify-center gap-8 mt-6 opacity-70">
          Google · Meta · Amazon · Spotify · Microsoft
        </div>
      </footer>
    </main>
  );
}
