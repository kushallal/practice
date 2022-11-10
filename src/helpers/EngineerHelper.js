import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import constants from "../Constants";

const useEngineers = () => {
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    _getEngineersLocally();
  }, []);

  const _getEngineersLocally = () => {
    const _engineers = restApiHelper.getItems("engineers");
    setEngineers(_engineers);
  };
  const _saveEngineersLocally = (engineerObj) => {
    _getEngineersLocally();
    if (engineers != null) {
      const _engineers = [engineerObj, ...engineers];
      restApiHelper.setItems("engineers", _engineers);
    } else {
      const _engineers = [engineerObj];
      restApiHelper.setItems("engineers", _engineers);
    }
    _getEngineersLocally();
  };

  const saveEngineer = () => {
    const valueName = utils.getIdValue(constants.id.engineers.name);
    const valueAge = utils.getIdValue(constants.id.engineers.age);
    const valueExp = utils.getIdValue(constants.id.engineers.experience);
    if (valueAge >= 18 && valueExp >= 2 && valueName.length > 1) {
      _saveEngineersLocally({
        name: valueName,
        age: valueAge,
        experience: valueExp,
      });
    } else {
      alert("Enter Valid inputs");
    }
    window.location.reload();
  };
  const deleteEngineer = (index) => {
    engineers.splice(index, 1);
    restApiHelper.setItems("engineers", engineers);
    window.location.reload();
  };
  return { engineers, saveEngineer, deleteEngineer };
};

// export const getEngineerNames = (arr) => {
//   const array = arr.map((el) => Object.values(el));
//   const nameArray = array.map((el) => el[0]);
//   return nameArray;
// };
export default { useEngineers };
