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
          $addToSet: { favorites: foundArticle._id }
        },
        { new: true }
      ).then(user => {
        res.status(200).json(user);
      });
    } else
      Article.create(article)
        .then(createArticle => {
          User.findByIdAndUpdate(req.user._id, {
            $addToSet: { favorites: createArticle._id }
          }).then(user => {
            res.status(200).json(user);
          });
        })
        .catch(err => console.log(err));
  });
});

router.get("/findLikedArticles", isAuth, (req, res, next) => {
  let likedArticles = req.user.favorites
  console.log(likedArticles)
  Article.find({userName: req.user.userName})
  .then(datares => res.json(datares))
  .catch(err => console.log(err));
})

router.get('/getAllArticles', (req, res, next) => {
  Article.find()
  .then(allArticles => res.json({allArticles}))
  .catch(err => console.log(err));
})

function isAuth(req, res, next) {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
}

module.exports = router;
