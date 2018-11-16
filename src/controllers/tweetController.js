const Tweet = require('../models/tweet');

module.exports = {
  async index(req, res) {
    const tweet = await Tweet.find({}).sort('-createdAt');
    return res.json(tweet);
  },
  async store(req, res) {
    const tweet = await Tweet.create(req.body);
    return res.json(tweet);
  },
};
