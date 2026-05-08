import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, TrendingUp, Zap, Target, Shield, BarChart3, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';

const caseStudyData = {
  'blockchain-real-estate': {
    title: 'Decentralized Real Estate Marketplace',
    client: 'PropBlock Global',
    industry: 'Real Estate / Web3',
    period: '6 Months',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200',
    problem: 'Traditional real estate transactions are slow, laden with heavy intermediary fees, and lack transparency for global investors.',
    solution: 'Built a custom Ethereum-based marketplace using Solidity smart contracts for automated escrow and fractional property ownership.',
    results: [
      { label: 'Transaction Speed', value: '350%', icon: Zap },
      { label: 'Fee Reduction', value: '100%', icon: Target },
      { label: 'Investor Reach', value: 'Global', icon: Globe }
    ],
    technicalFeats: [
      'Smart Contract Escrow Systems',
      'Fractional NFT Asset Management',
      'Gas-Optimized Transaction Batching',
      'Decentralized Identity Verification'
    ],
    demoLink: 'https://chandrushankar.github.io/Decentralized-Real-Estate-Marketplace/'
  },
  'ai-spam-detection': {
    title: 'AI-Powered Enterprise Security',
    client: 'SecureNet Systems',
    industry: 'Cybersecurity',
    period: '4 Months',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    problem: 'Existing spam filters were failing to detect advanced polymorphic phishing attacks, leading to security breaches.',
    solution: 'Implemented a transformer-based deep learning model trained on 50M+ datasets to detect malicious intent in real-time.',
    results: [
      { label: 'Accuracy Rate', value: '99.8%', icon: Shield },
      { label: 'Latency', value: '40ms', icon: Zap },
      { label: 'Threats Blocked', value: '2M+', icon: Target }
    ],
    technicalFeats: [
      'BERT-based NLP Classification',
      'Real-time Streaming Pipeline',
      'Zero-Day Threat Modeling',
      'Auto-Scaling GPU Inference'
    ]
  }
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const data = caseStudyData[slug];

  if (!data) return <div className="pt-40 text-center text-white">Case study not found.</div>;

  return (
    <>
      <SEO 
        title={`${data.title} | Case Study`} 
        description={`Detailed case study: How we achieved ${data.results[0].value} ${data.results[0].label} for ${data.client}.`}
      />

      <div className="bg-black text-white min-h-screen pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute bottom-20 left-0 right-0">
            <div className="max-w-7xl mx-auto px-6">
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 hover:gap-4 transition-all">
                <ArrowLeft size={16} /> Back to Case Studies
              </Link>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
                {data.title}
              </h1>
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Client</p>
                  <p className="font-bold text-xl">{data.client}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Industry</p>
                  <p className="font-bold text-xl">{data.industry}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Timeline</p>
                  <p className="font-bold text-xl">{data.period}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Bar */}
        <section className="py-20 border-b border-white/5 bg-primary/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {data.results.map((res, i) => {
                const Icon = res.icon;
                return (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                      <Icon size={32} />
                    </div>
                    <div>
                      <p className="text-4xl font-black text-white leading-none mb-1">{res.value}</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">{res.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Content */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="space-y-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                    <div className="w-8 h-1 bg-primary"></div> The Problem
                  </h2>
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    {data.problem}
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
                    <div className="w-8 h-1 bg-primary"></div> The Solution
                  </h2>
                  <p className="text-xl text-gray-400 leading-relaxed font-medium">
                    {data.solution}
                  </p>
                </div>
              </div>

              <div>
                <div className="glass-card p-12 border-primary/20 bg-primary/5">
                  <h3 className="text-2xl font-bold mb-8">Technical Implementation</h3>
                  <ul className="space-y-6">
                    {data.technicalFeats.map((feat, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-200 font-medium">
                        <CheckCircle size={24} className="text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {data.demoLink && (
                    <a 
                      href={data.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary w-full justify-center mt-12 bg-white text-black hover:bg-gray-200 transition-all"
                    >
                      Check Live Demo <ExternalLink size={20} />
                    </a>
                  )}
                  
                  <div className="mt-12 pt-10 border-t border-white/5">
                    <p className="text-gray-400 mb-8 font-medium italic">
                      "Bizzybee Technology delivered a system that outperformed our expectations. Their AI expertise is truly world-class."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                      <div>
                        <p className="font-bold text-white text-sm">CTO, {data.client}</p>
                        <p className="text-xs text-primary uppercase font-bold tracking-widest">Verified Review</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter">Want Results <span className="gradient-text">Like This?</span></h2>
            <Link to="/free-audit" className="btn-primary py-8 px-16 text-2xl">
              Get Your AI Audit <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyDetail;
