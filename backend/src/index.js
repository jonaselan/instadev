const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const path = require('path');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
)

app.use(require('./routes'));

app.listen(8000)