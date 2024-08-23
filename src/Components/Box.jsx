import React from 'react'

const Box = (props) => {
  return (
    <div onClick={props.onClick}  style={{border:"2px solid black", height:"100px", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}} className='box'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Box