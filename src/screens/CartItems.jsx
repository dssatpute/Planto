import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import Navbar from "../components/NavBar";
import styles from "./cart_items.module.css";
import { v4 as uuid4 } from "uuid";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { getCartItems, removeCartItem } from "../services/cartServices";
import { verifyUser } from "../services/userAuthService";

const Checkout = () => {
  const history = useHistory();
  const [cartItem, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const { userAuthInfo, dispatch } = useContext(UserContext);

  const calCartTotal = () => {
    var total = 0;
    cartItem.map((item) => {
      total = total + item.price * item.Quantity;
    });
    return total;
  };

  useEffect(() => {
    async function init() {
      try {
        const response = await getCartItems(userAuthInfo.userid);
        setCartItems(response);
      } catch (error) {
        throw error;
      }
    }
    async function setUserStatus() {
      const [status, userid] = await verifyUser();
      if (status) {
        init();
      } else {
        history.push("/login");
      }
    }
    setUserStatus();
  }, [cartItem]);

  if (cartItem) {
    localStorage.setItem("cart-count", cartItem.length);
    localStorage.setItem("cart-total", calCartTotal());
  }

  return (
    <div>
      <Navbar />
      <div className={styles.item_list}>
        {cartItem.length > 0 ? (
          cartItem.map((item) => (
            <>
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
                      <span>Price ₹ {item.price}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.item_section_two}>
                  <div id="cost" style={{ marginLeft: "20px" }}>
                    {item.price * item.Quantity}
                  </div>
                  <div>
                    <button
                      className={styles.delete_cart_item}
                      value={item._id}
                      onClick={async () => {
                        await removeCartItem(item.productId,userAuthInfo.userId).then((response)=>
                        {
                        
                          if(response)
                          {
                            window.location.reload()
                          }
                          else
                          {
                            console.log(" no response");
                          }
                        });
                       
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </>
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
        <section className={styles.cart_total}>
          <div className={styles.grand_total}>
            <span>Grand Total </span>
          </div>
          <div>
            <span>{localStorage.getItem("cart-total")}</span> 
          </div>
        </section>
        <button className={styles.check_out}>
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Checkout;
