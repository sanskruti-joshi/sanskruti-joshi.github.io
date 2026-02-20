"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  category: string;
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Handwritten Digit Recognition",
      description:
        "Built a deep learning model using Convolutional Neural Networks (CNN) to classify handwritten digits from the MNIST dataset. Implemented preprocessing, training, and evaluation using TensorFlow/Keras with hyperparameter tuning.",
      category: "Machine Learning",
      image: "src/assets/Digit_Recognition.png",
    },
    {
      title: "AI-based Fake Account Identifier",
      description:
        "Developed a machine learning system to detect fake or bot accounts using behavioral and profile-based features. Improved detection accuracy through model comparison and cross-validation.",
      category: "Machine Learning",
      image: "src/assets/fake_account.png",
    },
    {
      title: "Automatic Pothole Detector",
      description:
        "Led a team project to detect road potholes using computer vision. Built an image-processing pipeline and trained a deep learning model. Demonstrates leadership and practical AI deployment.",
      category: "IoT & Computer Vision",
      image: "src/assets/pothole_detector.png",
    },
    {
      title: "Pinterest Clone",
      description:
        "Developed a responsive web application inspired by Pinterest using Django. Implemented authentication, image uploads, and dynamic UI rendering.",
      category: "Web Development",
      image: "src/assets/pinterest_clone.png",
    },
    {
      title: "Personal Portfolio",
      description:
        "Designed and developed a responsive portfolio website with modern UI principles, interactive sections, and optimized performance.",
      category: "Web Development",
      image: "src/assets/portfolio_logo.png",
    },
  ];

  const getAccent = (category: string) => {
    if (category.includes("Machine")) return "from-blue-500 to-cyan-500";
    if (category.includes("IoT")) return "from-purple-500 to-indigo-500";
    if (category.includes("Web")) return "from-indigo-500 to-violet-500";
    return "from-pink-500 to-purple-500";
  };

  return (
    <section className="relative w-full py-32 px-6 text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-indigo-300/70 mt-4 max-w-2xl mx-auto">
            Real-world applications of machine learning and full-stack engineering.
          </p>
        </div>

        <div className="space-y-24">

          {projects.map((project, index) => {
            const accent = getAccent(project.category);

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Panel */}
                <div className="relative group">
                  <div
                    className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${accent} opacity-20 blur-lg group-hover:opacity-40 transition`}
                  />
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Content Panel */}
                <div className="relative group">
                  <div
                    className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${accent} opacity-20 blur-lg group-hover:opacity-40 transition`}
                  />

                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

                    {/* Accent Bar */}
                    <div
                      className={`h-1 w-16 rounded-full mb-6 bg-gradient-to-r ${accent}`}
                    />

                    <p className="text-indigo-300 text-sm mb-2">
                      {project.category}
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">
                      {project.title}
                    </h3>

                    <p className="text-indigo-300/70 leading-relaxed">
                      {project.description}
                    </p>

                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}