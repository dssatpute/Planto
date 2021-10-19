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
          <h2>Planter</h2>
          <span>
            Your home garden will look much better with various types of
            planters available.
          </span>
        </div>
        <div className={styles.division}>
          <div className={styles.filter}>
            <span>Filters</span>
            <div className="price-filter">
              <span>From</span>
              <span>To</span>
            </div>
          </div>
          <div className={styles.items}>
            {planters.map((planter) => (
              <div className={styles.card}>
                <a onClick={show}>
                  <div className={styles.image_div}>
                    <img className={styles.image} src={planter.image}></img>
                  </div>
                </a>
                <div className={styles.content}>
                  <h3>{planter.price}</h3>
                  <span style={{ fontSize: "0.9rem" }}>{planter.title}</span>
                </div>
                {/* <div style={{height:'auto'}}>
                    <button className={styles.buy_button}>Buy Now</button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Planters;
