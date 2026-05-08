import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle, AlertCircle, ArrowRight, ShieldCheck, Sparkles, TrendingUp, Zap, BarChart3, Target } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import DOMPurify from 'dompurify';
import SEO from '../components/SEO';

// 🔐 Security: Input Validation Schema (Zod)
const auditSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Please enter a valid business email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  businessType: z.string().min(1, 'Please select your industry'),
  website: z.string().url('Please enter a valid URL (include https://)').optional().or(z.literal('')),
});

const FreeAudit = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(auditSchema)
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      // 🔐 Security: Sanitize all inputs before sending to backend
      const sanitizedData = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        phone: DOMPurify.sanitize(formData.phone),
        businessType: DOMPurify.sanitize(formData.businessType),
        website: formData.website ? DOMPurify.sanitize(formData.website) : 'N/A',
        message: `Premium Audit Request for ${DOMPurify.sanitize(formData.name)}`
      };

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/api/leads`, sanitizedData);

      setIsSuccess(true);
      toast.success('Audit request submitted successfully!');
      reset();
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to submit request. Please try again.';
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Free AI Growth Audit",
    "provider": {
      "@type": "Organization",
      "name": "Bizzybee Technology"
    },
    "description": "A comprehensive data-backed analysis of your marketing funnel and AI automation opportunities."
  };

  if (isSuccess) {
    return (
      <div className="section-padding min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        <div className="glow-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full glass-card p-16 rounded-[4rem] text-center relative z-10"
        >
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={48} className="text-primary" />
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">Analysis Started</h2>
          <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
            Our AI engine is now analyzing your digital footprint. You will receive your custom Growth Roadmap via email within 15-20 minutes.
          </p>
          <button onClick={() => setIsSuccess(false)} className="btn-primary">
            Request Another Audit
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Free AI Growth Audit | Bizzybee Technology"
        description="Stop guessing. Get a data-backed analysis of your marketing funnel and hidden revenue opportunities using our proprietary AI growth engine."
        schemaMarkup={schemaMarkup}
      />

      <div className="section-padding min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background Glows */}
        <div className="glow-orb" style={{ top: '0', right: '0' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full glass-card border-primary/20 text-primary font-bold tracking-widest uppercase text-xs mb-8">
                <Sparkles size={14} className="animate-pulse" />
                Performance Audit
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] mb-10 tracking-tighter">
                Scale Your <br />
                <span className="gradient-text">Revenue.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed font-medium">
                Our Free AI Growth Audit identifies leaks in your funnel and maps out a 3.5x growth trajectory for your brand.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: TrendingUp, text: 'Competitor Benchmark Report' },
                  { icon: Zap, text: 'AI Automation Opportunity Scan' },
                  { icon: Target, text: 'Conversion Rate Optimization Map' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-xl text-gray-300 font-medium group">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-6 rounded-3xl glass-card border-white/5 max-w-md">
                <ShieldCheck className="text-primary shrink-0" size={32} />
                <p className="text-sm text-gray-400 font-medium">
                  <strong>Enterprise Security:</strong> Your data is protected with TLS 1.3 encryption and zero-knowledge storage protocols.
                </p>
              </div>
            </motion.div>

            {/* Right Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-12 md:p-16 rounded-[4rem] relative overflow-hidden"
            >
              <h3 className="text-4xl font-bold text-white mb-10 tracking-tight">Audit Request</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-400 ml-1">Full Name</label>
                    <input
                      {...register("name")}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-400 ml-1">Phone</label>
                    <input
                      {...register("phone")}
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-400 ml-1">Business Email</label>
                  <input
                    {...register("email")}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="name@company.com"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-400 ml-1">Industry</label>
                  <select
                    {...register("businessType")}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-black"
                  >
                    <option value="">Select industry...</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="SaaS">SaaS / B2B Tech</option>
                    <option value="Real Estate">Real Estate / PropTech</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Other">Other Service Industry</option>
                  </select>
                  {errors.businessType && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.businessType.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-400 ml-1">Website URL</label>
                  <input
                    {...register("website")}
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="https://yourwebsite.com"
                  />
                  {errors.website && <span className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.website.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 btn-primary justify-center mt-6 text-xl"
                >
                  {isSubmitting ? "Processing..." : "Claim Your Free Audit"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FreeAudit;
