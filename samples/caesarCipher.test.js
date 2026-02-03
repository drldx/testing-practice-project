import {caesarCipher} from './caesarCipher.js';

it('cipher 3', () => {
  expect(caesarCipher('xyz', 3)).toEqual('abc');
})

test('case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

test('punctuation test', () => {
  expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
})
