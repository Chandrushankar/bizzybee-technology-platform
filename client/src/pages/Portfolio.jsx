import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Zap, Sparkles, Code, Shield, ShoppingCart, GraduationCap, Ticket, X, Globe, BarChart3, Rocket } from 'lucide-react';
import SEO from '../components/SEO';

const projects = [
  {
    id: 1,
    title: "Blockchain Real Estate Marketplace",
    category: "Web3 & PropTech",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    description: "A decentralized marketplace to buy, sell, and rent properties using blockchain technology for transparent and intermediary-free transactions.",
    results: "3.5x Faster Transactions | 0% Intermediary Fees",
    tags: ["Solidity", "Web3.js", "Ethereum"],
    icon: Globe,
    color: "from-blue-600 to-black",
    link: "https://chandrushankar.github.io/Decentralized-Real-Estate-Marketplace"
  },
  {
    id: 9,
    title: "AI Property Insights Engine",
    category: "AI & Real Estate",
    image: "/client/public/ai.png",
    description: "Predictive analytics platform for real estate investors. Uses machine learning to forecast property value trends and rental yields.",
    results: "94% Forecast Accuracy | $2M+ Assets Optimized",
    tags: ["Python", "TensorFlow", "React"],
    icon: Zap,
    color: "from-primary to-black"
  },
  {
    id: 2,
    title: "Enterprise AI Spam Protection",
    category: "AI & Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "Advanced machine learning system detecting malicious emails with extreme accuracy in real-time for global enterprises.",
    results: "99.8% Detection Rate | 40ms Processing Latency",
    tags: ["Python", "TensorFlow", "FastAPI"],
    icon: Shield,
    color: "from-blue-600 to-indigo-900"
  },
  {
    id: 4,
    title: "High-Performance Plant Store",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
    description: "A conversion-optimized minimalist marketplace for indoor plants with integrated care guides and AI-driven plant health diagnostic tools.",
    results: "210% Conversion Lift | 45% Repeat Customer Rate",
    tags: ["Next.js", "Tailwind", "Shopify"],
    icon: ShoppingCart,
    color: "from-green-600 to-emerald-900"
  }
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Bizzybee Technology Portfolio",
    "description": "Showcase of high-impact AI, Web3, and Performance Marketing projects engineered by Bizzybee Technology.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": projects.map((p, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": p.title,
        "description": p.description
      }))
    }
  };

  return (
    <>
      <SEO
        title="Portfolio | Engineering Predictable Growth"
        description="Explore our high-impact projects in AI automation, Web3 development, and enterprise security. See how Bizzybee Technology transforms industries."
        schemaMarkup={schemaMarkup}
      />

      <div className="pt-20 bg-black min-h-screen text-white overflow-hidden">
        <section className="section-padding relative">
          <div className="glow-orb" style={{ top: '0', right: '-10%' }}></div>

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24 relative z-10 pt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 text-primary font-bold tracking-widest uppercase text-xs"
              >
                <Sparkles size={14} className="animate-pulse" />
                Case Studies & Results
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black mb-8 tracking-tighter"
              >
                Engineering <span className="gradient-text">Impact.</span>
              </motion.h1>
              <p className="text-gray-400 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
                We solve complex business problems with elegant technology. Our portfolio showcases systems that drive measurable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group glass-card p-0 rounded-[3rem] overflow-hidden hover:border-primary/50 transition-all border-white/5 bg-white/[0.02] flex flex-col md:flex-row"
                >
                  <div className="md:w-1/2 relative overflow-hidden cursor-pointer h-80 md:h-auto" onClick={() => setSelectedImage(project.image)}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl p-3 rounded-2xl border border-white/10">
                      {(() => {
                        const Icon = project.icon;
                        return <Icon size={20} className="text-white" />;
                      })()}
                    </div>
                  </div>

                  <div className="md:w-1/2 p-10 flex flex-col">
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-4 block">
                      {project.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg mb-8 font-medium leading-relaxed">
                      {project.description}
                    </p>

                    <div className="bg-primary/5 rounded-2xl p-6 mb-8 border border-primary/10">
                      <p className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">Proven Result</p>
                      <p className="text-white font-bold text-lg">{project.results}</p>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline py-3 px-6 text-xs mb-8 justify-center hover:bg-primary/10 transition-all"
                      >
                        Check Demo <ExternalLink size={14} />
                      </a>
                    )}

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest font-black text-gray-500 px-3 py-1.5 bg-white/5 rounded-xl border border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 md:p-20 cursor-zoom-out"
            >
              <button className="absolute top-10 right-10 text-white hover:text-primary transition-colors" onClick={() => setSelectedImage(null)}>
                <X size={40} />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage}
                className="max-w-full max-h-full rounded-3xl shadow-2xl border border-white/10"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Portfolio;
