import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import axios from "axios";
import NavBar from "./NavBar";
import Imageslider from "./ImageSlider";
import Bestselling from "./BestSelling";
import Gardendecorcare from "./GardenDecorCare";
import Footer from "./Footer";

const Landing = () => {
  const history = useHistory();
  useEffect(() => {
    async function verifyLogin() {
      await axios.get("http://localhost:3001/verify").then((response) => {
        console.log(response);
      });
    }
    verifyLogin();
  });

  return (
    <div>
      <NavBar />
      <Imageslider />
      <Bestselling />
      <Gardendecorcare />
      <Footer />
    </div>
  );
};

export default Landing;
