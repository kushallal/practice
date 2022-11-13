import React from "react";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const PaperRows = ({ papers, removePaperRow }) => {
  const { theme } = useContext(ThemeContext);
  const tableBody = () => {
    if (papers != null) {
      return papers.map((paperObj, i) => {
        return (
          <tr key={i}>
            <td>{paperObj.type}</td>
            <td>{paperObj.length}</td>
            <td>{paperObj.height}</td>
            <td>
              <button
                className="btn--delete"
                onClick={() => removePaperRow({ i })}
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

  return (
    <tbody
      className={classNames(
        { table__body__light: !theme },
        { table__body__dark: theme }
      )}
    >
      {tableBody()}
    </tbody>
  );
};
export default PaperRows;
