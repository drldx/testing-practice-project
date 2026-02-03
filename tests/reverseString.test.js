import {reverseString} from './reverseString.js';

test('reverse a string', () => {
  expect(reverseString("Palindrome")).toEqual("emordnilaP");
});

it('reverse with spaces', () => {
  expect(reverseString('     Hola')).toEqual("aloH");
})
