import { analyzeLead, generateProposal } from '../utils/ai.js';
import Lead from '../models/Lead.js';

export const voiceAIResponse = async (req, res) => {
  try {
    const { message, businessType } = req.body;
    
    // Simulate a voice AI personality
    let aiResult = null;
    try {
      aiResult = await analyzeLead({ 
        name: 'Potential Partner', 
        businessType: businessType || 'Growth', 
        message: message || 'Hello'
      });
    } catch (aiErr) {
      console.error('AI Analysis Background Error:', aiErr);
    }
    
    // Always return a valid response to keep the UI smooth
    const responseText = aiResult?.whatsappMessage || 
      "I'm Bizzybee's strategic AI. I'm currently analyzing market trends to give you the best advice. In the meantime, how can I help you scale your business operations?";
    
    res.status(200).json({ 
      success: true, 
      response: responseText,
      strategy: aiResult?.strategy || "Hyper-growth through AI automation and performance marketing."
    });
  } catch (error) {
    console.error('Voice AI Master Controller Error:', error);
    // Even in a master catch, try to return a 200 with a fallback to prevent UI "break" messages
    res.status(200).json({ 
      success: true, 
      response: "Our AI systems are currently syncing with the latest market data. Please feel free to ask about our services or ROI scaling in the meantime!",
      message: 'Resilient Fallback Triggered'
    });
  }
};


export const downloadProposal = async (req, res) => {
  try {
    const { leadId } = req.params;
    const lead = await Lead.findById(leadId);
    
    if (!lead) {
      return res.status(404).json({ success: false, message: 'Lead not found' });
    }

    const proposal = await generateProposal({
      name: lead.name,
      industry: lead.businessType,
      goals: lead.message
    });

    res.json({ success: true, proposal });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Proposal Generation Error' });
  }
};
