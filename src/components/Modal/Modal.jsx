import React from "react";
import PropTypes from "prop-types";
import deleteModal from "../../stores/DeleteModalStore";
import ErrorMessageBox from "../ErrorMessageBox/ErrorMessageBox";
import "./style.css";

function Modal({ id, schema }) {
  const [error, setError] = React.useState(false);

  const handleDelete = async () => {
    const response = await fetch(
      `https://api.baasic.com/beta/vehicle-application/resources/${schema}/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
      },
    );
    if (response.status === 200 || response.status === 204) {
      deleteModal.setIsVisible(false);
      setError(false);
      window.location.reload();
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };
  return (
    <div className="modal-background">
      {error && (
        <ErrorMessageBox message="Something went wrong with data delete" />
      )}
      <div className="modal">
        <h2>Delete</h2>
        <p>Are you sure you want to delete this?</p>
        <div className="modal-buttons">
          <button
            type="button"
            className="modal-button"
            onClick={() => deleteModal.setIsVisible(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="modal-button delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  schema: PropTypes.string.isRequired,
};

export default Modal;
