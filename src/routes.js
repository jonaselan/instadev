const express = require('express');

const routes = new express.Router();

// every function the receive req and res as a parameter
// MIDDLEWARE
routes.get('/', (req, res) => {
  return res.send('sim');
});

module.exports = routes;