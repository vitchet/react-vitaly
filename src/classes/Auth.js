class Auth {
  _userName;

  constructor(userName) {
    this._userName = userName;
  }

  get userName() {
    return this._userName;
  }
}

export default Auth;
