export const getIdValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};

export default { getIdValue };
