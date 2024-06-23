const express = require('express');
const { createPost, addCommentToPost, getCommentsForPost } = require('../controllers/postController');

const router = express.Router();

router.post('/posts', createPost);
router.post('/posts/:id/comments', addCommentToPost);
router.get('/posts/:id/comments', getCommentsForPost);

module.exports = router;
