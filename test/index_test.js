const test = require('ava');
const request = require('supertest');
const { makeApp } = require('./_helper');

test('GET /health', async t => {
  t.plan(2);

  const res = await request(makeApp()).get('/health');

  t.is(res.status, 200);
  t.is(res.text, 'OK');
});
