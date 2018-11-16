const Tweet = require('../models/tweet');

module.exports = {
  async store(req, res) {
    const tweet = await Tweet.findById(req.params.id);
    tweet.set({ likes: tweet.likes + 1 });
    await tweet.save();

    return res.json(tweet);
  },
};
