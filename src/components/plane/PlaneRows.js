import React from 'react'

const PlaneRows= ({name,paper,eng,cdate})=> {
  return (
    <tr>
        <td>{name}</td>
        <td>{paper}</td>
        <td>{eng}</td>
        <td>{cdate}</td>
       
    </tr>
  )
}

export default PlaneRows