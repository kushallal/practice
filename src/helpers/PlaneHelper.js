import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import paperHelper from "./PaperHelper";
import engineerHelper from "./EngineerHelper";
import constants from "../Constants";

const usePlane = () => {
  const [planes, setPlanes] = useState([]);
  useEffect(() => {
    _getPlanesLocally();
  }, []);

  const _getPlanesLocally = () => {
    const _planes = restApiHelper.getItems("planes");
    setPlanes(_planes);
  };
  const _savePlanesLocally = (planeObj) => {
    _getPlanesLocally();
    if (planes != null) {
      const _planes = [planeObj, ...planes];
      restApiHelper.setItems("planes", _planes);
    } else {
      const _planes = [planeObj];
      restApiHelper.setItems("planes", _planes);
    }
    _getPlanesLocally();
  };

  const savePlane = () => {
    const valuePlaneName = utils.getIdValue(constants.id.planes.planeName);
    const valuePlanePaper = utils.getIdValue(constants.id.planes.planePaper);
    const valuePlaneEngineer = utils.getIdValue(
      constants.id.planes.planeEngineer
    );
    const valueCompDate = utils.getIdValue(constants.id.planes.completionDate);
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
  const deletePlane = (index) => {
    planes.splice(index, 1);
    restApiHelper.setItems("planes", planes);
    window.location.reload();
  };

  return { planes, savePlane, deletePlane };
};
const displayEngineerOptions = () => {
  const { engineers } = engineerHelper.useEngineers();
  return engineers.map((engineerObj) => <option>{engineerObj.name}</option>);
};
const displayPaperOptions = () => {
  const { papers } = paperHelper.usePapers();

  return papers.map((paperObj) => <option>{paperObj.type}</option>);
};

export default { usePlane, displayEngineerOptions, displayPaperOptions };
