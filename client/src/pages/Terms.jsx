import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Terms = () => {
  return (
    <>
      <SEO title="Terms of Service" description="Terms and conditions for using Bizzybee Technology growth services." />
      <div className="pt-40 pb-20 bg-black min-h-screen text-white px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black mb-12 tracking-tighter"
          >
            Terms of <span className="gradient-text">Service.</span>
          </motion.h1>
          
          <div className="space-y-12 text-gray-400 text-lg leading-relaxed font-medium">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Engagement</h2>
              <p>By requesting an audit or engaging with our services, you agree to provide accurate business information to facilitate effective growth analysis.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
              <p>All growth roadmaps, custom AI agents, and strategic designs created by Bizzybee Technology remain the intellectual property of Bizzybee unless otherwise specified in a service agreement.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Performance Guarantees</h2>
              <p>While we engineer systems for maximum ROI, business growth depends on market conditions and execution. We provide data-backed projections, not absolute guarantees.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
