import React, { useState, useEffect } from "react";
import styles from "./product_category.module.css";
import { Link, useParams } from "react-router-dom";
import { v4 as uuid4 } from "uuid";
import { getProducts } from "../services/productServices";
import { Footer } from "..";

const Products = () => {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(1000);
  const [minmax, setMinMax] = useState([]);
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    async function init() {
      try {
        const products = await getProducts(category);
        setProducts(products);
        products.map((i) => {
          setMinMax(
            products.map((i) => {
              return parseInt(i.price.split(" ")[1]);
            })
          );
        });
        minmax.sort().reverse()
      } catch (error) {
        console.log(error);
      }
    }
    init();
    
  }, [category]);

  return (
    <>
      {console.log(minmax)}
      <main className={styles.main}>
        <div className={styles.heading}>
          <h2>
            {JSON.stringify(category)
              .toUpperCase()
              .replace(/[^\w\s]/gi, "", "")}
          </h2>
          <span>
            Your home garden will look much better with various types of &nbsp;
            {JSON.stringify(category)
              .toUpperCase()
              .replace(/[^\w\s]/gi, "", "")}{" "}
            available.
          </span>
        </div>
        <div className={styles.division}>
          <div className={styles.filter}>
            <div className={styles.price_filter}>
              <span style={{ marginRight: "10px" }}>From</span>₹
              <select
                id="min"
                onChange={(e) => {
                  setMin(parseInt(e.target.value));
                }}
                style={{ marginRight: "10px" }}
              >
                <option value="100">100</option>
                <option value="100">200</option>
              </select>
              <span style={{ marginRight: "10px" }}>To</span>₹
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
            {products ? (
              products
                .filter((product) => {
                  return (
                    parseInt(product.price.split(" ")[1]) > min &&
                    parseInt(product.price.split(" ")[1]) < max
                  );
                })
                .map((product) => (
                  <div className={styles.card} key={uuid4()}>
                    <Link to={`get-clicked-item/${category}/${product._id}`}>
                      <div className={styles.image_div}>
                        <img className={styles.image} src={product.image}></img>
                      </div>
                    </Link>
                    <div className={styles.content}>
                      <h3>{product.price}</h3>
                      <span style={{ fontSize: "0.9rem" }}>
                        {product.title}
                      </span>
                    </div>
                  </div>
                ))
            ) : (
              <h2>Loading</h2>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
