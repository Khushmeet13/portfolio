'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine, FaSearch, FaTooth, FaTimes, FaBolt, FaWallet, FaTicketAlt, FaTools, FaGlobe, FaCube, FaBrain, FaBuilding, FaShieldAlt, FaMusic } from 'react-icons/fa';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import dynamic from 'next/dynamic';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: false });
const Chatbot = dynamic(() => import('@/components/Chatbot'), { ssr: false });

type Category = 'All' | 'Web Development' | 'UI/UX' | 'AI' | 'Desktop Application';

const TABS: Category[] = ['All', 'Web Development', 'UI/UX', 'AI', 'Desktop Application'];

const projects = [
  {
    title: 'MIS Dashboard',
    category: 'Web Development' as Category,
    description: 'An analytics dashboard for real-time business insights with charts & user KPIs.',
    icon: <FaChartLine size={20} className="text-blue-400" />,
    image: '/projectImages/mis-dash/mis-dash-5.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/mis-dashboard.mp3',
    impact: '✅ Used by technical teams • 🚀 35% performance boost • 📈 Improved reporting visibility',
    screenshots: [
      '/projectImages/mis-dash/mis-dash-1.png',
      '/projectImages/mis-dash/mis-dash-2.png',
      '/projectImages/mis-dash/mis-dash-3.png',
      '/projectImages/mis-dash/mis-dash-4.png',
      '/projectImages/mis-dash/mis-dash-5.png',
      '/projectImages/mis-dash/mis-dash-6.png',
      '/projectImages/mis-dash/mis-dash-7.png',
      '/projectImages/mis-dash/mis-dash-8.png',
    ],
    github: 'https://github.com/Khushmeet13/mis-dashboard',
    liveDemo: 'https://mis-dashboard-sigma.vercel.app/',
    narrationText: `The MIS Dashboard provides real-time analytics for business performance. It includes charts, KPIs, and tools to boost decision-making by 35%.`,
  },
  {
    title: 'Neural AI Search',
    category: 'AI' as Category,
    description: 'Image recognition-based search system powered by machine learning.',
    icon: <FaSearch size={20} className="text-cyan-400" />,
    image: '/projectImages/neural-ai/neural-ai1.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/visual-search.mp3',
    impact: '✅ 1M+ images indexed • 🚀 90% faster search • 📈 70% user satisfaction improvement',
    screenshots: ['/projectImages/neural-ai/neural-ai1.png', '/projectImages/neural-ai/neural-ai2.png'],
    github: 'https://github.com/yourusername/mis-dashboard',
    liveDemo: 'https://mis-dashboard.vercel.app',
    narrationText: `Matches user-uploaded or sketched images to relevant products, generates image-based descriptions, applies smart filters (category, color, brand), and supports secure product uploads via an admin panel.`,
  },
  {
    title: 'Cephalogram Tool',
    category: 'Desktop Application' as Category,
    description: 'AI-driven dental X-ray measurement app with annotation and detection.',
    icon: <FaTooth size={20} className="text-white" />,
    image: '/projectImages/ceph/ceph-4.png',
    bgEffect: 'bg-[url(/images/bg-dental.png)]',
    audio: '/audio/cephalogram-tool.mp3',
    impact: '✅ Over 200+ points • 🚀 60% time savings • 📈 Improved diagnosis precision',
    screenshots: [
      '/projectImages/ceph/ceph-1.png',
      '/projectImages/ceph/ceph-2.png',
      '/projectImages/ceph/ceph-3.png',
      '/projectImages/ceph/ceph-4.png',
    ],
    github: 'https://github.com/Khushmeet13/ceph-analysis-tool',
    liveDemo: 'https://github.com/Khushmeet13/ceph-analysis-tool',
    narrationText: `User-friendly software for orthodontists to analyze X-ray images with precision. It supports landmark measurements, reduces human error with algorithmic workflows, and boosts workflow efficiency by 25%.`,
  },
  {
    title: 'TestForge AI',
    category: 'AI' as Category,
    description: 'AI-powered test suite generator — upload a project ZIP and AI generates complete test files in real-time.',
    icon: <FaBolt size={20} className="text-yellow-400" />,
    image: '/projectImages/testforge/testforge-preview.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/testforge.mp3',
    impact: '✅ Node.js · TypeScript · Python · Java • 🚀 Jest, Pytest, JUnit & more • 📈 Live streaming output',
    screenshots: ['/projectImages/testforge-1.png', '/projectImages/testforge-2.png'],
    github: 'https://github.com/Khushmeet13/testforge-ai',
    liveDemo: 'https://testforge-ai-gen.vercel.app/',
    narrationText: `TestForge AI lets you upload any project ZIP — it auto-detects the language and framework, analyzes functions and API routes, then uses AI to stream a complete test suite in real-time. Supports Jest, Vitest, Mocha, Pytest, JUnit 5, and RSpec with one-click download.`,
  },
  {
    title: 'Finora',
    category: 'Web Development' as Category,
    description: 'Personal finance dashboard — track spending, manage cards, and get budget-aware shopping picks.',
    icon: <FaWallet size={20} className="text-emerald-400" />,
    image: '/projectImages/finora/finora-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/finora.mp3',
    impact: '✅ Multi-card management • 🚀 AI product recommendations • 📈 Auto-synced history',
    screenshots: [
      '/projectImages/finora-1.png',
      '/projectImages/finora-2.png',
      '/projectImages/finora-3.png',
      '/projectImages/finora-4.png',
    ],
    github: 'https://github.com/Khushmeet13/finora',
    liveDemo: 'https://finora-dashboard.vercel.app',
    narrationText: `Finora is a smart personal finance dashboard where you can add and manage payment cards, track your spending, and visualize budget breakdowns. It pulls transaction history directly from your payment gateway and uses AI to recommend online shopping products that fit within your remaining monthly budget — so you never overspend.`,
  },
  {
    title: 'StagePass',
    category: 'Web Development' as Category,
    description: 'Event ticketing platform — discover shows, book seats, pay online & get confirmation on WhatsApp and email.',
    icon: <FaTicketAlt size={20} className="text-orange-400" />,
    image: '/projectImages/stagepass/stagepass-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/stagepass.mp3',
    impact: '✅ Live Ticketmaster • 🚀 Online payments & QR tickets • 📈 WhatsApp & email confirmation',
    screenshots: [
      '/projectImages/stagepass-1.png',
      '/projectImages/stagepass-2.png',
      '/projectImages/stagepass-3.png',
      '/projectImages/stagepass-4.png',
    ],
    github: 'https://github.com/Khushmeet13/event-booking-app',
    liveDemo: 'https://stagepass-tickets.vercel.app/',
    narrationText: `StagePass is a production-grade event ticketing platform. Browse live shows powered by the Ticketmaster API, filter by city and genre, check venue locations, enquire via WhatsApp, select seats, and checkout with online payment. You get a QR-coded ticket confirmation instantly on both WhatsApp and email.`,
  },
  {
    title: 'ToolNest',
    category: 'Web Development' as Category,
    description: 'All-in-one utility platform — generators, converters, image tools & dev utilities organized by category.',
    icon: <FaTools size={20} className="text-amber-400" />,
    image: '/projectImages/toolnest/toolnest-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/toolnest.mp3',
    impact: '✅ 20+ tools across 4 categories • 🚀 Zero login required • 📈 Instant in-browser processing',
    screenshots: [
      '/projectImages/toolnest-1.png',
      '/projectImages/toolnest-2.png',
      '/projectImages/toolnest-3.png',
    ],
    github: 'https://github.com/Khushmeet13/toolnest',
    liveDemo: 'https://toolnest-new.vercel.app/',
    narrationText: `ToolNest is a clean, category-driven utility platform housing tools for generators, converters, image processing, and developer utilities — all running in-browser with no login needed. Built for speed and discoverability, every tool is one click away.`,
  },
  {
    title: 'LaunchXY',
    category: 'UI/UX' as Category,
    description: 'CRM website with multi-language support — clean, conversion-focused design for a SaaS product.',
    icon: <FaGlobe size={20} className="text-sky-400" />,
    image: '/projectImages/lxy/lxy-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/launchxy.mp3',
    impact: '✅ Multi-language support • 🚀 CRM-focused UI • 📈 Conversion-optimized landing sections',
    screenshots: [
      '/projectImages/launchxy-1.png',
      '/projectImages/launchxy-2.png',
      '/projectImages/launchxy-3.png',
    ],
    github: 'https://github.com/Khushmeet13/launchxy',
    liveDemo: 'https://lxy-website.vercel.app/',
    narrationText: `LaunchXY is a polished marketing website for a CRM SaaS product. It features multi-language support for global reach, clean section-based layout with feature highlights, pricing, and testimonials — all designed to convert visitors into users.`,
  },
  {
    title: 'Cryptrix',
    category: 'UI/UX' as Category,
    description: 'Immersive 3D blockchain website — a visually rich Web3 landing page with futuristic UI and fluid animations.',
    icon: <FaCube size={20} className="text-cyan-400" />,
    image: '/projectImages/cryptrix/cryptrix-preview.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/cryptrix.mp3',
    impact: '✅ Full 3D interactive UI • 🚀 Web3 aesthetic • 📈 Smooth GSAP & Three.js animations',
    screenshots: [
      '/projectImages/cryptrix-1.png',
      '/projectImages/cryptrix-2.png',
      '/projectImages/cryptrix-3.png',
    ],
    github: 'https://github.com/Khushmeet13/cryptrix',
    liveDemo: 'https://cryptrix.vercel.app',
    narrationText: `Cryptrix is a high-fidelity 3D blockchain landing page built purely for visual impact. It features immersive Three.js scenes, fluid GSAP animations, and a dark futuristic aesthetic that captures the energy of Web3 — no backend, just pure frontend craftsmanship.`,
  },
  {
    title: 'Nexus AI',
    category: 'UI/UX' as Category,
    description: '3D interactive showcase built with Next.js & Three.js — three immersive 3D models with smooth scene transitions.',
    icon: <FaBrain size={20} className="text-violet-400" />,
    image: '/projectImages/nexus/nexus-preview.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/nexus-ai.mp3',
    impact: '✅ 3 custom 3D models • 🚀 Next.js + Three.js • 📈 Smooth camera & scene transitions',
    screenshots: [
      '/projectImages/nexus-ai-1.png',
      '/projectImages/nexus-ai-2.png',
      '/projectImages/nexus-ai-3.png',
    ],
    github: 'https://github.com/Khushmeet13/nexus-ai-3d',
    liveDemo: 'https://nexus-ai-3d.vercel.app/',
    narrationText: `Nexus AI is a pure 3D creative showcase built with Next.js and Three.js. It features three custom 3D models rendered in-browser with fluid camera transitions and immersive lighting — a demonstration of what modern web can achieve visually without any native app.`,
  },
  {
    title: 'ArchViz',
    category: 'UI/UX' as Category,
    description: '3D architectural visualization — interactive property tours through photorealistic house models in the browser.',
    icon: <FaBuilding size={20} className="text-amber-400" />,
    image: '/projectImages/archviz/archviz-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/archviz.mp3',
    impact: '✅ Photorealistic 3D models • 🚀 Interactive property walkthroughs • 📈 Browser-native',
    screenshots: [
      '/projectImages/archviz-1.png',
      '/projectImages/archviz-2.png',
      '/projectImages/archviz-3.png',
    ],
    github: 'https://github.com/Khushmeet13/archviz',
    liveDemo: 'https://archviz-3d.vercel.app/',
    narrationText: `ArchViz brings architectural models to life in the browser. Explore photorealistic 3D house models with interactive walkthroughs — navigate rooms, inspect layouts, and experience property designs as if you're physically there, all powered by Three.js with zero plugins required.`,
  },
  {
    title: 'Auth System',
    category: 'Web Development' as Category,
    description: 'Full-stack auth implementation — login, signup, OAuth, roles & permissions with secure session management.',
    icon: <FaShieldAlt size={20} className="text-green-400" />,
    image: '/projectImages/auth/auth-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/auth.mp3',
    impact: '✅ OAuth + JWT + Sessions • 🚀 Role-based access control • 📈 Production-ready security patterns',
    screenshots: [
      '/projectImages/auth-1.png',
      '/projectImages/auth-2.png',
      '/projectImages/auth-3.png',
    ],
    github: 'https://github.com/Khushmeet13/auth-system',
    liveDemo: 'https://auth-new-system.vercel.app/',
    narrationText: `A complete full-stack authentication system covering login, signup, OAuth providers, JWT tokens, session management, role-based access control, and protected routes — built as a production-ready reference implementation for secure user auth.`,
  },
  {
    title: 'Music Universe',
    category: 'UI/UX' as Category,
    description: 'Immersive 3D music visualization — songs are stars, genres are galaxies, playlists are constellations in a navigable universe.',
    icon: <FaMusic size={20} className="text-pink-400" />,
    image: '/projectImages/music-universe-preview.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/music-universe.mp3',
    impact: '✅ Beat-reactive 3D stars • 🚀 Web Audio API + Three.js • 📈 Bloom, Vignette & Chromatic Aberration FX',
    screenshots: [
      '/projectImages/music-universe-1.png',
      '/projectImages/music-universe-2.png',
      '/projectImages/music-universe-3.png',
    ],
    github: 'https://github.com/Khushmeet13/music-universe',
    liveDemo: 'https://music-universe.vercel.app',
    narrationText: `Music Universe transforms your entire music library into a navigable 3D cosmos. Every song is a glowing star pulsing to its BPM, genres form spiral particle galaxies, and playlists connect as constellations in deep space. Built with React Three Fiber, Web Audio API for real-time beat detection, and post-processing effects including Bloom and Chromatic Aberration — it's the most visual way to experience music.`,
  },
];

