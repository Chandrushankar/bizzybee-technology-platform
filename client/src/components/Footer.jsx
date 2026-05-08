import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS, CONTACT_INFO } from '../utils/constants';

const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(108,99,255,0.4)]">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <span className="font-bold text-3xl text-white tracking-tight">Bizzybee</span>
            </Link>
            <p className="text-gray-400 mb-10 max-w-sm text-lg font-medium leading-relaxed">
              Premium growth lab specializing in performance marketing and AI automation systems for modern brands.
            </p>
            <div className="flex space-x-5">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center hover:bg-green-500 hover:text-white transition-all border border-white/5 text-gray-400">
                <MessageCircle size={22} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all border border-white/5 text-gray-400">
                <InstagramIcon size={22} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-2xl bg-white/[0.05] flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all border border-white/5 text-gray-400">
                <FacebookIcon size={22} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-primary">Solutions</h3>
            <ul className="space-y-4 font-bold text-gray-400 text-sm">
              <li><Link to="/services/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services/ai-automation" className="hover:text-white transition-colors">AI Automation</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/free-audit" className="hover:text-white transition-colors">Growth Audit</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-primary">Agency</h3>
            <ul className="space-y-4 font-bold text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Labs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-primary">Connect</h3>
            <ul className="space-y-6 font-bold text-gray-400 text-sm">
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <Mail size={18} className="text-primary shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors">
                <Phone size={18} className="text-primary shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>{CONTACT_INFO.phone}</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-black uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Bizzybee Technology. Engineered with AI.</p>
          <p className="mt-4 md:mt-0">Enterprise Grade Security Enabled</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
