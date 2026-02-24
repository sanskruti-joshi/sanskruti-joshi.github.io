import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">

      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black -z-20" />

      {/* Radial Glow Behind Name */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />

      {/* Floating Gradient Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full animate-[float_10s_ease-in-out_infinite]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative max-w-4xl mx-auto px-6 py-24 text-center"
      >
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(124,92,255,0.3)]">
          Sanskruti Joshi
        </h1>

        {/* Role */}
        <p className="mt-4 text-xl text-indigo-300 font-medium">
          Data Science & Frontend Developer
        </p>

        {/* Description */}
        <p className="mt-8 text-lg text-indigo-100/80 max-w-2xl leading-relaxed mx-auto">
          Emerging Data Science professional completing an MSc degree, specializing in intelligent systems and user-centric digital solutions.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-6">

          {/* Primary */}
          <a
            href="/assets/Primary_resume.pdf"
            download="Sanskruti_Joshi_Resume.pdf"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#5b4b8a] via-[#6a57b5] to-[#7c5cff] font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(124,92,255,0.5)] hover:scale-105 transition-all duration-300"
          >
            Download CV
          </a>

          {/* Secondary */}
          <Link
            to="/projects"
            className="px-8 py-3 rounded-full border border-indigo-400/40 text-indigo-200 hover:bg-indigo-600/20 hover:border-indigo-400 transition-all duration-300"
          >
            View My Projects
          </Link>

        </div>
      </motion.div>

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>

    </section>
  );
}