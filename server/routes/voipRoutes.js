import express from 'express';
import { handleSignal, getCurrentTime } from '../controllers/voipController.js';

const router = express.Router();

router.post('/signal', handleSignal);
router.get('/time', getCurrentTime);

export default router;
