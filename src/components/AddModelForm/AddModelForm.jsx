import React from "react";
import makeStore from "../../stores/MakeStore";
import tokenStore from "../../stores/TokenStore";
import SuccessMessageBox from "../SuccessMessageBox/SuccessMessageBox";
import ErrorMessageBox from "../ErrorMessageBox/ErrorMessageBox";
import "./style.css";

function AddModelForm() {
  const [modelName, setModelName] = React.useState("");
  const [abbreviation, setAbbreviation] = React.useState("");
  const [externalId, setExternalId] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const mappedOptions = makeStore.data.map((item) => (
    <option value={item.id} key={item.id}>
      {item.name} | {item.id}
    </option>
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const makeData = {
      abrv: abbreviation,
      name: modelName,
      makeId: externalId,
    };

    const response = await fetch(
      "https://api.baasic.com/beta/vehicle-application/resources/VehicleModel",
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
      setModelName("");
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
    <div className="add-model-form">
      {error && (
        <ErrorMessageBox message="Something went wrong with data insert" />
      )}
      {success && <SuccessMessageBox message="Data inserted successfully" />}
      <h1 className="form-header">Add data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Model Name"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Abbreviation"
          value={abbreviation}
          onChange={(e) => setAbbreviation(e.target.value)}
        />
        <select onChange={(e) => setExternalId(e.target.value)}>
          {mappedOptions}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddModelForm;
