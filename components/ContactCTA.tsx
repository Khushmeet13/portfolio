'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import { X } from 'lucide-react';
import devAnimation from './animations/rocket.json';
import GamifiedContact from './GamifiedContact';
import bot from '../components/animations/bot.json';

type Sender = 'bot' | 'user';
type ChatMessage = {
  from: Sender;
  text: string;
  showButtons?: boolean;
};

export default function ContactCTA() {
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [initialComplete, setInitialComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const initialBotMessages = [
    "👋 Hey! I'm Khushmeet’s AI Assistant.",
    "Need a developer for your next project?",
    "Let’s chat and build something awesome!"
  ];

  useEffect(() => {
    initialBotMessages.forEach((msg, index) => {
      setTimeout(() => {
        setChat((prev) => [...prev, { from: 'bot', text: msg }]);
        if (index === initialBotMessages.length - 1) {
          setTimeout(() => setInitialComplete(true), 800);
        }
      }, 1200 * (index + 1));
    });
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chat, typing]);

  const handleUserMessage = () => {
    if (!input.trim()) return;
    const userMsg: ChatMessage = { from: 'user', text: input.trim() };
    setChat((prev) => [...prev, userMsg]);
    setInput('');

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      const reply: ChatMessage = {
        from: 'bot',
        text: "Awesome! Let’s connect — click below 👇",
        showButtons: true,
      };
      setChat((prev) => [...prev, reply]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && initialComplete) {
      handleUserMessage();
    }
  };

  const handleEmoji = (emoji: string) => {
    setChat((prev) => [
      ...prev,
      { from: 'user', text: emoji },
      { from: 'bot', text: "Thanks for the reaction! 😊" }
    ]);
  };

  return (
    <>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="h-10 w-full bg-gradient-to-b from-black to-gray-700"
      />

      <motion.section
        className="relative bg-blue-50 dark:bg-gray-700 text-center pt-12 px-4 text-white h-[600px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {/* Chat Assistant Icon (when closed) */}
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6  bg-black text-white rounded-full shadow-lg flex items-center justify-center z-50 "
          >
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Lottie animationData={bot} loop={true} />
            </div>
          </motion.button>
        )}

        {/* Chat Assistant Box */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-6 right-6 w-[300px] bg-white dark:bg-gray-900 shadow-2xl rounded-xl z-50 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Chat Area */}
              <div
                ref={containerRef}
                className="flex-1 overflow-y-auto px-4 py-3 space-y-2 text-sm max-h-64"
              >
                {chat.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`max-w-[80%] px-3 py-2 rounded-lg ${msg.from === 'bot'
                      ? 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white self-start'
                      : 'bg-cyan-500 text-white self-end ml-auto'
                      }`}
                  >
                    {msg.text}

                    {msg.showButtons && (
                      <div className="mt-2 flex gap-2">
                        {['👍', '🚀', '💬'].map((emoji) => (
                          <button
                            key={emoji}
                            onClick={() => handleEmoji(emoji)}
                            className="text-lg hover:scale-110 transition-transform"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {typing && (
                  <div className="text-gray-400 text-sm italic">Assistant is typing...</div>
                )}
              </div>

              {/* Input Box */}
              <div className="px-4 py-3 border-t border-gray-300 dark:border-gray-700">
                <input
                  type="text"
                  placeholder={
                    initialComplete ? 'Type your message...' : 'Assistant is initializing...'
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={!initialComplete}
                  className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm text-gray-800 dark:text-white outline-none disabled:opacity-50"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main CTA Content */}
        <h2 className="flex items-center justify-center text-3xl font-bold text-white mt-10">
          <Lottie animationData={devAnimation} className="w-15 h-12 mr-2" loop />
          Ready to work together?
        </h2>

        <p className="text-lg max-w-2xl mx-auto text-white/80 mb-4 mt-4">
          I'm open to freelance work, collaboration opportunities, or full-time roles. Let's create something exceptional together!
        </p>

        {/*<motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-all"
        >
          Contact Me
        </motion.a>*/}
        <GamifiedContact />

        <p className="mt-10 italic text-white/80">
          “Let's turn ideas into reality — one pixel at a time.”
        </p>


      </motion.section>
    </>
  );
}
