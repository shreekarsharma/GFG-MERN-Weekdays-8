import React from 'react'

const Card = (props) => {
  return (
    <>
    <input type="text" placeholder='Enter your name' onChange={(e)=>{props.setName(e.target.value)}}/>
    <p>This is value inside card component: {props.name}</p>
    </>
  )
}

export default Card