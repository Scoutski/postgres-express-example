require('dotenv').config();

const test = require('ava');
const uuidv4 = require('uuid/v4');

const request = require('supertest');
const { makeApp } = require('../_helper');
const { Todo } = require('../../src/models');
const errors = require('../../src/lib/errors');

// Integration tests below ==--------------------------------
test('GET /todo', async t => {
  t.plan(3);
  const uniqueLabel = 'this_is_a_unique_label';
  await Todo.create({ label: uniqueLabel });

  const res = await request(makeApp()).get('/todo');

  const exists = res.body.result.find(obj => obj.label = uniqueLabel);

  t.not(exists, null);
  t.is(res.status, 200);
  t.is(res.body.errors, null);
});

test('GET /todo/:id', async t => {
  t.plan(3);

  const todo = await Todo.create({ label: 'testLabel' });
  t.not(todo, null);

  const res = await request(makeApp()).get(`/todo/${todo.id}`);

  t.is(res.status, 200);
  t.is(res.body.result.id, todo.id);
});

test('POST /todo', async t => {
  t.plan(2);

  const label = uuidv4();
  const res = await request(makeApp())
    .post('/todo')
    .send({ label });

  t.is(res.status, 201);
  t.is(res.body.result.label, label);
});

test('PATCH /todo/:id', async t => {
  t.plan(3);

  const todo = await Todo.create({ label: 'testLabel' });
  t.is(todo.complete, false);

  const res = await request(makeApp())
    .patch(`/todo/${todo.id}`)
    .send({ complete: true });

  t.is(res.status, 200);
  t.is(res.body.result.complete, true);
});

test('DELETE /todo/:id', async t => {
  t.plan(3);

  const todo = await Todo.create({ label: 'testLabel' });
  t.not(todo, null);

  const res = await request(makeApp()).delete(`/todo/${todo.id}`);

  t.is(res.status, 200);
  t.is(res.body.result, 1);
});
// Integration tests above ---------------------------------

// Unit tests below ----------------------------------------

test('GET /todo/:id with invalid ID', async t => {
  t.plan(2);
  const invalidId = -1;
  const res = await request(makeApp()).get(`/todo/${invalidId}`);

  t.is(res.status, 404);
  t.is(res.body.errors, errors.todoNotFound(invalidId));
});

test('POST /todo with no label returns 400', async t => {
  t.plan(2);

  const res = await request(makeApp())
    .post('/todo');

  t.is(res.status, 400);
  t.is(res.body.errors, errors.createRequiresParams());
});

test('PATCH /todo/:id with no params returns 400', async t => {
  t.plan(2);

  const res = await request(makeApp())
    .patch(`/todo/${-1}`);

  t.is(res.status, 400);
  t.is(res.body.errors, errors.updateRequiredParams());
});

// Unit tests above ----------------------------------------
