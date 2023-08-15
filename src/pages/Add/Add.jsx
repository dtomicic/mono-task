import React from "react";
import PropTypes from "prop-types";
import AuthForm from "../../components/AuthForm/AuthForm";
import AddMakeForm from "../../components/AddMakeForm/AddMakeForm";
import AddModelForm from "../../components/AddModelForm/AddModelForm";
import "./style.css";

function Add({ dataType }) {
  return (
    <div className="add-page">
      <AuthForm />
      {dataType === "make" ? <AddMakeForm /> : <AddModelForm />}
    </div>
  );
}

Add.propTypes = {
  dataType: PropTypes.string.isRequired,
};

export default Add;
