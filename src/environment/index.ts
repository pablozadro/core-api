import dotenv from 'dotenv';

interface CoreApiEnv {
  PORT: string;
  MONGODB_URL: string;
  AUTH_PASSWORD_PEPPER: string;
  AUTH_JWT_SIGN_SECRET: string;
}

const env = dotenv.config().parsed;

const environment: CoreApiEnv = {
  PORT: env?.PORT || '5000',
  MONGODB_URL: env?.MONGODB_URL || '',
  AUTH_PASSWORD_PEPPER: env?.AUTH_PASSWORD_PEPPER || '',
  AUTH_JWT_SIGN_SECRET: env?.AUTH_JWT_SIGN_SECRET || '',
}

export default environment;
