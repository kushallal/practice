export const PlaneFieldsCheck = ({
  planename,
  planepaper,
  planeengineer,
  compdate,
}) => {
  if (planename && planepaper && planeengineer && compdate) {
    if (isnamecorrect(planename)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const EngineerFieldsCheck = ({ name, age, exp }) => {
  if (name && age > 0 && exp > 0) {
    if (isnamecorrect(name)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const isnamecorrect = ({ name }) => {
  if (name.length > 1) {
    return true;
  } else {
    return false;
  }
};
