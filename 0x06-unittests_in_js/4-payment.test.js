const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  describe('sendPaymentRequestToApi', () => {
    let sendPaymentRequestToApi;
    let calculateNumberSpy;
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(() => {
      calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
      consoleLogSpy = sinon.spy(console, 'log');
      calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
      calculateNumberStub.returns(10);
      sendPaymentRequestToApi = require('./3-payment');
    });

    afterEach(() => {
      calculateNumberSpy.restore();
      calculateNumberStub.restore();
      consoleLogSpy.restore();
    });

    it('should call Utils.calculateNumber with the correct arguments', () => {
      sendPaymentRequestToApi(100, 20);

      expect(calculateNumberSpy.calledOnce).to.be.true;
      expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
      expect(consoleLogSpy.calledOnce).to.be.true;
      expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    });
  });
});
