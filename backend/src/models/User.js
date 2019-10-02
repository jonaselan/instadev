const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female']
  },
  phone: String,
  birthday: Date,
  posts:[{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);