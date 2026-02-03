export {analyzeArray}

function analyzeArray(arr) {
  const length = arr.length;
  const average = arr.reduce((acc, curr) =>  acc + curr, 0) / length;
  const sortedArr = arr.sort((a, b) => a - b) ;
  const min = sortedArr[0];
  const max = sortedArr[length - 1];

  return { average,
           min, 
           max, 
           length
         }
}
