const express = require("express");
const router = express.Router();
const organizationsService = require("./organizations.service");

router.post("/authenticate", authenticate);
router.post("/register", register);
router.get("/", getAll);
router.get("/current", getCurrent);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function authenticate(req, res, next) {
  organizationsService
    .authenticate(req.body)
    .then(organizations =>
      organizations
        ? res.json(organizations)
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch(err => next(err));
}

function register(req, res, next) {
  organizationsService
    .create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  organizationsService
    .getAll()
    .then(organizations => res.json(organizations))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  organizationsService
    .getById(req.organizations.sub)
    .then(organizations =>
      organizations ? res.json(organizations) : res.sendStatus(404)
    )
    .catch(err => next(err));
}

function getById(req, res, next) {
  organizationsService
    .getById(req.params.id)
    .then(organizations =>
      organizations ? res.json(organizations) : res.sendStatus(404)
    )
    .catch(err => next(err));
}

function update(req, res, next) {
  organizationsService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  organizationsService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
