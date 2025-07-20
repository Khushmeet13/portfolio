'use client';

import { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiRefreshCw } from 'react-icons/fi';
import secretAnimation from './animations/projectplan.json';

const allSequences = [
    {
        ques: `You're building something. What's the logical order?`,
        sequence: ['💡', '⌨️', '📨'],
        hint: 'Plan it → Code it → Send it',
    },
    {
        ques: `How do you handle sensitive APIs?`,
        sequence: ['🔐', '🧠', '📞'],
        hint: 'Secure it → Think it → Call it',
    },
    {
        ques: `What’s your release flow?`,
        sequence: ['🧑‍💻', '⚙️', '📬'],
        hint: 'Dev it → Configure it → Ship it',
    },
    {
        ques: `What’s your bug fix routine?`,
        sequence: ['🔍', '👨‍💻', '✉️'],
        hint: 'Debug → Fix → Message',
    },
];

export default function GamifiedContact() {
    const [sequence, setSequence] = useState<string[]>([]);
    const [showSecretModal, setShowSecretModal] = useState(false);
    const [showContactBanner, setShowContactBanner] = useState(false);
    const [target, setTarget] = useState<{
        ques: string;
        sequence: string[];
        hint: string;
    } | null>(null);

    const shuffleEmojis = () => {
        const emojis = ['💡', '⌨️', '📨', '⚙️', '📬', '🧑‍💻', '📞', '🔐', '🧠', '🔍', '✉️'];
        return emojis.sort(() => Math.random() - 0.5);
    };

    const [shuffledEmojis, setShuffledEmojis] = useState<string[]>(shuffleEmojis());

    useEffect(() => {
        const random = allSequences[Math.floor(Math.random() * allSequences.length)];
        setTarget(random);
    }, []);

    const handleEmojiClick = (emoji: string) => {
        const newSeq = [...sequence, emoji].slice(-3);
        setSequence(newSeq);

        if (JSON.stringify(newSeq) === JSON.stringify(target?.sequence)) {
            setShowSecretModal(true);
        }
    };

    const refreshPuzzle = () => {
        const random = allSequences[Math.floor(Math.random() * allSequences.length)];
        setTarget(random);
        setSequence([]);
        setShuffledEmojis(shuffleEmojis());
    };

    return (
        <ParallaxProvider>
            <div className="relative z-0 overflow-hidden rounded-3xl max-w-md mx-auto">
                {!showContactBanner && target && (
                    <div className="bg-gray-100 dark:bg-gray-900 py-5 text-center px-4">
                        <p className="text-xl font-semibold text-gray-800 dark:text-white">
                            Little Puzzle to connect!
                        </p>
                        <div className="mt-2 text-md text-gray-700 dark:text-gray-300 text-center">
                            <div className="flex items-center justify-center gap-2">
                                <span>{target.ques}</span>
                                <button
                                    onClick={refreshPuzzle}
                                    title="Change Question"
                                    className="text-gray-500 dark:text-gray-300 hover:text-blue-500 transition-colors"
                                >
                                    <FiRefreshCw className="text-sm" />
                                </button>
                            </div>
                            <div className="italic text-sm text-gray-500 mt-1">💭 Hint: {target.hint}</div>
                        </div>

                        <div className="mt-6 flex justify-center gap-2 text-2xl overflow-x-auto whitespace-nowrap px-2">
                            {shuffledEmojis.map((emoji, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleEmojiClick(emoji)}
                                    className="hover:scale-110 transition-transform"
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>

                        <div className="mt-3 text-sm text-gray-500 dark:text-gray-400 italic">
                            Your sequence: {sequence.join(' ')}
                        </div>
                    </div>
                )}

                {/* Secret Modal */}
                <AnimatePresence>
                    {showSecretModal && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
                        >
                            <div className="bg-[#1e1e1e] text-green-400 rounded-xl p-6 max-w-lg w-full font-mono relative shadow-2xl border border-green-400">
                                <button
                                    onClick={() => {
                                        setShowSecretModal(false);
                                        setShowContactBanner(true);
                                    }}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-xl"
                                >
                                    <FiX />
                                </button>

                                <div className="flex justify-center mb-4">
                                    <Lottie animationData={secretAnimation} className="w-32 h-32" loop />
                                </div>

                                <p className="text-sm mb-2">terminal@khushmeet.dev:~$ access granted ✅</p>
                                <p className="text-lg font-semibold text-green-300">
                                    “Looks like you cracked the code. Let’s collaborate on something amazing!”
                                </p>
                                <a
                                    href="/contact"
                                    className="mt-4 inline-block text-center bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition-all"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Background Contact Banner */}
                {showContactBanner && (
                    <div
                        className="w-full h-[300px] bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold rounded-3xl"
                        style={{ backgroundImage: `url('/images/contact-banner.jpg')` }}
                    >
                        Contact Me
                        <button
                            onClick={() => {
                                setShowContactBanner(false);
                                refreshPuzzle();
                            }}
                            title="Try another puzzle"
                            className="ml-4 text-white hover:text-blue-300 transition-colors"
                        >
                            <FiRefreshCw />
                        </button>
                    </div>
                )}
            </div>
        </ParallaxProvider>
    );
}
