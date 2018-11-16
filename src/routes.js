const express = require('express');
const TweetController = require('./controllers/tweetController.js');
const LikeController = require('./controllers/likesController');

const routes = express.Router();

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.put('/likes/:id', LikeController.store);

routes.get('/', (req, res) => res.send('Wellcome to Tweeter API'));

module.exports = routes;
