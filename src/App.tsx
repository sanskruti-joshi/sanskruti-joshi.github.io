import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
// contact page is unused; footer handles contact
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <BrowserRouter>
      {/* sticky header/nav */}
      <header className="fixed top-0 left-0 w-full backdrop-blur bg-white/20 dark:bg-black/20 z-50">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <ul className="flex gap-6">
            <li>
              <a href="/#skills" className="hover:text-indigo-400 transition">
                Skills
              </a>
            </li>
            <li>
              <Link to="/projects" className="hover:text-indigo-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-indigo-400 transition">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/education" className="hover:text-indigo-400 transition">
                Education
              </Link>
            </li>
            <li>
              <a href="#footer" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/assets/Primary_resume.pdf"
                download="Sanskruti_Joshi_Resume.pdf"
                className="hover:text-indigo-400 transition"
              >
                Download Resume
              </a>
            </li>
          </ul>

        </nav>
      </header>

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </main>
      <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;