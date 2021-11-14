import React from "react";
import styles from "./imageslider.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import c1 from '../assets/images/sliderimages/c1.png'
import c2 from '../assets/images/sliderimages/c2.png'
import c3 from '../assets/images/sliderimages/c3.png'


const Imageslider = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.main}>
      <Slider {...settings}>
        <a href="https://nurserylive.com/"  >
            <img className={styles.c1} src={c1} alt="Cannot display"></img>
        </a>
        <a href="https://nurserylive.com/"  >
            <img className={styles.c2} src={c2} alt="Cannot display"></img>
        </a>
        <a href="https://nurserylive.com/"  >
            <img className={styles.c3} src={c3} alt="Cannot display"></img>
        </a>
      </Slider>
    </div>
  );
};

export default Imageslider;
