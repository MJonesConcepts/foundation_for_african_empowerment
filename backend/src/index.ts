import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';
import newsRouter from './routes/news';
import newsletterRouter from './routes/newsletter';
import contactRouter from './routes/contact';

const app = express();

// ── Security & middleware ────────────────────────────────────────
app.use(helmet());
app.use(cors({ origin: config.allowedOrigins, credentials: true }));
app.use(express.json());
app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));

// ── Health check ─────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', env: config.nodeEnv });
});

// ── API routes ───────────────────────────────────────────────────
app.use('/api/news', newsRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/contact', contactRouter);

// ── 404 handler ──────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ── Global error handler ─────────────────────────────────────────
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error' });
});

// ── Start ────────────────────────────────────────────────────────
app.listen(config.port, () => {
  console.log(`🚀 API server running on http://localhost:${config.port}`);
});

export default app;
