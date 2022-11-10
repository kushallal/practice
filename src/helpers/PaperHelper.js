import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import constants from "../Constants";

export const usePapers = () => {
  const [papers, setPapers] = useState([]);
  const [paperOptions, setPaperOptions] = useState([]);
  useEffect(() => {
    _getPapersLocally();
    restApiHelper
      .getPapersOptions()
      .then((paper) =>
        setPaperOptions(
          paper.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))
        )
      )
      .catch((err) => alert(err));
  }, []);

  const _getPapersLocally = () => {
    const _papers = restApiHelper.getItems("papers");
    setPapers(_papers);
  };
  const _savePapersLocally = (paperObj) => {
    _getPapersLocally();
    if (papers != null) {
      const _papers = [paperObj, ...papers];
      restApiHelper.setItems("papers", _papers);
    } else {
      const _papers = [paperObj];
      restApiHelper.setItems("papers", _papers);
    }
    _getPapersLocally();
  };

  const savePaper = () => {
    const valueType = utils.getIdValue(constants.id.papers.type);
    const valueLength = utils.getIdValue(constants.id.papers.length);
    const valueHeight = utils.getIdValue(constants.id.papers.height);
    if (valueLength > 0 && valueHeight > 0) {
      _savePapersLocally({
        type: valueType,
        length: valueLength,
        height: valueHeight,
      });
    } else {
      alert("Enter Valid inputs");
    }
    window.location.reload();
  };
  const deletePaper = (index) => {
    papers.splice(index, 1);
    restApiHelper.setItems("papers", papers);
    window.location.reload();
  };

  return { paperOptions, papers, savePaper, deletePaper };
};

export default { usePapers };
