const ProductsService = require('./products.service');


async function GetAllProducts(req, res, next) {
  const products = await ProductsService.getProducts();

  res.json({
    message: 'Core-API Products',
    payload: { products },
    error: null,
  });
}


module.exports = {
  GetAllProducts
}