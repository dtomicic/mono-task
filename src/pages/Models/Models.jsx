import React from "react";
import { observer } from "mobx-react";
import Table from "../../components/Table/Table";
import modelStore from "../../stores/ModelStore";
import Searchbox from "../../components/SearchBox/Searchbox";
import AddButton from "../../components/AddButton/AddButton";
import deleteModal from "../../stores/DeleteModalStore";
import Modal from "../../components/Modal/Modal";
import editModal from "../../stores/EditModalStore";
import EditModelModal from "../../components/EditModelModal/EditModelModal";

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

  const handleEdit = (id) => {
    editModal.setIsVisible(true);
    setItemId(id);
  };

  return (
    <div>
      {deleteModal.isVisible && <Modal id={itemId} schema="VehicleModel" />}
      {editModal.isVisible && <EditModelModal id={itemId} />}
      <Searchbox />
      <AddButton dataType="models" />
      <Table
        data={modelStore.data}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default observer(Models);
