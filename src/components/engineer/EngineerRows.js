import React from "react";

const EngineerRows = ({ engineers, removeEngineerRow }) => {
  const tableBody = () => {
    if (engineers != null) {
      return engineers.map((engineerObj, i) => (
        <tr key={i}>
          <td>{engineerObj.engineerName}</td>
          <td>{engineerObj.engineerAge}</td>
          <td>{engineerObj.engineerExperience}</td>
          <td>
            <button
              className="btn--delete"
              onClick={() => removeEngineerRow(engineerObj._id)}
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
