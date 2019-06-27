let mongoose = require("mongoose");

let imagesSchema = mongoose.Schema({
  image: {
    type: String,
    required: true
  }
});

imagesSchema.set("toJSON", { virtuals: true });

let Image = (module.exports = mongoose.model("Image", imagesSchema));
