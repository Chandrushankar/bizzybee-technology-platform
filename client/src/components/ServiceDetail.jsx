import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Bot, CheckCircle, Rocket, ShieldCheck, Sparkles, Zap, Target } from 'lucide-react';
import SEO from '../components/SEO';

const serviceData = {
  'performance-marketing': {
    title: 'Performance Marketing',
    headline: 'High-Impact Advertising for Modern Brands',
    description: 'We don\'t just run ads. We engineer predictable growth systems that turn your marketing spend into a high-yield investment.',
    problem: 'Rising Customer Acquisition Costs (CAC) and inconsistent lead quality are killing business margins.',
    solution: 'Our AI-optimized multi-channel advertising funnels use real-time attribution and predictive modeling to capture high-intent buyers.',
    result: 'Average 3.2x ROI increase and 45% reduction in CAC within the first 90 days.',
    icon: BarChart3,
    benefits: [
      'Precision Google & Meta Ads Management',
      'High-Conversion Landing Page Funnels',
      'AI-Powered Audience Expansion',
      'Daily ROAS Reporting & Optimization'
    ],
    stats: [
      { label: 'Avg ROAS', value: '4.8x' },
      { label: 'Leads Generated', value: '100k+' },
      { label: 'Ad Spend Managed', value: '$5M+' }
    ]
  },
  'ai-automation': {
    title: 'Custom AI Automation',
    headline: 'Scale Your Operations with Intelligent Systems',
    description: 'Eliminate manual bottlenecks and scale your business without increasing headcount using our custom AI agents and workflow automation.',
    problem: 'Manual operations and slow response times are limiting your scale and frustrating your customers.',
    solution: 'We deploy custom GPT agents and integrated workflow automation that handle lead nurturing, sales, and customer support 24/7.',
    result: '70% reduction in operational overhead and 3x faster lead response times.',
    icon: Bot,
    benefits: [
      'Custom AI Sales & Support Agents',
      'Automated Lead Nurturing Workflows',
      'Intelligent Data Extraction & Analysis',
      'CRM & Ops System Integration'
    ],
    stats: [
      { label: 'Ops Cost Reduced', value: '70%' },
      { label: 'Hours Saved/Mo', value: '250+' },
      { label: 'Efficiency Lift', value: '3x' }
    ]
  }
};

const ServiceDetail = ({ category }) => {
  const { slug } = useParams();
  const currentSlug = category || slug;
  const data = serviceData[currentSlug];

  if (!data) return <div className="pt-40 text-center text-white">Service not found.</div>;

  return (
    <>
      <SEO 
        title={`${data.title} | Premium Growth Solutions`}
        description={data.description}
      />

      <div className="bg-black text-white min-h-screen relative overflow-hidden pt-20">
        <div className="glow-orb" style={{ top: '10%', right: '10%' }}></div>

        {/* Hero */}
        <section className="py-24 px-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 text-primary font-bold uppercase text-xs">
                  <Sparkles size={14} /> Elite Service
                </div>
                <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                  {data.headline}
                </h1>
                <p className="text-xl text-gray-400 font-medium mb-10 leading-relaxed">
                  {data.description}
                </p>
                <Link to="/free-audit" className="btn-primary">
                  Get My Growth Strategy <ArrowRight size={20} />
                </Link>
              </motion.div>
              <div className="relative">
                <div className="glass-card p-12 border-primary/20 aspect-square flex flex-col justify-center items-center text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mb-10">
                    {(() => {
                      const Icon = data.icon;
                      return <Icon size={64} />;
                    })()}
                  </div>
                  <div className="grid grid-cols-2 gap-8 w-full">
                    {data.stats.map(s => (
                      <div key={s.label}>
                        <p className="text-4xl font-black text-white">{s.value}</p>
                        <p className="text-xs text-primary font-bold uppercase tracking-widest">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution/Result (SEO/GEO Friendly) */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="glass-card p-10 border-red-500/10">
                <p className="text-red-500 font-black uppercase tracking-widest text-xs mb-4">The Problem</p>
                <p className="text-xl text-white font-bold leading-relaxed">{data.problem}</p>
              </div>
              <div className="glass-card p-10 border-green-500/10">
                <p className="text-green-500 font-black uppercase tracking-widest text-xs mb-4">Our Solution</p>
                <p className="text-xl text-white font-bold leading-relaxed">{data.solution}</p>
              </div>
              <div className="glass-card p-10 border-primary/10">
                <p className="text-primary font-black uppercase tracking-widest text-xs mb-4">The Result</p>
                <p className="text-xl text-white font-bold leading-relaxed">{data.result}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-32 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter">Key Deliverables</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-6 p-8 glass-card border-white/5">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <span className="text-xl font-bold text-gray-200">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetail;
