const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const organizationsSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  hash: { type: String, required: true },
  organizationName: { type: String, unique: false, required: true }
});

organizationsSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Organizations", organizationsSchema);
