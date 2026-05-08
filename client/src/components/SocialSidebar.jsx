import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../utils/constants';

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const SocialSidebar = () => {
  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: MessageCircle, 
      url: SOCIAL_LINKS.whatsapp,
      color: 'hover:bg-green-500' 
    },
    { 
      name: 'Instagram', 
      icon: InstagramIcon, 
      url: SOCIAL_LINKS.instagram,
      color: 'hover:bg-pink-600' 
    },
    { 
      name: 'Facebook', 
      icon: FacebookIcon, 
      url: SOCIAL_LINKS.facebook,
      color: 'hover:bg-blue-600' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: `mailto:${SOCIAL_LINKS.email}`,
      color: 'hover:bg-primary' 
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col gap-4">
      {socialLinks.map((social, i) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            whileHover={{ x: 5 }}
            className={`group w-12 h-12 flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-xl text-gray-400 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${social.color}`}
          >
            <Icon size={20} />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-4 px-3 py-1.5 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
              {social.name}
            </span>
          </motion.a>
        );
      })}
      <div className="w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent mx-auto mt-4"></div>
    </div>
  );
};

export default SocialSidebar;
