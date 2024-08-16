import React from 'react'

export default function ToDoli(props) {
  return (
    <div className="container" onClick={()=>{
      return props.click(props.id)
  }}>

       <li className="list-group-item">{props.text}</li>
  </div>
  )
}

