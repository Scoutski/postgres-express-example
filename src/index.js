// environment variables in .env
require('dotenv').config();

// package requirements
const express = require('express');
const bodyParser = require('body-parser');

// relative requirements
const todoRouter = require('./routes/todo');

const app = express();

// parse incoming JSON requests
app.use(bodyParser.json());

// This route is used to confirm that your server
// is running and the API responds correctly.
const healthHandler = (req, res) => {
  res.send('OK');
};

app.get('/health', healthHandler);
app.use('/todo', todoRouter);

module.exports = {
  healthHandler,
  app
};
