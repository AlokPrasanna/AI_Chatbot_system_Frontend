import React from 'react'
import { Link } from 'react-router-dom'

const List = ({elements = [] , ulStyle , liStyle , divStyle}) => {
  return (
    <div className={`${divStyle ? divStyle : ""}`}>
      <ul className={`${ulStyle ? ulStyle : ""}`}>
        {elements.length > 0 && elements.map((element , index) => (
            <li key={index} className={`${liStyle ? liStyle : ""}`}><Link to={element.path}>{element.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default List
