"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  gpa?: string;
  level?: "highest" | "second";
}

export default function Education() {
  const education: EducationItem[] = [
    {
      year: "2019",
      degree: "SSC",
      institution: "Sinhgad Spring Dale Public School",
      gpa: "9.4 / 10",
    },
    {
      year: "2021",
      degree: "HSC",
      institution: "Sinhgad Spring Dale Public School",
      gpa: "9.7 / 10",
      level: "highest",
    },
    {
      year: "2024",
      degree: "BSc Computer Science",
      institution: "Modern College",
      gpa: "9.6 / 10",
      level: "second",
    },
    {
      year: "2025",
      degree: "Advanced Course in Data Science & AI",
      institution: "SPPU",
      gpa: "8.6 / 10",
    },
    {
      year: "2026",
      degree: "MSc Data Science",
      institution: "Savitribai Phule Pune University",
    },
  ];

  return (
    <section className="relative w-full py-5 px-6 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-28">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Academic Journey
          </h2>
          <p className="text-indigo-300/70 mt-4">
            Consistent academic performance across foundational and advanced studies.
          </p>
        </div>

        <div className="relative">

  {/* MAIN SPINE — a bit higher so it intersects node centers */}
  <div className="absolute left-0 right-0 top-[64px] flex items-center">

    {/* Tapered Ends with better gradient */}
    <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400 to-indigo-500" />

    {/* Core Center Line */}
    <div className="w-full h-[1.5px] bg-gradient-to-r from-purple-500 via-indigo-400 to-indigo-500" />

    <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-purple-400 to-indigo-500" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">

    {education.map((item, index) => {

      // height now matches applied margin so line meets card
      const connectorHeight = index % 2 === 0 ? 96 : 128; // corresponds to mt-24 / mt-32
      const stagger = index % 2 === 0 ? "mt-24" : "mt-32";

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative text-center"
        >

          {/* Year */}
          <div className="text-indigo-400 font-semibold mb-6 text-lg">
            {item.year}
          </div>

          {/* NODE */}
          <div className="relative z-10 flex justify-center">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 shadow-md" />
          </div>

          {/* Vertical Connector */}
          <div
            className="mx-auto w-[1.5px] bg-gradient-to-b from-purple-500 to-indigo-300"
            style={{ height: `${connectorHeight}px` }}
          />

          {/* CARD */}
          <div
            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl ${stagger} transition hover:scale-105`}
          >
            <h3 className="text-lg font-semibold mb-2">
              {item.degree}
            </h3>

            <p className="text-indigo-300/80 text-sm mb-4">
              {item.institution}
            </p>

            {item.gpa && (
              <div className="flex justify-center items-center gap-2">
                {(item.level === "highest" || item.level === "second") && (
                  <Sparkles className="w-4 h-4 text-indigo-300" />
                )}

                <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold shadow-md">
                  GPA {item.gpa}
                </span>
              </div>
            )}
          </div>

        </motion.div>
      );
    })}
  </div>
</div>
      </div>
    </section>
  );
}