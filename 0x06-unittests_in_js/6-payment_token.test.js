const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  describe('getPaymentTokenFromAPI', () => {
    it('getPaymentTokenFromAPI(success), where success == true', (done) => {
        getPaymentTokenFromAPI(true)
          .then((res) => {
          expect(res).to.deep.equal({data: 'Successful response from the API'});
          done();
      });
    });
  });
});
