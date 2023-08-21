import React from "react";
import PropTypes from "prop-types";
import makeStore from "../../stores/MakeStore";
import editModal from "../../stores/EditModalStore";
import "./style.css";
import ErrorMessageBox from "../ErrorMessageBox/ErrorMessageBox";

function EditMakeModal({ id }) {
  const filteredMakeData = makeStore.data.filter((item) => item.id === id);
  const [error, setError] = React.useState(false);
  const [makeName, setMakeName] = React.useState(filteredMakeData[0].name);
  const [makeAbrv, setMakeAbrv] = React.useState(filteredMakeData[0].abrv);

  const handleEdit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.baasic.com/beta/vehicle-application/resources/VehicleMake/${id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: makeName,
          abrv: makeAbrv,
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
    setMakeName(e.target.value);
  };

  const handleAbrvChange = (e) => {
    setMakeAbrv(e.target.value);
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
              value={makeName}
              onChange={handleNameChange}
              placeholder="Make name"
            />
            <input
              type="text"
              value={makeAbrv}
              onChange={handleAbrvChange}
              placeholder="Abbreviation"
            />
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

EditMakeModal.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditMakeModal;
