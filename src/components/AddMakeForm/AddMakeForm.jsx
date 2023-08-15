import React from "react";
import tokenStore from "../../stores/TokenStore";
import SuccessMessageBox from "../SuccessMessageBox/SuccessMessageBox";
import ErrorMessageBox from "../ErrorMessageBox/ErrorMessageBox";
import "./style.css";

function AddMakeForm() {
  const [make, setMake] = React.useState("");
  const [abbreviation, setAbbreviation] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const makeData = {
      abrv: abbreviation,
      name: make,
    };

    const response = await fetch(
      "https://api.baasic.com/beta/vehicle-application/resources/VehicleMake",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${tokenStore.token}`,
        },
        body: JSON.stringify(makeData),
      },
    );
    if (response.status === 200 || response.status === 201) {
      setMake("");
      setAbbreviation("");
      setSuccess(true);
      setError(false);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="add-make-form">
      {error && (
        <ErrorMessageBox message="Something went wrong with data insert" />
      )}
      {success && <SuccessMessageBox message="Data inserted successfully" />}
      <h1 className="form-header">Add data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Make Name"
          onChange={(e) => setMake(e.target.value)}
          value={make}
        />
        <input
          type="text"
          placeholder="Abbreviation"
          onChange={(e) => setAbbreviation(e.target.value)}
          value={abbreviation}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddMakeForm;
