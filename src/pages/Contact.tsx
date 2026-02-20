import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-indigo-300">Contact</h2>
      <p className="text-slate-300 mb-8">
        Feel free to reach out via email or connect on my social profiles.
      </p>
      <div className="flex justify-center gap-6 text-3xl text-slate-400">
        <a
          href="mailto:sanskrutijoshi131@gmail.com"
          className="hover:text-indigo-400 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/sanskruti-joshi"
          target="_blank"
          rel="noopener"
          className="hover:text-indigo-400 transition"
          aria-label="Github"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/sanskruti-joshi-632991210"
          target="_blank"
          rel="noopener"
          className="hover:text-indigo-400 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
