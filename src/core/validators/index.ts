import { query, param } from 'express-validator';
import { OrderDir } from '@/core/coreTypes';
import { ORDER_DIR_ASC, ORDER_DIR_DESC } from '@/core/config';

export const orderDir = [
  query('orderDir').optional().custom((value: string) => {
    return [ORDER_DIR_ASC, ORDER_DIR_DESC].includes(value as OrderDir);
  }),
];

export const id = [
  param('id').isMongoId()
]

export const userId = [
  param('userId').isMongoId()
]