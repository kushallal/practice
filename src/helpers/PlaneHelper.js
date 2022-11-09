import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
const usePlane = () => {
  const [planes, setPlanes] = useState([]);
  useEffect(() => {
    getPlanesLocally();
  }, []);

  const getPlanesLocally = () => {
    const _planes = restApiHelper._getLocalItems("planes");
    setPlanes(_planes);
  };
  const savePlanesLocally = (planeObj) => {
    getPlanesLocally();
    if (planes != null) {
      const _planes = [planeObj, ...planes];
      restApiHelper._setLocalItems("planes", _planes);
    } else {
      const _planes = [planeObj];
      restApiHelper._setLocalItems("planes", _planes);
    }
    getPlanesLocally();
  };

  const savePlane = () => {
    const valuePlaneName = utils.getIdValue("planeName");
    const valuePlanePaper = utils.getIdValue("planePaper");
    const valuePlaneEngineer = utils.getIdValue("planeEngineer");
    const valueCompDate = utils.getIdValue("compDate");
    if (
      valuePlaneName.length > 1 &&
      valuePlanePaper !== "Select Paper" &&
      valuePlaneEngineer !== "Select Engineeer" &&
      valueCompDate
    ) {
      savePlanesLocally({
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
    restApiHelper._setLocalItems("planes", planes);
    window.location.reload();
  };

  return { planes, savePlane, deletePlane };
};
const _displayOptions = (_items) => {
  if (_items != null) {
    return _items
      .map((el) => Object.values(el))
      .map((el, i) => <option key={i}>{el[0]}</option>);
  } else return <option>Select Option</option>;
};

export default { usePlane, _displayOptions };
