import {caesarCipher} from './caesarCipher.js';

it('cipher 3', () => {
  expect(caesarCipher('xyz', 3)).toEqual('abc');
})
