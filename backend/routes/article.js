const express = require("express");
const router = express.Router();
const Article = require("../models/Article");
const User = require("../models/User");

router.post("/postArticle", isAuth, (req, res) => {
  console.log(req.body, req.user);
  let article = req.body;
  //article.email = req.user.email
  article.userName = req.user.userName;
  Article.create(article)
    .then(datares => res.json(datares))
    .catch(err => console.log(err));

  //   Recipe.insertMany(data)
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
});

router.post("/likeArticle", isAuth, (req, res) => {
  console.log(req.body, req.user);
  let article = req.body;
  //article.email = req.user.email
  // article.userName = req.user.userName;
  Article.findOne({ url: article.url }).then(foundArticle => {
    if (foundArticle !== null) {
      User.findByIdAndUpdate(
        req.user._id,
        {
          $push: { favorites: foundArticle._id }
        },
        { new: true }
      ).then(user => {
        res.status(200).json(user);
      });
    } else
      Article.create(article)
        .then(createArticle => {
          User.findByIdAndUpdate(req.user._id, {
            $push: { favorites: createArticle._id }
          }).then(user => {
            res.status(200).json(user);
          });
        })
        .catch(err => console.log(err));
  });
});

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

module.exports = router;
