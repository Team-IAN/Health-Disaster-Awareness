const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.post("/postArticle", (req, res) => {
  console.log(req.body);
  Article.create(req.body)
    .then(datares => res.json(datares))
    .catch(err => console.log(err));

  //   Recipe.insertMany(data)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
});

module.exports = router;
