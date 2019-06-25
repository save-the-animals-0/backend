const config = require("config.json");
const mongoose = require("mongoose");

let mongoDB =
  "mongodb+srv://Cthaeh:MBA4S1@save-the-animals-dzt5e.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {
  useCreateIndex: true,
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

module.exports = {
  User: require("../users/supporters/supporters.model")
};
