var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.send('Hello World!')
})



router.get(`/t9-suggestions`, async (req, res) => {
  // accepts urls like http://localhost:9000/t9-suggestions?userInput=23
const { userInput } = req.query;

  try {
    const response = await letterCombinations(userInput)
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

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


let letterCombinations = function(digits) {
  const letters = digits.split('').map(index => PhoneChart[index - 2])
  const digitLength = letters.length
  
  if(digitLength <= 0) return []

  let rs = letters[0]
  for(let i = 1; i < digitLength; i++) {
    rs = [].concat(...letters[i].map(addon => rs.map(pre => pre + addon)))
  }
  return rs
};


module.exports = router;
