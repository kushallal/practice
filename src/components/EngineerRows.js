import React from 'react'

const PlaneRows= ({ename,eage,eexp})=> {
  return (
    <tr>
        <td>{ename}</td>
        <td>{eage}</td>
        <td>{eexp}</td>
    </tr>
  )
}

export default PlaneRows