import dotenv from 'dotenv';
dotenv.config();

const config = {
  port: parseInt(process.env.PORT ?? '4000', 10),
  nodeEnv: process.env.NODE_ENV ?? 'development',
  // Allowed origins for CORS — add your production domain here
  allowedOrigins: (process.env.ALLOWED_ORIGINS ?? 'http://localhost:3000').split(','),
};

export default config;
