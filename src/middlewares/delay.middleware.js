const debug = require('debug')('core-api:middleares:delay');

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = (req, res, next) => {
  const delay = getRandom(250, 1250);
  debug(`Delay ${delay} ms`)
  setTimeout(() => next(), delay);
};