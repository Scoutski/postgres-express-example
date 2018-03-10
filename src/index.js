// environment variables in .env
require('dotenv').config()

// package requirements
const express = require('express');
const bodyParser = require('body-parser');

// relative requirements
const todoRouter = require('./routes/todo');

const app = express();
const { NODE_ENV, PORT, TEST_PORT } = process.env;
const port = NODE_ENV === 'test' ? TEST_PORT : PORT;

// parse incoming JSON requests
app.use(bodyParser.json());

// This route is used to confirm that your server
// is running and the API responds correctly.
app.get('/health', (req, res) => {
  res.send('OK');
});

app.use('/todo', todoRouter);

app.listen(port, () => {
  console.log(`Server now running on port: ${port}`);
});

// exporting app for test usage
module.exports = app;
