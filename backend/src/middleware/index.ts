import type { Request, Response, NextFunction } from 'express';

/**
 * Attaches a unique request ID to each request for tracing.
 * Useful when you add a proper logger (Winston, Pino, etc.).
 */
export function requestId(req: Request, _res: Response, next: NextFunction): void {
  req.headers['x-request-id'] =
    req.headers['x-request-id'] ??
    `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  next();
}

/**
 * Typed async route wrapper — catches promise rejections and
 * forwards them to the Express error handler automatically.
 *
 * Usage:
 *   router.get('/path', asyncHandler(async (req, res) => { ... }));
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<void>
) {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
}
