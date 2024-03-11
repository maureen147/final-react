import React from "react";
import Menu from "../components/Nav";
import "../css/About.css"
import Hero from "../components/Hero";
import img from "../assets/images/watch 5555555555555.jpg"

const About = () => {

    // JSX
  const myJsx = <h3>This is awesome JSX</h3>

  // myFavFood
  const food = ["amala", "tuwo", "jollof", "spaghetti"]

  const myStyle = {listStyle: "none", color: "tomato", backgroundColor: "#eee", width: "50%", marginInline: "auto"}
  
  return (
    <>
    {/* <Menu/>  */}
      <div>
        <Hero heading="Welcome about page" image={img}/>
        <h1>Maureen React App 1.0</h1>
        {myJsx}
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis soluta
        dicta, doloremque officia nisi dolorum sed placeat nihil aliquid optio.
      </p>

      {/* map through food array */}
      <h3>My favourite food</h3>
      {food.map((f, index) => {
        return (
          <div className="" key={index} style={myStyle}>
            <p>My favourite food is {f}</p>
          </div>
        );
      })}
    </>
  );
};

export default About;
