import { paperOptions } from "../Constants";

// const _providePapersOptions = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(paperOptions);
//     }, 1000);
//   });
// };

const getPapersOptions = async () => {
  const paperName = await fetch("http://localhost:5000/options");
  return paperName;
};

const getItems = () => {
  const item = fetch("/papers/types", { method: "get" });
  item.then((el) => el.json()).then((js) => console.log(js));
};

const setItems = async (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getThemeValue = () => {
  getItems();
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
