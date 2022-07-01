const test = require('ava');

const dayjs = require('..');

test('exports dayjs function', (t) => {
  t.true(typeof dayjs === 'function');
});

test('locale works for en', (t) => {
  t.is(dayjs().add(5, 'minute').fromNow(true), '5 minutes');
});

test('locale works for es', (t) => {
  t.is(dayjs().add(5, 'minute').locale('es').fromNow(true), '5 minutos');
});

test('locale works for en -> es -> en -> es -> es', (t) => {
  t.is(dayjs().add(5, 'minute').fromNow(true), '5 minutes');
  t.is(dayjs().add(5, 'minute').locale('es').fromNow(true), '5 minutos');
  t.is(dayjs().add(5, 'minute').fromNow(true), '5 minutes');
  t.is(dayjs().add(5, 'minute').locale('es').fromNow(true), '5 minutos');
  t.is(dayjs().add(5, 'minute').locale('es').fromNow(true), '5 minutos');
});
