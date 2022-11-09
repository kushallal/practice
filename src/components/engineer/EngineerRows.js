import React from "react";

const EngineerRows = ({ engineers, func }) => {
  const tableBody = () => {
    if (engineers != null) {
      return engineers
        .map((el) => Object.values(el))
        .map((el, i) => (
          <tr>
            {el.map((e) => (
              <td>{e}</td>
            ))}
            <td>
              <button onClick={() => func({ i })}>Delete</button>
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
