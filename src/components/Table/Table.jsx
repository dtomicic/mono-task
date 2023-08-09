import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import searchStore from "../../stores/SearchStore";
import "./style.css";

function Table({ data }) {
  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchStore.searchTerm.toLowerCase()) ||
      item.abrv.toLowerCase().includes(searchStore.searchTerm.toLowerCase()) ||
      item.id.toLowerCase().includes(searchStore.searchTerm.toLowerCase()) ||
      (item.makeId &&
        item.makeId
          .toLowerCase()
          .includes(searchStore.searchTerm.toLowerCase()))
    );
  });

  const mappedData = filteredData.map((item) => (
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
          {data.length > 0 && data[0].makeId && <th>Make ID</th>}
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

export default observer(Table);
