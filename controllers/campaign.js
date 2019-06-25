const express = require("express");
const router = express.Router();
const campaignService = require("../services/campaign");

// With verifications
router.get("/", getAll);
router.post("/", create);
router.get("/current", getCurrent);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", _delete);

module.exports = router;

function create(req, res, next) {
  campaignService
    .create(req.body)
    .then(createdCampaign => {
      if (createdCampaign) return res.json(createdCampaign);
      else
        return res.status(400).json({
          message: "Please enter valid credentials"
        });
    })
    .catch(err => next(err));
}

function getAll(req, res, next) {
  campaignService
    .getAll()
    .then(campaigns => res.json(campaigns))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  campaignService
    .getById(req.campaign.id)
    .then(campaign => (campaign ? res.json(campaign) : res.sendStatus(404)))
    .catch(err => next(err));
}

function getById(req, res, next) {
  campaignService
    .getById(req.params.id)
    .then(campaign => (campaign ? res.json(campaign) : res.sendStatus(404)))
    .catch(err => next(err));
}

function update(req, res, next) {
  campaignService
    .update(req.params.id, req.body)
    .then(updatedCampaign =>
      updatedCampaign ? res.json(updatedCampaign) : res.sendStatus(400)
    )
    .catch(err => next(err));
}

function _delete(req, res, next) {
  campaignService
    .delete(req.params.id)
    .then(deletedCampaign =>
      deletedCampaign ? res.json(deletedCampaign) : res.sendStatus(400)
    )
    .catch(err => next(err));
}
