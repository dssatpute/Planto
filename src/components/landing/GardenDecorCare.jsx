import React from "react";
import styles from "./garden_decor.module.css";
import { Link,useHistory } from "react-router-dom";
import Planters from "../items/Planters";



const Gardendecorcare = () => {

  const history=useHistory();
  const navigatePlanter=()=>
  {
    history.push('/planters')
  }
  const navigatePebbles=()=>
  {
    history.push('/pebbles')
  }
  const navigateTools=()=>
  {
    history.push('/tools')
  }
  const navigateSoilFertilizer=()=>
  {
    history.push('/soil_fertilizers')
  }

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.promo_block}>
          <img
            src={
              require("../../assets/images/promo_images/pebbles.jpg").default
            }
            className={styles.image}
          ></img>
          <div className={styles.inner_block}>
            <h2 className={styles.price}>Planters starting at - ₹ 139</h2>
            <p className={styles.title}>
              Add colors to your garden. Choose from different shapes,colors and
              materials
            </p>
            <div>
              <button className={styles.shop_button} onClick={navigatePlanter}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className={styles.promo_block}>
          <img
            src={
              require("../../assets/images/promo_images/planters.jpg").default
            }
            className={styles.image}
          ></img>
          <div className={styles.inner_block}>
            <h2 className={styles.price}>Tools starting at - ₹ 139</h2>
            <p className={styles.title}>
              Get a tool for every gardening activity and make it a fun
              experience
            </p>
            <div>
              <button className={styles.shop_button} onClick={navigatePebbles}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className={styles.promo_block}>
          <img
            src={require("../../assets/images/promo_images/tools.jpg").default}
            className={styles.image}
          ></img>
          <div className={styles.inner_block}>
            <h2 className={styles.price}>Tools starting at - ₹ 139</h2>
            <p className={styles.title}>
              Add visual and textural features to your garden with wide variety
              and range of natural pebbles
            </p>
            <div>
              <button className={styles.shop_button} onClick={navigateTools}>Shop Now</button>
            </div>
          </div>
        </div>
        <div className={styles.promo_block}>
          <img
            src={
              require("../../assets/images/promo_images/soil_fertilizer.jpg")
                .default
            }
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
              <button className={styles.shop_button} onClick={navigateSoilFertilizer}>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gardendecorcare;
