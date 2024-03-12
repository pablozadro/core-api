const fs = require('node:fs/promises');
const path = require('path');


const FILE_PATH = path.resolve(__dirname, './products.json')

const _cache = {
  products: null
}

async function getProducts() {
  try {
    const data = await fs.readFile(FILE_PATH, { encoding: 'utf8' });
    const parsed = JSON.parse(data);
    console.log('-> parsed', parsed);
    return parsed;
  } catch (err) {
    return null;
  }
}

module.exports = {
  getProducts
}