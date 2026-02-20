export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32 text-center">
      <div className="w-32 h-32 rounded-full bg-indigo-600 flex items-center justify-center text-4xl font-bold text-white mx-auto mb-6 shadow-lg">
        SJ
      </div>

      <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
        Sanskruti Joshi
      </h1>

      <p className="mt-4 text-xl text-slate-400">
        Data Science & Frontend Developer
      </p>

      <p className="mt-8 text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto">
        MSc Data Science student building intelligent systems and clean user
        interfaces. Passionate about machine learning, problem-solving, and
        creating impactful digital experiences.
      </p>

      {/* skills section remains here */}
      <section id="skills" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-semibold mb-2">Data Science</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
                <li>Python, R, SQL</li>
                <li>
                  Machine Learning / Deep Learning (TensorFlow, Keras,
                  scikit-learn)
                </li>
                <li>Data Visualization (matplotlib, seaborn, ggplot2)</li>
                <li>
                  Numpy, Pandas, OpenCV, Feature Engineering, Model Evaluation
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
                <li>React, TypeScript, JavaScript, HTML5, CSS3</li>
                <li>Django, Flask, Bootstrap</li>
                <li>Responsive Design, UI/UX Principles</li>
                <li>Web app development and integration</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools</h3>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
                <li>Git, GitHub, Eclipse, VS Code</li>
                <li>Jupyter Notebook, RStudio, Anaconda, Google Colab</li>
                <li>TensorFlow, scikit-learn, pandas</li>
                <li>IoT platforms and basic hardware interfacing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
