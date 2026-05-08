import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-32 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] z-[95] cursor-pointer"
    >
      <MessageCircle size={32} />
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
