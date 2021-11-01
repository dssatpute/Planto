import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import Navbar from "../components/NavBar";
import styles from "./cart_items.module.css";
import { v4 as uuid4 } from "uuid";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { getCartItems } from "../services/cartServices";

const Checkout = () => {
  const history = useHistory();
  const [cartItem, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const { userAuthInfo, dispatch } = useContext(UserContext);

  useEffect(() => {
    async function init() 
    {
      try {
        const response = await getCartItems(userAuthInfo.userId);
        setCartItems(response)
        console.log(response);
      } 
      catch (error) {
        console.log(error);
      }
      
    }
    if(userAuthInfo.status)
      {
        init()
      }
      else{
        history.push('/login')
      }
  }, []);

  return (
    <div>
      <Navbar count={count} />
      <div className={styles.item_list}>
        {cartItem ? (
          cartItem.map((item) => (
            <div className={styles.item} key={uuid4()}>
              <div className={styles.item_section_one}>
                <div>
                  <img className={styles.image} src={item.productImage}></img>
                </div>
                <div className={styles.item_content}>
                  <div>
                    <span>{item.productTitle}</span>
                  </div>
                  <div>
                    <span>Price ₹ {item.productPrice}</span>
                  </div>
                </div>
              </div>
              <div className={styles.item_section_two}>
                <div id="cost" style={{ marginLeft: "20px" }}>
                  {item.price*item.itemQuantity}
                </div>
                <div>
                  <button
                    className={styles.delete_cart_item}
                    value={item._id}
                    onClick={async () => {
                      await axios.get(
                        `http://localhost:3001/api/cart/remove-cart-item/${item._id}`
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
        ) : (
          <div className={styles.no_cart_items}>
            <h3>No Items in Cart.</h3>
            <Link to="/">
              <button className={styles.continue_shopping}>
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
