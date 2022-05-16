const {sum, sumation, myRemove} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Adicione 4 + 5 é igual a 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('Adicione 0 + 0 é igual a 0', () => {
  expect(sum(0, 0)).toBe(0);
});

// teste de erro
test("Adicione 4 + '5' é igual a 9", () => {
  expect(sum(4, '5')).toBe(9);
});

test('Se a função exista', () => {
  expect(typeof sumation).toBe('function');
});

test('Adicione o array [1, 2, 3, 4] e retire o 3', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toContain(3);
});
