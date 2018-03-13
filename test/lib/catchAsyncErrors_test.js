const test = require('ava');

const catchAsyncErrors = require('../../src/lib/catchAsyncErrors');

test('catchAsyncErrors ignores an incomplete function that doesnt throw', t => {
  t.plan(1);

  const fn = () => { return {}; };
  const wrappedFn = catchAsyncErrors(fn);
  const result = wrappedFn();

  t.is(result, undefined);
});

