const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');


const routes = new express.Router();
const upload = multer(uploadConfig);

const PREFIX = '/api/v1';
// every function the receive req and res as a parameter
// MIDDLEWARE
routes.post(`${PREFIX}/posts`, upload.single('image'), PostController.store);
routes.get(`${PREFIX}/posts`, PostController.index);

routes.post(`${PREFIX}/posts/:id/like`, LikeController.store);

module.exports = routes;