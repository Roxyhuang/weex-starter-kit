class Exception {
  constructor(code, message, data) {
    this.handled = false;
    this.code = code === undefined ? -10000 : code;
    this.message = message || 'Unkown Error';
    this.data = data;
  }
}

export default Exception;
