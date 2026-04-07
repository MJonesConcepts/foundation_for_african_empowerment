import { Router } from 'express';
import { getNews, getNewsById } from '../controllers/newsController';

const router = Router();

// GET /api/news          — paginated list, optional ?category=&limit=&page=
router.get('/', getNews);

// GET /api/news/:id      — single article
router.get('/:id', getNewsById);

export default router;
