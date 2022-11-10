import constants from "../Constants";

const providePapersOptions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(constants.paperOptions);
    }, 1000);
  });
};

const getPapersOptions = async () => {
  const paperName = await providePapersOptions();
  return paperName;
};
const getItems = (key) => {
  const items = JSON.parse(localStorage.getItem(key));
  return items;
};
const setItems = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export default {
  providePapersOptions,
  getPapersOptions,
  getItems,
  setItems,
};
