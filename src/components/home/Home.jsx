import React from "react";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Location from "./location /Location";
import Recent from "./recent/Recent";
import Team from "./team/Team";

const Home = () => {
  return (
    <>
      <Hero /> <Featured /> <Recent /> <Awards /> <Location /> <Team />
    </>
  );
};

//this is the home page component
//home area

export default Home;
