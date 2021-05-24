var express = require('express');
var router = express.Router();
const { letterCombinations } = require("../helpers/letterCombinations");

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

module.exports = router;
