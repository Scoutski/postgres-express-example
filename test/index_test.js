const test = require('ava');
const request = require('supertest');
const { app } = require('./_helper');

test('GET /health', async t => {
  t.plan(2);

  const res = await request(app).get('/health');

  t.is(res.status, 200);
  t.is(res.text, 'OK');
});
