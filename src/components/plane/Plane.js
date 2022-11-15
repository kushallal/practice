import React from "react";
import PlaneRows from "./PlaneRows";
import planeHelper from "../../helpers/PlaneHelper";
import { id } from "../../Constants";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Plane = ({
  planes,
  savePlane,
  deletePlane,
  displayPaperOptions,
  displayEngineerOptions,
  papers,
  engineers,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classNames({ form__light: !theme }, { form__dark: theme })}>
      <form className="form__element">
        <h1>Planes Description</h1>
        <label>Plane Name</label>
        <input
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          id={id.planes.planeName}
        />
        <br />
        <label>Paper Name</label>

        <select
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          id={id.planes.planePaper}
        >
          {displayPaperOptions(papers)}
        </select>
        <br />

        <label>Engineer Name</label>

        <select
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          id={id.planes.planeEngineer}
        >
          {displayEngineerOptions(engineers)}
        </select>
        <br />

        <label>Completion Date</label>
        <input
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          id={id.planes.completionDate}
          type="date"
        />
        <br />

        <button className="btn--submit" type="button" onClick={savePlane}>
          Submit
        </button>
      </form>

      <table className="table__element">
        <thead>
          <tr>
            <td>Plane Names</td>
            <td>Paper Type</td>
            <td>Engineer Name</td>
            <td>Date of Completion</td>
            <td>Delete</td>
          </tr>
        </thead>
        <PlaneRows planes={planes} removePlaneRow={deletePlane} />
      </table>
    </div>
  );
};

export default Plane;
