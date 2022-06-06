import React, { useEffect, useState } from "react";
import styles from "./cart.module.css";
import { v4 as uuid4 } from "uuid";
import { Link } from "react-router-dom";
import { getCartItems, removeCartItem } from "../services/cartServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ user }) => {
  const [cartItem, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const calCartTotal = () => {
    var total = 0;
    cartItem.map((item) => {
      total = total + item.price * item.Quantity;
    });
    return total;
  };

  useEffect(() => {
    async function init() {
      const response = await getCartItems(user.userId);
      setCartItems(response[0]);
      setLoading(response[1]);
    }
    if (user.status) {
      init();
    }
  }, [user]);

  if (cartItem) {
    localStorage.setItem("cart-total", calCartTotal());
  }

  const ShowCheckOut = () => {
    return (
      <>
        <div className={styles.cart_total}>
          <div className={styles.grand_total}>
            <span>Total </span>
          </div>
          <div>
            <span>₹ {localStorage.getItem("cart-total")}</span>
          </div>
        </div>
        <a href="/check-out" className={styles.check_out}>
          Check Out
        </a>
      </>
    );
  };

  return loading ? (
    <div className={styles.no_cart_items}>
      <h3>No Items in Cart.</h3>
      <Link to="/">
        <button className={styles.continue_shopping}>Continue Shopping</button>
      </Link>
    </div>
  ) : (
    <div>
      {cartItem.length > 0 && cartItem ? (
        <div className={styles.item_list}>
          {cartItem.map((item) => (
            <section>
              <div className={styles.item} key={uuid4()}>
                <div className={styles.item_section_one}>
                  <div>
                    <img className={styles.image} src={item.productImage}></img>
                  </div>
                  <div className={styles.item_content}>
                    <div>
                      <span>{item.productTitle}</span>
                    </div>
                   
                  </div>
                </div>
                <div className={styles.item_section_two}>
                  <div>
                    <span><b>Qty {item.Quantity}</b></span>
                  </div>
                  <div id="cost" style={{ marginLeft: "20px" }}>
                   <b> ₹ {item.price * item.Quantity}</b>
                  </div>
                  <div>
                    <button
                      className={styles.delete_cart_item}
                      value={item._id}
                      onClick={async () => {
                        await removeCartItem(item.productId, user.userId).then(
                          (response) => {
                            if (response) {
                              localStorage.setItem(
                                "cart-count",
                                parseInt(localStorage.getItem("cart-count") - 1)
                              );
                              toast.success("Deleted Item", {
                                autoClose: 2000,
                                hideProgressBar: true,
                              });
                              window.location.reload()
                            } else {
                              toast.error("Something went wrong",{
                                autoClose: 2000,
                                hideProgressBar: true,
                              })
                            }
                          }
                        );
                        
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ))}
          <ShowCheckOut />
        </div>
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
  );
};

export default Cart;
