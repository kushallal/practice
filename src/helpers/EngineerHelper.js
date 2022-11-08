import { getIdValue } from "./Utils";

const checkInputs=(name,age,exp)=>{
  if (age>=18 && age>=2 && name.length > 1){
    return true;
  }
  else return false
}
export const createEngineerObject = (name, age, exp) => {
  const valueName= getIdValue(`${name}`)
  const valueAge= getIdValue(`${age}`)
  const valueExp= getIdValue(`${exp}`)
  if (checkInputs(valueName,valueAge,valueExp))
  {
    return {
      name: valueName,
      age: valueAge,
      exp: valueExp,

    };
  }
  else{
    alert("Enter Valid Data")
  }
};

 