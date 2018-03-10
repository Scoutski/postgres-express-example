require('dotenv').config();

const test = require('ava');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('supertest');
const Sequelize = require('sequelize');

const app = require('../../src');
app.use(bodyParser.json());
// const app = express();
const Todo = require('../../src/models/todo');

const port = process.env.TEST_PORT;

// const agent = request.agent(app)

// test.before(async () => {
//   await Sequelize.sync({ force: true });
// })

test('GET /todo', async t => {
  t.plan(2);
  t.log(1);
  // const todo = await Todo.create({ label: 'testyBoi' });
  t.log('*****************')
  // t.log('todo.toJSON():', todo.toJSON())
  // const url = `http://localhost:${port}/todo`;
  // t.log(url);
  const res = await request(app).get('/todo');

  t.log(2);
  t.log('res.status', res.status);
  t.is(res.status, 200);
  t.log('res.body.errors', res.body.errors)
  t.falsy(res.body.errors);
});
