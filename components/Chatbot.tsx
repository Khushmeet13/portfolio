'use client';

import { useState, useEffect } from 'react';
import { FiMessageCircle, FiX } from 'react-icons/fi';
import clsx from 'clsx';
import Image from 'next/image';
import Lottie from 'lottie-react';
import bot from '../components/animations/bot.json';

const responseMap: { keywords: string[]; reply: string }[] = [
  {
    keywords: ['hi', 'hlo', 'hey', 'hello'],
    reply: 'Hi there! 👋 How may I assist you with the projects?',
  },
  {
    keywords: ['cephalogram', 'dental', 'x-ray'],
    reply: '🦷 The Cephalogram Tool helps analyze X-rays images using Java, JavaFX and annotation points.',
  },
  {
    keywords: ['dashboard', 'mis', 'analytics'],
    reply: '📊 The MIS Dashboard is a business analytics platform built with React, Chart.js, TailwindCSS, and REST APIs.',
  },
  {
    keywords: ['ai', 'visual', 'image search'],
    reply: '🤖 The Visual AI Search lets users find similar items using image embeddings. Built with a Node and in-build ml model backend and React frontend.',
  },
  {
    keywords: ['tech stack', 'technologies used', 'tools used'],
    reply: '🧰 Each project uses modern tech stacks. You can ask specifically about “MIS”, “AI Search”, or “Cephalogram”.',
  },
  {
    keywords: ['purpose', 'goal', 'why'],
    reply: '🎯 Each project solves a real-world need. For example, MIS helps businesses track KPIs, and Cephalogram speeds up dental diagnosis.',
  },
  {
    keywords: ['impact cephalogram'],
    reply: '📈 Cephalogram Tool reduces manual dental X-ray annotation time by over 60%, aiding faster diagnosis.',
  },
  {
    keywords: ['impact dashboard'],
    reply: '📊 MIS Dashboard helped reduce report generation time by 80% and enabled real-time performance insights.',
  },
  {
    keywords: ['impact ai'],
    reply: '🔍 Visual AI Search improved product discovery by enabling image-based search, especially for visually-driven platforms.',
  },
  {
    keywords: ['who made', 'developer', 'contributor', 'you made this'],
    reply: '👨‍💻 All these projects were designed and developed by me with a focus on clean UI and scalable architecture.',
  },
  {
    keywords: ['how to use', 'demo', 'try'],
    reply: '🧪 You can click on any project card to view a modal with live links, screenshots, and more details.',
  },
  {
    keywords: ['thanks', 'thank you'],
    reply: '🙏 You’re welcome! Let me know if you need help with anything else.',
  },
  {
    keywords: ['bye', 'goodbye', 'see you'],
    reply: '👋 Goodbye! Feel free to come back anytime to explore more projects.',
  },
];

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleSend = () => {
    if (!input.trim()) return;
    const sanitized = input.toLowerCase().replace(/[^a-z0-9 ]/g, '');
    let reply = '🤖 I didn\'t get that. Try asking about the Cephalogram Tool, MIS Dashboard, or AI Search.';
    for (const item of responseMap) {
      if (item.keywords.some((keyword) => sanitized.includes(keyword))) {
        reply = item.reply;
        break;
      }
    }
    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  const theme = darkMode
    ? 'bg-gray-900 text-white border-gray-700'
    : 'bg-white text-black border-gray-300';

  return (
    <div className="fixed bottom-6 right-6 z-50 text-sm">
      {open ? (
        <div className={clsx('w-80 rounded-xl shadow-lg border flex flex-col', theme)}>
          <div className="flex justify-between items-center px-4 py-2 font-semibold border-b">
            Ask Me (Project Bot)
            <div className="flex items-center gap-2">
              {/*<button onClick={() => setDarkMode((prev) => !prev)} title="Toggle Theme">🌓</button>*/}
              <button onClick={() => setOpen(false)}><FiX /></button>
            </div>
          </div>

          <div className="h-64 overflow-y-auto px-3 py-2 space-y-3 flex flex-col">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={clsx('flex gap-2 items-start', msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start')}
              >
                <Image
                  src={msg.sender === 'user' ? '/images/user.png' : '/images/bot.png'}
                  alt="avatar"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <div
                  className={clsx(
                    'px-3 py-2 rounded-xl max-w-[85%]',
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-black dark:bg-gray-700 dark:text-white'
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 self-start">
                <Image src="/images/bot.png" alt="typing" width={28} height={28} className="rounded-full" />
                <div className="animate-pulse px-3 py-2 rounded-xl bg-gray-400/30 dark:bg-white/10 w-fit">
                  Typing...
                </div>
              </div>
            )}
          </div>

          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className={clsx('flex-grow px-3 py-2 outline-none bg-transparent', theme)}
              placeholder="Ask about a project..."
            />
            <button onClick={handleSend} className="px-4 font-bold text-blue-500">Send</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-black rounded-full p-3 shadow-lg hover:scale-105 transition"
          title="Open Project Bot"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Lottie animationData={bot} loop={true} />
          </div>
        </button>



      )}
    </div>
  );
}