import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { CONTACT_INFO } from '../utils/constants';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/leads`, {
        ...data,
        businessType: 'General Inquiry'
      });
      toast.success('Message sent! Our team will contact you shortly.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 pb-20 bg-black min-h-screen text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="glow-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-24 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 text-primary font-bold tracking-widest uppercase text-xs">
              <Sparkles size={14} className="animate-pulse" />
              Contact Us
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
              Let's build <br /> something <span className="gradient-text">great.</span>
            </h1>
            <p className="text-xl text-gray-400 font-medium leading-relaxed">
              Ready to transform your business growth? Our team of AI and marketing experts is ready to engineer your success.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Contact Info & Image */}
          <div className="lg:col-span-1 space-y-12">
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Our Team"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-primary font-black uppercase tracking-widest text-xs mb-2">Available 24/7</p>
                <h4 className="text-3xl font-bold text-white">Global Growth Support</h4>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 glass-card border-white/5 overflow-hidden">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="text-base md:text-lg font-bold text-white hover:text-primary transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 glass-card border-white/5">
                <div className="w-12 h-12 bg-primary/20 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <a 
                  href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} 
                  className="text-base md:text-lg font-bold text-white hover:text-primary transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>


              <div className="p-8 glass-card border-white/5 bg-white/[0.02]">
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-6">Social Presence</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/chandru_with_dev" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                  </a>
                  <a href="https://facebook.com/BizzyBeeTechnology" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://wa.me/917845994734" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-all">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-12 md:p-16 border-white/10 relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full"></div>
              <h3 className="text-4xl font-black text-white mb-12 tracking-tight flex items-center gap-4">
                <MessageCircle className="text-primary" size={36} />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                    <input
                      {...register("name", { required: true })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                      placeholder="e.g. Elon Musk"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                    <input
                      {...register("phone", { required: true })}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-600"
                    placeholder="tech@bizzybee.com"
                  />
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-400 ml-1">How can we help?</label>
                  <textarea
                    {...register("message")}
                    rows="5"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-primary focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-600"
                    placeholder="Tell us about your business goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center text-lg"
                >
                  {isSubmitting ? 'Sending Signal...' : 'Send Message'}
                  <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
