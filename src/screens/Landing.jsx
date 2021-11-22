import React from "react";
import Imageslider from "./ImageSlider";
import Bestselling from "./BestSelling";
import Gardendecorcare from "./GardenDecorCare";


const Landing = () => {
  return (
    <div className="Landing">
      <Imageslider />
      <Bestselling />
      <Gardendecorcare />
    </div>
  );
};

export default Landing;
