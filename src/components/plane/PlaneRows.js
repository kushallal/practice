import React from "react";

const PlaneRows = ({ planes, removePlaneRow }) => {
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

  return <tbody className="table__body">{tableBody()}</tbody>;
};

export default PlaneRows;
