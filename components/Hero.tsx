'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';


export default function Hero() {
  return (
    <>

      <motion.section
        className="relative h-[100vh] w-full flex items-center justify-center px-4 md:px-16 bg-gradient-to-br from-indigo-950 via-blue-600 to-blue-300 dark:from-black dark:via-gray-900 dark:to-indigo-800"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

       
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
        
          <div className="text-white text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
              Hi, I&apos;m Khushmeet 👋
            </h1>

            <p className="text-xl font-medium">
              I&apos;m a{' '}
              <span className="text-cyan-300 font-bold">
                <Typewriter
                  words={['MERN Stack Developer', 'UI/UX Designer', 'Tech Enthusiast']}
                  loop
                  cursor
                />
              </span>
            </p>

            <p className="mt-4 text-lg text-white/90 max-w-md">
              I build sleek, scalable web apps using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Node.js</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/khushmeetsaini_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                View Portfolio
              </a>
              <Link
                href="/contact"
                className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition text-center"
              >
                Contact Me
              </Link>

            </div>

            {/* Social Icons */}
            <div className="mt-6 flex justify-center md:justify-start gap-6 text-2xl">
              <a href="https://github.com/" target="_blank" className="hover:text-cyan-300">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" className="hover:text-cyan-300">
                <FaLinkedin />
              </a>
              <a href="mailto:khushmeet@example.com" className="hover:text-cyan-300">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image with Animation */}
          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src="/profile.jpeg"
              alt="Khushmeet profile"
              width={400}
              height={400}
              className="rounded-full border-4 border-white shadow-xl"
            />
          </motion.div>
        </div>


        <div className="absolute bottom-8 text-white text-3xl animate-bounce">
          ↓
        </div>
      </motion.section>

      <div className="h-5 w-full bg-gradient-to-b from-blue-400 to-blue-300/50 dark:from-indigo-950  dark:to-gray-700" />
    </>
  );
}
