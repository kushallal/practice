import React from "react";

const PlaneRows = ({ planes, func }) => {
  const tableBody = () => {
    if (planes != null) {
      return planes
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

export default PlaneRows;
