import React from "react";

function EngineerRows({ engineers, func }) {
  const tableBody = engineers
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
  return <tbody>{tableBody}</tbody>;
}

export default EngineerRows;
