import React, { useState, useEffect } from "react";
import { getPaperOptions,createPaperObject } from "../../helpers/PaperHelper";
import { getPapers } from "../../helpers/RestApiHelper";
import { displayRows } from "../../helpers/Utils";
const Paper = () => {
  useEffect(() => {
    getPapers().then((data) => setPapers(data));
  }, []);
  const [papers, setPapers] =useState([]);

  const [paperRows, setPaperRows] = useState([]);

  const addPaperRow = () => {
    const paperObj = createPaperObject("paperType","paperLength",
    "paperHeight")
    if(paperObj){
      setPaperRows((old)=>[...old,paperObj])
    }
  };
  return (
    <div>
      <form name="paperdescription">
        <h1>Paper Description</h1>
        <label>Paper Type</label>
        <select id="paperType">{getPaperOptions(papers)}</select>
        <br />

        <label>Paper Length</label>
        <input id="paperLength" type="number" required />
        <br />

        <label>Paper Height</label>
        <input id="paperHeight" type="number" required />
        <br />

        <button type="button" onClick={addPaperRow}>Submit</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <td>Paper Type</td>
            <td>Paper Length</td>
            <td>Paper Width</td>
          </tr>
        </thead>
        <tbody>{displayRows(paperRows)}</tbody>
      </table>
    </div>
  );
};

export default Paper;
