import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import { id } from "../Constants";

const usePlane = () => {
  const [planes, setPlanes] = useState([]);
  const [paperOptions, setPaperOptions] = useState([]);
  const [engineerOptions, setEngineerOptions] = useState([]);
  useEffect(() => {
    const fetchOptions = async () => {
      const resTypes = await restApiHelper.getItems("papers/types");
      const types = await resTypes.json();
      const resNames = await restApiHelper.getItems("engineers/names");
      const names = await resNames.json();
      console.log(names);
      setPaperOptions(types.map((type, i) => <option key={i}>{type}</option>));
      setEngineerOptions(
        names.map((name, i) => <option key={i}>{name}</option>)
      );
    };
    fetchOptions();
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
        paperUsed: valuePlanePaper,
        planeEngineer: valuePlaneEngineer,
        completionDate: valueCompDate,
      });
    } else {
      alert("Enter Valid inputs");
    }
  };

  const _savePlanesLocally = async (planeObj) => {
    try {
      await restApiHelper.setItem("planes", planeObj);
      _getPlanesLocally();
    } catch (err) {
      console.error(err);
    }
  };

  const _getPlanesLocally = async () => {
    try {
      const resPlanes = await restApiHelper.getItems("planes");
      const _planes = await resPlanes.json();
      setPlanes(_planes);
    } catch (err) {
      console.log(err);
    }
  };

  const deletePlane = async (id) => {
    try {
      await restApiHelper.delItem(`planes/${id}`);
      await _getPlanesLocally();
    } catch (err) {
      console.error(err);
    }
  };

  return {
    planes,
    paperOptions,
    engineerOptions,
    savePlane,
    deletePlane,
  };
};

export default { usePlane };
