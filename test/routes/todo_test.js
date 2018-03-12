require('dotenv').config();

const test = require('ava');
const uuid = require('uuid');

const request = require('supertest');
const { app } = require('../_helper');
const { Todo } = require('../../src/models');

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
