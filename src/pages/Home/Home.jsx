import React from "react";
import { observer } from "mobx-react";
import Table from "../../components/Table/Table";
import makeStore from "../../stores/MakeStore";

function Home() {
  React.useEffect(() => {
    fetch(
      "https://api.baasic.com/beta/vehicle-application/resources/VehicleMake",
    )
      .then((response) => response.json())
      .then((responseData) => makeStore.setData(responseData.item));
  }, []);
  return (
    <div>
      <Table data={makeStore.data} />
    </div>
  );
}

export default observer(Home);
