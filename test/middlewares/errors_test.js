const test = require('ava');
const sinon = require('sinon');

const errorsMiddleware = require('../../src/middlewares/errors');

test('Errors middleware sets status to 500 with unspecified error', t => {
  t.plan(2);

  const stub = sinon.stub();
  errorsMiddleware({ name: 'nothing' }, null, { status: stub }, () => {});

  t.is(stub.calledOnce, true);
  t.is(stub.calledWith(500), true);
});
