import Blog from '../models/blogModel.js'
import User from '../models/userModel.js'


export const createBlog = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    const blog = new Blog({
      ...req.body,
      author: user.name,
      userId: user._id,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating blog" });
  }
};

 
export const getBlogs = async (req, res) => {
  try {
    const { category, author } = req.query;
    let filter = {};

    if (category) filter.category = category;

    if (author) {
      // Find user by name
      const user = await User.findOne({ name: { $regex: new RegExp(`^${author}$`, 'i') } });
      if (!user) {
        return res.status(404).json({ message: "Author not found" });
      }
      filter.userId = user._id;
    }

    const blogs = await Blog.find(filter).populate('userId', 'email name _id');
    res.json(blogs);
  } catch (err) {
    console.error("Error fetching blogs:", err);
    res.status(500).json({ message: "Error fetching blogs" });
  }
};


export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.userId.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    Object.assign(blog, req.body, { updatedAt: new Date() });
    await blog.save();
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating blog" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.userId.toString() !== req.user.userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    await blog.deleteOne();
    res.json({ message: "Blog deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting blog" });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

