'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FaChartLine, FaSearch, FaTooth, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: false });
const Chatbot = dynamic(() => import('@/components/Chatbot'), { ssr: false });

const projects = [
  {
    title: 'MIS Dashboard',
    description: 'An analytics dashboard for real-time business insights with charts & user KPIs.',
    icon: <FaChartLine size={20} className="text-blue-500" />,
    image: '/images/connected.jpg',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/mis-dashboard.mp3',
    impact: '✅ Used by technical teams • 🚀 35% performance boost • 📈 Improved reporting visibility',
    screenshots: ['/images/mis1.jpg', '/images/mis2.jpg', '/images/mis3.jpg'],
    github: 'https://github.com/Khushmeet13/mis-dashboard',
    liveDemo: 'https://mis-dashboard-sigma.vercel.app/',
    narrationText: `The MIS Dashboard provides real-time analytics for business performance. It includes charts, KPIs, and tools to boost decision-making by 35%.`,
  },
  {
    title: 'Visual AI Search',
    description: 'Image recognition-based search system powered by machine learning.',
    icon: <FaSearch size={20} className="text-cyan-500" />,
    image: '/images/phase1.jpg',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/visual-search.mp3',
    impact: '✅ 1M+ images indexed • 🚀 90% faster search • 📈 70% user satisfaction improvement',
    screenshots: ['/images/ai1.jpg', '/images/ai2.jpg'],
    github: 'https://github.com/yourusername/mis-dashboard',
    liveDemo: 'https://mis-dashboard.vercel.app',
    narrationText: `The MIS Dashboard provides real-time analytics for business performance. It includes charts, KPIs, and tools to boost decision-making by 35%.`,
  },
  {
    title: 'Cephalogram Tool',
    description: 'AI-driven dental X-ray measurement app with annotation and detection.',
    icon: <FaTooth size={20} className="text-white-500" />,
    image: '/images/phase2.jpg',
    bgEffect: 'bg-[url(/images/bg-dental.png)]',
    audio: '/audio/cephalogram-tool.mp3',
    impact: '✅ Over 200+ points • 🚀 60% time savings • 📈 Improved diagnosis precision',
    screenshots: ['/images/dental1.jpg', '/images/dental2.jpg'],
    github: 'https://github.com/yourusername/mis-dashboard',
    liveDemo: 'https://mis-dashboard.vercel.app',
    narrationText: `The MIS Dashboard provides real-time analytics for business performance. It includes charts, KPIs, and tools to boost decision-making by 35%.`,
  },
];

export default function Projects() {
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});
  const [carouselImages, setCarouselImages] = useState<string[] | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);


  /*const handlePlayAudio = (index) => {
    const audio = audioRefs.current[index];
    if (audio) {
      audio.play();
    }
  };*/

  const handlePlayAudio = (index: number) => {
    const currentAudio = audioRefs.current[index];

    // If already playing, pause it
    if (playingIndex === index && currentAudio) {
      currentAudio.pause();
      setPlayingIndex(null);
      return;
    }

    // Pause all other audios
    Object.entries(audioRefs.current).forEach(([i, audio]) => {
      if (audio && Number(i) !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    // Play selected one
    if (currentAudio) {
      currentAudio.currentTime = 0;
      currentAudio.play();
      setPlayingIndex(index);
    }
  };



  return (
    <>
      <Navbar />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen px-6 py-20 bg-gradient-to-br from-indigo-950 via-blue-800 to-blue-500 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden"
        >
          {/* Parallax Background Elements */}
          <motion.div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse" />
          <motion.div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-400 opacity-20 rounded-full blur-2xl animate-spin-slow" />

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-3xl font-bold mb-4 tracking-tight drop-shadow-md">
              Projects
            </h2>
            <p className="text-lg opacity-80">
              Scroll through AI magic, data mastery, and intuitive design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative">
            {projects.map((project, index) => (
              <Tilt
                key={index}
                glareEnable={true}
                glareMaxOpacity={0.15}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className={`relative group p-1 rounded-2xl ${project.bgEffect} bg-cover bg-center shadow-xl`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="relative backdrop-blur-xl bg-white/10 rounded-2xl overflow-hidden"
                >
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      {project.icon}
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <div className="relative h-40 w-full mb-3 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm text-white/90 mb-2">{project.description}</p>
                    <p className="text-xs text-white/60 italic">{project.impact}</p>
                  </div>

                  {/* Hover Glassy Overlay */}
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => handlePlayAudio(index)}
                      className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black mb-2"
                    >
                      {playingIndex === index ? '⏸ Pause' : '▶ Narration'}
                    </button>
                    <button
                      onClick={() => setCarouselImages(project.screenshots)}
                      className="text-white border border-white px-4 py-1 text-sm rounded hover:bg-white hover:text-black mb-2"
                    >
                      View Screenshots
                    </button>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-white/90 hover:text-white"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline text-white/90 hover:text-white"
                      >
                        Live Demo
                      </a>
                    </div>

                  </div>

                  {/*<audio ref={(el) => (audioRefs.current[index] = el)} src={project.audio} preload="auto" />*/}
                  <audio
                    ref={(el) => {
                      audioRefs.current[index] = el;
                    }}
                    src={project.audio}
                    preload="auto"
                  />

                  {playingIndex === index && (
                    <div className="p-4 bg-white/10 text-white text-sm italic rounded-b-2xl">
                      {project.narrationText}
                    </div>
                  )}

                </motion.div>
              </Tilt>
            ))}
          </div>

          {carouselImages && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
              <div className="w-11/12 max-w-2xl bg-white rounded-lg overflow-hidden">
                <Carousel images={carouselImages} />
                <button onClick={() => setCarouselImages(null)} className="absolute top-4 right-4 text-black text-xl"><FaTimes /></button>
              </div>
            </div>
          )}

          <Chatbot />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}