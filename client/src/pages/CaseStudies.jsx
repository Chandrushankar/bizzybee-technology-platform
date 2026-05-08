import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Users, Target, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const CaseStudies = () => {
  const studies = [
    {
      slug: 'blockchain-real-estate',
      client: 'Vanguard PropTech',
      category: 'Web3 & Real Estate',
      metrics: ['+350% Speed', '100% Secure', 'Global Reach'],
      desc: 'Re-engineering the real estate transaction layer using decentralized smart contracts and AI property valuation.',
      color: 'from-blue-600 to-indigo-900'
    },
    {
      slug: 'ai-spam-detection',
      client: 'SecureNet AI',
      category: 'Cybersecurity & AI',
      metrics: ['99.8% Accuracy', '40ms Latency', '2M+ Blocks'],
      desc: 'Building an enterprise-grade threat detection system using custom transformer models and real-time streaming pipelines.',
      color: 'from-primary to-black'
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Bizzybee Technology Case Studies",
    "description": "Real-world success stories of businesses scaling with AI and performance marketing.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": studies.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": s.client,
        "description": s.desc
      }))
    }
  };

  return (
    <>
      <SEO 
        title="Case Studies | Engineering Impact" 
        description="See how we've helped businesses achieve exponential growth through AI automation, Web3 development, and performance marketing."
        schemaMarkup={schemaMarkup}
      />

      <div className="pt-20 pb-20 bg-black min-h-screen text-white relative overflow-hidden">
        <div className="glow-orb" style={{ top: '0', right: '0' }}></div>

        <div className="py-32 px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 text-primary font-bold tracking-widest uppercase text-xs">
                <Sparkles size={14} className="animate-pulse" />
                Proven Growth Roadmap
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-tight">
                Our <span className="gradient-text">Impact.</span>
              </h1>
              <p className="text-xl md:text-3xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
                We don't just deliver projects; we engineer business outcomes. Explore our documented wins.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-32">
            {studies.map((study, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <Link to={`/case-studies/${study.slug}`} className="w-full lg:w-3/5 aspect-video glass-card rounded-[3rem] overflow-hidden border border-white/5 relative group cursor-pointer shadow-2xl block">
                  <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-10 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <span className="text-6xl md:text-8xl font-black text-white/5 uppercase tracking-tighter group-hover:scale-110 transition-transform duration-700">{study.client.split(' ')[0]}</span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl">
                       <ArrowUpRight size={32} className="text-white" />
                    </div>
                  </div>
                </Link>
                
                <div className="w-full lg:w-2/5">
                  <span className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-4 block">{study.category}</span>
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-tight">{study.client}</h2>
                  <p className="text-gray-400 text-xl mb-10 font-medium leading-relaxed">{study.desc}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="glass-card p-6 border-white/10 flex flex-col justify-center text-center">
                        <p className="text-xl font-black text-white tracking-tighter">{metric.split(' ')[0]}</p>
                        <p className="text-[10px] text-primary uppercase font-black tracking-widest mt-1">{metric.split(' ').slice(1).join(' ')}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={`/case-studies/${study.slug}`} className="btn-primary group">
                    Deep Dive Analysis <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-48 py-32 px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center glass-card p-20 border-primary/20"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter">Ready to be our next <span className="gradient-text">win?</span></h2>
            <Link to="/free-audit" className="btn-primary py-8 px-16 text-2xl">
              Get Your Free AI Audit <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
