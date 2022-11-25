import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import { id } from "../Constants";

const useEngineers = () => {
  const [engineers, setEngineers] = useState([]);
  useEffect(() => {
    _getEngineersLocally();
  }, []);

  const saveEngineer = () => {
    const valueName = utils.getIdValue(id.engineers.name);
    const valueAge = utils.getIdValue(id.engineers.age);
    const valueExp = utils.getIdValue(id.engineers.experience);

    if (valueAge >= 18 && valueExp >= 2 && valueName.length > 1) {
      _saveEngineersLocally({
        name: valueName,
        age: valueAge,
        experience: valueExp,
      });
    } else {
      alert("Enter Valid inputs");
    }
  };

  const _saveEngineersLocally = (engineerObj) => {
    if (engineers != null) {
      const _engineers = [...engineers, engineerObj];
      restApiHelper.setItems("engineers", _engineers);
    } else {
      const _engineers = [engineerObj];
      restApiHelper.setItems("engineers", _engineers);
    }
    _getEngineersLocally();
  };

  const _getEngineersLocally = async () => {
    try {
      await restApiHelper
        .getItems("engineers")
        .then((engineers) => engineers.json())
        .then((jsonEngineers) => {
          setEngineers(jsonEngineers);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const deleteEngineer = async (id) => {
    try {
      await restApiHelper.delItem(`engineers/${id}`);
      await _getEngineersLocally();
    } catch (err) {
      console.error(err);
    }
  };

  return { engineers, saveEngineer, deleteEngineer };
};

export default { useEngineers };
