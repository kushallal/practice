import React, { useState, createContext } from "react";
import Plane from "../plane/Plane";
import EngineerRows from "./EngineerRows";
import { EngineerFieldsCheck } from "../../helper";
export const EngineerContext = createContext([]);
const Engineer = () => {
  const [engineerrows, setEngineerrows] = useState([]);
  const [name, setName] = useState("");
  const [namearr, setNamearr] = useState([]);
  const [age, setAge] = useState("");
  const [exp, setExp] = useState("");
  return (
    <div>
      <form name="engineers">
        <h1>Engineer Description</h1>
        <label>Name</label>
        <input
          value={name}
          onChange={(en) => setName(en.target.value)}
          minLength="2"
          required
        />

        <br />
        <label>Age</label>
        <input
          value={age}
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              setAge(e.target.value);
            }
          }}
          type="numbers"
          required
        />
        <br />

        <label>Experience</label>
        <input
          value={exp}
          onChange={(e) => {
            if (!isNaN(e.target.value)) {
              setExp(e.target.value);
            }
          }}
          type="numbers"
          required
        />
        <br />
        <button
          type="button"
          onClick={() => {
            if (name && age > 0 && exp > 0) {
              setEngineerrows((old) => [
                <EngineerRows ename={name} eage={age} eexp={exp} />,
                ...old,
              ]);

              setNamearr((old) => [...old, name]);
            } else {
              alert("fields need values");
            }
          }}
        >
          Submit
        </button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Experience</td>
          </tr>
        </thead>
        <tbody>{engineerrows}</tbody>
      </table>
      <EngineerContext.Provider value={namearr}>
        <Plane />
      </EngineerContext.Provider>
    </div>
  );
};

export default Engineer;
