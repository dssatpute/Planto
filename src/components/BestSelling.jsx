import React from "react";
import styles from "./bestselling.module.css";
import { data } from "../data/bestselling";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Bestselling = () => {
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
      <h3 className={styles.header}>Best Selling Plants</h3>
      <div className={styles.carousel}>
        {data.map((plant) => {
          return (
            <div className={styles.plant_card}>
              <div className={styles.card_holder}>
                <a href="#">
                  <img
                    className={styles.plant_image}
                    src={plant.image_url}
                  ></img>
                </a>
                <div className={styles.content}>
                  <span className={styles.price}>
                    {plant.price}
                  </span>
                 <a href="#" className={styles.title}><span >{plant.name}</span></a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bestselling;
