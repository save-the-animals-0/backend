const express = require("express");
const router = express.Router();
const fs = require("fs");

const upload = require("../multer/storage");

const Image = require("../models/images");

router.delete("/uploads/:id", (req, res) => {
  let query = { image: req.params.id };

  Image.remove(query, err => {
    if (err) {
      console.log(err);
    } else {
      let $filePath = "./uploads/" + req.params.id;
      fs.unlinkSync($filePath, err => {
        if (err) {
          console.log("couldnt delete " + req.params.id + " image");
        }
      });

      res.send("The image was deleted...");
    }
  });
});

router.get("/uploads", (req, res, next) => {
  Image.find({}, (err, images) => {
    if (err) {
      console.log(err);
    } else {
      res.json({
        images
      });
    }
  });
});

router.post("/uploads", (req, res, next) => {
  upload(req, res, function(err) {
    if (req.file == null || req.file == undefined || req.file == "") {
      res.redirect("/");
    } else {
      if (err) {
        console.log(err);
      } else {
        console.log(req.file);

        let image = new Image();
        image.image = req.file.filename;

        image.save(() => {
          if (err) {
            console.log(err);

            res.redirect("/uploads");
          }
        });
      }
    }
  });
});

module.exports = router;
