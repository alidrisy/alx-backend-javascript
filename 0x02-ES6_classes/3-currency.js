export default class Currency {
  constructor(code, name) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw new TypeError('Name must be string');
    }
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val === 'string') {
      this._code = val;
    } else {
      throw new TypeError('Code must be string');
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
