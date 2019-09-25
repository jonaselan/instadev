const express = require('express');
const PostController = require('./controllers/PostController')
const multer = require('multer');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

const PREFIX = '/api/v1';
// every function the receive req and res as a parameter
// MIDDLEWARE
routes.post(`${PREFIX}/posts`, upload.single('image'), PostController.store);
routes.get(`${PREFIX}/posts`, PostController.index);

module.exports = routes;