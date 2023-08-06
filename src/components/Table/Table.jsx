import React from "react";
import "./style.css";

function Table() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Abrv</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>BMW</td>
          <td>BMW</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
