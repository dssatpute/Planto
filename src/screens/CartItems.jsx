import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navbar from "../components/NavBar";
import styles from "./cart_items.module.css";
import { v4 as uuid4 } from "uuid";

const Checkout = () => {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);

  useEffect(async () => {
    if (localStorage.getItem("token")) {
      const userId = parseJwt(localStorage.getItem("token"));
      console.log(userId);
      await axios
        .get(`http://localhost:3001/api/cart/getCartItems/${userId.id}`)
        .then((response) => {
          setCartItems(response.data);
        });
    } else {
      history.push("/login");
    }
  }, []);

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.item_list}>
        {
          cartItems.length>0?
            cartItems.map((item) => (
              <div className={styles.item} key={uuid4()}>
                <div className={styles.item_section_one}>
                  <div>
                    <img className={styles.image} src={item.item_image}></img>
                  </div>
                  <div className={styles.item_content}>
                    <div>
                      <span>{item.item_title}</span>
                    </div>
                    <div>
                      <span>Price ₹ {item.item_price}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item_section_two}>
                  <div id="cost" style={{ marginLeft: "20px" }}>
                    {item.item_price}
                  </div>
                  <div>
                    <button
                      className={styles.delete_cart_item}
                      value={item._id}
                      onClick={async () => {
                        await axios.get(
                          `http://localhost:3001/api/cart/removeCartItem/${item._id}`
                        );
                        window.location.reload();
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          :(<div className={styles.no_cart_items}>
            <h3 >No Items in Cart. Please add items and revisit.</h3>
          </div>)
        }
      </div>
    </div>
  );
};

export default Checkout;
