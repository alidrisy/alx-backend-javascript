const { expect } = require('chai');
const calculateNumber = require("./2-calcul_chai.js");

describe('calculateNumber', function () {
  describe('SUM', function () {
    it('should return 4', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should return 5', function () {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('should return 6', function () {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUM', -1.6, -1.7)).to.equal(-4);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUM', -1.4, -1.3)).to.equal(-2);
    });
  });
  describe('SUBTRACT', function () {
    it('should return -2', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should return -3', function () {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });
    it('should return -2', function () {
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUBTRACT', -1.6, -1.7)).to.equal(0);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('SUBTRACT', -1.4, -1.3)).to.equal(0);
    });
  });
  describe('DIVIDE', function () {
    it('should return 2', function () {
      expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('should return 2', function () {
      expect(calculateNumber('DIVIDE', 3.7, 2)).to.equal(2);
    });
    it('should return 0.5', function () {
      expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('DIVIDE', -1.6, -1.7)).to.equal(1);
    });
    it(`checking if numbers round`, function() {
      expect(calculateNumber('DIVIDE', -1.4, -1.3)).to.equal(1);
    });
  });
});
