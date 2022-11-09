import React, { useState, useEffect } from "react";
import PaperRows from "./PaperRows";
import paperHelper from "../../helpers/PaperHelper";
import restApiHelper from "../../helpers/RestApiHelper";

const Paper = () => {
  const [paperOptions, setPaperOptions] = useState([]);
  useEffect(() => {
    restApiHelper
      .getPapersOptions()
      .then((_options) =>
        setPaperOptions(
          _options.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))
        )
      )
      .catch((err) => alert.error(err));
  }, []);

  const { papers, savePaper, deletePaper } = paperHelper.usePapers();
  console.log();

  return (
    <div>
      <form name="paperdescription">
        <h1>Paper Description</h1>
        <label>Paper Type</label>
        <select id="paperType">{paperOptions}</select>
        <br />

        <label>Paper Length</label>
        <input id="paperLength" type="number" required />
        <br />

        <label>Paper Height</label>
        <input id="paperHeight" type="number" required />
        <br />

        <button type="button" onClick={savePaper}>
          Submit
        </button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <td>Paper Type</td>
            <td>Paper Length</td>
            <td>Paper Width</td>
            <td>Delete</td>
          </tr>
        </thead>
        <PaperRows papers={papers} func={deletePaper} />
      </table>
    </div>
  );
};

export default Paper;
