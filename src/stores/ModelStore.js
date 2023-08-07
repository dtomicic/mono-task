import { makeAutoObservable } from "mobx";

class ModelStore {
  data = [];

  constructor() {
    makeAutoObservable(this);
  }

  setData(data) {
    this.data = data;
  }
}

const modelStore = new ModelStore();
export default modelStore;
