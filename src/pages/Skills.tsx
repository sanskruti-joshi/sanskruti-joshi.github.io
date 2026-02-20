"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      accent: "from-purple-500 to-indigo-500",
      skills: [
        "Python","R","Java","C","C++",
        "JavaScript","TypeScript","SQL","PHP"
      ],
    },
    {
      title: "Data Science & ML",
      accent: "from-blue-500 to-cyan-500",
      skills: [
        "Machine Learning","Deep Learning","TensorFlow","Keras",
        "Scikit-learn","NumPy","Pandas","Matplotlib","Seaborn",
        "OpenCV","Model Evaluation","Feature Engineering",
        "CNN","Data Preprocessing"
      ],
    },
    {
      title: "Web Development",
      accent: "from-indigo-500 to-violet-500",
      skills: [
        "React","Node.js","Django","HTML5","CSS3",
        "Tailwind CSS","Bootstrap","PostgreSQL",
        "Responsive Design","SSR","Framer Motion"
      ],
    },
    {
      title: "Tools & Platforms",
      accent: "from-pink-500 to-purple-500",
      skills: [
        "Git","GitHub","VS Code","Eclipse",
        "Google Colab","Jupyter Notebook",
        "RStudio","Anaconda","Linux","Figma"
      ],
    },
  ];

  return (
    <section className="relative w-full py-32 px-6 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-indigo-300/70 mt-4 max-w-2xl mx-auto">
            A balanced blend of data science foundations and full-stack engineering capabilities.
          </p>
        </div>

        {/* Staggered Layout */}
        <div className="grid md:grid-cols-2 gap-14">

          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group ${
                index % 2 !== 0 ? "md:mt-16" : ""
              }`}
            >
              {/* Accent Gradient Border */}
              <div
                className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${cat.accent} opacity-20 blur-lg group-hover:opacity-40 transition`}
              />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

                {/* Accent Bar */}
                <div
                  className={`h-1 w-16 rounded-full mb-6 bg-gradient-to-r ${cat.accent}`}
                />

                <h3 className="text-2xl font-semibold mb-6">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-sm rounded-full
                                 bg-white/5 border border-white/10
                                 hover:border-indigo-400/60
                                 hover:bg-indigo-500/10
                                 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}