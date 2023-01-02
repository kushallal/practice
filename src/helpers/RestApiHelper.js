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
    const verfied = await fetch(`http://localhost:5000/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });
    return verfied;
  } catch (err) {
    console.error(err);
  }
};
const setPlane = async (id, value) => {
  const data = new FormData();
  data.append("message", value.message);
  data.append("address", value.address);
  data.append("signature", value.signature);
  data.append("planeName", value.planeName);
  data.append("paperUsed", value.paperUsed);
  data.append("planeEngineer", value.planeEngineer);
  data.append("completionDate", value.completionDate);
  data.append("image", value.imageFile);

  try {
    await fetch(`http://localhost:5000/${id}`, {
      method: "POST",
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
  setPlane,
  delItem,
  getThemeValue,
  setThemeValue,
};
