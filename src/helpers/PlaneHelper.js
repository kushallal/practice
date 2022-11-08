import { getIdValue } from "./Utils";

export const displayOptions = (arr) => {
  return arr.map((el) => <option>{el}</option>);
};
const checkInputs = (planeName, paperType, engineerName, compDate) => {
  if (
    planeName.length > 1 &&
    paperType != "Select Paper" &&
    engineerName != "Select Engineeer" &&
    compDate
  ) {
    return true;
  } else return false;
};
export const createPlaneObject = (
  planeName,
  paperType,
  engineerName,
  compDate
) => {
  const valuePlaneName = getIdValue(`${planeName}`);
  const valuePaperType = getIdValue(`${paperType}`);
  const valueEngineerName = getIdValue(`${engineerName}`);
  const valueCompDate = getIdValue(`${compDate}`);

  if (
    checkInputs(
      valuePlaneName,
      valuePaperType,
      valueEngineerName,
      valueCompDate
    )
  ) {
    return {
      planeName: valuePlaneName,
      paperType: valuePaperType,
      engineerName: valueEngineerName,
      compDate: valueCompDate,
    };
  } else {
    alert("Enter Valid Inputs");
  }
};
