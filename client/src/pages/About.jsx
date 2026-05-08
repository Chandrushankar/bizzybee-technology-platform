import { motion } from 'framer-motion';
import { Shield, Target, Zap, Award, Users, Rocket, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Bizzybee Technology",
    "description": "Learn about Bizzybee Technology, a premier AI growth agency specializing in performance marketing and custom automation.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Bizzybee Technology",
      "foundingDate": "2024"
    }
  };

  return (
    <div className="pt-20 bg-black text-white overflow-hidden">
      <SEO
        title="About Our Lab | The Bizzybee Methodology"
        description="Learn how we combine human creativity with AI intelligence to engineer predictable growth for modern brands."
        schemaMarkup={schemaMarkup}
      />
      {/* Hero Section */}
      <section className="relative py-32 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(108,99,255,0.1)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold text-sm uppercase tracking-[0.5em] mb-6 block">Our Vision</span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">
              We Code <span className="gradient-text">Growth</span>.
            </h1>
            <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto font-medium leading-relaxed">
              Bizzybee Technology is a boutique AI growth agency. We bridge the gap between human creativity and machine intelligence to scale brands faster than ever.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Revenue Generated', value: '$25k+', color: 'text-primary' },
            { label: 'Active Clients', value: '20+', color: 'text-white' },
            { label: 'AI Models Deployed', value: '45', color: 'text-gold' },
            { label: 'Avg. ROAS', value: '6.4x', color: 'text-green-500' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center border-white/5"
            >
              <h3 className={`text-4xl md:text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</h3>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">
                The <span className="text-primary">Bizzybee</span> <br />Methodology.
              </h2>
              <div className="space-y-12">
                {[
                  {
                    icon: Target,
                    title: 'Deep Market Intelligence',
                    desc: 'We use proprietary AI to scrape market data and competitor funnels before we even spend a dollar.'
                  },
                  {
                    icon: Zap,
                    title: 'Hyper-Scale Execution',
                    desc: 'Once we find a winning creative, our automation engines scale it across 100+ micro-segments instantly.'
                  },
                  {
                    icon: Shield,
                    title: 'Predictable ROI',
                    desc: 'No "hoping" for results. Our data models predict acquisition costs within a 5% margin of error.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card aspect-square rounded-[4rem] p-12 border-primary/20 flex flex-col justify-center gap-8 shadow-[0_0_50px_rgba(108,99,255,0.2)]">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary rounded-2xl text-white">
                    <Rocket size={32} />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Engineered for Speed</h3>
                </div>
                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                  Most agencies move at the speed of humans. We move at the speed of algorithms. Our systems run 24/7, optimizing bids and creatives while the world sleeps.
                </p>
                <div className="pt-8 flex gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-40"><Sparkles size={20} /></div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-40"><Award size={20} /></div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-40"><Users size={20} /></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Security Section */}
      <section className="py-32 px-4 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Enterprise <span className="gradient-text">Reliability.</span></h2>
            <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">We build on world-class infrastructure to ensure your data and growth engines are secure and always-on.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Military-Grade Security', desc: 'All growth data is encrypted with TLS 1.3 and stored using zero-knowledge protocols.' },
              { title: 'Global Edge Delivery', desc: 'Our systems leverage Vercel & AWS Edge networks for sub-100ms response times globally.' },
              { title: '24/7 AI Monitoring', desc: 'Automated guardians monitor ad performance and site health every 60 seconds.' }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-10 border-white/5">
                <h4 className="text-xl font-bold mb-4 text-white">{feature.title}</h4>
                <p className="text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto glass-card p-16 text-center border-primary/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Stop Guessing. <br />Start Scaling.</h2>
            <Link to="/contact" className="btn-primary py-6 px-12 text-xl shadow-[0_0_30px_rgba(108,99,255,0.4)] hover:scale-105 transition-all inline-block">Meet Our AI Strategists</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
