import React from "react";

const PaperRows = ({ papers, removePaperRow }) => {
  const tableBody = () => {
    if (papers != null) {
      return papers.map((paperObj, i) => {
        return (
          <tr key={i}>
            <td>{paperObj.paperType}</td>
            <td>{paperObj.paperLength}</td>
            <td>{paperObj.paperHeight}</td>
            <td>
              <button
                className="btn--delete"
                onClick={() => removePaperRow(paperObj._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return <tr></tr>;
    }
  };

  return <tbody className="table__body">{tableBody()}</tbody>;
};
export default PaperRows;
