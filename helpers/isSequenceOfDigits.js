let isSequenceOfDigits = (digits) => {
  return /^(\d)*$/g.test(digits)
};

module.exports = { isSequenceOfDigits }; 

