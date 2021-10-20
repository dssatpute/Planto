import React from "react";
import { useParams } from "react-router";
import { planters } from "../../data/planters";
import { useState, useEffect } from "react";

import styles from "./description.module.css";
import Header from "../landing/Header";

const Description = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    const filteredItem = planters
      .filter((item) => item.id == id)
      .map((item) => {
        setItem(item);
      });
  }, []);

  return (
    <>
      <Header />
      {item && (
        <div className={styles.main}>
          <div className={styles.image_div}>
            <img className={styles.image} src={item.image}></img>
          </div>
          <div className={styles.description}>
            <div className={styles.title}>
              <h2>{item.title}</h2>
              <span>by Planto</span>
            </div>
            <div className={styles.price}>
              <span>{item.price}</span>
            </div>
            <div className={styles.summary}>
              <span>(MRP Inclusive of all taxes)</span>
              <br></br>
              <br></br>
              <ul>
                <li>Shipping Rs 79 for entire order</li>
                <li>Dispatch in 5-8 days</li>
                <li>Country of origin: India</li>
              </ul>
            </div>
            <div className={styles.buy_div}>
              <button className={styles.add_to_cart}>Add to Cart</button>
              <div>
                <label>Quantity</label>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Description;