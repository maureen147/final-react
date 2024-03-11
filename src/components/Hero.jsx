import React from 'react'

const Hero = (props) => {
    // destructuring props
    const { heading="Welcome to my page", image} = props
    
  return (
    <div style={{backgroundColor: "purple", color: "white"}}>
        <div className="">
            <img src={image} alt="" height="200px"/>
        </div>
        <h1>{heading}</h1>
    </div>
  )
}

export default Hero