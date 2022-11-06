import React, { useState, createContext } from "react";
import PaperRows from "./PaperRows";
import Plane from "../plane/Plane";
import Engineer from "../engineer/Engineer";
export const PaperContext = createContext([]);
const Paper = () => {
  const [paperrow, setPaperrow] = useState([]);
  const [papername, setPapername] = useState();
  const [paperlen, setPaperlen] = useState("");
  const [paperheight, setPaperheight] = useState("");
  const [papernamearr, setPapernamearr] = useState([]);

  return (
    <div>
      <form name="paperdes">
        <h1>Paper Description</h1>
        <label>Paper Type</label>
        <select
          value={papername}
          onChange={(en) => {
            setPapername(en.target.value);
          }}
          required
        >
          <option disabled selected>
            Select Paper Type
          </option>
          <option>White Paper</option>
          <option>Nepali Paper</option>
        </select>
        <br />
        <label>Paper Length</label>
        <input
          value={paperlen}
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              setPaperlen(e.target.value);
            }
          }}
          type="numbers"
          required
        />
        <br />

        <label>Paper Height</label>
        <input
          value={paperheight}
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              setPaperheight(e.target.value);
            }
          }}
          type="numbers"
          required
        />
        <br />

        <button
          type="button"
          onClick={() => {
            if (papername && paperlen > 0 && paperheight > 0) {
              setPaperrow((old) => [
                <PaperRows
                  name={papername}
                  len={paperlen}
                  height={paperheight}
                />,
                ...old,
              ]);
              setPapernamearr((old) => [papername, ...old]);
            } else {
              alert("Fields need values");
            }
          }}
        >
          Submit
        </button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <td>Paper Type</td>
            <td>Paper Length</td>
            <td>Paper Width</td>
          </tr>
        </thead>
        <tbody>{paperrow}</tbody>
      </table>
      <PaperContext.Provider value={papernamearr}>
        <Engineer />
      </PaperContext.Provider>
    </div>
  );
};

export default Paper;
