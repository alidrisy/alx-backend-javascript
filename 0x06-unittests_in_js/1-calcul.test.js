const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 4', function () {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('should return 5', function () {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should return 6', function () {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it(`checking if numbers round`, function() {
      assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
    it(`checking if numbers round`, function() {
      assert.strictEqual(calculateNumber('SUM', -1.6, -1.7), -4);
    });
    it(`checking if numbers round`, function() {
      assert.strictEqual(calculateNumber('SUM', -1.4, -1.3), -2);
    });
  });
  describe('SUBTRACT', function () {
    it('should return -2', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should return -3', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });
    it('should return -2', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });
    it(`checking if numbers round`, function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
    });
    it(`checking if numbers round`, function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -1.7), 0);
    });
    it(`checking if numbers round`, function() {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -1.3), 0);
    });
  });
  describe('DIVIDE', function () {
    it('should return 4', function () {
      assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
    });
    it('should return 5', function () {
      assert.equal(calculateNumber('DIVIDE', 3.7, 2), 2);
    });
    it('should return 6', function () {
      assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });
    it(`checking if numbers round`, function() {
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
    it(`checking if numbers round`, function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1.6, -1.7), 1);
    });
    it(`checking if numbers round`, function() {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -1.3), 1);
    });
  });
});
