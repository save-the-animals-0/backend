import mongoose from 'mongoose';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const userSchema = new Schema({
  name: {
    type: String,
    unique: false,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    unique: false,
    required: true
  }
});
