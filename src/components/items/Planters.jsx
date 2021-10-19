import React from "react";
import Header from "../landing/Header";
import styles from "./planters.module.css";
import { planters } from "../../data/planters";

const Planters = () => {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.heading}>
          Your home garden will look much better with various types of planters
          available. Whether you want to hang plants on the wall or have them
          placed in pots and boxes, you will find the perfect planter to suit
          your liking.
        </div>
        <div className={styles.items}>
          {planters.map((planter) => (
            <div className={styles.card}>
              <div className={styles.image_div}>
                <img className={styles.image} src={planter.image}></img>
              </div>
              <div className={styles.content}>
                <h2>{planter.price}</h2>
                <span>{planter.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Planters;
