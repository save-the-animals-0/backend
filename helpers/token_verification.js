const Users = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

const token_verification = (req, res, next) => {
  try {
    const token = req.get("Authorization").split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, payload) => {
      if (payload) {
        Users.findById(payload.userId).then(doc => {
          req.user = doc;
          next();
        });
      } else {
        res.status(401).send({ message: "Unauthorized!" });
      }
    });
  } catch (err) {
    res.status(401).send({ message: "Unauthorized!" });
  }
};

module.exports = token_verification;
