'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lottie from 'lottie-react';
import assistantAnim from '../../components/animations/contact.json';
import successAnim from '../../components/animations/success.json';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const questions = [
  { key: 'name', placeholder: 'What’s your name?', ques: 'Hey there! What should I call you? 😊' },
  { key: 'email', placeholder: 'Your email address?', ques: `Cool! What's your email so I can reply? 📧` },
  { key: 'message', placeholder: 'What would you like to say?', ques: 'Go ahead, type your message ✍️' }
];

export default function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  //const [listening, setListening] = useState(false);
  //const recognitionRef = useRef<any>(null);

  /* useEffect(() => {
     if (typeof window !== 'undefined') {
       const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
       if (SpeechRecognition) {
         const recognition = new SpeechRecognition();
         recognition.lang = 'en-US';
         recognition.interimResults = false;
         recognition.maxAlternatives = 1;
         recognitionRef.current = recognition;
       }
     }
   }, []);*/

  const handleNext = () => {
    const currentKey = questions[step].key;
    const currentValue = form[currentKey as keyof typeof form];

    if (!currentValue.trim()) {
      setError(`Please enter ${questions[step].key}`);
      return;
    }

    setError('');
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [questions[step].key]: e.target.value });
  };


  const handleSubmit = async () => {
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
    });
    setSent(true);
  };

  const resetForm = () => {
    setForm({ name: '', email: '', message: '' });
    setStep(0);
    setSent(false);
    setError('');
  };

  /*const handleVoiceInput = () => {
    const recognition = recognitionRef.current;
    if (!recognition) {
      alert('Speech recognition not supported in this browser.');
      return;
    }

    if (listening) {
      recognition.stop();
      setListening(false);
    } else {
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        const key = questions[step].key;
        setForm(prev => ({
          ...prev,
          [key]: prev[key as keyof typeof form] + ' ' + transcript
        }));
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
      };

      recognition.start();
      setListening(true);
    }
  };*/

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[url('/images/contact-bg.jpg')] bg-cover bg-center relative flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-xs bg-black/40 z-0" />
        <div className="z-10 max-w-3xl mx-auto text-white">
          {!sent ? (
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20">
                  <Lottie animationData={assistantAnim} loop />
                </div>
                <h2 className="text-3xl font-bold">Let&apos;s Chat!</h2>
              </div>

              {/* Typing animated question */}
              <p className="mb-4 text-lg font-medium min-h-[32px]">
                <Typewriter
                  key={step}
                  words={[questions[step].ques]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={45}
                  deleteSpeed={0}
                  delaySpeed={1500}
                />
              </p>

              {/* Shake animation on error */}
              <motion.div
                key={step + error}
                initial={{ x: 0 }}
                animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  {questions[step].key === 'message' ? (
                    <textarea
                      className="w-full px-4 py-3 text-black rounded-xl outline-none border border-white/30 focus:ring-2 focus:ring-cyan-300 resize-none overflow-hidden"
                      placeholder={questions[step].placeholder}
                      onChange={handleChange}
                      value={form.message}
                      rows={1}
                      ref={(el) => {
                        if (el) {
                          el.style.height = 'auto';
                          el.style.height = `${el.scrollHeight}px`;
                        }
                      }}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = `${target.scrollHeight}px`;
                      }}
                    />
                  ) : (
                    <input
                      type={questions[step].key === 'email' ? 'email' : 'text'}
                      className="w-full px-4 py-3 text-black rounded-xl outline-none border border-white/30 focus:ring-2 focus:ring-cyan-300"
                      placeholder={questions[step].placeholder}
                      onChange={handleChange}
                      value={form[questions[step].key as keyof typeof form]}
                    />
                  )}

                </div>
              </motion.div>

              {error && <p className="text-red-400 mt-2">{error}</p>}

              <button
                className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition"
                onClick={handleNext}
              >
                {step < questions.length - 1 ? 'Next' : 'Send'}
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
              <div className="w-60 h-60">
                <Lottie animationData={successAnim} loop={false} />
              </div>
              <h2 className="text-3xl font-bold text-white mt-4">Message Sent!</h2>
              <p className="text-white/90 mt-2">Thanks for reaching out. I&apos;ll get back to you soon ✌️</p>

              <button
                onClick={resetForm}
                className="mt-6 text-sm text-cyan-400 hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
