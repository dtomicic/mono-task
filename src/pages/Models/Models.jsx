import React from "react";
import { observer } from "mobx-react";
import Table from "../../components/Table/Table";
import modelStore from "../../stores/ModelStore";
import Searchbox from "../../components/SearchBox/Searchbox";
import AddButton from "../../components/AddButton/AddButton";

function Models() {
  React.useEffect(() => {
    fetch(
      "https://api.baasic.com/beta/vehicle-application/resources/VehicleModel",
    )
      .then((response) => response.json())
      .then((responseData) => modelStore.setData(responseData.item));
  }, []);
  return (
    <div>
      <Searchbox />
      <AddButton dataType="models" />
      <Table data={modelStore.data} />
    </div>
  );
}

export default observer(Models);
