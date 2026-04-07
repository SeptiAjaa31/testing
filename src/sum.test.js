const sum = require('./sum');

test('add 1 + 2 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should return correct sum of two numbers', () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = sum(a, b);

  // Assert
  expect(result).toBe(5);
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});