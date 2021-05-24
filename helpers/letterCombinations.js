const PhoneChart = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
]


let letterCombinations = (digits) => {
  const letters = digits.split('').map(index => PhoneChart[index - 2])
  const digitLength = letters.length
  
  if(digitLength <= 0) return []

  let rs = letters[0]
  for(let i = 1; i < digitLength; i++) {
    rs = [].concat(...letters[i].map(addon => rs.map(pre => pre + addon)))
  }
  return rs
};

module.exports = { letterCombinations }; 

