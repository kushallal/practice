import { getIdValue } from "./Utils";

export const createEngineerObject = (name, age, exp) => {
  return {
    name: getIdValue(`${name}`),
    age: getIdValue(`${age}`),
    exp: getIdValue(`${exp}`),
  };
};
