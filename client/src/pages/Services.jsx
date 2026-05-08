import { motion } from 'framer-motion';
import { 
  Globe, 
  BarChart3, 
  Smartphone, 
  Zap, 
  Search, 
  PenTool, 
  Mail, 
  ArrowRight,
  Bot,
  Target,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Performance Marketing',
      slug: 'performance-marketing',
      desc: 'Data-backed advertising engineered for high ROAS on Google, Meta, and LinkedIn.',
      features: ['Full Funnel Ads', 'Precise Targeting', 'Creative Optimization', 'Live Attribution']
    },
    {
      icon: Bot,
      title: 'AI Automation',
      slug: 'ai-automation',
      desc: 'Custom AI agents and automated sales workflows that scale your operations without overhead.',
      features: ['Lead Generation Bots', 'CRM Automation', 'Custom GPT Agents', 'Support Systems']
    },
    {
      icon: Search,
      title: 'Growth SEO',
      slug: 'growth-seo',
      desc: 'Technical SEO and high-authority content that positions your brand at the top of Google search.',
      features: ['Semantic Search Optimization', 'Authority Backlinks', 'Technical Audits', 'AIO Content']
    },
    {
      icon: Globe,
      title: 'Conversion Optimization',
      slug: 'conversion-optimization',
      desc: 'High-speed landing pages and UX designed specifically to convert traffic into revenue.',
      features: ['Speed Engineering', 'UX/UI Design', 'A/B Testing', 'Conversion Mapping']
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ServiceList",
    "itemListElement": services.map((s, i) => ({
      "@type": "Service",
      "name": s.title,
      "description": s.desc,
      "position": i + 1
    }))
  };

  return (
    <>
      <SEO 
        title="AI Marketing & Growth Services" 
        description="Explore our elite services in Performance Marketing, AI Automation, and Conversion Engineering. We build systems that generate predictable revenue."
        schemaMarkup={serviceSchema}
      />

      <div className="pt-20 pb-20 bg-black min-h-screen text-white relative overflow-hidden">
        {/* Background Glows */}
        <div className="glow-orb" style={{ top: '0', right: '0' }}></div>

        <div className="py-32 px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 text-primary font-bold tracking-widest uppercase text-xs">
                <Sparkles size={14} className="animate-pulse" />
                Growth Engineering
              </div>
              <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-tight">
                Scale Your <span className="gradient-text">Revenue.</span>
              </h1>
              <p className="text-xl md:text-3xl text-gray-400 font-medium max-w-3xl mx-auto leading-relaxed">
                Bizzybee Technology provides the infrastructure for predictable business growth through AI and data.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-12 border-white/5 hover:border-primary/50 transition-all group relative overflow-hidden flex flex-col md:flex-row gap-10"
              >
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(108,99,255,0.2)]">
                  <service.icon size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{service.title}</h3>
                  <p className="text-gray-400 mb-10 text-lg font-medium leading-relaxed">{service.desc}</p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={`/services/${service.slug}`} 
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all"
                  >
                    Deep Dive <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
