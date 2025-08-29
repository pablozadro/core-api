import 'module-alias/register';
import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import debug from 'debug';
import csv from 'csv-parser';
import { Types } from 'mongoose';
import { NutritionItemRepository, CreateItemPayload } from '@/nutrition/repositories';
import env from '@/environment';

const log = debug('core-api:migrate:nutrition:items');

interface RowData {
  title: string;
  detail: string;
  group: string;
  category: string;
  calories?: string;
  totalFats?: string;
  saturatedFats?: string;
  cholesterol?: string;
  sodium?: string;
  carbohydrates?: string;
  fiber?: string;
  proteins?: string;
}

const FILEPATH = path.resolve(__dirname, './items.csv');

async function main() {
  log('Migrating CSV file...');
  log(FILEPATH);

  try {
    await connect(env.MONGODB_URL);

    fs.createReadStream(FILEPATH)
        .pipe(csv())
        .on('data', row => onRow(row))
        .on('end', () => {
          log('CSV file successfully processed');
        })
        .on('error', (err) => {
          throw err;
        });
  } catch(err) {
    log('Error', err);
  }
}

async function connect(url: string) {
  log('Connecting Mongo...');

  if(!url) {
    throw new Error('Error connecting Mongo: there is no MONGODB_URL');
  }

  await mongoose.connect(env.MONGODB_URL);
  log('Mongo connected');
}

async function onRow(row: RowData) {
  const payload: CreateItemPayload = {
    title: row.title,
    detail: row.detail,
    group: new Types.ObjectId(row.group),
    category: new Types.ObjectId(row.category),
    calories: row.calories ? parseFloat(row.calories) : undefined,
    totalFats: row.totalFats ? parseFloat(row.totalFats) : undefined,
    saturatedFats: row.saturatedFats ? parseFloat(row.saturatedFats) : undefined,
    cholesterol: row.cholesterol ? parseFloat(row.cholesterol) : undefined,
    sodium: row.sodium ? parseFloat(row.sodium) : undefined,
    carbohydrates: row.carbohydrates ? parseFloat(row.carbohydrates) : undefined,
    fiber: row.fiber ? parseFloat(row.fiber) : undefined,
    proteins: row.proteins ? parseFloat(row.proteins) : undefined,
  };
  log('Migrating item', payload.title);
  const result = await NutritionItemRepository.createItem(payload);
  log('Item Migrated', result._id);
}

main();