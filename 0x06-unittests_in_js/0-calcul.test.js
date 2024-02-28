const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', function () {
  it('should return 4', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return 5', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should return 6', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it(`checking if numbers round`, function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
  it(`checking if numbers round`, function() {
    assert.strictEqual(calculateNumber(-1.6, -1.7), -4);
  });
  it(`checking if numbers round`, function() {
    assert.strictEqual(calculateNumber(-1.4, -1.3), -2);
  });
});
