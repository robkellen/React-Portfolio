import React from "react";
import { useSpring, animated } from "react-spring";

function Home() {
  //set up animation for main part of page
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div id="home">
      <animated.h1 style={props}>Home!</animated.h1>
    </div>
  );
}

export default Home;
