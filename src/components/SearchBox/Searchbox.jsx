import React from "react";
import { observer } from "mobx-react";
import searchStore from "../../stores/SearchStore";

function Searchbox() {
  const handleChange = (event) => {
    searchStore.setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchStore.searchTerm}
      onChange={handleChange}
    />
  );
}

export default observer(Searchbox);
