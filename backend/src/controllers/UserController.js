const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.find().populate('posts').sort('-createdAt');

    return res.status(200).json(users);
  },

  async show(req, res) {
    const { userId } = req.params;

    const user = await User.findById(userId).select('-password').populate('posts');

    res.status(200).json(user);
  },

  async store(req, res) {
    const { name, email, password, gender, phone, birthday, posts } = req.body;

    const user = await User.create({
      name, email, password, gender, phone, birthday, posts
    });

    res.status(201).json(user);
  },
}