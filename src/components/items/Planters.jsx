import React, { useState } from "react";
import NavBar from "../landing/NavBar";
import styles from "./planters.module.css";
import { Link } from "react-router-dom";
import { planters } from "../../data/planters";

const Planters = () => {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(1000);

  return (
    <>
      <NavBar />
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
            <div className={styles.price_filter}>
              <span style={{marginRight:'10px'}}>From</span>
              ₹
              <select
                id="min"
                onChange={(e) => {
                  setMin(parseInt(e.target.value));
                }}
                style={{marginRight:'10px'}}
              >
                <option value="100">100</option>
                <option value="100">200</option>
              </select>
              <span style={{marginRight:'10px'}}>To</span>
              ₹
              <select
                id="max"
                onChange={(e) => {
                  setMax(parseInt(e.target.value));
                }}
                
              >
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
              </select>
            </div>
          </div>
          <div className={styles.items}>
            {planters
              .filter((planter) => {
                return (
                  (parseInt(planter.price.split(" ")[1]) > min &&
                  parseInt(planter.price.split(" ")[1]) < max)
                );
              })
              .map((planter) => (
                <div className={styles.card}>
                  <Link to={`/details/${planter.id}`}>
                    <div className={styles.image_div}>
                      <img className={styles.image} src={planter.image}></img>
                    </div>
                  </Link>
                  <div className={styles.content}>
                    <h3>{planter.price}</h3>
                    <span style={{ fontSize: "0.9rem" }}>{planter.title}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Planters;
