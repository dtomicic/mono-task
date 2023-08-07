import { makeAutoObservable } from "mobx";

class MakeStore {
  data = [];

  constructor() {
    makeAutoObservable(this);
  }

  setData(data) {
    this.data = data;
  }
}

const makeStore = new MakeStore();
export default makeStore;
