module.exports = function auth(req, res, next) {
  const regex = /^[a-z0-9]{12}$/gmi;
  const { token } = req.headers;

  if (!regex.test(token)) {
    return res.status(401).json({ message: "invalid token" });
  };

  next();
};
