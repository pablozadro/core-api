import dotenv from 'dotenv';

interface LiteApiEnv {
  PORT: string;
  MONGODB_URL: string;
}

const env = dotenv.config().parsed;

const environment: LiteApiEnv = {
  PORT: env?.PORT || '5000',
  MONGODB_URL: env?.MONGODB_URL || ''
}

export default environment;
