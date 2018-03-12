// Note that files that start with _
// are ignored by AVA.
require('dotenv').config();

const bodyParser = require('body-parser');
const express = require('express');

const { healthHandler } = require('../src/index');
const todoRouter = require('../src/routes/todo');

// Following the endpoint recipe found here:
// https://github.com/avajs/ava/blob/master/docs/recipes/endpoint-testing.md
function makeApp() {
  const app = express();
  app.use(bodyParser.json());
  app.use('/health', healthHandler);
  app.use('/todo', todoRouter);

  return app;
}

module.exports = {
  makeApp
};
