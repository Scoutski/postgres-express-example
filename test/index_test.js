const test = require('ava');
const request = require('supertest');

// TODO: should I create a separate app for testing?
const app = require('../src');

test.serial('GET /health', async t => {
  t.plan(2);

  const res = await request(app)
    .get('/health');

  t.is(res.status, 200);
  t.is(res.text, 'OK');
});