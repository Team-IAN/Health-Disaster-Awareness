const { Schema, model } = require("mongoose");

const articleSchema = new Schema(
  {
    title: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Article", articleSchema);
