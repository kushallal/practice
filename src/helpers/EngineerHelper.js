import { useState, useEffect, createContext } from "react";
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
        engineerName: valueName,
        engineerAge: valueAge,
        engineerExperience: valueExp,
      });
    } else {
      alert("Enter Valid inputs");
    }
  };

  const _saveEngineersLocally = async (engineerObj) => {
    try {
      await restApiHelper.setItem("engineers", engineerObj);
      _getEngineersLocally();
    } catch (err) {
      console.error(err);
    }
  };

  const _getEngineersLocally = async () => {
    try {
      const resEngineers = await restApiHelper.getItems("engineers");
      const _engineers = await resEngineers.json();
      setEngineers(_engineers);
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
