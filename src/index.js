const express = require('express');

const app = express();

// every function the receive req and res as a parameter
// MIDDLEWARE
app.get('/', (req, res) => {
  return res.send('sim');
});

app.listen(8000)