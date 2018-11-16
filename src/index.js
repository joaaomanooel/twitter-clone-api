const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();
app.use(morgan('dev'));

mongoose.connect(
  'mongodb://goweek:goweek123@ds035617.mlab.com:35617/goweek-twitter',
  {
    useNewUrlParser: true,
  },
);

app.use(express.json());
app.use('/api/v1', routes);

const PORT = 3000;
app.listen(PORT, () => console.log('Server start on port: ', PORT));
