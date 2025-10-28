import { Core } from 'core-types';

interface CoreConfig {
  orderDir: { 
    asc: Core.QueryParamsOrderDir; 
    desc: Core.QueryParamsOrderDir; 
  };
}

const config: CoreConfig = {
  orderDir: {
    asc: 'ASC',
    desc: 'DESC'
  }
}

export default config;