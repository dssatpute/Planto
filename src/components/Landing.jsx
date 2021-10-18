import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Imageslider from "./ImageSlider";
import Bestselling from "./BestSelling";
import Gardendecorcare from "./GardenDecorCare";

const Landing = () => {
  const [render, setRender] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/verifyLogin", {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
          if(response.data.loggedIn)
          {
            //   setRender(true)
              alert("logged in")
          }
          else{
            //   setRender(false)
              alert("not logged in")
          }
      });
  }, []);

  return (
    <div>
      <Header />
      <Imageslider />
      <Bestselling />
      <Gardendecorcare/>
    </div>
  );
};

export default Landing;
