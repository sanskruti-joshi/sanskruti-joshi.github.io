"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  School,
  BookOpen,
  Laptop,
  Award,
  GraduationCap,
  Star,
} from "lucide-react";

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  gpa?: string;
  Icon: React.ElementType;
}

export default function Education() {
  const education: EducationItem[] = [
    {
      year: "2019",
      degree: "SSC",
      institution: "Sinhgad Spring Dale Public School",
      gpa: "9.4 / 10",
      Icon: School,
    },
    {
      year: "2021",
      degree: "HSC",
      institution: "Sinhgad Spring Dale Public School",
      gpa: "9.7 / 10",
      Icon: BookOpen,
    },
    {
      year: "2024",
      degree: "BSc Computer Science",
      institution: "Modern College",
      gpa: "9.6 / 10",
      Icon: Laptop,
    },
    {
      year: "2025",
      degree: "Advanced Course in Data Science & AI",
      institution: "SPPU",
      gpa: "8.6 / 10",
      Icon: Award,
    },
    {
      year: "2026",
      degree: "MSc Data Science",
      institution: "SPPU",
      Icon: GraduationCap,
    },
  ];

  return (
    <section className="relative w-full py-32 px-6 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Academic Journey
          </h2>

          {/* NEW TAGLINE */}
          <p className="text-indigo-300/70 mt-4 text-lg">
            Structured academic growth with consistent excellence across milestones.
          </p>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative overflow-visible">

          {/* CHEVRON STRIP */}
          <div className="flex items-center justify-center gap-0 mb-16">
            {education.map((item, index) => {
              const Icon = item.Icon;
              const isFirst = index === 0;
              const isLast = index === education.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex-shrink-0"
                  style={{
                    marginRight: index < education.length - 1 ? "-40px" : "0",
                    zIndex: education.length - index,
                  }}
                >
                  {/* Chevron */}
                  <div
                    className="relative h-32 flex flex-col items-center justify-center bg-gradient-to-r from-[#5b4b8a] via-[#6a57b5] to-[#7c5cff] shadow-md transition-all"
                    style={{
                      width: "180px",
                      clipPath:
                        "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0% 100%)",
                      borderRadius: isFirst
                        ? "32px 0 0 32px"
                        : isLast
                        ? "0 32px 32px 0"
                        : "0",
                    }}
                  >
                    <Icon
                      className="w-10 h-10 text-white opacity-90 mb-2"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm font-bold text-white">
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* TEXT GRID */}
          <div className="flex justify-center">
            <div
              className="grid grid-cols-5 gap-0"
              style={{ width: "fit-content" }}
            >
              {education.map((item, index) => {
                const isTopGPA =
                  item.gpa === "9.7 / 10" || item.gpa === "9.6 / 10";

                return (
                  <motion.div
                    key={`text-${index}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.2,
                    }}
                    viewport={{ once: true }}
                    className="text-center px-4"
                    style={{ width: "180px" }}
                  >
                    <h3 className="font-bold text-lg text-white leading-tight">
                      {item.degree}
                    </h3>

                    <p className="text-indigo-300/70 text-sm mt-2 leading-relaxed">
                      {item.institution}
                    </p>

                    {item.gpa && (
                      <div className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-purple-300">
                        <span>GPA {item.gpa}</span>

                        {isTopGPA && (
                          <Star
                            className="w-4 h-4 text-purple-400"
                            fill="currentColor"
                          />
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}