const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.find().populate('posts').sort('-createdAt');

    res.status(200).json(users);
  },

  async show(req, res) {
    const { userId } = req.params;

    const user = await User.findById(userId).select('-password').populate('posts');

    res.status(200).json(user);
  },

}