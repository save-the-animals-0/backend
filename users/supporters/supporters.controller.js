const express = require("express");
const router = express.Router();
const supportersService = require("./supporters.service");

router.post("/authenticate", authenticate);
router.post("/register", register);
router.get("/", getAll);
router.get("/current", getCurrent);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function authenticate(req, res, next) {
  supportersService
    .authenticate(req.body)
    .then(supporters =>
      supporters
        ? res.json(supporters)
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch(err => next(err));
}

function register(req, res, next) {
  supportersService
    .create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  supportersService
    .getAll()
    .then(supporters => res.json(supporters))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  supportersService
    .getById(req.supporters.sub)
    .then(supporters => (supporters ? res.json(supporters) : res.sendStatus(404)))
    .catch(err => next(err));
}

function getById(req, res, next) {
  supportersService
    .getById(req.params.id)
    .then(supporters => (supporters ? res.json(supporters) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  supportersService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  supportersService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
