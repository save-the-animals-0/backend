const express = require("express");
const router = express.Router();
const campaignsService = require("./campaigns.service");

// router.post();
// router.post();
router.get("/", getAll);
router.get("/current", getCurrent);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function getAll(req, res, next) {
  campaignsService
    .getAll()
    .then(campaign => res.json(campaign))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  campaignsService
    .getById(req.campaign.sub)
    .then(user => (campaign ? res.json(campaign) : res.sendStatus(404)))
    .catch(err => next(err));
}

function getById(req, res, next) {
  campaignsService
    .getById(req.params.id)
    .then(user => (campaign ? res.json(campaign) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  campaignsService
    .update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  campaignsService
    .delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
