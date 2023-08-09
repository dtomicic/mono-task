import { makeObservable, observable, action } from "mobx";

class SearchStore {
  searchTerm = "";

  constructor() {
    makeObservable(this, {
      searchTerm: observable,
      setSearchTerm: action,
    });
  }

  setSearchTerm = (term) => {
    this.searchTerm = term;
  };
}

const searchStore = new SearchStore();
export default searchStore;
