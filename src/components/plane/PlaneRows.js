import React from "react";

const PlaneRows = ({ planes, removePlaneRow }) => {
  const tableBody = () => {
    if (planes != null) {
      return planes.map((planeObject, i) => {
        return (
          <tr>
            <td> {planeObject.planeName}</td>
            <td>{planeObject.planePaper}</td>
            <td>{planeObject.planeEngineer}</td>
            <td>{planeObject.completionDate}</td>
            <td>
              <button onClick={() => removePlaneRow({ i })}>Delete</button>
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

export default PlaneRows;
