const express = require("express");
const router = express.Router();
const userService = require("../services/user");
const token_verification = require("../helpers/token_verification");

// Without verifications
router.post("/auth", authenticate);
router.post("/register", register);

// With verifications
router.get("/organizations", token_verification, getAllOrgs);
router.get("/supporters", token_verification, getAllSupporters);
router.get("/current", token_verification, getCurrent);
router.get("/:id", token_verification, getById);
router.put("/:id", token_verification, update);
router.delete("/:id", token_verification, _delete);

module.exports = router;

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then(user => {
      if (user) return res.json(user);
      else
        return res.status(400).json({
          message: "Email or password is incorrect"
        });
    })
    .catch(err => next(err));
}

function register(req, res, next) {
  userService
    .create(req.body)
    .then(createdUser => {
      if (createdUser) return res.json(createdUser);
      else
        return res.status(400).json({
          message: "Please enter valid credentials"
        });
    })
    .catch(err => next(err));
}
 
function getAllOrgs(req, res, next) {
  userService
    .getAll(true)
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getAllSupporters(req, res, next) {
  userService
    .getAll(false)
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  userService
    .getById(req.user.id)
    .then(user => (user ? res.json(user) : res.sendStatus(404)))
    .catch(err => next(err));
}

function getById(req, res, next) {
  userService
    .getById(req.params.id)
    .then(user => (user ? res.json(user) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  userService
    .update(req.params.id, req.body)
    .then(updatedUser =>
      updatedUser ? res.json(updatedUser) : res.sendStatus(400)
    )
    .catch(err => next(err));
}

function _delete(req, res, next) {
  userService
    .delete(req.params.id)
    .then(deletedUser =>
      deletedUser ? res.json(deletedUser) : res.sendStatus(400)
    )
    .catch(err => next(err));
}
