import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  businessType: { type: String, required: true },
  instagramId: { type: String },
  message: { type: String },
  status: { 
    type: String, 
    enum: ['new', 'contacted', 'closed'], 
    default: 'new' 
  },
  aiScore: { type: String, enum: ['Hot', 'Warm', 'Cold', 'Unknown'], default: 'Unknown' },
  aiResponse: { type: String },
  aiStrategy: { type: String },
  aiIdeas: [{ type: String }],
  suggestedAction: { type: String },
  fullAiAnalysis: { type: String },
  notes: { type: String }
}, { timestamps: true });

export default mongoose.model('Lead', leadSchema);
