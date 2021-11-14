import React from "react";
import styles from "./bestselling.module.css";
import { data } from "../data/bestselling";
import { v4 as uuid4 } from "uuid";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Bestselling = () => {
  // 

  return (
    <div className={styles.main}>
      <h3 className={styles.header}>Best Selling Plants</h3>
      <div className={styles.carousel}>
        {data.map((plant) => {
          return (
            
            <div className={styles.plant_card} key={uuid4()} >
              <div className={styles.card_holder}>
                <a href="https://www.https://nurserylive.com/">
                  <img
                    className={styles.plant_image}
                    src={plant.image_url}
                    alt="Cannot display"
                  ></img>
                </a>
                <div className={styles.content}>
                  <span className={styles.price}>
                    {plant.price}
                  </span>
                 <a href="https://www.https://nurserylive.com/" className={styles.title}><span >{plant.name}</span></a>
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
