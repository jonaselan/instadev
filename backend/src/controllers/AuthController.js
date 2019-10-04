const User = require('../models/User');

module.exports = {
  async signin(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: "Invalid password" });
      }

      return res.json({ user, token: user.generateToken() });

    } catch (err) {
      return res.status(400).json({ error: "User authentication failed" });
    }
  },

  async signup(req, res) {
    const { username, email, password, gender, phone, birthday, posts } = req.body;

    try {
      if (await User.findOne({ email })) {
        return res.status(400).json({ error: "User already exists" });
      }

      const user = await User.create({
        username, email, password, gender, phone, birthday, posts
      });

      return res.json({ user });
    } catch (err) {
      return res.status(400).json({ error: "User registration failed" });
    }
  },

}