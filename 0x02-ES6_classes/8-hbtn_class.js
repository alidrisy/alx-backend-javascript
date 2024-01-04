export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val === 'number') {
      this._size = val;
    } else {
      throw new TypeError('Size must be number');
    }
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val === 'string') {
      this._location = val;
    } else {
      throw new TypeError('Location must be string');
    }
  }
}
