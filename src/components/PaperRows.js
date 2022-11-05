import React from 'react'

const PaperRows= ({name,len,height})=> {
  return (
    <tr>
         <td>{name}</td>
        <td>{len}</td>
        <td>{height}</td>
    </tr>
  )
}

export default PaperRows