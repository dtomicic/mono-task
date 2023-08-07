import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Table({ data }) {
  const mappedData = data.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      {item.makeId && <td>{item.makeId}</td>}
      <td>{item.name}</td>
      <td>{item.abrv}</td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          {data[0].makeId && <th>Make ID</th>}
          <th>Name</th>
          <th>Abrv</th>
        </tr>
      </thead>
      <tbody>{mappedData}</tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Table;
