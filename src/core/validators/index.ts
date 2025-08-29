import { query } from 'express-validator';
import { OrderDir } from '@/core/coreTypes';
import { ORDER_DIR_ASC, ORDER_DIR_DESC } from '@/core/config';

export const orderDirValidator = [
  query('orderDir').optional().custom((value: string) => {
    return [ORDER_DIR_ASC, ORDER_DIR_DESC].includes(value as OrderDir);
  }),
];