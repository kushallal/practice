import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
export const usePapers = () => {
  const [papers, setPapers] = useState([]);
  useEffect(() => {
    getPapersLocally();
  }, []);

  const getPapersLocally = () => {
    const _papers = restApiHelper._getLocalItems("papers");
    setPapers(_papers);
  };
  const savePapersLocally = (paperObj) => {
    getPapersLocally();
    if (papers != null) {
      const _papers = [paperObj, ...papers];
      restApiHelper._setLocalItems("papers", _papers);
    } else {
      const _papers = [paperObj];
      restApiHelper._setLocalItems("papers", _papers);
    }
    getPapersLocally();
  };

  const savePaper = () => {
    const valueType = utils.getIdValue("paperType");
    const valueLength = utils.getIdValue("paperLength");
    const valueHeight = utils.getIdValue("paperHeight");
    if (valueLength > 0 && valueHeight > 0) {
      savePapersLocally({
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
    restApiHelper._setLocalItems("papers", papers);
    window.location.reload();
  };

  return { papers, savePaper, deletePaper };
};

export default { usePapers };
