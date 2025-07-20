'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaStar, FaPlus, FaMinus } from 'react-icons/fa';

type TimelineEntry = {
  heading: string;
  sub?: string;
  desc?: string;
};

type TimelineSection = {
  icon: React.ReactNode;
  title: string;
  entries: TimelineEntry[];
};


const timelineData: TimelineSection[] = [
  {
    icon: <FaGraduationCap />,
    title: 'Education',
    entries: [
      { heading: 'B.Tech (IT) – CGC Landran', sub: '2020 - 2024 | CGPA: 8.98' },
      { heading: 'Intermediate – CBSE', sub: '2019 - 2020 | 95%' },
      { heading: 'Matriculation – CBSE', sub: '2017 - 2018 | 90.2%' },
    ],
  },
  {
    icon: <FaBriefcase />,
    title: 'Experience',
    entries: [
      {
        heading: 'AllHeart Web – MERN Developer',
        sub: 'June 2025 – Present',
        desc: `• Built and maintained scalable full-stack apps using MongoDB, Express.js, React, and Node.js.
              • Designed RESTful APIs and server-side logic with Node.js & Express.
              • Collaborated closely with frontend/backend teams to ensure seamless integration.
              • Handled deployments and maintenance on cloud environments.
              • Ensured application scalability, speed, and high performance.
              • Used Git for version control and agile collaboration.`,
      },
      {
        heading: 'Virtuoso Netsoft – Web Dev Intern',
        sub: 'Jan 2025 – May-2025',
        desc: `• Created dashboards, optimized backend data handling, reduced reporting time by 30%.
              • Streamlined backend workflows to enhance data processing efficiency and reduce manual effort. 
              • Identified and resolved critical bugs during testing and deployment phases to improve system stability.
              • Collaborated with senior developers to optimize features and troubleshoot performance issues.`,
      },
      {
        heading: 'CSIO-CSIR – Development Intern',
        sub: 'Jan 2024 – May-2024',
        desc: `• Designed a software tool for cephalogram analysis to streamline orthodontic planning.
        • Enhanced tool accuracy and efficiency through continuous research-driven improvements.
        • Co-led prototyping and testing efforts, boosting user interaction and adoption.
        • Gained hands-on experience across software tools, expanding technical skills and adaptability.`,
      },
    ],
  },
  {
    icon: <FaCertificate />,
    title: 'Certifications',
    entries: [
      {
        heading: 'React JS – Solitaire Infosys',
        sub: 'Issued: Aug 2023',
        desc: 'Completed an intensive 3-months training program covering React, Redux, and deployment practices.',
      },
      {
        heading: 'Cloud Computing 101 – AWS Educate',
        sub: 'Issued: July 2021',
        desc: 'Gained hands-on experience with AWS services including EC2, S3, Lambda, and IAM basics.',
      },
      {
        heading: 'Java Programming Fundamentals – Infosys',
        sub: 'Issued: Oct 2022',
        desc: 'Learned core Java concepts including OOP, data types, control structures, and exception handling. Built mini console applications using classes and interfaces.',
      },
    ],
  },

];


export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-700 to-blue-400 dark:from-black dark:via-gray-900 dark:to-black text-white"
        >
          <div className="relative z-10 pt-24  max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

            {/* Left: Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg text-white">
                About Me
              </h2>

              <p className="text-lg text-white/90 leading-relaxed mb-4 text-justify">
                <span className="text-cyan-300 font-semibold">Not just a developer — a digital architect.</span> <br />
                I'm Khushmeet Saini, a full-stack engineer who designs intuitive interfaces, architects intelligent systems, and turns blank screens into real-world impact.
              </p>

              <p className="text-lg text-white/90 leading-relaxed mb-4 text-justify">
                Whether it’s AI-powered visual search or real-time dashboards, I bridge the gap between data and design.
                From clean UI flows to scalable APIs, I build web experiences that don’t just <em>function</em> — they <strong>connect</strong>.
              </p>

              <p className="text-lg text-white/80 italic mb-6 text-justify">
                “I don't just write code. I shape digital journeys that speak for themselves.”
              </p>

              <a
                href="/khushmeetsaini_resume.pdf"
                download
                className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 font-medium transition"
              >
                Download Resume
              </a>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/aboutback.jpeg"
                alt="Khushmeet Saini"
                width={300}
                height={300}
                className="rounded-md shadow-lg"
              />
            </div>

          </div>

          {/* Divider */}
          <div className="w-full my-12">
            <div className="h-[2px] w-3/4 mx-auto bg-gradient-to-r from-cyan-400 via-white to-cyan-400 opacity-40 rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto pb-16 px-6">
            <h2 className="text-3xl font-bold text-white mb-10 text-center drop-shadow">My Journey</h2>

            <div className="relative border-l-2 border-cyan-400 ml-4 space-y-12">

              {timelineData.map((section, index) => {
                const [expanded, setExpanded] = useState(false);
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative pl-10"
                  >
                    {/* Icon Circle */}
                    <div className="absolute -left-6 top-1 bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                      {section.icon}
                    </div>

                    {/* Header and Toggle */}
                    <div
                      className="flex items-center justify-between bg-white/10 backdrop-blur-md p-4 rounded-xl cursor-pointer hover:bg-white/20 transition"
                      onClick={() => setExpanded(!expanded)}
                    >
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                      {expanded ? <FaMinus className="text-cyan-400" /> : <FaPlus className="text-cyan-400" />}
                    </div>

                    {/* Content Expand */}
                    <AnimatePresence>
                      {expanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4"
                        >
                          {section.entries.map((entry, idx) => (
                            <div
                              key={idx}
                              className="bg-white/5 border border-white/10 rounded-md p-4 text-white/90"
                            >
                              <h4 className="font-semibold text-lg">{entry.heading}</h4>
                              {entry.sub && <p className="text-sm text-white/70">{entry.sub}</p>}
                              {entry.desc && (
                                <p className="mt-2 text-sm whitespace-pre-line">{entry.desc}</p>
                              )}

                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>


        </motion.div>
      </main>
      <Footer />
    </>
  );
}
