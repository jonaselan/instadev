const Post = require('../models/Post');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt');

    return res.json(posts);
  },

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    // return res.json(req.file);
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70})
      .toFile(
        path.resolve(req.file.destination, 'resized', image)
      )
    // delete original image
    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      author, place, description, hashtags, image,
    });

    return res.json(post);
  },
}