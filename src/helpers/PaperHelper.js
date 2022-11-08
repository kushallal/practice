import { getIdValue } from "./Utils";
export const getPaperOptions = (arr) => {
  return arr.map((el) => <option key={el}>{el}</option>);
};
const checkInputs = (length, height) => {
  if (length > 0 && height > 0) {
    return true;
  } else {
    return false;
  }
};
export const createPaperObject = (name, length, height) => {
  const valueName = getIdValue(`${name}`);
  const valueLength = getIdValue(`${length}`);
  const valueHeight = getIdValue(`${height}`);
  if (checkInputs(valueLength, valueHeight)) {
    return {
      name: valueName,
      length: valueLength,
      height: valueHeight,
    };
  } else {
    alert("Enter Valid inputs");
  }
};
