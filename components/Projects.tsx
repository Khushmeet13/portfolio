'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Lottie from 'lottie-react';
import devAnimation from './animations/projectcode.json';
import { FaExternalLinkAlt } from 'react-icons/fa';


const projects = [
  {
    title: 'MIS Dashboard',
    description: 'Business analytics dashboard for real-time report generation and structured data management. Features smart data upload, cleaning, and dynamic filters for faster insights.',
    link: '/projects',
    live: 'https://mis-dashboard-sigma.vercel.app/',
    image: '/images/connected.jpg',
    techStack: [
      { icon: '/images/React.webp', name: 'React' },
      { icon: '/images/Tailwind.png', name: 'Tailwind CSS' },
      { icon: '/images/node-js.png', name: 'Node.js' },
      { icon: '/images/mysql.png', name: 'MySQL' },
    ]
  },
  {
    title: 'Visual Search Engine',
    description: 'AI-powered search tool that connects user images to matching products with high accuracy. It uses machine learning model to understand visuals and display the most relevant results.',
    link: '/projects',
    live: 'http://172.105.252.9:3000/sms-reports',
    image: '/images/development.png',
    techStack: [
      { icon: '/images/React.webp', name: 'React' },
      { icon: '/images/typescript.webp', name: 'Tyescript' },
      { icon: '/images/node-js.png', name: 'Node.js' },
      { icon: '/images/mongodb.png', name: 'MongoDB' },
    ]
  },
  {
    title: 'Cephalogram Tool',
    description: 'Software tool for analyzing X-rays and generating precise orthodontic measurements. Supports manual annotations and improves treatment planning accuracy.',
    link: '/projects',
    live: 'http://172.105.252.9:3000/sms-reports',
    image: '/images/techphoto.webp',
    techStack: [
      { icon: '/images/java.png', name: 'Java' },
      { icon: '/images/javafx.jpg', name: 'JavaFX' },
    ]
  },
];


export default function Projects() {
  return (
    <>
      <div className="h-5 w-full bg-gradient-to-b from-blue-400 to-gray-300/50 dark:from-black dark:to-gray-700" />

      <motion.section
        className="py-10 px-10 dark:bg-gray-700 bg-gray-300/50"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="flex items-center justify-center text-4xl font-bold dark:text-white mb-10">
          <span>Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="p-6 border rounded-3xl shadow hover:shadow-xl dark:bg-black/50 dark:border-white/20 dark:backdrop-blur-md transition-all border-white/30 bg-white/10"
            >

              <div className="overflow-hidden rounded-md mb-4 flex justify-center">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={600}
                  height={300}
                  className="transition-transform duration-500 ease-in-out hover:scale-125 object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mb-2 dark:text-white">{proj.title}
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 inline-flex items-center text-cyan-500 hover:underline"
                >
                  <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              </h3>
              <p className="text-sm mb-4 dark:text-white text-justify">{proj.description}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {proj.techStack.map((tech, index) => (
                  <div key={index} className="relative group w-6 h-6">
                    {/* Tech Icon */}
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />

                   
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 pointer-events-none">
                      {tech.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 mt-[-2px]" />
                    </div>
                  </div>
                ))}
              </div>


              <Link href={proj.link} className="text-cyan-400 hover:underline text-sm font-medium">
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
