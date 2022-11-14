import { paperOptions } from "../Constants";

const _providePapersOptions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(paperOptions);
    }, 1000);
  });
};

const getPapersOptions = async () => {
  const paperName = await _providePapersOptions();
  return paperName;
};

const getItems = (key) => {
  const items = JSON.parse(localStorage.getItem(key));
  return items;
};

const setItems = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getThemeValue = () => {
  const themeValue = JSON.parse(localStorage.getItem("themeDark"));
  return themeValue;
};
export const setThemeValue = (themeValue) => {
  localStorage.setItem("themeDark", JSON.stringify(themeValue));
};
export default {
  getPapersOptions,
  getItems,
  setItems,
  getThemeValue,
  setThemeValue,
};
