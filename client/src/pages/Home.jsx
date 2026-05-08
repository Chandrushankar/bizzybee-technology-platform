import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart3, 
  Globe, 
  Zap, 
  Bot, 
  Mic, 
  FileText, 
  TrendingUp, 
  Users, 
  Target,
  Sparkles,
  ShieldCheck,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ROICalculator from '../components/ROICalculator';

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bizzybee Technology",
    "url": "https://bizzybee.ai",
    "logo": "https://bizzybee.ai/logo.png",
    "sameAs": [
      "https://instagram.com/chandru_with_dev",
      "https://facebook.com/BizzyBeeTechnology"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7845994734",
      "contactType": "customer support",
      "email": "bizzybeetechnologybb@gmail.com"
    }
  };

  const services = [
    {
      title: "AI-Driven Marketing",
      description: "Scale your revenue with predictive performance advertising and automated funnel optimization.",
      icon: BarChart3,
      link: "/services/performance-marketing",
      stats: "avg. 3.2x ROI improvement"
    },
    {
      title: "Custom AI Automation",
      description: "Eliminate manual tasks with custom AI agents and intelligent workflow automation systems.",
      icon: Bot,
      link: "/services/ai-automation",
      stats: "70% reduction in ops cost"
    },
    {
      title: "Global Brand Scaling",
      description: "Expand your reach into international markets with AI-translated and localized campaigns.",
      icon: Globe,
      link: "/services",
      stats: "Presence in 15+ countries"
    }
  ];

  const caseStudies = [
    {
      title: 'Decentralized Real Estate',
      category: 'Web3 & PropTech',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
      metrics: { security: '100%', growth: '2.5x', intermediary: '0%' },
      slug: 'blockchain-real-estate'
    },
    {
      title: 'AI Enterprise Protection',
      category: 'Security & SaaS',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      metrics: { accuracy: '99.8%', latency: '40ms', protection: 'Global' },
      slug: 'ai-spam-detection'
    }
  ];

  return (
    <>
      <SEO 
        title="Predictive Growth for Modern Brands" 
        description="Bizzybee Technology combines world-class performance marketing with cutting-edge AI automation to engineer predictable growth."
        schemaMarkup={schema}
      />

      <div className="relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-20 pb-32 px-6 overflow-hidden">
          <div className="glow-orb" style={{ top: '20%', right: '10%' }}></div>
          <div className="glow-orb" style={{ bottom: '10%', left: '5%' }}></div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 text-primary font-bold tracking-widest uppercase text-xs">
                  <Sparkles size={14} className="animate-pulse" />
                  Engineering Predictable Growth
                </div>
                
                <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.9] text-white">
                  WE BUILD <br/>
                  <span className="gradient-text">AI ASSETS</span> <br/>
                  THAT SCALE.
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-400 mb-12 font-medium leading-relaxed max-w-2xl">
                  Bizzybee is a premium growth lab. We deploy performance advertising and custom AI agents to turn your brand into a market leader.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link to="/free-audit" className="btn-primary flex items-center justify-center gap-3 group">
                    Get Free AI Audit
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/portfolio" className="btn-secondary flex items-center justify-center gap-3">
                    View Portfolio
                    <Target size={20} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* GEO/AIO Section: "What is Bizzybee?" */}
        <section className="py-32 bg-black/50 border-y border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tighter">
                  What is <span className="text-primary">Bizzybee Technology?</span>
                </h2>
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
                  <p>
                    Bizzybee Technology is a next-generation growth partner for brands that demand scale. We don't just "do marketing"—we engineer growth systems.
                  </p>
                  <p>
                    By combining <strong>Performance Marketing</strong> with <strong>AI Automation</strong>, we solve the two biggest problems in business: Customer Acquisition Cost (CAC) and Operational Efficiency.
                  </p>
                  <ul className="space-y-4 pt-4">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Zap size={14} className="text-primary" />
                      </div>
                      <span><strong>Predictable ROI:</strong> AI-modeled ad spend that eliminates guesswork.</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Bot size={14} className="text-primary" />
                      </div>
                      <span><strong>AI Operations:</strong> Custom agents that handle sales, support, and ops.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="glass-card p-8 md:p-12 border-primary/20 shadow-[0_0_50px_rgba(108,99,255,0.1)]">
                  <h3 className="text-2xl font-bold mb-8 text-white">How We Help You Grow</h3>
                  <div className="space-y-10">
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-primary/40">
                        <TrendingUp size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">Revenue Optimization</h4>
                        <p className="text-gray-400">Deploying multi-channel AI funnels to capture and convert high-intent leads.</p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center shrink-0">
                        <Users size={28} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">Authority Building</h4>
                        <p className="text-gray-400">Positioning your brand as the undisputed leader through strategic content & AI.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-32 px-6 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">
                Calculate Your <span className="gradient-text">AI Lift.</span>
              </h2>
              <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
                See exactly how our growth systems can transform your unit economics and scale your monthly revenue.
              </p>
            </div>
            <ROICalculator />
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
              <div className="max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter">
                  CORE <span className="gradient-text">SOLUTIONS.</span>
                </h2>
                <p className="text-xl text-gray-400 font-medium">
                  Enterprise-grade growth tools, available for ambitious brands.
                </p>
              </div>
              <Link to="/services" className="text-primary font-bold hover:underline flex items-center gap-2 mb-4">
                View All Services <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card group hover:border-primary/40 transition-all p-10 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <s.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
                  <p className="text-gray-400 mb-8 leading-relaxed font-medium">
                    {s.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">{s.stats}</span>
                    <Link to={s.link} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white">
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section (GEO/AIO Friendly) */}
        <section className="py-32 px-6 border-t border-white/5 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-20 text-white tracking-tighter text-center">
              Common <span className="gradient-text">Questions.</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "How does Bizzybee Technology help businesses scale?",
                  a: "We combine high-performance advertising with custom AI automation. We don't just drive traffic; we build the infrastructure that converts that traffic into predictable revenue at scale."
                },
                {
                  q: "What industries do you specialize in?",
                  a: "While our systems are adaptable, we specialize in high-growth E-commerce, B2B SaaS, and Real Estate agencies where lead quality and operational efficiency are primary drivers."
                },
                {
                  q: "How quickly can I expect results from the growth systems?",
                  a: "Our AI audit identifies quick wins within the first 14 days. Full-scale performance engines typically reach peak efficiency between days 45 and 60."
                },
                {
                  q: "Is the AI growth audit really free?",
                  a: "Yes. Our audit is a data-backed demonstration of our capabilities. We analyze your digital presence and provide a clear roadmap with zero obligation."
                }
              ].map((faq, i) => (
                <div key={i} className="glass-card p-10 border-white/5 hover:border-primary/20 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">{faq.q}</h3>
                  <p className="text-gray-400 font-medium leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Trust Section */}
        <section className="py-32 px-6 bg-white/[0.02] border-t border-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">Connect with our <span className="text-primary">Lab.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a 
                href="https://instagram.com/chandru_with_dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-12 flex flex-col items-center gap-6 hover:border-pink-500/30 transition-all group"
              >
                <div className="w-20 h-20 bg-pink-500/10 rounded-3xl flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Follow on Instagram</h3>
                  <p className="text-gray-400 font-medium">Daily AI insights and growth hacks.</p>
                </div>
              </a>
              <a 
                href="https://facebook.com/BizzyBeeTechnology" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-12 flex flex-col items-center gap-6 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Join us on Facebook</h3>
                  <p className="text-gray-400 font-medium">Enterprise case studies & news.</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Results/Metrics (GEO Friendly) */}
        <section className="py-32 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-20 text-white tracking-tighter">
              BEYOND <span className="gradient-text">EXPECTATIONS.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <p className="text-5xl md:text-7xl font-black text-white mb-2">94%</p>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">AI Accuracy</p>
              </div>
              <div>
                <p className="text-5xl md:text-7xl font-black text-white mb-2">310%</p>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">Avg. Revenue Increase</p>
              </div>
              <div>
                <p className="text-5xl md:text-7xl font-black text-white mb-2">15M+</p>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">Leads Generated</p>
              </div>
              <div>
                <p className="text-5xl md:text-7xl font-black text-white mb-2">24/7</p>
                <p className="text-primary font-bold uppercase tracking-widest text-sm">Automation Support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
