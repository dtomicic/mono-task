import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function SuccessMessageBox({ message }) {
  return (
    <div className="success-message-box">
      <p>{message}</p>
    </div>
  );
}

SuccessMessageBox.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccessMessageBox;
