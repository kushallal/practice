import React from "react";

const PaperRows = ({ papers, func }) => {
  // const deleteRow = (index) => {
  //   const _papers = papers.splice(index, 1);
  //   console.log(_papers);
  //   console.log(index);
  //   // const _deleteRow = _papers.splice(index, 1);
  //   // localStorage.setItem(JSON.stringify(_deleteRow));
  // };

  const tableBody = papers
    .map((el) => Object.values(el))
    .map((el, i) => (
      <tr key={i}>
        {el.map((e) => (
          <td>{e}</td>
        ))}
        <td>
          <button onClick={() => func({ i })}>Delete</button>
        </td>
      </tr>
    ));

  return <tbody>{tableBody}</tbody>;
};
export default PaperRows;
