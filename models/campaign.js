const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  campaignName: { type: String, unique: true, required: true },
  fundingGoal: { type: Number, unique: false, required: true },
  deadline: { type: Date, unique: false, required: true },
  description: { type: String, unique: false, required: true }
});

campaignSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Campaigns", campaignSchema);
