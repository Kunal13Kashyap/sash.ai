"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="hero-bg noise min-h-screen text-white">

      {/* NAVBAR */}
      <nav className="relative z-10 flex justify-between items-center px-10 py-6">
        <div className="text-xl font-semibold flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-emerald-400/20 flex items-center justify-center">
            AI
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-sm ml-24">
          {["Features", "Testimonials", "Pricing"].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === "Pricing") router.push("/pricing");
              }}
              className="
                px-4 py-2 rounded-full
                text-gray-300
                transition-all duration-300
                hover:bg-white/10
                hover:text-emerald-300
                focus:outline-none
              "
            >
              {item}
            </button>
          ))}
        </div>



        <div className="flex gap-4">
          <button onClick={() => router.push("/sign-in")} className="text-sm">
            Sign In
          </button>
          <button
            onClick={() => router.push("/sign-up")}
            className="bg-emerald-400 text-black px-5 py-2 rounded-full text-sm font-medium"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-10 pt-20 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          className="md:pl-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold leading-tight">
            AI Interview <br /> Preparation
          </h1>

          <p className="mt-6 text-gray-300 max-w-lg">
            Practice for your next job interview with AI.
            Improve your skills, receive smart feedback,
            and boost your confidence.
          </p>

          <button
            onClick={() => router.push("/sign-up")}
            className="mt-8 bg-emerald-400 text-black px-7 py-3 rounded-full font-medium"
          >
            Get Started
          </button>

          <p className="mt-3 text-xs text-gray-400">
            Start for free · Cancel anytime
          </p>
        </motion.div>

        {/* RIGHT – CARD STACK */}
        <div className="relative h-[420px] flex justify-center items-center">

          {/* BACK CARDS */}
          {[2, 1].map((i) => (
            <motion.div
              key={i}
              className="absolute w-[280px] h-[360px] glass rounded-3xl"
              style={{ zIndex: i }}
              animate={{
                x: i * 18,
                y: i * 18,
                scale: 1 - i * 0.04,
              }}
            />
          ))}

          {/* FRONT CARD */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            whileDrag={{ rotate: 6 }}
            className="relative z-20 w-[300px] h-[380px] bg-white text-black rounded-3xl p-5 shadow-2xl cursor-grab"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <p className="font-semibold text-sm">
                Project Management Interview
              </p>
            </div>

            <p className="mt-5 text-sm font-medium">
              Describe a time when you led a complex project.
            </p>

            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">Quality Feedback</p>
              <div className="flex justify-between text-xs mb-1">
                <span>Communication</span>
                <span className="font-semibold">8.6</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 bg-emerald-400 w-[85%] rounded" />
              </div>
            </div>

            <button className="mt-6 w-full bg-emerald-400 py-2 rounded-full text-sm font-medium">
              Swipe for Next →
            </button>
          </motion.div>
        </div>
      </section>

      {/* FEATURES – MATCH IMAGE */}
<section className="relative z-10 px-10 mt-32 max-w-7xl mx-auto">
  <h2 className="text-center text-gray-300 mb-14 text-lg">
    Meet your Wise AI ITIs
  </h2>

<div className="grid md:grid-cols-3 gap-10 items-center">
    
    {/* CARD 1 */}
    <div className="relative green-glass feature-hover rounded-3xl px-7 py-9 text-center md:scale-95 transition-transform duration-300 hover:-translate-y-2">
      <div className="feature-icon mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
        💬
      </div>
      <h3 className="text-lg font-semibold mb-3">
        Realistic Practice
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        Get asked real interview questions and answer just like you would in a real interview.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="relative green-glass feature-hover rounded-3xl px-9 py-12 text-center md:scale-105 md:-translate-y-3 transition-transform duration-300 hover:-translate-y-4">
      <div className="feature-icon mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
        ⚙️
      </div>
      <h3 className="text-lg font-semibold mb-3">
        AI Feedback
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        Receive detailed AI-driven feedback on your responses and learn exactly how to improve.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="relative green-glass feature-hover rounded-3xl px-7 py-9 text-center md:scale-95 transition-transform duration-300 hover:-translate-y-2">
      <div className="feature-icon mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
        👤
      </div>
      <h3 className="text-lg font-semibold mb-3">
        Personalized Learning
      </h3>
      <p className="text-sm text-gray-300 leading-relaxed">
        Train for specific roles and receive personalized feedback aligned with your career goals.
      </p>
    </div>

  </div>
</section>


      {/* TRUSTED */}
      <footer className="relative z-10 mt-24 pb-16 text-center text-gray-400 text-sm">
        Trusted by professionals at top companies
        <div className="flex justify-center gap-8 mt-6 opacity-60 text-lg">
          Google · Meta · Amazon · Spotify · Microsoft
        </div>
      </footer>
    </div>
  );
}
