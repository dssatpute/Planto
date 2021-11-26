import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./product_details.module.css";
import Loading from "./Loading";
import { getProducts, getSelectedItem } from "../services/productServices";
import { addToCart } from "../services/cartServices";
import RelatedItems from "./RelatedItems";
import { Footer } from "..";


const ProductDetails = ({ user }) => {
  const { category, productId } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [cartItemQuantity, setCartItemQuantity] = useState(1);

  useEffect(() => {
    async function init() {
      try {
        const item = await getSelectedItem(category, productId);
        setProduct(item[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    init();
    window.scrollTo(0, 0);

  }, [productId]);

  const addToCartAction = async () => {
    const item = { ...product };
    const response = await addToCart(
      item._id,
      user.userId,
      item.title,
      item.image,
      item.price.split(" ")[1],
      cartItemQuantity
    );
    if (response.status === 400) {
      alert("Something went wrong");
    }
    alert("Added");
    localStorage.setItem("cart-count",parseInt(localStorage.getItem("cart-count"))+1)
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.image_div}>
              <img
                className={styles.image}
                src={product.image}
                alt="cannot display"
              ></img>
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                <h2>{product.title}</h2>
                <span>by Planto</span>
              </div>
              <div className={styles.price}>
                <span>{product.price}</span>
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
                <button
                  className={styles.add_to_cart}
                  onClick={() => {
                    user.status
                      ? addToCartAction(
                          product._id,
                          product.title,
                          product.image,
                          product.price.split(" ")[1],
                          cartItemQuantity
                        )
                      : history.push("/login");
                
                  }
                }
                >
                  {user.status ? "Add To Cart" : "Login to Add"}
                </button>
                <div >
                  <span>Quantity</span>
                  {/* <input
                    type="number"
                    min="1"
                    max="10"
                    value={cartItemQuantity}
                    onChange={(e) => {
                      setCartItemQuantity(e.target.value);
                    }}
                  ></input> */}
                  {
                    <select className={styles.quantity}
                      id="cart-count"
                      defaultValue={cartItemQuantity}
                      onChange={(e) => {
                        setCartItemQuantity(e.target.value);
                        console.log(e.target.value);
                      }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
                        <option value={count}>{count}</option>
                      ))}
                    </select>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature_header}>
              <h2>Description</h2>
              <div className={styles.product_description}>
                <span>{product.description}</span>
              </div>
            </div>
            <div className={styles.special_feature}>
              <h3>Special Features</h3>
              <ul style={{ marginTop: "10px", lineHeight: "23px" }}>
                {product.features.map((feature) => (
                  <li key={Math.random()}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <RelatedItems category={category} id={productId} />
      <Footer/>
    </>
  );
};

export default ProductDetails;
