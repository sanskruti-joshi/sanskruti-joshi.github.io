"use client";

import { Trophy, Medal, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section className="relative w-full py-32 px-6 text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-indigo-300/70 mt-4 max-w-2xl mx-auto">
            Academic excellence, competitive recognition, and leadership contributions.
          </p>
        </div>

        {/* 🥇 Spotlight – First Rank */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-24"
        >
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl" />

          <div className="relative bg-white/[0.08] backdrop-blur-xl border border-indigo-400/40 rounded-3xl p-12 text-center">

            {/* Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-3xl" />

            <div className="flex justify-center mb-6">
              <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              First Rank – BSc Computer Science
            </h3>

            <p className="text-indigo-300/80 max-w-2xl mx-auto leading-relaxed">
              Graduated as the first rank holder in BSc Computer Science, demonstrating consistent academic excellence across core computing subjects.
            </p>

          </div>
        </motion.div>

        {/* Supporting Achievements */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Avishkar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-400/30 transition">
              <div className="mb-4 p-3 rounded-lg bg-white/10 inline-block">
                <Medal className="w-5 h-5 text-indigo-300" />
              </div>

              <h4 className="font-semibold mb-3">
                Avishkar Research Competition
              </h4>

              <p className="text-indigo-300/80 text-sm leading-relaxed">
                Secured first prize at college level and represented at zonal level, showcasing research aptitude and project presentation skills.
              </p>
            </div>
          </motion.div>

          {/* Hackathon */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-400/30 transition">
              <div className="mb-4 p-3 rounded-lg bg-white/10 inline-block">
                <Lightbulb className="w-5 h-5 text-indigo-300" />
              </div>

              <h4 className="font-semibold mb-3">
                Hackathon Participation
              </h4>

              <p className="text-indigo-300/80 text-sm leading-relaxed">
                Participated in competitive hackathon environments, building rapid prototypes and collaborating under time constraints.
              </p>
            </div>
          </motion.div>

          {/* NAAC */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-400/30 transition">
              <div className="mb-4 p-3 rounded-lg bg-white/10 inline-block">
                <Users className="w-5 h-5 text-indigo-300" />
              </div>

              <h4 className="font-semibold mb-3">
                NAAC Department Representative
              </h4>

              <p className="text-indigo-300/80 text-sm leading-relaxed">
                Served as departmental representative during NAAC accreditation process, contributing to documentation and institutional coordination.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}