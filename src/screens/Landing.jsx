import React from "react";
import Imageslider from "./ImageSlider";
import Bestselling from "./BestSelling";
import Gardendecorcare from "./GardenDecorCare";
import Loading from "./Loading";
import { Footer } from "..";


const Landing = ({ user, loading }) => {
  return (
    <div className="Landing">
      {user.loading ? (
        <Loading/>
      ) : (
        <div>
          <Imageslider />
          <Bestselling />
          <Gardendecorcare />
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Landing;
