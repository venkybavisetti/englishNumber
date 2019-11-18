const assert = require('assert');
const getEngNum = require('../src/generateEnglishNum.js').getEngNum;


describe('getEngNum',function() {
  it('should get correct english word for below 10',function() {
    assert.strictEqual(getEngNum('2'),'two');
  });
});
