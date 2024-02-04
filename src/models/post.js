const { Schema, models, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: String,
    content: String,
    author: String,
    //image: String,
    youtube: String,
  },
  {
    timestamps: true,
  }
);

const postModel = models.post || model("post", PostSchema);

export default postModel;
