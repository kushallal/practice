import React from "react";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const EngineerRows = ({ engineers, removeEngineerRow }) => {
  const { theme } = useContext(ThemeContext);
  const tableBody = () => {
    if (engineers != null) {
      return engineers.map((engineerObj, i) => (
        <tr key={i}>
          <td>{engineerObj.name}</td>
          <td>{engineerObj.age}</td>
          <td>{engineerObj.experience}</td>
          <td>
            <button
              className="btn--delete"
              onClick={() => removeEngineerRow({ i })}
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

export default EngineerRows;
