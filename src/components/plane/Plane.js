import React from "react";
import PlaneRows from "./PlaneRows";
import planeHelper from "../../helpers/PlaneHelper";
import constants from "../../Constants";

const Plane = () => {
  const { planes, savePlane, deletePlane } = planeHelper.usePlane();

  return (
    <div>
      <form>
        <h1>Planes Description</h1>
        <label>Plane Name</label>
        <input id={constants.id.planes.planeName} />
        <br />
        <label>Paper Name</label>

        <select id={constants.id.planes.planePaper}>
          {planeHelper.displayPaperOptions()}
        </select>
        <br />

        <label>Engineer Name</label>

        <select id={constants.id.planes.planeEngineer}>
          {planeHelper.displayEngineerOptions()}
        </select>
        <br />

        <label>Completion Date</label>
        <input id={constants.id.planes.completionDate} type="date" />
        <br />

        <button type="button" onClick={savePlane}>
          Submit
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <td>Plane Names</td>
            <td>Paper Type</td>
            <td>Engineer Name</td>
            <td>Date of Completion</td>
            <td>Delete</td>
          </tr>
        </thead>
        <PlaneRows planes={planes} removePlaneRow={deletePlane} />
      </table>
    </div>
  );
};

export default Plane;
