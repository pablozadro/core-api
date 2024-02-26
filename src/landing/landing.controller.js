function Landing(req, res, next) {
  res.json({
    message: 'Welcome Core-API',
    payload: {},
    error: null,
  });
}

module.exports = {
  Landing
}