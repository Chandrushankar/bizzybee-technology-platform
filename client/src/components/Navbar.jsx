import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Solutions', path: '/services' },
    { name: 'Impact', path: '/portfolio' },
    { name: 'Results', path: '/case-studies' },
    { name: 'Labs', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${isScrolled
        ? 'bg-black/60 backdrop-blur-2xl border border-white/10 py-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-4 md:mx-auto'
        : 'bg-transparent border-transparent py-0'
        }`}>
        <div className="flex justify-between items-center h-14">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-xl"> <img src="./client/public/logo.png" alt="BB" /> </span>
            </div>
            <span className="font-black text-2xl text-white tracking-tighter uppercase italic">Bizzybee</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all hover:text-primary ${location.pathname === link.path
                  ? 'text-primary'
                  : 'text-gray-400'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-6 w-[1px] bg-white/10 mx-2"></div>

            <div className="flex items-center gap-4">

              <Link
                to="/free-audit"
                className="px-8 py-3 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_10px_20px_rgba(108,99,255,0.3)] hover:shadow-[0_15px_30px_rgba(108,99,255,0.5)] transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get Free Audit <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 mx-4 mt-4 rounded-3xl overflow-hidden glass-card"
          >
            <div className="px-6 pt-6 pb-10 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-5 rounded-2xl text-lg font-black uppercase tracking-widest transition-colors ${location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <Link
                  to="/free-audit"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-8 py-6 bg-primary text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-primary/30"
                >
                  Get Free Audit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
