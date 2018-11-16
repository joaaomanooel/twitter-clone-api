const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(
  'mongodb://goweek:goweek123@ds035617.mlab.com:35617/goweek-twitter',
  {
    useNewUrlParser: true,
  },
);

app.get('/', (req, res) => res.send('Hello World'));
const PORT = 3000;
app.listen(PORT, () => console.log('Server start on port: ', PORT));
