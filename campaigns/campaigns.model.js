const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const campaignsSchema = new Schema({
  campaignName: { type: String, unique: true, required: true },
  fundingGoal: { type: Number, unique: false, required: true },
  deadline: { type: Date, unique: false, required: true },
  description: { type: String, unique: false, required: true }
});

campaignsSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("User", campaignsSchema);
