import React from "react";
import Imageslider from "./ImageSlider";
import Bestselling from "./BestSelling";
import Gardendecorcare from "./GardenDecorCare";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="Landing">
      <Imageslider />
      <Bestselling />
      <Gardendecorcare />
      <Footer />
    </div>
  );
};

export default Landing;
