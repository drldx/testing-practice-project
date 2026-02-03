import {analyzeArray} from './analyzeArray.js';

test('return object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4, 
    min: 1, 
    max: 8, 
    length: 6
  });
})

test('alternate check ', () => {
  expect(analyzeArray([5, 9, 2, 7, 10])).toEqual({
    average: 6.6,
    min: 2,
    max: 10,
    length: 5
  })
})
