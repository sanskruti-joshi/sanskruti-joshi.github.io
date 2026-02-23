"use client";

import { Trophy, Medal, Award, Brain, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section className="relative w-full py-32 px-6 text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-indigo-300/70 mt-4 max-w-2xl mx-auto">
            Academic distinction and competitive excellence across analytical and technical domains.
          </p>
        </div>

        {/* 🥇 Elite Spotlight Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">

          {/* BSc First Rank */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl" />

            <div className="relative bg-white/[0.08] backdrop-blur-xl border border-indigo-400/40 rounded-3xl p-10">

              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-3xl" />

              <div className="mb-5 p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 inline-block">
                <Trophy className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                First Rank – BSc Computer Science
              </h3>

              <p className="text-indigo-300/80 leading-relaxed">
                Graduated as the first rank holder, demonstrating consistent academic excellence across core computing disciplines.
              </p>
            </div>
          </motion.div>

          {/* NPTEL Top 1% */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-xl" />

            <div className="relative bg-white/[0.08] backdrop-blur-xl border border-indigo-400/40 rounded-3xl p-10">

              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-3xl" />

              <div className="mb-5 p-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 inline-block">
                <Award className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                NPTEL – Top 1% (Silver Elite)
              </h3>

              <p className="text-indigo-300/80 leading-relaxed">
                Ranked in the top 1% nationally in Programming, Data Structures and Algorithms using Python, reflecting strong algorithmic proficiency.
              </p>
            </div>
          </motion.div>

        </div>

        {/* 🥈 Secondary Achievements */}
        <div className="grid md:grid-cols-2 gap-10">

          <AchievementCard
            icon={<Medal className="w-5 h-5 text-indigo-300" />}
            title="Endowment Prize for First Rank"
            description="Awarded institutional endowment recognition for securing first rank in BSc Computer Science."
          />

          <AchievementCard
            icon={<Brain className="w-5 h-5 text-indigo-300" />}
            title="First Ranker in Mathematics"
            description="Achieved highest rank in Mathematics, reinforcing strong quantitative and analytical foundations."
          />

          <AchievementCard
            icon={<Users className="w-5 h-5 text-indigo-300" />}
            title="Avishkar – Zonal Level Representation"
            description="Represented at zonal level in the Avishkar Research Competition, demonstrating research and presentation excellence."
          />

          <AchievementCard
            icon={<Medal className="w-5 h-5 text-indigo-300" />}
            title="Winner – Mathematical Hockey (College-Level)"
            description="Secured first place in a quantitative problem-solving team competition emphasizing speed, analytical reasoning, and collaborative strategy."
          />

        </div>

      </div>
    </section>
  );
}

function AchievementCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-400/30 transition"
    >
      <div className="mb-4 p-3 rounded-lg bg-white/10 inline-block">
        {icon}
      </div>

      <h4 className="font-semibold mb-3">
        {title}
      </h4>

      <p className="text-indigo-300/80 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}