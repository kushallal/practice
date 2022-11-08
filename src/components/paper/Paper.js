import React, { useState, useEffect } from "react";
import { getPaperOptions } from "../../helpers/PaperHelper";
import { getPapers } from "../../helpers/RestApiHelper";
const Paper = () => {
  useEffect(() => {
    getPapers().then((data) => setPapers(data));
  }, []);
  const [papers, setPapers] = useState([]);

  const [paperRow, setPaperRow] = useState([]);

  const addPaperRow = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <form name="paperdescription">
        <h1>Paper Description</h1>
        <label>Paper Type</label>
        <select name="paperType">{getPaperOptions(papers)}</select>
        <br />

        <label>Paper Length</label>
        <input name="paperLength" type="number" required />
        <br />

        <label>Paper Height</label>
        <input name="paperHeight" type="number" required />
        <br />

        <button type="submit">Submit</button>
      </form>

      {/* <table border="1">
        <thead>
          <tr>
            <td>Paper Type</td>
            <td>Paper Length</td>
            <td>Paper Width</td>
          </tr>
        </thead>
        <tbody>1</tbody>
      </table> */}
    </div>
  );
};

export default Paper;
