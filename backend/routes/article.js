const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.post("/postArticle",isAuth, (req, res) => {
  console.log(req.body, req.user);
  let article = req.body
  //article.email = req.user.email
  article.userName = req.user.userName
  Article.create(article)
    .then(datares => res.json(datares))
    .catch(err => console.log(err));

  //   Recipe.insertMany(data)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

module.exports = router;
