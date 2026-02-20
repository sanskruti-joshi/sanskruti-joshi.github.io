import {
  FaHome,
  FaCode,
  FaFolderOpen,
  FaBriefcase,
  FaGraduationCap,
  FaTrophy,
  FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { path: '/', icon: <FaHome />, label: 'Home' },
    { path: '/skills', icon: <FaCode />, label: 'Skills' },
    { path: '/projects', icon: <FaFolderOpen />, label: 'Projects' },
    { path: '/experience', icon: <FaBriefcase />, label: 'Experience' },
    { path: '/education', icon: <FaGraduationCap />, label: 'Education' },
    { path: '/achievements', icon: <FaTrophy />, label: 'Achievements' },
    { path: '/contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 bg-slate-900/40 backdrop-blur-lg p-4 rounded-3xl shadow-lg">
      <ul className="flex flex-col items-center gap-6">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="text-xl text-slate-400 hover:text-indigo-400 transition"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

