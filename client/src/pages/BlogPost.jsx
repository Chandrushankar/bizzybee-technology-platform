import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const blogContent = {
  'ai-marketing-trends-2026': {
    title: '5 AI Marketing Trends That Will Dominate 2026',
    date: 'May 5, 2026',
    readTime: '6 min read',
    category: 'AI Strategy',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p className="text-xl text-gray-300 leading-relaxed mb-8">
        The marketing landscape is no longer just shifting—it has been completely rebuilt by artificial intelligence. As we move into mid-2026, the companies winning the market are those who have stopped using AI as a "tool" and started using it as an infrastructure.
      </p>
      
      <h2 className="text-3xl font-bold text-white mb-6">1. Predictive Lead Scoring 2.0</h2>
      <p className="text-gray-400 mb-8 font-medium">
        Standard CRM lead scoring is dead. In 2026, AI models analyze over 5,000 data points in real-time—including semantic intent from initial chat interactions and browsing patterns—to predict closing probability with 95% accuracy before a human even sees the lead.
      </p>

      <h2 className="text-3xl font-bold text-white mb-6">2. Hyper-Personalized Video Agents</h2>
      <p className="text-gray-400 mb-8 font-medium">
        Cold emails are being replaced by dynamic AI video avatars. These agents speak to the lead by name, reference their specific business problems, and provide a live walkthrough of potential solutions, all generated instantly upon lead submission.
      </p>

      <div className="glass-card p-10 border-primary/20 bg-primary/5 my-12">
        <h3 className="text-2xl font-bold mb-4 text-white">Why This Matters for You</h3>
        <p className="text-gray-400 font-medium">
          Brands that ignore these trends will face rising CAC that eventually makes their business unviable. Early adopters are seeing a 70% reduction in sales cycles and a 4x increase in lead-to-close rates.
        </p>
      </div>
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogContent[slug];

  if (!post) return <div className="pt-40 text-center text-white">Post not found.</div>;

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.content.substring(0, 160).replace(/<[^>]*>?/gm, '')}
        ogImage={post.image}
        ogType="article"
      />

      <div className="bg-black text-white min-h-screen pt-20">
        <article className="max-w-4xl mx-auto px-6 py-24">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
            <ArrowLeft size={16} /> Back to Insights
          </Link>

          <header className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/10">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
                <Calendar size={14} /> {post.date}
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 font-bold">
                <Clock size={14} /> {post.readTime}
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[0.95]">
              {post.title}
            </h1>
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-[500px] object-cover rounded-[3rem] border border-white/5"
            />
          </header>

          <div 
            className="prose prose-invert prose-xl max-w-none font-medium text-gray-400"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-24 pt-16 border-t border-white/5">
            <div className="glass-card p-12 text-center border-primary/20">
              <h3 className="text-3xl font-black mb-6 tracking-tight">Ready to implement these strategies?</h3>
              <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                Our AI growth engine is built on these exact principles. Let's see how they apply to your business.
              </p>
              <Link to="/free-audit" className="btn-primary">
                Get Your Free AI Audit <ArrowRight size={20} />
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default BlogPost;
