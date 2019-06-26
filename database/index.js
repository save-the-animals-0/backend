require("dotenv").config();

const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

// const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASS}@save-the-animals-dzt5e.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
// const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-a4whc.mongodb.net/test?retryWrites=true&w=majority`
const mongoURI = `mongodb://heroku_4f8pzv62:m9g4gbjugni5o3aftbajcnqs2f@ds243607.mlab.com:43607/heroku_4f8pzv62`

mongoose.connect(
  mongoURI,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  },
  err => console.log(err || "Connected to mongoDB")
);

mongoose.Promise = global.Promise;
