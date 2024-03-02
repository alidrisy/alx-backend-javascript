const express = require('express');

app = express()

const port = 7865;

app.get('/', (_req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (request, response) => {
  response.set("Content-Type", "application/json");
  const payMethods = {
payment_methods: {
        credit_cards: true,
        paypal: false
}
  }
  response.send(payMethods);
});

app.post('/login', (request, response) => {
  const userName = request.body.userName;
  if (userName) {
response.send(`Welcome ${userName}`);
  } else {
response.status(404).send();
  }
});
  
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
  
module.exports = app;
  