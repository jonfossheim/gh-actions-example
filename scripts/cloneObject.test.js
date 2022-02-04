import { cloneObject } from './cloneObject';

const obj = { name: 'component name', id: 2 };

test('To equal', () => {
  expect(cloneObject(obj)).toEqual({ name: 'component name', id: 2 }); // true
});

test('Not to equal', () => {
  expect(cloneObject(obj)).not.toBe(obj);
});
