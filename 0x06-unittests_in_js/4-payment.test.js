const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(() => {
      consoleLogSpy = sinon.spy(console, 'log');
      calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(() => {
      calculateNumberStub.restore();
      consoleLogSpy.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
      sendPaymentRequestToApi(100, 20);

      expect(calculateNumberStub.calledOnce).to.be.true;
      expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
      expect(consoleLogSpy.calledOnce).to.be.true;
      expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    });
  });
});
