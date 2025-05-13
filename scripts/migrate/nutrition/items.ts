import 'module-alias/register';
import path from 'node:path';
import debug from 'debug';
import mongoose from 'mongoose';
import environment from '@/environment';
import { readFile } from '@scripts/migrate/core/csv';
import { MigrateOptions } from '@scripts/migrate/core/types';

import { ItemService, CreateItemBody } from '@/nutrition/services';


const log = debug('scripts:migrate:nutrition:items');

async function main({ filePath }: MigrateOptions) {
  const { rows, error } = await readFile({ filePath });
  if(error) return;
  if(!rows || !rows.length) return;

  try {
    log('Migrating nutrition items...');
    await mongoose.connect(environment.MONGODB_URL);
    log('Mongo connect');
    await ItemService.deleteAllItems();
    const data: CreateItemBody[] = rows.map((row: any) => ({
      title: row[0],
      category: row[1],
      calories: row[2],
      proteins: row[3],
    }));
    const result = await ItemService.createItems(data);
    log(`${result.length} items migrated`);
    process.exit();
  } catch(err) {
    log('Error connecting Mongo');
    log(err);
  }
}

main({
  filePath: path.resolve(__dirname, 'items.csv')
});