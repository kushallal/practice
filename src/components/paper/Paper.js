import React, { useState, useEffect } from "react";
import PaperRows from "./PaperRows";
import paperHelper from "../../helpers/PaperHelper";
import constants from "../../Constants";

const Paper = () => {
  const { paperOptions, papers, savePaper, deletePaper } =
    paperHelper.usePapers();

  return (
    <div>
      <form>
        <h1>Paper Description</h1>
        <label>Paper Type</label>
        <select id={constants.id.papers.type}>{paperOptions}</select>
        <br />

        <label>Paper Length</label>
        <input id={constants.id.papers.length} type="number" required />
        <br />

        <label>Paper Height</label>
        <input id={constants.id.papers.height} type="number" required />
        <br />

        <button type="button" onClick={savePaper}>
          Submit
        </button>
      </form>

      <table>
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
