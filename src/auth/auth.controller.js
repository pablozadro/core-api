const jwt = require('jsonwebtoken');
const config = require('@/config');

function Login(req, res , next) {
  const { email, password } = req.body;
  const secret = config.AUTH_SECRET_KEY;
  const options = { expiresIn: config.tokenExpiresIn };
  const payload = { email };
  const token = jwt.sign(payload, secret, options);

  return res.json({
    message: 'Login Successfully',
    payload: { token },
    error: null,
  });
}


module.exports = {
  Login
}