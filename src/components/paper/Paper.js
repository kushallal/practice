import PaperRows from "./PaperRows";
import paperHelper from "../../helpers/PaperHelper";
import { id } from "../../Constants";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Paper = () => {
  const { theme } = useContext(ThemeContext);
  const { paperOptions, papers, savePaper, deletePaper } =
    paperHelper.usePapers();

  return (
    <div className={classNames({ form__light: !theme }, { form__dark: theme })}>
      <form className="form__element">
        <h1>Paper Description</h1>
        <label>Paper Type</label>
        <select
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          id={id.papers.type}
        >
          {paperOptions}
        </select>
        <br />

        <label>Paper Length</label>
        <input
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          id={id.papers.length}
          type="number"
          required
        />
        <br />

        <label>Paper Height</label>
        <input
          className={classNames(
            { input__light: !theme },
            { input__dark: theme }
          )}
          id={id.papers.height}
          type="number"
          required
        />
        <br />

        <button type="button" className="btn--submit" onClick={savePaper}>
          Submit
        </button>
      </form>

      <table className="table__element">
        <thead>
          <tr>
            <td>Paper Type</td>
            <td>Paper Length</td>
            <td>Paper Width</td>
            <td>Delete</td>
          </tr>
        </thead>
        <PaperRows papers={papers} removePaperRow={deletePaper} />
      </table>
    </div>
  );
};

export default Paper;
