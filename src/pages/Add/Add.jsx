import React from "react";
import PropTypes from "prop-types";
import AddMakeForm from "../../components/AddMakeForm/AddMakeForm";
import AddModelForm from "../../components/AddModelForm/AddModelForm";

function Add({ dataType }) {
  return <div>{dataType === "make" ? <AddMakeForm /> : <AddModelForm />}</div>;
}

Add.propTypes = {
  dataType: PropTypes.string.isRequired,
};

export default Add;
