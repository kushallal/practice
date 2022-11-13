import React from "react";
import engineerHelper from "../../helpers/EngineerHelper";
import EngineerRows from "./EngineerRows";
import { id } from "../../Constants";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Engineer = () => {
  const { theme } = useContext(ThemeContext);
  const { engineers, saveEngineer, deleteEngineer } =
    engineerHelper.useEngineers();

  return (
    <div className={classNames({ form__light: !theme }, { form__dark: theme })}>
      <form className="form__element">
        <h1>Engineer Description</h1>
        <label>Name</label>
        <input
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          type="text"
          id={id.engineers.name}
          required
        />

        <br />
        <label>Age</label>
        <input
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          type="numbers"
          id={id.engineers.age}
          required
        />
        <br />

        <label>Experience</label>
        <input
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          type="numbers"
          id={id.engineers.experience}
          required
        />
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
