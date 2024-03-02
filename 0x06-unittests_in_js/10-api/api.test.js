const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  describe("Available_payments page", function() {
    it("check correct status for correct url", function() {
	    request.get("http://localhost:7865/available_payments", (err, res, body) => {
	      if (err) {
		      expect(res.statusCode).to.not.equal(200);
	      } else {
		     expect(res.statusCode).to.equal(200);
	      }
	    });
    });
    it("check correct body content for correct url", function() {
	    const option = {json: true};
	    const payLoad = {
	      payment_methods: {
		      credit_cards: true,
		      paypal: false
	      }
	    }
	    request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
	      if (err) {
		      expect(res.statusCode).to.not.equal(200);
	      } else {
		      expect(body).to.deep.equal(payLoad);
	      }
	    });
    });
  });
  
  describe("Login", function() {
    it("check correct status code for request that's sent properly", function(done) {
	    const opt = {
	      url: "http://localhost:7865/login",
	      json: true,
	      body: {
		      userName: 'JOE'
	      }
	    };
	    request.post(opt, function(err, res, body) {
	      expect(res.statusCode).to.equal(200);
	      done();
	    });
    });

    it("check correct content for request that's sent properly", function(done) {
      const opts = {
          url: "http://localhost:7865/login",
          json: true,
          body: {
            userName: 'JOE'
          }
	    };
      request.post(opts, function(err, res, body) {
        if (err) {
          expect(res.statusCode).to.not.equal(200);
        } else {
          expect(body).to.contain('Welcome JOE');
        }
        done();
      });
    });
    
    it("check correct status code for request that's not sent properly", function(done) {
      const op = {
        url: "http://localhost:7865/login",
          json: true,
          body: {
            usame: 'JOE'
          }
      };
      request.post(op, function(err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});
