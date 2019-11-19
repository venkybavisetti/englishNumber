const pairArrayFromBack = function(array) {
  let pair = [];
  for(let index = 0;index < array.length;index+=2) {
    if(index == 0) {
      pair.push(array.slice(-((index =+ 1) +2)));
    }
    else{
      pair.push(array.slice(-(index + 2),-index));
    }
  }
  return pair;
};

const getArray = function(string) {
  return string.split('');
};

const seperatePlaceValues = function(stringNum,index) {
  let words = '';
  if(stringNum.length == 3 && 100*(stringNum[0])) {
    words = words + ' ' + getPlaceValueOfDigit((stringNum[0]));
      words = words + ' ' + getPlaceValueOfDigit(100);
    }
  if(+stringNum.slice(-2).join('') < 20) {
    words = words + ' ' + getPlaceValueOfDigit(+stringNum.slice(-2).join(''));
  }
  else{
    let reversedArray = stringNum.reverse();
    words = words + ' ' + getPlaceValueOfDigit(10*(+stringNum[1]));
    words = words + ' ' + getPlaceValueOfDigit(+stringNum[0]);
  }
  if(index*+stringNum.join('')) {
    words = words + ' ' + getPlaceValueOfDigit(10**((2*index)+1));
  }
  return words;
};


const getPlaceValueOfDigit = function(stringNum) {
  let engNumWords = {
    0:'',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
    20:'twenty',
    30:'thirty',
    40:'fourty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety',
    100:'hundred',
    1000:'thousand',
    100000:'lakhs',
    10000000:'crore'
  }
  return engNumWords[stringNum];
};

const getEngNum = function(numInString) {
  let numArray = getArray(numInString);
  let pairedArgs = pairArrayFromBack(numArray); 
  let englishWord = pairedArgs.map(seperatePlaceValues).reverse().join(' ');
  return englishWord;
};


exports.getEngNum = getEngNum;
exports.getPlaceValueOfDigit = getPlaceValueOfDigit;
exports.seperatePlaceValues = seperatePlaceValues;
exports.getArray = getArray;
exports.pairArrayFromBack = pairArrayFromBack;
