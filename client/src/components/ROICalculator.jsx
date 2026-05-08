import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, ArrowRight, Sparkles, Zap, DollarSign } from 'lucide-react';

const ROICalculator = () => {
  const [revenue, setRevenue] = useState(10000);
  const [adSpend, setAdSpend] = useState(2000);
  const [leads, setLeads] = useState(100);

  const currentROAS = revenue / adSpend;
  const currentCPL = adSpend / leads;

  // AI Projections (Estimated improvements)
  const aiRevenue = revenue * 3.2; // 3.2x increase
  const aiAdSpend = adSpend * 0.8; // 20% efficiency gain
  const aiLeads = leads * 2.5; // 2.5x more leads

  const aiROAS = aiRevenue / aiAdSpend;
  const aiCPL = aiAdSpend / aiLeads;

  return (
    <div className="glass-card p-12 border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full"></div>

      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">AI Growth Calculator</h3>
          <p className="text-xs font-black uppercase tracking-widest text-primary">Predict Your ROI Lift</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Inputs */}
        <div className="space-y-8">
          <div className="space-y-4">
            <label className="flex justify-between text-sm font-bold text-gray-400">
              Monthly Revenue <span>₹{revenue.toLocaleString()}</span>
            </label>
            <input
              type="range" min="1000" max="100000" step="1000"
              value={revenue} onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
          <div className="space-y-4">
            <label className="flex justify-between text-sm font-bold text-gray-400">
              Monthly Ad Spend <span>₹{adSpend.toLocaleString()}</span>
            </label>
            <input
              type="range" min="500" max="20000" step="500"
              value={adSpend} onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
          <div className="space-y-4">
            <label className="flex justify-between text-sm font-bold text-gray-400">
              Monthly Leads <span>{leads}</span>
            </label>
            <input
              type="range" min="10" max="1000" step="10"
              value={leads} onChange={(e) => setLeads(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>

        {/* Results */}
        <div className="bg-primary/5 rounded-[2rem] p-8 border border-primary/10">
          <p className="text-center text-sm font-black uppercase tracking-widest text-primary mb-8 flex items-center justify-center gap-2">
            <Sparkles size={14} /> AI-Projected Outcomes
          </p>

          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">New Monthly Revenue</p>
                <p className="text-3xl font-black text-white">₹{Math.round(aiRevenue).toLocaleString()}</p>
              </div>
              <div className="text-green-500 font-black text-sm bg-green-500/10 px-3 py-1 rounded-full">+220%</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">Target ROAS</p>
                <p className="text-3xl font-black text-white">{aiROAS.toFixed(1)}x</p>
              </div>
              <div className="text-primary font-black text-sm bg-primary/10 px-3 py-1 rounded-full">Optimized</div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-1">Cost Per Lead (CPL)</p>
                <p className="text-3xl font-black text-white">₹{aiCPL.toFixed(2)}</p>
              </div>
              <div className="text-green-500 font-black text-sm bg-green-500/10 px-3 py-1 rounded-full">-60%</div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-primary/10">
            <p className="text-[10px] text-center text-gray-500 italic mb-6">
              *Projections based on historical performance of Bizzybee AI engines in similar industries.
            </p>
            <button className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-primary/20">
              Unlock This Growth <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
