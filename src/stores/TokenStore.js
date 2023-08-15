import { makeObservable, observable, action } from "mobx";

class TokenStore {
  token = "";

  constructor() {
    makeObservable(this, {
      token: observable,
      setToken: action,
    });
  }

  setToken = (token) => {
    this.token = token;
  };
}

const tokenStore = new TokenStore();
export default tokenStore;
