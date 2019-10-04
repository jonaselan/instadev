const Post = require('../models/Post');

module.exports = {
  async store(req, res) {
    const post = await Post.findById(req.params.likeId);

    post.likes++;

    await post.save();

    req.io.emit('like', post);

    return res.status(201).json(post);
  }
}