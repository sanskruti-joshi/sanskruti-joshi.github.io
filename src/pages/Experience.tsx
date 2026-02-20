"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  year: string;
  title: string;
  organization: string;
  description: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      year: "2025 – 2026",
      title: "Software Engineering Intern",
      organization: "3more Technologies",
      description: [
        "Developed and optimized frontend components for production systems.",
        "Identified and resolved UI and logic bugs across modules.",
        "Collaborated with cross-functional teams in an agile workflow.",
      ],
    },
    {
      year: "2024",
      title: "Team Lead – Automatic Pothole Detector",
      organization: "Academic Project",
      description: [
        "Managed a team to deliver a working computer vision + IoT prototype.",
        "Coordinated task allocation, experimentation, and integration.",
        "Led model testing and system validation.",
      ],
    },
    {
      year: "2023 – 2024",
      title: "Department Representative (NAAC)",
      organization: "College Leadership",
      description: [
        "Served as department representative during NAAC accreditation.",
        "Assisted in documentation, coordination, and institutional evaluation processes.",
      ],
    },
    {
      year: "2023",
      title: "Volunteer – Interaction Intercollege Event",
      organization: "College Event",
      description: [
        "Volunteered in organizing and coordinating intercollege event activities.",
        "Supported logistics, communication, and participant management.",
      ],
    },
  ];

  return (
    <section className="relative w-full py-32 px-6 text-white">

      {/* Background (consistent with other pages) */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black -z-10" />

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Experience & Leadership
          </h2>
          <p className="text-indigo-300/70 mt-4">
            Engineering experience, leadership roles, and institutional contributions.
          </p>
        </div>

        <div className="relative">

          {/* Vertical Spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 to-purple-500 -translate-x-1/2" />

          <div className="space-y-24">

            {experiences.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[45%] relative group">

                    {/* Glow */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-lg group-hover:opacity-40 transition" />

                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

                      {/* Year */}
                      <p className="text-sm text-indigo-400 mb-2">
                        {item.year}
                      </p>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold mb-1">
                        {item.title}
                      </h3>

                      {/* Organization */}
                      <p className="text-indigo-300/70 mb-6">
                        {item.organization}
                      </p>

                      {/* Bullet Points */}
                      <ul className="space-y-3">
                        {item.description.map((point, i) => (
                          <li
                            key={i}
                            className="text-indigo-300/80 leading-relaxed"
                          >
                            • {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-semibold shadow-lg">
                      {item.year.split(" ")[0]}
                    </div>
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