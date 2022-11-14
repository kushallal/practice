import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import { id } from "../Constants";

export const usePapers = () => {
  const [papers, setPapers] = useState([]);
  const [paperOptions, setPaperOptions] = useState([]);
  useEffect(() => {
    _getPapersLocally();
    restApiHelper
      .getPapersOptions()
      .then((paperTypes) =>
        setPaperOptions(
          paperTypes.map((paperType, i) => (
            <option key={i} value={paperType}>
              {paperType}
            </option>
          ))
        )
      )
      .catch((err) => alert(err));
  }, []);

  const savePaper = () => {
    const valueType = utils.getIdValue(id.papers.type);
    const valueLength = utils.getIdValue(id.papers.length);
    const valueHeight = utils.getIdValue(id.papers.height);
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

  const _savePapersLocally = (paperObj) => {
    if (papers != null) {
      const _papers = [paperObj, ...papers];
      restApiHelper.setItems("papers", _papers);
    } else {
      const _papers = [paperObj];
      restApiHelper.setItems("papers", _papers);
    }
    _getPapersLocally();
  };

  const _getPapersLocally = () => {
    const _papers = restApiHelper.getItems("papers");
    setPapers(_papers);
  };

  const deletePaper = (index) => {
    const papersUpdatedValue = papers;
    papersUpdatedValue.splice(index, 1);
    setPapers(papersUpdatedValue);
    restApiHelper.setItems("papers", papersUpdatedValue);
    window.location.reload();
  };

  return { paperOptions, papers, savePaper, deletePaper };
};

export default { usePapers };
