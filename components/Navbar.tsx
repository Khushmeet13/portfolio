'use client';

import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center
      bg-gradient-to-b from-indigo-950 to-transparent dark:from-black/80 dark:to-transparent
      text-white dark:text-white">

      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/profile.jpeg"
            alt="Profile"
            width={40}
            height={40}
          />
        </div>
        <h1 className="text-xl font-bold font-serif text-white">Portfolio</h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm transition-all duration-300 group ${
                isActive ? 'font-bold text-cyan-400' : 'text-white dark:text-white'
              }`}
            >
              <span className="block group-hover:-translate-y-1 group-hover:text-cyan-400 transform transition-all duration-300">
                {link.label}
              </span>
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          );
        })}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      {/* Icons + Toggle */}
      <div className="hidden md:flex items-center space-x-4 relative">
        <IconGroup />
        <DarkModeToggle />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-center py-4 space-y-4 md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg ${isActive ? 'text-cyan-400 font-semibold' : 'text-white'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <IconGroup />
          <DarkModeToggle />
        </div>
      )}
    </nav>
  );
}

// Group of Icons (to reuse in both views)
function IconGroup() {
  return (
    <>
      <div className="relative group">
        <a href="https://github.com/Khushmeet13" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-5 h-5 hover:text-gray-400" />
        </a>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          GitHub
        </div>
      </div>
      <div className="relative group">
        <a href="https://linkedin.com/in/khushmeet-saini-076752220" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5 hover:text-gray-400" />
        </a>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          LinkedIn
        </div>
      </div>
      <div className="relative group">
        <a href="mailto:youremail@example.com">
          <FaEnvelope className="w-5 h-5 hover:text-gray-400" />
        </a>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          Email
        </div>
      </div>
    </>
  );
}
