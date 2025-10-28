import dotenv from 'dotenv';
import { Core } from 'core-types';
import development from './development';
import qa from './qa';
import production from './production';


const env = process.env.NODE_ENV || 'development';

const parsed: any = dotenv.config().parsed;
const envParsed: Core.ApiEnvironmentParsed = {
  PORT: parsed.PORT || '',
  MONGODB_URL: parsed.MONGODB_URL || '',
  AUTH_PASSWORD_PEPPER: parsed.AUTH_PASSWORD_PEPPER || '',
  AUTH_JWT_SIGN_SECRET: parsed.AUTH_JWT_SIGN_SECRET || '',
}

const configs: Record<Core.ApiEnvironment, Core.ApiEnvironmentConfig> = {
  development,
  qa,
  production
}

const config: Core.ApiEnvironmentConfig = configs[env as Core.ApiEnvironment];


export default {
  ...envParsed,
  ...config
};
