import express from 'express';
import { voiceAIResponse, downloadProposal } from '../controllers/aiController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/voice', voiceAIResponse);
router.get('/proposal/:leadId', protect, downloadProposal);

export default router;
