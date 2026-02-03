export {caesarCipher} 

function caesarCipher(msg, num) {

  const alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const cloneArr = [...alphabetArr];
  //const upperCaseArr = alphabetArr.map(item => item.toUpperCase());
  const upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const upperClone = [...upperArr];

  function swap(num) {
    
    let left = 0;
    let right = 25;

    for(let i = 0; i < num; i++){

      const currLetter = cloneArr.shift();
      cloneArr.push(currLetter);

      const currL = upperClone.shift();
      upperClone.push(currL);
    }
  }

  swap(num);

  function getCipher(string) {

    const data = string.split("");
    let cipherData = [];

    for(i of data) {

      if(alphabetArr.includes(i)) {
        let index = alphabetArr.indexOf(i);
        cipherData.push(cloneArr[index]);    
      } else if(upperArr.includes(i)){
        let index = upperArr.indexOf(i);
        cipherData.push(upperClone[index]);
      } else {
        cipherData.push(i);
      }
    }
    return cipherData.join("");
  }
   
  return cipherText = getCipher(msg);
}

