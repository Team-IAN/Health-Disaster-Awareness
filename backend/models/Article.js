const { Schema, model } = require("mongoose");

const articleSchema = new Schema(
  {
    title: String,
    email: String,
    author: String,
    description: String,
    url: String,


  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Article", articleSchema);
