require('dotenv').config();

// Need to figure out how to do the commonJS
// version of this. I tried:
// const test = require('ava').serial; but it
// did not work as I expected.
import { serial as test } from 'ava';
const uuid = require('uuid');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('supertest');
const Sequelize = require('sequelize');

const app = require('../../src');
app.use(bodyParser.json());
const { Todo } = require('../../src/models');
const todoController = require('../../src/controllers/todo');

// Integration tests below ==--------------------------------
test('GET /todo', async t => {
  t.plan(2);
  const res = await request(app).get('/todo');

  t.is(res.status, 200);
  t.is(res.body.errors, null);
});

test('GET /todo/:id', async t => {
  t.plan(3);

  const todo = await Todo.create({ label: 'testLabel' });
  t.not(todo, null);

  const res = await request(app).get(`/todo/${todo.id}`);

  t.is(res.status, 200);
  t.is(res.body.result.id, todo.id);
});

test('POST /todo', async t => {
  t.plan(2);

  const label = uuid.v4();
  const res = await request(app)
    .post('/todo')
    .send({ label });

  t.is(res.status, 201);
  t.is(res.body.result.label, label);
});

test('PATCH /todo/:id', async t => {
  t.plan(3);

  const todo = await Todo.create({ label: 'testLabel' });
  t.is(todo.complete, false);

  const res = await request(app)
    .patch(`/todo/${todo.id}`)
    .send({ complete: true });

  t.is(res.status, 200);
  t.is(res.body.result.complete, true);
});

test('DELETE /todo/:id', async t => {
  t.plan(3);

  const todo = await Todo.create({ label: 'testLabel' });
  t.not(todo, null);

  const res = await request(app).delete(`/todo/${todo.id}`);

  t.is(res.status, 200);
  t.is(res.body.result, 1);
});
// Integration tests above ---------------------------------
