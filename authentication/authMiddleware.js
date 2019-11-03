// WEB TOKEN DEPENDENCIES
const jwt = require("jsonwebtoken");

module.exports = function authMiddleware(req, res, next) {
  const token = req.headers.auth;

  if (token) {
    jwt.verify(token, "secret", (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        req.user = { email: decodedToken.email };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "No Credentials Provided" });
  }
};
