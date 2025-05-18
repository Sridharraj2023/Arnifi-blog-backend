import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String }, // keeps string for display name or email
  content: { type: String, required: true },
  image: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, //relational reference
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// No changes to model export
const blogModel = mongoose.models.blog || mongoose.model("blog", blogSchema);

export default blogModel;
