import { Router } from 'express';
import { subscribe, unsubscribe } from '../controllers/newsletterController';

const router = Router();

// POST   /api/newsletter/subscribe
router.post('/subscribe', subscribe);

// DELETE /api/newsletter/unsubscribe
router.delete('/unsubscribe', unsubscribe);

export default router;
