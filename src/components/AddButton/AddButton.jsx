import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AddButton({ dataType }) {
  return (
    <div>
      <Link to={`/add/${dataType}`}>
        Add {dataType === "models" ? "Model" : "Make"}
      </Link>
    </div>
  );
}

AddButton.propTypes = {
  dataType: PropTypes.string.isRequired,
};

export default AddButton;
