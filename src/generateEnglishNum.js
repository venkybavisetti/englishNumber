const pairArrayFromBack = function(array) {
  let pair = [];
  for (let index = 0; index < array.length; index += 2) {
    if (index == 0) {
      pair.push(array.slice(-((index = +1) + 2)));
    } else {
      pair.push(array.slice(-(index + 2), -index));
    }
  }
  return pair;
};

const getArray = function(string) {
  return string.split("");
};

const removeSpacesInWords = function(string) {
  let spaces = "  ";
  let space = " ";
  let modifyText = string;
  while (modifyText.includes(spaces)) {
    modifyText = modifyText.replace(spaces, space);
  }
  return modifyText;
};

const getHundredsPlace = function(stringNum, index) {
  let placeValue = "";
  if (stringNum.length == 3 && 100 * stringNum[0]) {
    placeValue = placeValue + " " + getPlaceValueOfNum(stringNum[0]);
    placeValue = placeValue + " " + getPlaceValueOfNum(100) + " " + "and";
  }
  return placeValue;
};

const getAboveHundredsPlaceValues = function(stringNum, index) {
  let placeValue = "";
  if (index * +stringNum.join("")) {
    placeValue = placeValue + " " + getPlaceValueOfNum(10 ** (2 * index + 1));
  }
  return placeValue;
};

const getPlaceValuesAndDigitValues = function(stringNum, index) {
  let words = "";
  words += getHundredsPlace(stringNum, index);
  if (+stringNum.slice(-2).join("") < 20) {
    words = words + " " + getPlaceValueOfNum(+stringNum.slice(-2).join(""));
  } else {
    let reversedArray = stringNum.reverse();
    words = words + " " + getPlaceValueOfNum(10 * +stringNum[1]);
    words = words + " " + getPlaceValueOfNum(+stringNum[0]);
  }
  words += getAboveHundredsPlaceValues(stringNum, index);
  return words;
};

const getPlaceValueOfNum = function(num) {
  let engNumWords = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred",
    1000: "thousand",
    100000: "lakh",
    10000000: "crore"
  };
  return engNumWords[num];
};

const getEngNum = function(numInString) {
  let numArray = getArray(numInString);
  let pairedArgs = pairArrayFromBack(numArray);
  let englishWord = pairedArgs
    .map(getPlaceValuesAndDigitValues)
    .reverse()
    .join(" ");
  let englishWordsWithNoSpaces = englishWord.trim();
  return removeSpacesInWords(englishWordsWithNoSpaces);
};

const isNumber = function(num) {
  return Number.isInteger(+num);
};

const isValidInputs = function(cmdLineArgs) {
  let numberRange = 0 < +cmdLineArgs[0] && 1000000000 > +cmdLineArgs[0];
  return cmdLineArgs.length == 1 && isNumber(cmdLineArgs[0]) && numberRange;
};

const helpForInvalidArgs = function() {
  return "Please enter \n natural numbers between above zero to below 100crores";
};

const getErrorMsgOrRequireEngNum = function(cmdLineArgs) {
  if (!isValidInputs(cmdLineArgs)) {
    return helpForInvalidArgs();
  }
  return getEngNum(cmdLineArgs[0]);
};

exports.getEngNum = getEngNum;
exports.getPlaceValueOfNum = getPlaceValueOfNum;
exports.getPlaceValuesAndDigitValues = getPlaceValuesAndDigitValues;
exports.getArray = getArray;
exports.pairArrayFromBack = pairArrayFromBack;
exports.removeSpacesInWords = removeSpacesInWords;
exports.getErrorMsgOrRequireEngNum = getErrorMsgOrRequireEngNum;
exports.isNumber = isNumber;
exports.isValidInputs = isValidInputs;
exports.helpForInvalidArgs = helpForInvalidArgs;
exports.getHundredsPlace = getHundredsPlace;
