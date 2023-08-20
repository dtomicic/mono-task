import { makeObservable, observable, action } from "mobx";

class DeleteModalStore {
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

const deleteModal = new DeleteModalStore();
export default deleteModal;
