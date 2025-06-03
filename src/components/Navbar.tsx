"use client";
import { Link } from "react-scroll";

const navItems = [
  { label: "Profile", to: "profile" },
  { label: "Tech Stack", to: "techstack" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex justify-center gap-8 py-4">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-64}
            className="cursor-pointer px-3 py-1 rounded-md text-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            activeClass="text-blue-600 dark:text-blue-400 font-bold"
            spy={true}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
