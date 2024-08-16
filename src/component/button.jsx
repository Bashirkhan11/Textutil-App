import React from 'react'

export default function Button(props) {
  return (
    <div className='container my-4'>
        <button type="button" onClick={props.click} className="btn btn-primary">Capitalize</button>
    </div>
  )
}
