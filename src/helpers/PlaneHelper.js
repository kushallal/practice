import { useState, useEffect } from "react";
import utils from "./Utils";
import restApiHelper from "./RestApiHelper";
import { id } from "../Constants";
import { ethers } from "ethers";

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

      setPaperOptions(types.map((type, i) => <option key={i}>{type}</option>));
      setEngineerOptions(
        names.map((name, i) => <option key={i}>{name}</option>)
      );
    };
    fetchOptions();
    _getPlanesLocally();
  }, []);

  const savePlane = async () => {
    const valuePlaneName = utils.getIdValue(id.planes.planeName);
    const valuePlanePaper = utils.getIdValue(id.planes.planePaper);
    const valuePlaneEngineer = utils.getIdValue(id.planes.planeEngineer);
    const valueCompDate = utils.getIdValue(id.planes.completionDate);
    const valueFile = document.getElementById(id.planes.imageFile).files[0];

    if (
      valuePlaneName.length > 1 &&
      valuePlanePaper !== "Select Paper" &&
      valuePlaneEngineer !== "Select Engineeer" &&
      valueCompDate &&
      valueFile
    ) {
      const planeObj = {
        planeName: valuePlaneName,
        paperUsed: valuePlanePaper,
        planeEngineer: valuePlaneEngineer,
        completionDate: valueCompDate,
        imageFile: valueFile,
      };

      const signatureObj = await signPlane(valuePlaneName);
      const obj = { ...signatureObj, ...planeObj };

      _savePlanesLocally(obj);
    } else {
      alert("Enter Valid inputs");
    }
  };

  const _savePlanesLocally = async (planeObj) => {
    try {
      await restApiHelper.setPlane("planes", planeObj);
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
  const signPlane = async (message) => {
    if (!window.ethereum) {
      alert("No wallet found!");
    }
    try {
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();

      return {
        message: message,
        signature: signature,
        address: address,
      };
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
    signPlane,
    savePlane,
    deletePlane,
  };
};

export default { usePlane };
