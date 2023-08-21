import React from "react";
import { observer } from "mobx-react";
import Table from "../../components/Table/Table";
import makeStore from "../../stores/MakeStore";
import deleteModal from "../../stores/DeleteModalStore";
import editModal from "../../stores/EditModalStore";
import Searchbox from "../../components/SearchBox/Searchbox";
import AddButton from "../../components/AddButton/AddButton";
import AuthForm from "../../components/AuthForm/AuthForm";
import Modal from "../../components/Modal/Modal";
import EditMakeModal from "../../components/EditMakeModal/EditMakeModal";

function Home() {
  const [itemId, setItemId] = React.useState("");
  React.useEffect(() => {
    fetch(
      "https://api.baasic.com/beta/vehicle-application/resources/VehicleMake",
    )
      .then((response) => response.json())
      .then((responseData) => makeStore.setData(responseData.item));
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
      <AuthForm />
      {deleteModal.isVisible && <Modal id={itemId} schema="VehicleMake" />}
      {editModal.isVisible && <EditMakeModal id={itemId} />}
      <Searchbox />
      <AddButton dataType="make" />
      <Table
        data={makeStore.data}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default observer(Home);
