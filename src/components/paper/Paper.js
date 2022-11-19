import PaperRows from "./PaperRows";
import { id } from "../../Constants";

const Paper = ({ paperOptions, papers, savePaper, deletePaper }) => {
  return (
    <div className="form">
      <form className="form__element">
        <h1>Paper Description</h1>
        <label>Paper Type</label>
        <select id={id.papers.type}>{paperOptions}</select>
        <br />

        <label>Paper Length</label>
        <input id={id.papers.length} type="number" required />
        <br />

        <label>Paper Height</label>
        <input id={id.papers.height} type="number" required />
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
