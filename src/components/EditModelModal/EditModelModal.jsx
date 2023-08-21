import React from "react";
import PropTypes from "prop-types";
import makeStore from "../../stores/MakeStore";
import modelStore from "../../stores/ModelStore";
import editModal from "../../stores/EditModalStore";
import "./style.css";
import ErrorMessageBox from "../ErrorMessageBox/ErrorMessageBox";

function EditModelModal({ id }) {
  const filteredModelData = modelStore.data.filter((item) => item.id === id);
  const [error, setError] = React.useState(false);
  const [modelName, setModelName] = React.useState(filteredModelData[0].name);
  const [modelAbrv, setModelAbrv] = React.useState(filteredModelData[0].abrv);
  const [externalId, setExternalId] = React.useState(
    filteredModelData[0].makeId,
  );

  const mappedOptions = makeStore.data.map((item) => (
    <option value={item.id} key={item.id}>
      {item.name} | {item.id}
    </option>
  ));

  const handleEdit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.baasic.com/beta/vehicle-application/resources/VehicleModel/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: modelName,
          abrv: modelAbrv,
          makeId: externalId,
        }),
      },
    );
    if (response.status === 200 || response.status === 204) {
      setError(false);
      window.location.reload();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  const handleNameChange = (e) => {
    setModelName(e.target.value);
  };

  const handleAbrvChange = (e) => {
    setModelAbrv(e.target.value);
  };

  return (
    <div className="modal-background">
      {error && (
        <ErrorMessageBox message="Something went wrong with data update" />
      )}
      <div className="edit-modal">
        <h2>Edit</h2>
        <form onSubmit={handleEdit} className="edit-modal-form">
          <div className="edit-modal-inputs">
            <input
              type="text"
              value={modelName}
              onChange={handleNameChange}
              placeholder="Model name"
            />
            <input
              type="text"
              value={modelAbrv}
              onChange={handleAbrvChange}
              placeholder="Abbreviation"
            />
            <select
              onChange={(e) => setExternalId(e.target.value)}
              value={externalId}
            >
              {mappedOptions}
            </select>
          </div>
          <div className="edit-modal-buttons">
            <button type="button" onClick={() => editModal.setIsVisible(false)}>
              Cancel
            </button>
            <button type="submit">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

EditModelModal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditModelModal;
