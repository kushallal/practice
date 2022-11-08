import React, { useState, createContext } from "react";
import { createEngineerObject } from "../../helpers/EngineerHelper";
import { getIdValue } from "../../helpers/Utils";
const Engineer = () => {
  const [engineerRows, setEngineerRows] = useState([
    {
      name: "kushal",
      age: 12,
      exp: 11,
    },
  ]);
  const [tableRows, setTableRows] = useState();
  const addEngineerRows = () => {
    setEngineerRows((old) => [
      ...old,
      createEngineerObject("name", "age", "exp"),
    ]);
  };
  const displayEngineerRows = (arr) => {
    return arr.map((element) => {
      const array = Object.values(element);
      console.log("inside", array);
      return (
        <tr>
          {array.map((el) => (
            <td>{el}</td>
          ))}
        </tr>
      );
    });
  };

  console.log();
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
        <tbody>{console.log(displayEngineerRows(engineerRows)[0])}</tbody>
      </table>
    </div>
  );
};

export default Engineer;
