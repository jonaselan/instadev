const Post = require('../models/Post');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

module.exports = {
  async index(req, res) {
    const posts = await Post.find().sort('-createdAt');

    return res.status(200).json(posts);
  },

  async store(req, res) {
    const { author, place, description } = req.body;
    const { filename: image } = req.file;

    const [name] = image.split('.');
    const fileName = `${name}.jpg`;

    // return res.json(req.file);
    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70})
      .toFile(
        path.resolve(req.file.destination, 'resized', fileName)
      )
    // delete original image
    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      author,
      place,
      description,
      image: fileName,
    });

    req.io.emit('post', post);

    return res.status(201).json(post);
  },
}