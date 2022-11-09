import React from "react";
import engineerHelper from "../../helpers/EngineerHelper";
import EngineerRows from "./EngineerRows";
const Engineer = () => {
  const { engineers, saveEngineer, deleteEngineer } =
    engineerHelper.useEngineers();

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
        <button type="button" onClick={saveEngineer}>
          Submit
        </button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Experience</td>
            <td>Delete</td>
          </tr>
        </thead>
        <EngineerRows engineers={engineers} func={deleteEngineer} />
      </table>
    </div>
  );
};

export default Engineer;
