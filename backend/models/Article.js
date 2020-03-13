const { Schema, model } = require("mongoose");

const articleSchema = new Schema(
  {
    title: String,
    email: String,
    author: String,
    description: String,
    url: String,
    userName: String,
    urlToImage: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Article", articleSchema);
