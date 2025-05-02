import 'module-alias/register';
import fs from 'node:fs';
import path from 'node:path'
import mongoose, { Types } from 'mongoose';
import { parse } from "csv-parse";
import env from '../src/environment';
import { NutritionItem } from '../src/nutrition/models/NutritionItem';
import { ItemService } from '../src/nutrition/services/ItemService';



/**
 * Settings
 */

const CSV_DATA_DIR = path.resolve(__dirname,'../data/');
let items: any[] = [];

/**
 * Main
 */

function main() {
  if(!env.MONGODB_URL) {
    throw new Error('Mongo URL Unavailable');
  }

  items = [];
  const csvFileName = 'Nutritional-Facts-ITEMS.csv';
  const csvFilePath = getFilePath(csvFileName);
  readFile(csvFilePath, parseRow, migrate);
}
main();


async function migrate() {
  let promises: Promise<any>[] = [];

  try {
    await mongoose.connect(env.MONGODB_URL);
    console.log('Mongo connected');
    promises = items.map(item => ItemService.createItem(item));
    console.log('Executing promises...');
    Promise.all(promises).then(() => {
      console.log('Finish executing promises');
      process.exit();
    })
  } catch(err) {
    console.error(err);
    process.exit();
  }
}

function parseRow(row: any) {
  const category: Types.ObjectId = new Types.ObjectId(row[2] as string);
  const model: NutritionItem = {
    title: row[0],
    description: row[1],
    category,
    brand: row[3],
    presentation: row[4],
    fact: {
      calories: parseNumCol(row[5]),
      totalFat: parseNumCol(row[6]),
      saturatedFats: parseNumCol(row[7]),
      transFat: parseNumCol(row[8]),
      polyUnsaturatedFats: parseNumCol(row[9]),
      monoUnsaturatedFats: parseNumCol(row[10]),
      cholesterol: parseNumCol(row[11]),
      sodium: parseNumCol(row[12]),
      totalCarbohydrates: parseNumCol(row[13]),
      dietaryFiber: parseNumCol(row[14]),
      sugar: parseNumCol(row[15]),
      protein: parseNumCol(row[16]),
      vitaminD: parseNumCol(row[17]),
      calcium: parseNumCol(row[18]),
      iron: parseNumCol(row[19]),
      potassium: parseNumCol(row[20])
    }
  };
  items.push(model);
}


function parseNumCol(val) {
  if(!val) return null;
  return parseFloat(val);
}

function getFilePath(fileName) {
  return path.join(CSV_DATA_DIR, fileName);
}

function readFile(filePath, cb, endCb) {
  fs.createReadStream(filePath)
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on('data', row => {
      cb(row);
    })
    .on('end', () => {
      console.log('Read file finished.');
      endCb();
    })
    .on('error', error => {
      console.log(error.message);
    });
}