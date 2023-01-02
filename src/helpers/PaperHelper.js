import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import { id } from "../Constants";

export const usePapers = () => {
  const [papers, setPapers] = useState([]);
  const [paperOptions, setPaperOptions] = useState([]);
  useEffect(() => {
    const fetchOptions = async () => {
      const response = await restApiHelper.getItems("options");
      const types = await response.json();
      setPaperOptions(
        types[0].options.map((type, i) => <option key={i}>{type}</option>)
      );
    };
    fetchOptions();
    _getPapersLocally();
  }, []);

  const savePaper = () => {
    const valueType = utils.getIdValue(id.papers.type);
    const valueLength = utils.getIdValue(id.papers.length);
    const valueHeight = utils.getIdValue(id.papers.height);
    if (valueLength > 0 && valueHeight > 0) {
      const paperObj = {
        paperType: valueType,
        paperLength: valueLength,
        paperHeight: valueHeight,
      };
      _savePapersLocally(paperObj);
    } else {
      alert("Enter Valid inputs");
    }
  };

  const _savePapersLocally = async (paperObj) => {
    try {
      await restApiHelper.setItem("papers", paperObj);
      _getPapersLocally();
    } catch (err) {
      console.error(err);
    }
  };

  const _getPapersLocally = async () => {
    try {
      const resPapers = await restApiHelper.getItems("papers");
      const _papers = await resPapers.json();
      setPapers(_papers);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePaper = async (id) => {
    try {
      await restApiHelper.delItem(`papers/${id}`);
      await _getPapersLocally();
    } catch (err) {
      console.error(err);
    }
  };

  return { paperOptions, papers, savePaper, deletePaper };
};

export default { usePapers };
