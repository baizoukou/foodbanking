const validateToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    req.token = token;
    return next();
  }
  return res.status(401).json({ message: 'No token provided' });
}

module.exports = validateToken;