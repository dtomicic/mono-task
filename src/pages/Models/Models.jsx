import React from "react";
import { observer } from "mobx-react";
import Table from "../../components/Table/Table";
import modelStore from "../../stores/ModelStore";
import Searchbox from "../../components/SearchBox/Searchbox";
import AddButton from "../../components/AddButton/AddButton";
import deleteModal from "../../stores/DeleteModalStore";
import Modal from "../../components/Modal/Modal";

function Models() {
  const [itemId, setItemId] = React.useState("");

  React.useEffect(() => {
    fetch(
      "https://api.baasic.com/beta/vehicle-application/resources/VehicleModel",
    )
      .then((response) => response.json())
      .then((responseData) => modelStore.setData(responseData.item));
  }, []);

  const handleDelete = (id) => {
    deleteModal.setIsVisible(true);
    setItemId(id);
  };
  return (
    <div>
      {deleteModal.isVisible && <Modal id={itemId} schema="VehicleModel" />}
      <Searchbox />
      <AddButton dataType="models" />
      <Table data={modelStore.data} onDelete={handleDelete} />
    </div>
  );
}

export default observer(Models);
