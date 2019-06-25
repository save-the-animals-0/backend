require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("_helpers/errors");

require("./database");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/users", require("./controllers/user"));
app.use("/campaigns", require("./controllers/campaign"));
app.use(errorHandler);

const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 8000;
const server = app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
