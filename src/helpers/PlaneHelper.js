import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import { id } from "../Constants";
import engineerHelper from "./EngineerHelper";
import paperHelper from "./PaperHelper";

const usePlane = () => {
  const [planes, setPlanes] = useState([]);
  useEffect(() => {
    _getPlanesLocally();
  }, []);

  const savePlane = () => {
    const valuePlaneName = utils.getIdValue(id.planes.planeName);
    const valuePlanePaper = utils.getIdValue(id.planes.planePaper);
    const valuePlaneEngineer = utils.getIdValue(id.planes.planeEngineer);
    const valueCompDate = utils.getIdValue(id.planes.completionDate);
    if (
      valuePlaneName.length > 1 &&
      valuePlanePaper !== "Select Paper" &&
      valuePlaneEngineer !== "Select Engineeer" &&
      valueCompDate
    ) {
      _savePlanesLocally({
        planeName: valuePlaneName,
        planePaper: valuePlanePaper,
        planeEngineer: valuePlaneEngineer,
        completionDate: valueCompDate,
      });
    } else {
      alert("Enter Valid inputs");
    }
    window.location.reload();
  };

  const _savePlanesLocally = (planeObj) => {
    if (planes != null) {
      const _planes = [planeObj, ...planes];
      restApiHelper.setItems("planes", _planes);
    } else {
      const _planes = [planeObj];
      restApiHelper.setItems("planes", _planes);
    }
    _getPlanesLocally();
  };

  const _getPlanesLocally = () => {
    const _planes = restApiHelper.getItems("planes");
    if (_planes !== null) {
      setPlanes(_planes);
    }
  };

  const deletePlane = (index) => {
    const planesUpdate = planes;
    planesUpdate.splice(index, 1);
    setPlanes(planesUpdate);
    restApiHelper.setItems("planes", planesUpdate);
    window.location.reload();
  };

  const displayEngineerOptions = () => {
    const { engineers } = engineerHelper.useEngineers();
    if (engineers) {
      return engineers.map((engineerObj, i) => (
        <option key={i}>{engineerObj.name}</option>
      ));
    } else {
      return [];
    }
  };

  const displayPaperOptions = () => {
    const { papers } = paperHelper.usePapers();

    if (papers) {
      return papers.map((paperObj, i) => (
        <option key={i}>{paperObj.type}</option>
      ));
    } else {
      return [];
    }
  };

  return {
    planes,
    savePlane,
    deletePlane,
    displayPaperOptions,
    displayEngineerOptions,
  };
};

export default { usePlane };
