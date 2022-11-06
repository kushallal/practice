import React, { useContext } from "react";
import { useState } from "react";
import { PlaneFieldsCheck } from "../../helper";
import { EngineerContext } from "../engineer/Engineer";
import { PaperContext } from "../paper/Paper";
import PlaneRows from "./PlaneRows";

const Plane = () => {
  const papernamearr = useContext(PaperContext);
  const namearr = useContext(EngineerContext);
  const [planerows, setPlanerows] = useState([]);
  const [planename, setPlanename] = useState("");
  const [planepaper, setPlanepaper] = useState("");
  const [planeengineer, setPlaneengineer] = useState("");
  const [compdate, setCompdate] = useState("");

  return (
    <div>
      <form name="planes">
        <h1>Planes Description</h1>
        <label>Plane Name</label>
        <input
          value={planename}
          onChange={(e) => setPlanename(e.target.value)}
        />
        <br />
        <label>Paper Name</label>

        <select
          value={planepaper}
          onChange={(e) => setPlanepaper(e.target.value)}
          required
        >
          <option>Select Paper</option>
          {papernamearr.map((el) => (
            <option>{el}</option>
          ))}
        </select>
        <br />

        <label>Engineer Name</label>

        <select
          value={planeengineer}
          onChange={(e) => setPlaneengineer(e.target.value)}
          required
        >
          <option>Select Engineer</option>
          {namearr.map((el) => (
            <option>{el}</option>
          ))}
        </select>
        <br />

        <label>Completion Date</label>
        <input
          value={compdate}
          onChange={(e) => setCompdate(e.target.value)}
          type="date"
          required
        />
        <br />

        <button
          type="button"
          onClick={() => {
            if (
              PlaneFieldsCheck(planename, planepaper, planeengineer, compdate)
            ) {
              setPlanerows((old) => [
                <PlaneRows
                  name={planename}
                  paper={planepaper}
                  eng={planeengineer}
                  cdate={compdate}
                />,
                old,
              ]);
            } else {
              alert("fields need prop values");
            }
          }}
        >
          Submit
        </button>
      </form>
      <form name="engineers"></form>

      <table border="1">
        <thead>
          <tr>
            <td>Plane Name</td>
            <td>Paper Name</td>
            <td>Engineer Name</td>
            <td>Date of Completion</td>
          </tr>
        </thead>
        <tbody>{planerows}</tbody>
      </table>
    </div>
  );
};

export default Plane;
