import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const analyzeLead = async (lead) => {
  try {
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key') {
      console.warn("OpenAI API Key not configured. Skipping AI analysis.");
      return null;
    }

    const prompt = `
    You are an elite AI system architect and marketing strategist for "Bizzybee Technology".
    
    Analyze this business lead:
    Name: ${lead.name}
    Business Type/Industry: ${lead.businessType}
    Goals/Message: ${lead.message}

    1. Score the lead (Hot/Warm/Cold) based on intent and business fit.
    2. Suggest a high-level marketing strategy (Ads, SEO, AI Automation, etc.).
    3. Generate a professional, high-conversion WhatsApp reply to move them to a call.
    4. Provide 3 specific AI automation ideas for their business.

    Return the result in JSON format:
    {
      "score": "Hot/Warm/Cold",
      "strategy": "...",
      "whatsappMessage": "...",
      "aiIdeas": ["...", "...", "..."],
      "suggestedAction": "..."
    }
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return null;
  }
};

export const generateProposal = async (businessData) => {
  try {
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key') {
       return {
         Summary: `Strategic growth plan for ${businessData.name}.`,
         Roadmap: "Month 1-3: Infrastructure & Tracking. Month 4-6: Channel Scaling. Month 7-12: AI Automation Integration.",
         ROI: "Estimated 300% growth in qualified leads.",
         Tiers: ["Silver ($1.5k)", "Gold ($3.5k)", "Platinum ($7.5k)"]
       };
    }

    const prompt = `
    Generate a comprehensive 12-month digital growth proposal for a business.
    Business Name: ${businessData.name}
    Industry: ${businessData.industry}
    Goals: ${businessData.goals}

    Include:
    1. Executive Summary
    2. SWOT Analysis for their digital presence
    3. Roadmap (Months 1-3, 4-6, 7-12)
    4. Recommended Tech Stack
    5. Estimated ROI
    6. Pricing Tiers (Silver, Gold, Platinum)

    Return as structured JSON.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error("Proposal Generation Error:", error);
    return null;
  }
};
