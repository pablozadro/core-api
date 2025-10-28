interface AuthConfig {
  passwordMinLen: number;
  passwordMaxLen: number;
  passwordExpires: string;
}

const config: AuthConfig = {
  passwordMinLen: 6,
  passwordMaxLen: 12,
  passwordExpires: '7d'
}

export default config;