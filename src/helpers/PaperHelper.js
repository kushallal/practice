export const getPaperOptions = (arr) => {
  return arr.map((el) => <option key={el}>{el}</option>);
};
