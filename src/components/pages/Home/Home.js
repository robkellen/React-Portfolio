import React from "react";
import { useSpring, animated } from "react-spring";
import "./Home.css"

function Home() {
  //set up animation for main part of page
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className="home">
      <animated.h1 style={props}>Home!</animated.h1>
    </div>
  );
}

export default Home;
