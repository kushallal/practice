import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
const useEngineers = () => {
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    getEngineersLocally();
  }, []);

  const getEngineersLocally = () => {
    const _engineers = restApiHelper._getLocalItems("engineers");
    setEngineers(_engineers);
  };
  const saveEngineersLocally = (engineerObj) => {
    getEngineersLocally();
    if (engineers != null) {
      const _engineers = [engineerObj, ...engineers];
      restApiHelper._setLocalItems("engineers", _engineers);
    } else {
      const _engineers = [engineerObj];
      restApiHelper._setLocalItems("engineers", _engineers);
    }
    getEngineersLocally();
  };

  const saveEngineer = () => {
    const valueName = utils.getIdValue("name");
    const valueAge = utils.getIdValue("age");
    const valueExp = utils.getIdValue("exp");
    if (valueAge >= 18 && valueExp >= 2 && valueName.length > 1) {
      saveEngineersLocally({
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
    restApiHelper._setLocalItems("engineers", engineers);
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
