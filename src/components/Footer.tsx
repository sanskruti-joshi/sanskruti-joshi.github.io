import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className="py-6 text-center text-sm text-slate-500 bg-white/50 dark:bg-black/50">
      <div className="flex flex-col items-center gap-2">
        <a
          href="mailto:sanskrutijoshi131@gmail.com"
          className="text-2xl text-slate-400 hover:text-indigo-400 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <div className="flex gap-6 text-2xl text-slate-400">
          <a
            href="https://github.com/sanskruti-joshi"
            target="_blank"
            rel="noopener"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sanskruti-joshi-632991210"
            target="_blank"
            rel="noopener"
            className="hover:text-indigo-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
      <div className="mt-4">© {new Date().getFullYear()} Sanskruti Joshi</div>
    </footer>
  );
}
