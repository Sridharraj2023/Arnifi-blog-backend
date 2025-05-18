import express from 'express';
import {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
  getBlogById
} from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.post("/", createBlog);
blogRouter.get("/", getBlogs);
blogRouter.put("/:id", updateBlog);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get('/:id', getBlogById);

export default blogRouter;
