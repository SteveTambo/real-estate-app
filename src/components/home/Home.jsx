import React from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";

const Home = () => {
  return (
    <>
      <Hero /> <Featured /> <Recent /> <Awards />
    </>
  );
};

//this is the home page component
//home area

export default Home;
