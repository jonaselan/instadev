const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(require('./routes'));

app.listen(8000)