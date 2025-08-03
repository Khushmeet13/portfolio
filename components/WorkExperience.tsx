'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import devAnimation from './animations/workex.json';
import { FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
  {
    company: 'Allheart Web Pvt Ltd',
    website: 'https://allheartweb.com',
    role: 'MERN Stack Developer',
    period: 'June 2025 - Present',
    location: 'Chandigarh, India',
    description: `
    <ul class="list-disc pl-5 space-y-1">
      <li>Working on building and maintaining scalable applications using MongoDB, Express.js, React, and Node.js.</li>
      <li>Made responsive UI in Tailwind, and integrated RESTful APIs for seamless frontend-backend communication.</li>
      <li>Identify and resolve bugs, ensuring software quality and performance.</li>
      <li>Deploy and maintain applications on cloud platforms or servers and utilize Git for code versioning .</li>
      <li>Work with cross-functional teams to ensure project requirements and optimize application performance for speed and scalability.</li>
    </ul>
    `,
    logo: '/logos/allheart.png',
    skills: ['React', 'Tailwind', 'Node JS', 'MongoDB', 'REST API', 'Figma'],
  },
  {
    company: 'Virtuoso Netsoft Pvt Ltd',
    website: 'https://virtuosonetsoft.com',
    role: 'Web Developer Intern',
    period: 'Jan 2025 - May 2025',
    location: 'Mohali, India',
    description:`
    <ul class="list-disc pl-5 space-y-1">
      <li>Delivered custom full-stack solutions using React, Node, Express, and MySQL.</li>
      <li>Built an interactive dashboard that automated data collection and highlighted key business insights.</li>
      <li>Streamlined backend data systems to enhance processing speed and minimize manual errors.</li>
      <li>Identified and resolved critical bugs to improve overall system stability and user experience.</li>
      <li>Collaborated with senior developers to troubleshoot and optimize web application features.</li>
    </ul>
    `,
    logo: '/logos/vns.png',
    skills: ['React', 'Node', 'Express', 'MySQL'],
  },
  {
    company: 'CSIO-CSIR',
    website: 'https://virtuosonetsoft.com',
    role: 'Development Intern',
    period: 'Jan 2024 - May 2024',
    location: 'Chandigarh, India',
    description:`
    <ul class="list-disc pl-5 space-y-1">
      <li>Designed a software tool for cephalogram analysis to streamline orthodontic planning.</li>
      <li>Enhanced the tool's accuracy and efficiency through continuous research and development.</li>
      <li>Co-led the prototyping and testing process to ensure better user engagement.</li>
      <li>Gained hands-on experience in various software programs, increasing proficiency and expanding technicalskill.</li>
    </ul>
    `,  
    logo: '/logos/csio.gif',
    skills: ['Java', 'JavaFX', 'JSON'],
  },
];

export default function WorkExperience() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <>
      <div className="h-5 w-full bg-gradient-to-t from-blue-900 to-blue-300/50 dark:from-black dark:to-gray-700" />

      <motion.section
        className="px-4 py-4 pb-8 dark:bg-black bg-blue-900 "
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <h2 className="flex items-center justify-center text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-600">
          <Lottie animationData={devAnimation} className="w-13 h-12 mr-3" loop />
          Work Experience

        </h2>

        <div className="relative border-l-[3px] border-dashed border-cyan-500 pl-6 space-y-14 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              className="relative group"
            >
              {/* Timeline dot with pulse */}
              <div className="absolute -left-[16px] top-2 w-4 h-4 rounded-full bg-cyan-500 border-2 border-white dark:border-gray-900 z-10 shadow-md animate-pulse" />

              {/* Experience card */}
              <div className=" dark:bg-white/10 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 p-5 hover:border-gradient-to-r from-cyan-400 to-purple-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white">{exp.role}</h3>
                      <p className="text-sm text-white dark:text-gray-400">
                        {exp.company} • {exp.location}
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 inline-flex items-center text-cyan-500 hover:underline"
                        >
                          <FaExternalLinkAlt className="ml-1 text-xs" />
                        </a>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-white dark:text-gray-400 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <button
                  className="mt-4 text-sm text-cyan-600 dark:text-cyan-400 underline hover:opacity-80 transition"
                  onClick={() => setActiveModal(idx)}
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeModal !== null && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-lg bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl text-gray-800 dark:text-gray-100 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">
                  {experiences[activeModal].role} @ {experiences[activeModal].company}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {experiences[activeModal].period} • {experiences[activeModal].location}
                </p>
                <div
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: experiences[activeModal].description }}
                />
                <button
                  onClick={() => setActiveModal(null)}
                  className="mt-5 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md text-sm"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
