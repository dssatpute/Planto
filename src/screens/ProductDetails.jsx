import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styles from "./product_details.module.css";
import NavBar from "../components/NavBar";
import Loading from "./Loading";
import { UserContext } from "../App";
import { getSelectedItem } from "../services/productServices";
import { addToCart } from "../services/cartServices";

const ProductDetails = () => {
  const { userAuthInfo, dispatch } = useContext(UserContext);
  const { category, productId } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [cartItemQuantity, setCartItemQuantity] = useState(0);

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
  }, []);


  const addToCartAction =async() => {
    const item = { ...product };
    userAuthInfo.status
      ? await addToCart(
          item._id,
          userAuthInfo.userId,
          item.title,
          item.image,
          item.price.split(" ")[1],
          cartItemQuantity
        ).then((response)=>
        {
         if(response)
         {
          console.log("Added");
         }
        })
      : history.push("/login");
  };

  return (
    <>
      <NavBar />
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.image_div}>
              <img className={styles.image} src={product.image}></img>
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
                    addToCartAction(
                      product._id,
                      product.title,
                      product.image,
                      product.price.split(" ")[1],
                      cartItemQuantity
                    );
                  }}
                >
                  Add to Cart
                </button>
                <div>
                  <span>Quantity</span>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    onChange={(e) => {
                      setCartItemQuantity(e.target.value);
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature_header}>
              <h2>Description</h2>
              <span>{product.description}</span>
            </div>
            <div className={styles.special_feature}>
              <h2>Special Features</h2>
              <ul>
                {product.features.map((feature) => (
                  <li key={Math.random()}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
