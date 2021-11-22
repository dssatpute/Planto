import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts, getSelectedItem } from "../services/productServices";
import styles from "./related.module.css";

const RelatedItems = ({ category,id }) => {
  const [relatedItem, setRelatedItem] = useState([]);
  useEffect(() => {
    async function init() {
      const response = await getProducts("recommended");
      setRelatedItem(response);
    }
    init();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3>Customer who bought this item also bought</h3>
      </div>
      <div className={styles.related}>
        {relatedItem.filter((item)=>{return item._id!=id}).map((item) => (
          <div className={styles.item}>
            <div className={styles.image}>
              <Link to={`/products/get-clicked-item/recommended/${item._id}`}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={item.image}
                ></img>
              </Link>
            </div>
            <span className={styles.price}>{item.price}</span>
            <span>{item.title}</span>
            <Link to={`/products/get-clicked-item/recommended/${item._id}`}>
              <button className={styles.buy_button}>Buy </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedItems;
