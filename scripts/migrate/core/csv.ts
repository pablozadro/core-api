import 'module-alias/register';
import fs from 'node:fs';
import path from 'node:path';
import debug from 'debug';
import { parse } from "csv-parse";



const log = debug('scripts:migrate:csv');

interface CsvReadfileOptions {
  filePath: string;
}

interface CsvReadfileResponse {
  rows: any[] | null;
  error: string | null;
}

export async function readFile({ filePath }:CsvReadfileOptions): Promise<CsvReadfileResponse> {
  const rows: any[] = [];
  const settings = {
    delimiter: ",", 
    from_line: 2
  }
  const fileName = path.basename(filePath);

  return new Promise((resolve,reject) => {
    fs.createReadStream(filePath)
      .pipe(parse(settings))
      .on('data', (row: any) => {
        rows.push(row);
      })
      .on('end', () => {
        log(`Finish reading ${fileName}`);
        log(`${rows.length} rows`);
        resolve({  rows, error: null });
      })
      .on('error', error => {
        log(`Error reading ${fileName}`);
        log(error);
        reject({ rows:null, error: error.message });
      });
  })
}