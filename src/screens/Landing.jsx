import React, { useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import NavBar from "../components/NavBar";
import Imageslider from "./ImageSlider";
import Bestselling from "./BestSelling";
import Gardendecorcare from "./GardenDecorCare";
import Footer from "../components/Footer";

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
