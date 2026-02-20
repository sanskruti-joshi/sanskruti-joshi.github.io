import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-32 text-center">
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
      <div className="mt-10 flex justify-center gap-4">
        <a
          href="/assets/Primary_resume.pdf"
          download="Sanskruti_Joshi_Resume.pdf"
          className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white transition"
        >
          Download CV
        </a>
        <Link
          to="/projects"
          className="px-6 py-3 border border-indigo-500 rounded-full text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
        >
          View My Projects
        </Link>
      </div>
    </div>
  );
}

