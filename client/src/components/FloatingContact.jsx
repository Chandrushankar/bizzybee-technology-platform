import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Bot, X } from 'lucide-react';
import { useState } from 'react';
import { SOCIAL_LINKS } from '../utils/constants';

const FloatingContact = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[200] flex flex-col items-end gap-4">
      {/* Chatbot Window (Simplified placeholder) */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-80 h-96 bg-black border border-white/10 rounded-3xl shadow-2xl mb-4 overflow-hidden flex flex-col glass-card"
          >
            <div className="p-6 bg-primary text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Bot size={20} />
                <span className="font-bold text-sm">Bizzybee AI</span>
              </div>
              <button onClick={() => setShowChatbot(false)}><X size={18} /></button>
            </div>
            <div className="flex-1 p-6 text-sm text-gray-400 overflow-y-auto">
              <div className="bg-white/5 p-4 rounded-2xl mb-4">
                Hi! I'm the Bizzybee AI agent. How can I help you scale today?
              </div>
            </div>
            <div className="p-4 border-t border-white/5">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-4">
        {/* Chatbot Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowChatbot(!showChatbot)}
          className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white shadow-xl hover:bg-primary/20 transition-all"
        >
          {showChatbot ? <X size={24} /> : <Bot size={24} />}
        </motion.button>

        {/* WhatsApp Button */}
        <motion.a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.6)] transition-all"
        >
          <MessageCircle size={32} />
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingContact;
