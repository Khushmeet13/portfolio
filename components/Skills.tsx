'use client';

import { useState } from 'react';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { motion, rgba } from 'framer-motion';
import Image from 'next/image';
import Lottie from 'lottie-react';
import backendAnimation from './animations/backend.json';
import frontendAnimation from './animations/frontend.json';
import tooldesignAnimation from './animations/tool&design.json';
import development from './animations/development.json';


// Tech Stack Data
type SkillCategory = 'Frontend' | 'Backend' | 'Tools & Design';

const skillSections: Record<SkillCategory, {
  icon: string | object;
  skills: { name: string; icon: string }[];
}> = {
  Frontend: {
    icon: frontendAnimation,
    skills: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextdotjs.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    ],
  },
  Backend: {
    icon: backendAnimation,
    skills: [
      { name: 'Node.js', icon: '/icons/nodedotjs.svg' },
      { name: 'Express.js', icon: '/icons/express.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'MySQL', icon: '/icons/mysql.svg' },
    ],
  },
  'Tools & Design': {
    icon: tooldesignAnimation,
    skills: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
    ],
  },
};

const insights = [
  {
    text: 'Tech enthusiast with a passion for development',
    image: '/images/development.png',
    type: 'image',
  },
  {
    text: 'Stay curious. Keep experimenting.',
    type: 'image',
  },
];

type InsightProps = {
  text: string;
  image?: string | object;
  type?: 'lottie' | 'image';
};

const InsightCard = ({ text, image, type = 'image' }: InsightProps) => (
  <motion.div
    className="w-full max-w-[300px] flex flex-col items-center text-center bg-black dark:bg-black/50 backdrop-blur-md rounded-xl border border-white/20 shadow-md px-4 py-4 space-y-3"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-sm text-white italic">{text}</p>

    {type === 'lottie' && typeof image === 'object' && (
      <Lottie animationData={image} loop autoplay style={{ width: 100, height: 100 }} />
    )}

    {type === 'image' && typeof image === 'string' && (
      <Image src={image} alt="Insight visual" width={100} height={100} onError={() => console.error("Image failed to load:", image)} />
    )}
  </motion.div>
);

export default function Skills() {
  const categories: SkillCategory[] = ['Frontend', 'Backend'];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('khushmeetsaini72@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>


      <motion.section
        className="relative px-4 py-10 dark:bg-gray-700 bg-gray-300/50 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >


        <div className="text-center mb-8 relative z-10">
          <motion.p
            className="text-md text-gray-700 dark:text-gray-300 tracking-wide mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I constantly try to improve
          </motion.p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            MY Tech Stack
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 max-w-7xl mx-auto px-4">
          {/* LEFT: Quotes / Cards */}
          <div className="flex flex-col gap-5">
            <div className="relative w-full max-w-[700px]">
              <Image
                src="/images/techphoto.webp"
                alt="Tech Background"
                width={700}
                height={400}
                className="rounded-2xl shadow-xl"
              />

              {/* Text Over Image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <p className="text-white font-serif text-xl sm:text-xl font-semibold bg-black/50 px-4 py-2 rounded-xl shadow-lg">
                  “The best way to learn is by building.”
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between gap-5 ">
              {/* LEFT: All Insight Cards */}
              <div className="flex flex-col gap-5">
                {insights.map((item, index) => (
                  <InsightCard key={index} text={item.text} image={item.image} />
                ))}
              </div>

              {/* RIGHT: Single Side Image */}
              <div className="w-[300px] h-[200px] flex-shrink-0 mt-6 md:mt-0 relative">
                <Image
                  src="/images/connected.jpg"
                  alt="Visual Side Image"
                  fill
                  className="rounded-2xl shadow-xl object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center bg-black/40 rounded-2xl">
                  <p className="text-white text-lg font-semibold text-center px-4">
                    Do you want to start a project together?
                  </p>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-white/10 text-gray-300 px-4 py-2 rounded-full shadow-md hover:bg-gray-500 hover:text-white transition duration-200"
                  >
                    <HiOutlineClipboardCopy className="text-xl" />
                    {copied ? 'Copied!' : 'Copy my email address'}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Tech Stack */}
          <div className="space-y-8">
            {/* Frontend and Backend in two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((category) => {
                const data = skillSections[category];
                return (
                  <div
                    key={category}
                    className="p-6 rounded-xl border border-white/30 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-md"
                  >
                    <motion.h3
                      className="text-2xl font-bold flex items-center gap-1 mb-2 text-black dark:text-white"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {typeof data.icon === 'string' ? (
                        <Image src={data.icon} alt={category} width={30} height={30} />
                      ) : (
                        <Lottie animationData={data.icon} loop autoplay style={{ width: 90, height: 90 }} />
                      )}
                      {category}
                    </motion.h3>

                    <div className="grid grid-cols-2 gap-4">
                      {data.skills.map((tech) => (
                        <motion.div
                          key={tech.name}
                          className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-white dark:bg-black/45 backdrop-blur-md rounded-2xl border border-white/50 shadow-md hover:shadow-lg hover:shadow-blue-400/40 transition-transform hover:scale-105"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="mb-2 opacity-90 hover:opacity-100 transition duration-200 dark:filter dark:invert dark:brightness-200"
                          />
                          <span className="text-sm text-gray-800 dark:text-white">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tools & Design section in full width below */}
            <div className="p-6 rounded-xl border border-white/30 bg-white/10 dark:bg-white/5 backdrop-blur-md shadow-md">
              <motion.h3
                className="text-2xl font-bold flex items-center gap-3 mb-4 text-black dark:text-white drop-shadow-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >

                {typeof skillSections['Tools & Design'].icon === 'string' ? (
                  <Image src={skillSections['Tools & Design'].icon as string} alt="Tools & Design" width={30} height={30} />
                ) : (
                  <Lottie animationData={skillSections['Tools & Design'].icon} loop autoplay style={{ width: 50, height: 50 }} />
                )}

                Tools & Design
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skillSections['Tools & Design'].skills.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-white dark:bg-black/45 backdrop-blur-md rounded-2xl border border-white/50 shadow-md hover:shadow-lg hover:shadow-blue-400/40 transition-transform hover:scale-105"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="mb-2 opacity-90 hover:opacity-100 transition duration-200 dark:filter dark:invert dark:brightness-200"
                    />

                    <span className="text-sm text-gray-800 dark:text-white">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
