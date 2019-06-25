const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true, unique: false },
  isOrg: { type: Boolean, default: false, unique: false }
});

userSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Users", userSchema);
