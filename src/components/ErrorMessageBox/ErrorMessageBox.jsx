import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function ErrorMessageBox({ message }) {
  return (
    <div className="error-message-box">
      <p>{message}</p>
    </div>
  );
}

ErrorMessageBox.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessageBox;
