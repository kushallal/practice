import React, { useContext } from "react";
import { useState } from "react";
import { createPlaneObject, displayOptions } from "../../helpers/PlaneHelper";
import { displayRows } from "../../helpers/Utils";

const Plane = () => {
  const paperTypeArr = ["name1", "name3"];
  const nameArr = ["kushal"];
  const [planeRows, setPlaneRows] = useState([]);
  const addPlaneRow = () => {
    const planeObj = createPlaneObject(
      "planeName",
      "planePaper",
      "planeEngineer",
      "compDate"
    );
    console.log(planeObj);
    if (planeObj) {
      setPlaneRows((old) => [...old, planeObj]);
    }
  };
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
          {displayOptions(paperTypeArr)}
        </select>
        <br />

        <label>Engineer Name</label>

        <select id="planeEngineer">
          <option>Select Engineer</option>
          {displayOptions(nameArr)}
        </select>
        <br />

        <label>Completion Date</label>
        <input id="compDate" type="date" />
        <br />

        <button type="button" onClick={addPlaneRow}>
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
          </tr>
        </thead>
        <tbody>{displayRows(planeRows)}</tbody>
      </table>
    </div>
  );
};

export default Plane;
