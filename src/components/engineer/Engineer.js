import React, { useState, createContext } from "react";
import { createEngineerObject } from "../../helpers/EngineerHelper";
import { displayRows } from "../../helpers/Utils";

const Engineer = () => {
  const [engineerRows, setEngineerRows] = useState([
    
  ]);
  
  const addEngineerRows = () => {
    const engineerObj = createEngineerObject("name", "age", "exp")
    if (engineerObj){

      setEngineerRows((old) => [
        ...old,
        engineerObj
      ]);
    }
  };
  


  
  return (
    <div>
      <form name="engineers">
        <h1>Engineer Description</h1>
        <label>Name</label>
        <input type="text" id="name" required />

        <br />
        <label>Age</label>
        <input type="numbers" id="age" required />
        <br />

        <label>Experience</label>
        <input type="numbers" id="exp" required />
        <br />
        <button type="button" onClick={addEngineerRows}>
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
        <tbody>{displayRows(engineerRows)}</tbody>
      </table>
    </div>
  );
};

export default Engineer;
