const test = require('ava');

const dayjs = require('..');

test('exports dayjs function', (t) => {
  t.true(typeof dayjs === 'function');
});
