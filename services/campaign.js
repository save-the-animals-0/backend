const Campaigns = require("../models/campaign");

const getAll = async () => await Campaigns.find();

const getById = async id => await Campaigns.findById(id);

const create = async campaign => {

  campaign.deadline = new Date(campaign.deadline);

  const newCampaign = new Campaigns(campaign);

  return newCampaign.save();
};

const update = async (campaign, data) => {
  return await Campaigns.findByIdAndUpdate(campaign, data, {
    useFindAndModify: false,
    new: true
  });
};

const _delete = async id => await Campaigns.findOneAndDelete(id);

module.exports = {
  getAll,
  getById,
  create,
  update,
  _delete
};
