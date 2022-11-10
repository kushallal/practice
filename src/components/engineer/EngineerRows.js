import React from "react";

const EngineerRows = ({ engineers, removeEngineerRow }) => {
  const tableBody = () => {
    if (engineers != null) {
      return engineers.map((engineerObj, i) => (
        <tr>
          <td>{engineerObj.name}</td>
          <td>{engineerObj.age}</td>
          <td>{engineerObj.experience}</td>
          <td>
            <button onClick={() => removeEngineerRow({ i })}>Delete</button>
          </td>
        </tr>
      ));
    } else {
      return <tr></tr>;
    }
  };
  return <tbody>{tableBody()}</tbody>;
};

export default EngineerRows;
