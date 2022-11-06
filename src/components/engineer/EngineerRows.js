import React from "react";

const EngineerRows = ({ ename, eage, eexp }) => {
  return (
    <tr>
      <td>{ename}</td>
      <td>{eage}</td>
      <td>{eexp}</td>
    </tr>
  );
};

export default EngineerRows;
