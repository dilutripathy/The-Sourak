import React from "react";
import Hero from "../../Components/Home/Hero";
import TypeOfRoom from "../../Components/Home/TypeOfRoom";
import Amenities from "../../Components/Home/Amenties";

const Home = () => {
  return (
    <div>
      <Hero />
      <Amenities />
      <TypeOfRoom />
    </div>
  );
};

export default Home;
