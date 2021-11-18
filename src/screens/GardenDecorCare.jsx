import React from "react";
import styles from "./garden_decor.module.css";
import { useHistory, Link } from "react-router-dom";

const Gardendecorcare = () => {
  const history = useHistory();

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.promo_block}>
          <img
            src={require("../assets/images/promo_images/planters.jpg").default}
            alt="Cannot display"
            className={styles.image}
          ></img>
          <div className={styles.inner_block}>
            <h2 className={styles.price}>Planters starting at - ₹ 139</h2>
            <p className={styles.title}>
              Add colors to your garden. Choose from different shapes,colors and
              materials
            </p>
            <div>
              <Link to="/products/planters">
                <button className={styles.shop_button}>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.promo_block}>
          <img
            src={require("../assets/images/promo_images/pebbles.jpg").default}
            className={styles.image}
            alt="Cannot display"
          ></img>
          <div className={styles.inner_block}>
            <h2 className={styles.price}>Pebbles starting at - ₹ 139</h2>
            <p className={styles.title}>
              Add visual and textural features to your garden with wide variety
              and range of natural pebbles
            </p>
            <div>
              <Link to="/products/pebbles">
                <button className={styles.shop_button}>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.promo_block}>
          <img
            src={require("../assets/images/promo_images/tools.jpg").default}
            alt="Cannot display"
            className={styles.image}
          ></img>
          <div className={styles.inner_block}>
            <h2 className={styles.price}>Tools starting at - ₹ 139</h2>
            <p className={styles.title}>
              Get a tool for every gardening activity and make it a fun
              experience
            </p>
            <div>
              <Link to="/products/tools">
                <button className={styles.shop_button}>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.promo_block}>
          <img
            src={
              require("../assets/images/promo_images/soil_fertilizer.jpg")
                .default
            }
            alt="Cannot display"
            className={styles.image}
          ></img>
          <div className={styles.inner_block}>
            <h2 className={styles.price}>
              Soil and Fertilizers starting at - ₹ 139
            </h2>
            <p className={styles.title}>
              Healty food is key for healthy plants.Choose from wide range of
              fertilzers and soil
            </p>
            <div>
              <Link to="/products/soil-and-fertilizers">
                <button
                  className={styles.shop_button}
        
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gardendecorcare;
