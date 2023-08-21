import { makeObservable, observable, action } from "mobx";

class EditModalStore {
  isVisible = false;

  constructor() {
    makeObservable(this, {
      isVisible: observable,
      setIsVisible: action,
    });
  }

  setIsVisible = (term) => {
    this.isVisible = term;
  };
}

const editModal = new EditModalStore();
export default editModal;
