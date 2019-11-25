// DEPENDENCIES
const express = require("express");
const router = express.Router();

// WEB TOKEN DEPENDENCIES
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Auth Middleware
const auth = require("./authMiddleware.js");

// MODEL IMPORTS
const authModel = require("./authModel.js");

// WEB TOKEN FILE IMPORTS
const generateToken = require("./generateToken");

// ROUTES

// REGISTER
router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  authModel
    .add(user)
    .then(userData => {
      const regToken = generateToken(userData);
      console.log("userData:", userData);
      res.status(201).json({
        user: userData[0],
        token: regToken
      });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  authModel
    .findBy({ email })
    .first()
    .then(user => {
      console.log(user);
      const userId = user.id;
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ name: user.name, token, userId });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET ALL USERS
router.get("/", auth, (req, res) => {
  return authModel
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET USER BY USERID
router.get("/:id", auth, (req, res) => {
  const { id } = req.params;
  return authModel
    .findBy({ id })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
