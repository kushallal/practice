const papers = ["Nepali Paper", "White Paper", "Blotting Paper"];
const providePapersOptions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(papers);
    }, 1000);
  });
};

const getPapersOptions = async () => {
  const paperName = await providePapersOptions();
  return paperName;
};
const _getLocalItems = (key) => {
  const _items = JSON.parse(localStorage.getItem(key));
  return _items;
};
const _setLocalItems = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export default {
  providePapersOptions,
  getPapersOptions,
  _getLocalItems,
  _setLocalItems,
};