// Tab accent colors
const TAB_COLORS: Record<Category, string> = {
  All: 'from-indigo-400 to-blue-400',
  'Web Development': 'from-blue-400 to-cyan-400',
  'UI/UX': 'from-pink-400 to-rose-400',
  AI: 'from-violet-400 to-purple-400',
  'Desktop Application': 'from-emerald-400 to-teal-400',
};

const TAB_ACTIVE_BG: Record<Category, string> = {
  All: 'bg-white/15 text-white',
  'Web Development': 'bg-blue-500/10 text-blue-200',
  'UI/UX': 'bg-pink-500/10 text-pink-200',
  AI: 'bg-violet-500/10 text-violet-200',
  'Desktop Application': 'bg-emerald-500/10 text-emerald-200',
};

export default function Projects() {
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});
  const [carouselImages, setCarouselImages] = useState<string[] | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState<Category>('All');

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  useEffect(() => {
    if (!carouselImages) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
      } else if (e.key === 'ArrowRight') {
        setCurrent((prev) => (prev + 1) % carouselImages.length);
      } else if (e.key === 'Escape') {
        setCarouselImages(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [carouselImages]);

  const handlePlayAudio = (index: number) => {
    const currentAudio = audioRefs.current[index];
    if (playingIndex === index && currentAudio) {
      currentAudio.pause();
      setPlayingIndex(null);
      return;
    }
    Object.entries(audioRefs.current).forEach(([i, audio]) => {
      if (audio && Number(i) !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
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

          {/* Header */}
          <div className="text-center mb-10 pt-10">
            <h2 className="text-4xl md:text-3xl font-semibold mb-3 tracking-tight drop-shadow-md">
              Projects
            </h2>
            <p className="text-lg opacity-80">
              Scroll through AI magic, data mastery, and intuitive design.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-16 z-10 relative">
            <div className="flex gap-2 p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
              {TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                      ? TAB_ACTIVE_BG[tab] + ' shadow-md'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tab-indicator"
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${TAB_COLORS[tab]} opacity-20`}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {tab === 'Web Development' && <span className="text-blue-300">{'</>'}</span>}
                      {tab === 'UI/UX' && <span className="text-pink-300">✦</span>}
                      {tab === 'AI' && <span className="text-violet-300">◈</span>}
                      {tab === 'All' && <span className="text-white/70">⊞</span>}
                      {tab === 'Desktop Application' && <span className="text-emerald-300">⬡</span>}
                      {tab}
                    </span>
                    {isActive && (
                      <span
                        className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-gradient-to-r ${TAB_COLORS[tab]} opacity-80`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project count label */}
          {/* <div className="text-center mb-8 z-10 relative">
            <span className="text-white/40 text-sm tracking-widest uppercase">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {activeTab !== 'All' ? ` in ${activeTab}` : ''}
            </span>
          </div> */}

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative"
            >
              {filteredProjects.length === 0 ? (
                <div className="col-span-3 text-center py-24 text-white/40 text-lg">
                  No projects in this category yet.
                </div>
              ) : (
                filteredProjects.map((project, index) => {
                  // Find the global index for audio refs
                  const globalIndex = projects.indexOf(project);
                  return (
                    <Tilt
                      key={project.title}
                      glareEnable={true}
                      glareMaxOpacity={0.15}
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      className={`relative group p-1 rounded-2xl ${project.bgEffect} bg-cover bg-center shadow-xl`}
                    >
                      {/* Category badge */}
                      <div className="absolute -top-3 right-3 z-20">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10
                            ${project.category === 'AI' ? 'bg-violet-500/30 text-violet-200' : ''}
                            ${project.category === 'Web Development' ? 'bg-blue-500/30 text-blue-200' : ''}
                            ${project.category === 'UI/UX' ? 'bg-pink-500/30 text-pink-200' : ''}
                            ${project.category === 'Desktop Application' ? 'bg-emerald-500/30 text-emerald-200' : ''}
                          `}
                        >
                          {project.category}
                        </span>
                      </div>

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
                              width={700}
                              height={300}
                              className="object-cover"
                            />
                          </div>
                          <p className="text-sm text-white/90 mb-2">{project.description}</p>
                          <p className="text-xs text-white/60 italic">{project.impact}</p>
                        </div>

                        {/* Hover Glassy Overlay */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => handlePlayAudio(globalIndex)}
                            className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black mb-2"
                          >
                            {playingIndex === globalIndex ? '⏸ Pause' : '▶ Narration'}
                          </button>
                          <button
                            onClick={() => {
                              setCarouselImages(project.screenshots);
                              setCurrent(0);
                            }}
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

                        <audio
                          ref={(el) => {
                            audioRefs.current[globalIndex] = el;
                          }}
                          src={project.audio}
                          preload="auto"
                        />

                        {playingIndex === globalIndex && (
                          <div className="p-4 bg-white/10 text-white text-sm italic rounded-b-2xl">
                            {project.narrationText}
                          </div>
                        )}
                      </motion.div>
                    </Tilt>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Modal */}
          {carouselImages && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
              <div className="w-11/12 max-w-6xl rounded-lg overflow-hidden relative flex items-center">
                <button
                  onClick={() =>
                    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
                  }
                  className="text-white text-4xl px-1 py-4 z-30 bg-black/50 rounded-full hover:bg-white/50 hover:text-black m-2"
                >
                  <ChevronLeft />
                </button>

                <Carousel images={carouselImages} current={current} setCurrent={setCurrent} />

                <button
                  onClick={() => setCurrent((prev) => (prev + 1) % carouselImages.length)}
                  className="text-white text-4xl px-1 py-4 z-30 bg-black/50 rounded-full hover:bg-white/50 hover:text-black m-2"
                >
                  <ChevronRight />
                </button>
              </div>

              <button
                onClick={() => setCarouselImages(null)}
                className="absolute top-2 right-2 text-white text-2xl bg-black/70 p-2 rounded-full z-20 hover:bg-white/20 hover:text-gray-300"
              >
                <FaTimes />
              </button>
            </div>
          )}

          <Chatbot />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}