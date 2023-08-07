import React from "react";
import { observer } from "mobx-react";
import Table from "../../components/Table/Table";
import modelStore from "../../stores/ModelStore";

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
      <Table data={modelStore.data} />
    </div>
  );
}

export default observer(Models);
