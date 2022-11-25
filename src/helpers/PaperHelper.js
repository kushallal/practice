import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import { id } from "../Constants";

export const usePapers = () => {
  const [papers, setPapers] = useState([]);
  const [paperOptions, setPaperOptions] = useState([]);
  useEffect(() => {
    restApiHelper
      .getPapersOptions()
      .then((options) => options.json())
      .then((jsonOptions) =>
        setPaperOptions(
          jsonOptions[0].options.map((paperType, i) => (
            <option key={i} value={paperType}>
              {paperType}
            </option>
          ))
        )
      );
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
    // const _papers = restApiHelper.getItems("papers");
    // try {
    //   _papers
    //     .then((paper) => paper.json())
    //     .then((jsonPaper) => setPapers(jsonPaper));
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const deletePaper = (index) => {
    const papersUpdatedValue = papers;
    papersUpdatedValue.splice(index, 1);
    restApiHelper.setItems("papers", papersUpdatedValue);
    _getPapersLocally();
  };

  return { paperOptions, papers, savePaper, deletePaper };
};

export default { usePapers };
