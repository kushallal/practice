import React from "react";
import EngineerRows from "./EngineerRows";
import { id } from "../../Constants";
import engineerHelper from "../../helpers/EngineerHelper";

const Engineer = () => {
  const { engineers, saveEngineer, deleteEngineer } =
    engineerHelper.useEngineers();
  return (
    <div className="form">
      <form className="form__element">
        <h1>Engineer Description</h1>
        <label>Name</label>
        <input type="text" id={id.engineers.name} required />

        <br />
        <label>Age</label>
        <input type="numbers" id={id.engineers.age} required />
        <br />

        <label>Experience</label>
        <input type="numbers" id={id.engineers.experience} required />
        <br />
        <button className="btn--submit" type="button" onClick={saveEngineer}>
          Submit
        </button>
      </form>

      <table className="table__element">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Experience</td>
            <td>Delete</td>
          </tr>
        </thead>
        <EngineerRows
          engineers={engineers}
          removeEngineerRow={deleteEngineer}
        />
      </table>
    </div>
  );
};

export default Engineer;
