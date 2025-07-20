'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Lottie from 'lottie-react';
import devAnimation from './animations/plan.json';


export default function AboutPreview() {
  const tags = ['Clean Code', 'User-first Design', 'Full-Stack', 'Performance', 'Agile'];

  return (
    <>
      <div className="h-5 w-full bg-gradient-to-t from-blue-950 to-gray-300/50 dark:from-black dark:to-gray-700" />

      <motion.section
        className="text-center dark:bg-black dark:text-white py-12 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {/* Lottie Animation */}


        {/* Heading */}
        <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <span className="text-white">👨‍💻</span>
          <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>


        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          I thrive on transforming ideas into interactive digital products using design tools and full-stack technologies.
        </p>

        {/* Quick Tagline */}
        <p className="text-sm text-gray-400 mt-2">
          React • Next.js • Node.js • TypeScript • UI/UX Design • MongoDB
        </p>

        {/* Visual Divider */}
        <div className="w-28 h-1 bg-cyan-300 rounded-full mx-auto my-6" />

        {/* My Approach */}
        <div className="text-left max-w-2xl mx-auto text-gray-300 text-sm md:text-base">
          <h3 className="font-semibold text-lg text-white text-center">🧠 My Approach</h3>
        </div>

        {/* My Approach - Phase Boxes */}
        <div className="mt-5 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              title: 'Phase 1',
              content: 'Understand the user, define the problem, and plan the features with empathy and clarity.',
              image: '/images/phase1.jpg',
            },
            {
              title: 'Phase 2',
              content: 'Design intuitive UI/UX wireframes and prototypes before diving into development.',
              image: '/images/phase2.jpg',
            },
            {
              title: 'Phase 3',
              content: 'Develop, test, and deploy scalable code with focus on performance, accessibility, and UX.',
              image: '/images/phase3.webp',
            },
          ].map((phase, index) => (
            <motion.div
              key={index}
              className="relative border border-cyan-300/50 rounded-2xl h-48 overflow-hidden group cursor-pointer"
              whileHover="hovered"
              initial="initial"
              animate="initial"
            >
              {/* Background Image for initial state */}
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${phase.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10" />

              {/* Title shown initially */}
              <motion.div
                variants={{
                  initial: { opacity: 1 },
                  hovered: { opacity: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-20 flex items-center justify-center text-lg font-bold text-cyan-300 font-serif"
              >
                {phase.title}
              </motion.div>

              {/* Hover Content */}
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  hovered: { opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-30 flex items-center justify-center p-4 text-gray-300 text-sm leading-relaxed text-center"
              >
                {phase.content}
              </motion.div>
            </motion.div>
          ))}
        </div>



        {/* Quote */}
        <blockquote className="mt-6 italic text-sm text-gray-500  pl-4 max-w-xl mx-auto">
          "Code is a tool to amplify imagination."
        </blockquote>


        {/* Animated Tags */}
        {/* Animated Dynamic Tags with Pop Effect */}
        <motion.div
          className="flex gap-2 mt-6 justify-center flex-wrap"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-blue-600/20 text-white/75 text-xs px-3 py-1 rounded-full cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2, backgroundColor: 'rgba(96,165,250,0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>


        {/* CTA Buttons */}
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/about"
            className="text-cyan-300 hover:underline font-medium"
          >
            Learn more →
          </Link>

          <a
            href="/resume.pdf"
            download
            className=" border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition text-white"
          >
            Download Resume
          </a>
        </div>
      </motion.section>
    </>
  );
}
