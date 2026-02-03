//export {caesarCipher} 

function caesarCipher(msg, num) {
  const msgArr = msg.split('');
  const resArr = [];

  for(msg of msgArr) {
    console.log(msg + 3); 
  }
}

caesarCipher("xyz", 3);
