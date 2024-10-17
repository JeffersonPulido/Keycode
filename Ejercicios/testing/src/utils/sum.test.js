const sum = require('./sum');

test('Suma dos numeros ', () => {
  expect(sum(9, 1)).toBe(10);
  expect(sum(5, 2)).toBe(7);
})
