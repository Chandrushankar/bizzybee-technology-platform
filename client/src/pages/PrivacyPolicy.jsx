import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy" description="Privacy policy and data protection protocols for Bizzybee Technology." />
      <div className="pt-40 pb-20 bg-black min-h-screen text-white px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black mb-12 tracking-tighter"
          >
            Privacy <span className="gradient-text">Policy.</span>
          </motion.h1>
          
          <div className="space-y-12 text-gray-400 text-lg leading-relaxed font-medium">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
              <p>We collect information you provide directly to us through forms, such as your name, email, and business details. This data is used solely to provide growth services and audits.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Enterprise Security</h2>
              <p>Bizzybee Technology employs enterprise-grade encryption (AES-256) and secure socket layers (TLS 1.3) to protect your business information during transmission and storage.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Usage</h2>
              <p>Your information is never sold to third parties. We use your data to analyze business growth opportunities and communicate strategic recommendations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
              <p>We use essential cookies to maintain session states and improve platform performance. No tracking cookies are used without explicit consent.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
