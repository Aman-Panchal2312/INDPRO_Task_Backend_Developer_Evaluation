const Post = require('../models/post');
const Comment = require('../models/comment');

//===================== create a new blog post ===================
exports.createPost = async (req, res) => {
  try {
    const { title, content, author_id } = req.body;
    const newPost = await Post.create({ title, content, author_id });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ======================== add a comment to a post =====================
exports.addCommentToPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { author_id, content } = req.body;
    const post = await Post.findByPk(id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    const newComment = await Comment.create({ post_id: id, author_id, content });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ======================= fetch all comments for a given post ===================
exports.getCommentsForPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id, {
      include: [{ model: Comment }]
    });
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ post_id: id, comments: post.Comments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
