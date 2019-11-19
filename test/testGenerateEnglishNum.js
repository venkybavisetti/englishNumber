const assert = require('assert');
const lib = require('../src/generateEnglishNum.js');


describe('getPlaceValueOfDigit',function() {
  it('should get correct english word for coded data in this function',function() {
    assert.strictEqual(lib.getPlaceValueOfDigit(2),'two');
    assert.strictEqual(lib.getPlaceValueOfDigit(1000),'thousand');
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

describe('seperatePlaceValues',function() {
  it('should return english words for the given numbers in array',function() {
    assert.strictEqual(lib.seperatePlaceValues(['1','2','3'],0),' one hundred twenty three');
    assert.strictEqual(lib.seperatePlaceValues(['1','1','3'],0),' one hundred thirteen');
    assert.strictEqual(lib.seperatePlaceValues(['1','3'],1),' thirteen thousand');
  });
});

describe ('getEngNum',function() {
  it('should return correct meaningfull valuePlace of number',function() {
    assert.strictEqual(lib.getEngNum('123'),'one hundred twenty three');
    assert.strictEqual(lib.getEngNum('10001'),'ten thousand one');
  });
});

