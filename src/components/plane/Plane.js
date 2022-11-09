import React from "react";
import PlaneRows from "./PlaneRows";
import restApiHelper from "../../helpers/RestApiHelper";
import planeHelper from "../../helpers/PlaneHelper";

const Plane = () => {
  const _papers = restApiHelper._getLocalItems("papers");

  const _engineers = restApiHelper._getLocalItems("engineers");

  const { planes, savePlane, deletePlane } = planeHelper.usePlane();
  return (
    <div>
      <form name="planes">
        <h1>Planes Description</h1>
        <label>Plane Name</label>
        <input id="planeName" />
        <br />
        <label>Paper Name</label>

        <select id="planePaper">
          <option>Select Paper</option>
          {_papers
            .map((el) => Object.values(el))
            .map((el, i) => (
              <option key={i}>{el[0]}</option>
            ))}
        </select>
        <br />

        <label>Engineer Name</label>

        <select id="planeEngineer">
          <option>Select Engineer</option>
          {_engineers
            .map((el) => Object.values(el))
            .map((el, i) => (
              <option key={i}>{el[0]}</option>
            ))}
        </select>
        <br />

        <label>Completion Date</label>
        <input id="compDate" type="date" />
        <br />

        <button type="button" onClick={savePlane}>
          Submit
        </button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <td>Plane Names</td>
            <td>Paper Type</td>
            <td>Engineer Name</td>
            <td>Date of Completion</td>
            <td>Delete</td>
          </tr>
        </thead>
        <PlaneRows planes={planes} func={deletePlane} />
      </table>
    </div>
  );
};

export default Plane;
