const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  hash: { type: String, required: true },
  fullName: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
  }
});



userSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("User", userSchema);
