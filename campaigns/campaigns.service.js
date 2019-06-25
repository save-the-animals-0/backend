const config = require("config.json");
const db = require("_helpers/db");
const Campaigns = db.Campaigns;

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Campaigns.find();
}

async function getById(id) {
  return await Campaigns.findById(id);
}

//figure out if I need a "'new' function" inside of create//

async function create(campaignParam) {
  if (await Campaigns.findOne({ campaigns: campaignsParam.campaignsName })) {
    throw "Campaign name already exists";
  }
  await campaigns.save();
}
//
async function update(id, campaignParam) {
  const campaigns = await Campaigns.findById(id);

  if (!campaigns) throw "Campaign not found";
  if (
    campaigns.campaignName !== campaignsParam.campaignName &&
    (await Campaigns.findOne({ campaignName: campaignsParam.campaignName }))
  ) {
    throw "Campaign name is already in use";
  }

  Object.assign(campaigns, campaignsParam);

  await campaigns.save();
}

async function _delete(id) {
  await Campaigns.findByIdAndRemove(id);
}
