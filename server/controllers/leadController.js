import Lead from '../models/Lead.js';
import { sendNotification } from '../utils/notify.js';
import { analyzeLead } from '../utils/ai.js';
import { sendWhatsAppMessage } from '../utils/whatsapp.js';
import { verifyEmail, verifyPhone } from '../utils/verifier.js';

// @desc    Create new lead
// @route   POST /api/leads
// @access  Public
export const createLead = async (req, res) => {
  try {
    const { name, phone, email, businessType, instagramId, message } = req.body;

    // 1. Advanced Lead Verification
    const emailCheck = await verifyEmail(email);
    if (!emailCheck.valid) {
      return res.status(400).json({ success: false, message: `Email Verification Failed: ${emailCheck.reason}` });
    }

    const phoneCheck = await verifyPhone(phone);
    if (!phoneCheck.valid) {
      return res.status(400).json({ success: false, message: `Phone Verification Failed: ${phoneCheck.reason}` });
    }

    const lead = await Lead.create({
      name,
      phone,
      email,
      businessType,
      instagramId,
      message,
      status: 'new',
      notes: `Verified: Email(${emailCheck.reason}), Phone(${phoneCheck.reason || 'OK'})`
    });

    // 1. Send Admin Email Notification (async)
    sendNotification(lead);

    // 2. Perform AI Analysis (async)
    const runAutomation = async () => {
      const aiResult = await analyzeLead(lead);
      
      if (aiResult) {
        lead.aiScore = aiResult.score;
        lead.aiResponse = aiResult.whatsappMessage;
        lead.aiStrategy = aiResult.strategy;
        lead.aiIdeas = aiResult.aiIdeas;
        lead.suggestedAction = aiResult.suggestedAction;
        lead.fullAiAnalysis = aiResult.strategy; // Use strategy as full analysis for now
        await lead.save();

        // 3. Send WhatsApp Auto-reply (instantly with AI message or fallback)
        const defaultMessage = `Hi ${lead.name}, thanks for reaching Bizzybee Technology 🚀 Let's discuss how we can grow your business!`;
        await sendWhatsAppMessage(lead.phone, aiResult.whatsappMessage || defaultMessage);
      } else {
        // Fallback WhatsApp if AI fails or key is missing
        await sendWhatsAppMessage(lead.phone, `Hi ${lead.name}, thanks for reaching Bizzybee Technology 🚀 Let's discuss how we can grow your business!`);
      }
    };

    runAutomation();

    res.status(201).json({ success: true, lead });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid lead data', error: error.message });
  }
};

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private
export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find({}).sort({ createdAt: -1 });
    res.json({ success: true, leads });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Update lead
// @route   PUT /api/leads/:id
// @access  Private
export const updateLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (lead) {
      lead.status = req.body.status || lead.status;
      lead.notes = req.body.notes !== undefined ? req.body.notes : lead.notes;

      const updatedLead = await lead.save();
      res.json({ success: true, lead: updatedLead });
    } else {
      res.status(404).json({ success: false, message: 'Lead not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Private
export const deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);

    if (lead) {
      await lead.deleteOne();
      res.json({ success: true, message: 'Lead removed' });
    } else {
      res.status(404).json({ success: false, message: 'Lead not found' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
