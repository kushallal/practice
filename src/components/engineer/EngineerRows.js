import React from "react";

const EngineerRows = ({ engineers, removeEngineerRow }) => {
  const tableBody = () => {
    if (engineers != null) {
      return engineers.map((engineerObj, i) => (
        <tr key={i}>
          <td>{engineerObj.name}</td>
          <td>{engineerObj.age}</td>
          <td>{engineerObj.experience}</td>
          <td>
            <button
              className="btn--delete"
              onClick={() => removeEngineerRow(i)}
            >
              Delete
            </button>
          </td>
        </tr>
      ));
    } else {
      return <tr></tr>;
    }
  };
  return <tbody className="table__body">{tableBody()}</tbody>;
};

export default EngineerRows;
