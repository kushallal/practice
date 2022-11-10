import React from "react";

const PaperRows = ({ papers, removePaperRow }) => {
  // const deleteRow = (index) => {
  //   const _papers = papers.splice(index, 1);
  //   console.log(_papers);
  //   console.log(index);
  //   // const _deleteRow = _papers.splice(index, 1);
  //   // localStorage.setItem(JSON.stringify(_deleteRow));
  // };

  const tableBody = () => {
    if (papers != null) {
      return papers.map((paperObj, i) => {
        return (
          <tr>
            <td>{paperObj.type}</td>
            <td>{paperObj.length}</td>
            <td>{paperObj.height}</td>
            <td>
              <button onClick={() => removePaperRow({ i })}>Delete</button>
            </td>
          </tr>
        );
      });
    } else {
      return <tr></tr>;
    }
  };

  return <tbody>{tableBody()}</tbody>;
};
export default PaperRows;
