const routes = require('express').Router();
const multer = require('multer');
// configure upload
const uploadConfig = require('./config/upload');
const upload = multer(uploadConfig);
// controllers
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const PREFIX = '/api/v1';

routes.post(`${PREFIX}/signin`, AuthController.signin);
routes.post(`${PREFIX}/signup`, AuthController.signup);

const authMiddleware = require("./middlewares/auth");
routes.use(authMiddleware);

routes.get(`${PREFIX}/users`, UserController.index);
routes.get(`${PREFIX}/users/:userId`, UserController.show);

routes.post(`${PREFIX}/posts`, upload.single('image'), PostController.store);
routes.get(`${PREFIX}/posts`, PostController.index);

routes.post(`${PREFIX}/posts/:likeId/like`, LikeController.store);

module.exports = routes;