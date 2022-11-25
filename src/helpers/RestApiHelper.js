import { paperOptions } from "../Constants";

// const _providePapersOptions = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(paperOptions);
//     }, 1000);
//   });
// };

const getItems = async (id) => {
  try {
    const item = await fetch(`http://localhost:5000/${id}`);
    return item;
  } catch (err) {
    console.error(err);
  }
};

const setItem = async (id, value) => {
  const data = JSON.stringify(value);

  try {
    await fetch(`http://localhost:5000/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });
  } catch (err) {
    console.error(err);
  }
};

const delItem = async (id) => {
  try {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error(err);
  }
};

export const getThemeValue = () => {
  const themeValue = JSON.parse(localStorage.getItem("themeDark"));
  return themeValue;
};
export const setThemeValue = (themeValue) => {
  localStorage.setItem("themeDark", JSON.stringify(themeValue));
};
export default {
  getItems,
  setItem,
  delItem,
  getThemeValue,
  setThemeValue,
};
