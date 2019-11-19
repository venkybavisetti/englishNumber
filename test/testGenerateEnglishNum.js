const assert = require('assert');
const lib = require('../src/generateEnglishNum.js');


describe('getPlaceValueOfNum',function() {
  it('should get correct english word for coded data in this function',function() {
    assert.strictEqual(lib.getPlaceValueOfNum(2),'two');
    assert.strictEqual(lib.getPlaceValueOfNum(1000),'thousand');
  });
});

describe('pairArrayFromBack',function() {
  it('should get pairs from back side onwords',function() { 
    assert.deepStrictEqual(lib.pairArrayFromBack(['1','2','3','4']),[['2','3','4'],['1']]);
    assert.deepStrictEqual(lib.pairArrayFromBack(['5','1','2','3','4']),[['2','3','4'],['5','1']]);
  });
});

describe('getArray',function() {
  it('this function takes a string and should return a array',function() {
    assert.deepStrictEqual(lib.getArray('23345'),['2','3','3','4','5']);
  });
});

describe('getPlaceValuesAndDigitValues',function() {
  it('should return english words for the given numbers in array',function() {
    assert.strictEqual(lib.getPlaceValuesAndDigitValues(['1','2','3'],0),' one hundred twenty three');
    assert.strictEqual(lib.getPlaceValuesAndDigitValues(['1','1','3'],0),' one hundred thirteen');
    assert.strictEqual(lib.getPlaceValuesAndDigitValues(['1','3'],1),' thirteen thousand');
  });
});

describe ('getEngNum',function() {
  it('should return correct meaningfull valuePlace of number',function() {
    assert.strictEqual(lib.getEngNum('123'),'one hundred twenty three');
    assert.strictEqual(lib.getEngNum('10001'),'ten thousand one');
  });
});

describe ('removeSpacesInWords',function() {
  it('should remove two continuous spaces',function() {
    assert.strictEqual(lib.removeSpacesInWords('i am   venky    goodMorning'),'i am venky goodMorning');
  });
});

describe('getErrorMsgOrRequireEngNum',function() {
  it('should return message or EngNum',function() {
    assert.strictEqual(lib.getErrorMsgOrRequireEngNum(['3']),'three');
    assert.strictEqual(lib.getErrorMsgOrRequireEngNum(['a']),lib.helpForInvalidArgs());
  });
});

describe('isNumber',function() {
  it('should return true or flase based on the string',function() {
    assert.ok(lib.isNumber('2'));
  });
});

describe('isValidInputs',function() {
  it('should validate inputs',function() {
    assert.ok(lib.isValidInputs(['2']));
    assert.ok(!lib.isValidInputs(['2','3']));
  });
});

describe('helpForInvalidArgs',function() {
  it('should return help message for understanding users',function() {
    assert.strictEqual(lib.helpForInvalidArgs(),'Please enter \n natural numbers between above zero to below 100crores');
  });
});
