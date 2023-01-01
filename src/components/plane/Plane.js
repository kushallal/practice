import React from "react";
import PlaneRows from "./PlaneRows";
import { id } from "../../Constants";
import planeHelper from "../../helpers/PlaneHelper";

const Plane = () => {
  const { planes, paperOptions, engineerOptions, savePlane, deletePlane } =
    planeHelper.usePlane();
  return (
    <div className="form">
      <form className="form__element" encType="multipart/form-data">
        <h1>Planes Description</h1>
        <label>Plane Name</label>
        <input id={id.planes.planeName} />
        <br />
        <label>Paper Name</label>

        <select id={id.planes.planePaper}>{paperOptions}</select>
        <br />

        <label>Engineer Name</label>

        <select id={id.planes.planeEngineer}>{engineerOptions}</select>
        <br />

        <label>Completion Date</label>
        <input id={id.planes.completionDate} type="date" />
        <br />

        <label>Photo</label>
        <input type="file" id={id.planes.imageFile} />
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
