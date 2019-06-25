require("dotenv").config();

const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASS}@save-the-animals-dzt5e.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(
  mongoURI,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  },
  err => console.log(err || "Connected to mongoDB")
);

mongoose.Promise = global.Promise;
