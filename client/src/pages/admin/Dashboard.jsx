import { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  Search, 
  Trash2, 
  Flame, 
  Sun, 
  Snowflake, 
  MessageSquare, 
  Sparkles,
  Bot,
  ExternalLink,
  Loader2
} from 'lucide-react';
import toast from 'react-hot-toast';
import { generateLeadProposalPDF } from '../../utils/pdfGenerator';

const Dashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const fetchLeads = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`${apiUrl}/api/leads`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeads(data.leads);
    } catch (error) {
      toast.error('Failed to fetch leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleGenerateProposal = async () => {
    if (!selectedLead) return;
    setIsGenerating(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem('token');
      const { data } = await axios.get(`${apiUrl}/api/ai/proposal/${selectedLead._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (data.success) {
        generateLeadProposalPDF(selectedLead, data.proposal);
        toast.success('Proposal Generated!');
      }
    } catch (error) {
      toast.error('Failed to generate AI proposal');
    } finally {
      setIsGenerating(false);
    }
  };

  const updateLeadStatus = async (id, newStatus) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const token = localStorage.getItem('token');
      await axios.put(`${apiUrl}/api/leads/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Status updated');
      fetchLeads();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const deleteLead = async (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        const token = localStorage.getItem('token');
        await axios.delete(`${apiUrl}/api/leads/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Lead deleted');
        fetchLeads();
      } catch (error) {
        toast.error('Failed to delete lead');
      }
    }
  };

  const totalLeads = leads.length;
  const hotLeads = leads.filter(l => l.aiScore === 'Hot').length;
  const closedLeads = leads.filter(l => l.status === 'closed').length;
  const conversionRate = totalLeads === 0 ? 0 : Math.round((closedLeads / totalLeads) * 100);

  const filteredLeads = leads.filter(lead => {
    const matchesFilter = filter === 'all' || lead.status === filter;
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-extrabold mb-2 text-white">Agency <span className="gradient-text">Intelligence</span></h1>
          <p className="opacity-60 font-medium text-white">Real-time lead tracking and AI growth insights.</p>
        </div>
        <div className="flex gap-4">
          <div className="glass-card py-2 px-6 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-bold uppercase tracking-wider text-white">System Live</span>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Users, label: 'Total Leads', value: totalLeads, color: 'var(--primary)' },
          { icon: Flame, label: 'Hot Leads', value: hotLeads, color: '#f97316' },
          { icon: TrendingUp, label: 'Conv. Rate', value: `${conversionRate}%`, color: '#22c55e' },
          { icon: DollarSign, label: 'Value Est.', value: `$${totalLeads * 2500}`, color: 'var(--gold)' }
        ].map((stat, i) => (
          <div key={i} className="glass-card p-6 border-white/5">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-white/5" style={{ color: stat.color }}>
              <stat.icon size={24} />
            </div>
            <p className="opacity-60 text-sm font-bold uppercase tracking-widest mb-1 text-white">{stat.label}</p>
            <h3 className="text-3xl font-black text-white">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card overflow-hidden">
            <div className="p-6 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold text-white">Recent Leads</h2>
              <div className="flex gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 opacity-40 text-white" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search leads..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary text-white"
                  />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5 text-xs font-bold uppercase tracking-widest opacity-60 text-white">
                    <th className="p-6">Lead Details</th>
                    <th className="p-6 text-center">AI Score</th>
                    <th className="p-6">Status</th>
                    <th className="p-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredLeads.map((lead) => (
                    <tr 
                      key={lead._id} 
                      className={`hover:bg-white/5 transition-colors cursor-pointer ${selectedLead?._id === lead._id ? 'bg-primary/10' : ''}`}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="p-6">
                        <p className="font-bold text-lg text-white">{lead.name}</p>
                        <p className="text-sm opacity-60 text-white">{lead.email}</p>
                        <span className="inline-block mt-2 text-[10px] font-black uppercase tracking-tighter bg-primary/20 text-primary px-2 py-0.5 rounded">
                          {lead.businessType}
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <div className="flex flex-col items-center gap-1">
                          {lead.aiScore === 'Hot' && <Flame className="text-orange-500" size={24} />}
                          {lead.aiScore === 'Warm' && <Sun className="text-yellow-500" size={24} />}
                          {lead.aiScore === 'Cold' && <Snowflake className="text-blue-400" size={24} />}
                          <span className={`text-[10px] font-black uppercase ${
                            lead.aiScore === 'Hot' ? 'text-orange-500' : 
                            lead.aiScore === 'Warm' ? 'text-yellow-500' : 'text-blue-400'
                          }`}>{lead.aiScore}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <select
                          value={lead.status}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                          className={`text-xs font-black uppercase px-4 py-2 rounded-full border-0 outline-none cursor-pointer ${
                            lead.status === 'new' ? 'bg-primary text-white' :
                            lead.status === 'contacted' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-green-500/20 text-green-400'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">In Talk</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td className="p-6 text-right">
                        <button 
                          onClick={(e) => { e.stopPropagation(); deleteLead(lead._id); }}
                          className="p-2 opacity-40 hover:opacity-100 hover:text-red-500 transition-all text-white"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {selectedLead ? (
            <div className="glass-card p-8 sticky top-24 border-primary/20 animate-up">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-white">{selectedLead.name}</h3>
                  <p className="opacity-60 text-sm text-white">{selectedLead.email}</p>
                </div>
                <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                  <Bot size={24} />
                </div>
              </div>

              <div className="space-y-8 text-white">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">AI Recommended Strategy</p>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-sm leading-relaxed">
                    {selectedLead.aiStrategy || 'AI is still processing the strategy...'}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gold mb-4">Growth Opportunities</p>
                  <ul className="space-y-3">
                    {selectedLead.aiIdeas?.map((idea, idx) => (
                      <li key={idx} className="flex gap-3 text-sm opacity-80">
                        <Sparkles size={16} className="text-gold shrink-0 mt-1" />
                        {idea}
                      </li>
                    )) || <p className="text-sm opacity-40 italic">No ideas generated yet.</p>}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(selectedLead.aiResponse);
                      toast.success('Strategy reply copied!');
                    }}
                    className="btn-primary w-full justify-center text-sm py-4"
                  >
                    Copy AI WhatsApp Reply <MessageSquare size={18} />
                  </button>
                </div>

                <button 
                  onClick={handleGenerateProposal}
                  disabled={isGenerating}
                  className="flex items-center justify-center gap-2 w-full py-4 text-xs font-bold uppercase tracking-widest bg-white/5 hover:bg-white/10 rounded-xl transition-all text-white border border-white/5 disabled:opacity-50"
                >
                  {isGenerating ? <Loader2 size={14} className="animate-spin" /> : <ExternalLink size={14} />}
                  {isGenerating ? 'Generating Proposal...' : 'Generate Full PDF Proposal'}
                </button>
              </div>
            </div>
          ) : (
            <div className="glass-card p-12 text-center flex flex-col items-center justify-center min-h-[400px] opacity-40 text-white">
              <Bot size={48} className="mb-4" />
              <p className="font-bold">Select a lead to view <br />AI intelligence</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
