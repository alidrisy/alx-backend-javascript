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
      calculateNumberStub = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
      calculateNumberStub.restore();
      consoleLogSpy.restore();
    });

    it('Call sendPaymentRequestToAPI with 100, and 20 and get return val = 120', () => {
      sendPaymentRequestToApi(100, 20);

      expect(calculateNumberStub.calledOnce).to.be.true;
      expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
      expect(consoleLogSpy.calledOnce).to.be.true;
      expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('call sendPaymentRequestToAPI with 10, and 10 and get return val = 20', () => {
      sendPaymentRequestToApi(10, 10);

      expect(calculateNumberStub.calledOnce).to.be.true;
      expect(calculateNumberStub.calledWith('SUM', 10, 10)).to.be.true;
      expect(consoleLogSpy.calledOnce).to.be.true;
      expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    });
  });
});
