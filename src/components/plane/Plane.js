import React, { useContext } from "react";
import { useState } from "react";
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
  const [compdate, setCompdate] = useState(null);

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
          defaultValue={planepaper}
          value={planepaper}
          onChange={(e) => setPlanepaper(e.target.value)}
          required
        >
          <option disabled selected>
            Choose Paper Name
          </option>
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
          <option disabled selected>
            Choose Engineer Name
          </option>
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
            if (planename && planepaper && planeengineer && compdate) {
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
              alert("fields need values");
            }
          }}
        >
          Submit
        </button>
      </form>
      <form name="engineers"></form>
      {planepaper}
      <table border="1">
        <tr>
          <td>Plane Name</td>
          <td>Paper Name</td>
          <td>Engineer Name</td>
          <td>Date of Completion</td>
        </tr>
        {planerows}
      </table>
      {namearr}
    </div>
  );
};

export default Plane;
