// eslint-disable-next-line no-unused-vars
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val === 'number') {
      this._amount = val;
    } else {
      throw new TypeError('Amount must be number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (typeof val === 'object') {
      this._currency = val;
    } else {
      throw new TypeError('Currency must be object');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
