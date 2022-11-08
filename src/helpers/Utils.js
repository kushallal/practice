export const getIdValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};


export const displayRows = (arr) => {
  const array=arr.map((el)=>Object.values(el))
  const rowArray = array.map(el=>(<tr>{el.map(e=><td >{e}</td>)}</tr>))
  
  return (rowArray)
  
}