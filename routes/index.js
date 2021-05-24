var express = require('express');
var router = express.Router();
const { letterCombinations } = require("../helpers/letterCombinations");
const { isSequenceOfDigits } = require("../helpers/isSequenceOfDigits");

/* GET home page. */
router.get('/', function (req, res) {
  res.send('Hello World!')
})



router.get(`/t9-suggestions`, async (req, res) => {
  // accepts urls like http://localhost:9000/t9-suggestions?userInput=23
const { userInput } = req.query;
  
if(!isSequenceOfDigits(userInput)){
  res.status(400).send("Input has to be sequence of digits.");
}

if(userInput === ""){
  res.status(400).send(`Please enter a sequence of digits like '23'`);
}

try {
    const data = await letterCombinations(userInput)
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Something went wrong. Sorry!");
  }
});

module.exports = router;
