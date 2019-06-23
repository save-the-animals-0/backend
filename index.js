const express = require("express");
const mongoose = require("mongoose");

const app = express();

//connect to mongoose
mongoose
  .connect("mongodb://localhost/savetheanimals", { useNewUrlParser: true })
  .then(() => console.log("mongoDB Connected ..."))
  .catch(err => console.log(err));
//

app.get("/", (req, res) => {
  res.send("API is running ~ :)");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
