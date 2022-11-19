import React from "react";
import PlaneRows from "./PlaneRows";

import { id } from "../../Constants";
import classNames from "classnames";

const Plane = ({
  planes,
  savePlane,
  deletePlane,
  displayPaperOptions,
  displayEngineerOptions,
  papers,
  engineers,
}) => {
  return (
    <div className="form">
      <form className="form__element">
        <h1>Planes Description</h1>
        <label>Plane Name</label>
        <input id={id.planes.planeName} />
        <br />
        <label>Paper Name</label>

        <select id={id.planes.planePaper}>{displayPaperOptions(papers)}</select>
        <br />

        <label>Engineer Name</label>

        <select id={id.planes.planeEngineer}>
          {displayEngineerOptions(engineers)}
        </select>
        <br />

        <label>Completion Date</label>
        <input id={id.planes.completionDate} type="date" />
        <br />

        <button className="btn--submit" type="button" onClick={savePlane}>
          Submit
        </button>
      </form>

      <table className="table__element">
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
