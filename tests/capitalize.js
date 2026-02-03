export {capitalize}

function capitalize(input) {
  let res = input.trim().split(""); 
  res.splice(0, 1, res[0].toUpperCase());
  return res.join(""); 
}

capitalize("Germany");
