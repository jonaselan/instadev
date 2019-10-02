const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const UserController = require('./controllers/UserController');

const routes = new express.Router();
const upload = multer(uploadConfig);

const PREFIX = '/api/v1';

routes.post(`${PREFIX}/users`, UserController.store);
routes.get(`${PREFIX}/users`, UserController.index);
routes.get(`${PREFIX}/users/:userId`, UserController.show);

routes.post(`${PREFIX}/posts`, upload.single('image'), PostController.store);
routes.get(`${PREFIX}/posts`, PostController.index);

routes.post(`${PREFIX}/posts/:likeId/like`, LikeController.store);

module.exports = routes;