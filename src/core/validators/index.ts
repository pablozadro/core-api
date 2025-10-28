import { query, param } from 'express-validator';
import { Core } from 'core-types';
import coreConfig from '@/core/config';

export const orderDir = [
  query('orderDir').optional().custom((value: string) => {
    return [
      coreConfig.orderDir.asc, 
      coreConfig.orderDir.desc
    ].includes(value as Core.QueryParamsOrderDir);
  }),
];

export const id = [
  param('id').isMongoId()
]

export const userId = [
  param('userId').isMongoId()
]