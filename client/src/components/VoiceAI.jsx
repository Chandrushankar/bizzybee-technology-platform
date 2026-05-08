import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, Send, Bot, Sparkles, Volume2, MessageCircle } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import DOMPurify from 'dompurify';
import { SOCIAL_LINKS } from '../utils/constants';

const VoiceAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! I'm Bizzybee AI. I can help you scale your business. Ask me anything about marketing or automation!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const scrollRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    
    const sanitizedText = DOMPurify.sanitize(text);
    const userMsg = { role: 'user', content: sanitizedText };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsProcessing(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

      const response = await axios.post(`${apiUrl}/api/ai/voice`, { 
        message: sanitizedText,
        businessType: 'Web Inquiry' 
      });

      if (response.data && response.data.success) {
        setMessages(prev => [...prev, { role: 'ai', content: response.data.response }]);
        if (window.speechSynthesis) {
           const utterance = new SpeechSynthesisUtterance(response.data.response);
           utterance.rate = 1.1;
           window.speechSynthesis.speak(utterance);
        }
      } else {
        // Fallback for cases where success is false but request finished
        setMessages(prev => [...prev, { 
          role: 'ai', 
          content: "I'm processing your request. Our strategists are currently syncing the latest growth data. How can I help you today?" 
        }]);
      }
    } catch (error) {
      console.error('AI Assistant Critical Error:', {
        message: error.message,
        code: error.code,
        response: error.response?.data,
        status: error.response?.status,
        url: error.config?.url
      });
      
      // If it's a network error or 500, show a more graceful fallback in the chat itself
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: `Our AI systems are briefly offline (Error: ${error.code || error.message}). Don't worry, you can reach our team directly via WhatsApp for immediate support!` 
      }]);
      toast.error(`Connection issue (${error.message}). Using local fallback.`);
    } finally {
      setIsProcessing(false);
    }

  };


  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast.error('Voice recognition not supported.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event) => handleSend(event.results[0][0].transcript);
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    try {
      recognition.start();
    } catch (err) {
      setIsListening(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-10 right-10 z-[500] flex flex-col items-end gap-6 group">
        {/* Tooltip Label */}
        <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 translate-x-4 group-hover:translate-x-0 whitespace-nowrap shadow-2xl">
          Bizzybee AI Assistant
        </div>

        {/* Master FAB Trigger */}
        <motion.button
          onClick={toggleOpen}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-20 h-20 flex items-center justify-center group/btn"
        >
          {/* Animated Background Rings */}
          <div className="absolute inset-0 bg-primary/20 rounded-[2rem] animate-ping opacity-40"></div>
          <div className="absolute inset-0 bg-primary/10 rounded-[2rem] animate-pulse"></div>
          
          {/* Main Button Body */}
          <div className="relative w-full h-full bg-gradient-to-br from-primary via-primary to-indigo-700 rounded-[2rem] flex items-center justify-center text-white shadow-[0_20px_50px_rgba(108,99,255,0.4)] border border-white/20 overflow-hidden">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={32} />
                </motion.div>
              ) : (
                <motion.div
                  key="bot"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  className="flex flex-col items-center gap-1"
                >
                  <Bot size={32} />
                  <span className="text-[8px] font-black tracking-widest uppercase opacity-70">AI</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Gloss Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
          </div>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(20px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 50, scale: 0.95, filter: 'blur(20px)' }}
            className="fixed bottom-32 right-10 w-[420px] max-w-[calc(100vw-2rem)] h-[700px] max-h-[calc(100vh-14rem)] bg-black/40 backdrop-blur-3xl border border-white/10 z-[500] flex flex-col overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
          >
            {/* Premium Header */}
            <div className="p-8 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent border-b border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full -mr-16 -mt-16"></div>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl rotate-3 group-hover:rotate-0 transition-transform">
                    <Bot size={28} />
                  </div>
                  <div>
                    <h3 className="font-black text-white uppercase tracking-tight text-lg">Bizzybee AI</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Neural Engine Active</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a 
                    href={SOCIAL_LINKS.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all border border-white/5"
                    title="WhatsApp Expert"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth custom-scrollbar">
              {messages.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: i === messages.length - 1 ? 0.1 : 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[88%] p-5 rounded-3xl text-[13px] font-bold leading-relaxed shadow-2xl relative overflow-hidden ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white/[0.03] text-gray-200 border border-white/10 rounded-tl-none'
                  }`}>
                    {msg.role === 'ai' && (
                      <div className="absolute top-0 left-0 w-1 h-full bg-primary/40"></div>
                    )}
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isProcessing && (
                <div className="flex gap-3 items-center text-[10px] text-primary font-black uppercase tracking-[0.3em]">
                  <div className="flex gap-1">
                    <span className="w-1 h-1 bg-primary rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-primary rounded-full animate-bounce delay-75"></span>
                    <span className="w-1 h-1 bg-primary rounded-full animate-bounce delay-150"></span>
                  </div>
                  Analyzing Growth Metrics
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-8 bg-black/60 backdrop-blur-xl border-t border-white/10">
              <div className="flex gap-4 items-center">
                <button 
                  onClick={startListening} 
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all border ${
                    isListening 
                      ? 'bg-red-500 border-red-400 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]' 
                      : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:border-white/10'
                  }`}
                >
                  {isListening ? <Volume2 size={24} /> : <Mic size={24} />}
                </button>
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    value={inputValue}
                    disabled={isProcessing}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
                    placeholder={isProcessing ? "Analyzing..." : "Ask about ROI scaling..."}
                    className="w-full h-14 px-6 pr-14 bg-white/5 border border-white/10 rounded-2xl text-[13px] text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-gray-600 font-bold disabled:opacity-50"
                  />
                  <button 
                    onClick={() => handleSend(inputValue)} 
                    disabled={isProcessing || !inputValue.trim()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-primary hover:scale-125 transition-transform disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Send size={22} />
                  </button>

                </div>
              </div>
              <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] text-center mt-6 opacity-40">
                Powered by Bizzybee Intelligence v4.0
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default VoiceAI;

