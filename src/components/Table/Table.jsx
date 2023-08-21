import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import searchStore from "../../stores/SearchStore";
import "./style.css";

function Table({ data, onDelete, onEdit }) {
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
      <td>
        <div
          className="table-action"
          onClick={() => onDelete(item.id)}
          onKeyDown={() => onDelete(item.id)}
          role="button"
          tabIndex="0"
        >
          Delete
        </div>
        <div
          className="table-action"
          onClick={() => onEdit(item.id)}
          onKeyDown={() => onEdit(item.id)}
          role="button"
          tabIndex="0"
        >
          Edit
        </div>
      </td>
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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{mappedData}</tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default observer(Table);
