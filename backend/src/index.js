const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
// allow the app use http or websocket
const io = require('socket.io')(server);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// create my own middleware
// now the 'io' variable will be available in
// the whole app
app.use((req, res, next) => {
  req.io = io;

  // continue with the execution
  next();
});

app.use(cors());

app.use(
  '/files',
  express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))
)

app.use(require('./routes'));

server.listen(8000)