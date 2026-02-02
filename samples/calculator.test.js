import {add, subtract, multiply, divide} from './calculator.js';

test('addition', () => {
  expect(add(1, 1)).toBe(2);
});

test('addition 2', () => {
  expect(add(100, 233)).toEqual(333);
})

test('substraction', () => {
  expect(subtract(10, 5)).toEqual(5);
})

test('substraction 2', () => {
  expect(subtract(-10, -4)).toBe(-6);
})

test('multiplication', () => {
  expect(multiply(20, 5)).toEqual(100);
});

test('division', () => {
  expect(divide(100, 10)).toEqual(10);
})
