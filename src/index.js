const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const socket = require('socket.io');
const { Server } = require('http');

const routes = require('./routes');

const app = express();
const server = Server(app);
const io = socket(server);

app.use(morgan('dev'));
mongoose.connect(
  'mongodb://goweek:goweek123@ds035617.mlab.com:35617/goweek-twitter',
  {
    useNewUrlParser: true,
  },
);

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);

const PORT = 3000;
server.listen(PORT, () => console.log('Server start on port: ', PORT));
