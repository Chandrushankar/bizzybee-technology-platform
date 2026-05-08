import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const posts = [
  {
    slug: 'ai-marketing-trends-2026',
    title: '5 AI Marketing Trends That Will Dominate 2026',
    excerpt: 'From predictive lead scoring to hyper-personalized video agents, here is how the marketing landscape is shifting.',
    date: 'May 5, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'AI Strategy'
  },
  {
    slug: 'optimizing-roas-with-machine-learning',
    title: 'How Machine Learning is Killing the Traditional Media Buyer',
    excerpt: 'Why manual bid adjustments are a thing of the past and how to leverage automated attribution models for 4x ROAS.',
    date: 'May 2, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=800',
    category: 'Performance'
  }
];

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog | Insights on AI & Growth" 
        description="Read the latest insights from Bizzybee Technology on AI automation, performance marketing, and business scaling strategies."
      />

      <div className="pt-20 bg-black min-h-screen text-white px-6">
        <section className="py-32 relative overflow-hidden">
          <div className="glow-orb" style={{ top: '0', right: '0' }}></div>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 text-primary font-bold tracking-widest uppercase text-xs">
                  <Sparkles size={14} className="animate-pulse" />
                  Growth Intelligence
                </div>
                <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter">The <span className="gradient-text">Feed.</span></h1>
                <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
                  Deep dives into the technology and strategies we use to engineer predictable growth for our clients.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group glass-card p-0 rounded-[3rem] overflow-hidden border-white/5 bg-white/[0.02] hover:border-primary/50 transition-all"
                >
                  <Link to={`/blog/${post.slug}`} className="block h-64 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>
                  <div className="p-10">
                    <div className="flex items-center gap-4 mb-6">
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
                    <h2 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 mb-8 font-medium leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-4 transition-all"
                    >
                      Read Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
