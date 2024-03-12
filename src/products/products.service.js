const fs = require('node:fs/promises');
const path = require('path');


const FILE_PATH = path.resolve(__dirname, './products.json')

const _cache = {
  products: null
}

async function getProducts() {
  if (_cache.products) return _cache.products;

  try {
    const data = await fs.readFile(FILE_PATH, { encoding: 'utf8' });
    const parsed = JSON.parse(data);
    _cache.products = parsed;
    return parsed;
  } catch (err) {
    _cache.products = null;
    return null;
  }
}

module.exports = {
  getProducts
}