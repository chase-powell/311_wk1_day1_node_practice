const split = (str, delim) => {
  // write code for strings.split
  return str.split(delim)
}

const pairs = (str) => {
  // write code for strings.pairs
  const pairs = [];
  for(let i = 0; i < str.length; i += 2) {
    pairs.push(str[i] + str[i + 1])
  } return pairs
  
}

const reverse = (str) => {
  // write code for strings.reverse
return str.split('').reverse().join('')
}

module.exports = {
  split,
  pairs,
  reverse
}