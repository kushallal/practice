import React from "react";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const PlaneRows = ({ planes, removePlaneRow }) => {
  const { theme } = useContext(ThemeContext);
  const tableBody = () => {
    if (planes != null) {
      return planes.map((planeObject, i) => {
        return (
          <tr key={i}>
            <td> {planeObject.planeName}</td>
            <td>{planeObject.planePaper}</td>
            <td>{planeObject.planeEngineer}</td>
            <td>{planeObject.completionDate}</td>
            <td>
              <button
                className="btn--delete"
                onClick={() => removePlaneRow({ i })}
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

export default PlaneRows;
