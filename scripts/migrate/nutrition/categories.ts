import 'module-alias/register';
import path from 'node:path';
import debug from 'debug';
import mongoose from 'mongoose';
import environment from '@/environment';
import { readFile } from '@scripts/migrate/core/csv';
import { MigrateOptions } from '@scripts/migrate/core/types';

import { CategoryService, CreateCategoryBody } from '@/nutrition/services';


const log = debug('scripts:migrate:nutrition:categories');

async function main({ filePath }: MigrateOptions) {
  const { rows, error } = await readFile({ filePath });
  if(error) return;
  if(!rows || !rows.length) return;

  try {
    log('Migrating nutrition categories...');
    await mongoose.connect(environment.MONGODB_URL);
    log('Mongo connect');
    await CategoryService.deleteAllCategories();
    const data: CreateCategoryBody[] = rows.map((row: any) => ({
      title: row[0]
    }));
    const result = await CategoryService.createCategories(data);
    log(`${result.length} categories migrated`);
    process.exit();
  } catch(err) {
    log('Error connecting Mongo');
    log(err);
  }
}

main({
  filePath: path.resolve(__dirname, 'nutrition-categories.csv')
});