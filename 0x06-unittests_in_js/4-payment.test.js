const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  describe('sendPaymentRequestToApi', () => {
    let sendPaymentRequestToApi;
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(() => {
      consoleLogSpy = sinon.spy(console, 'log');
      calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
      calculateNumberStub.returns(10);
      sendPaymentRequestToApi = require('./4-payment');
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
      expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    });
  });
});
