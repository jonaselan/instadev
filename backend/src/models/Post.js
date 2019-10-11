const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
  place: String,
  description: String,
  image: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    default: [],
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);
