import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { getCartItems } from "../services/cartServices";
import { createOrder } from "../services/orderServices";
import styles from "./payment.module.css";
import Loading from "./Loading";

const Payment = ({ user }) => {
  const [cartItems, setCartItems] = useState([]);
  const [validPay, setIsValidPay] = useState(false);

  const history = useHistory();
  useEffect(() => {
    async function init() {
      try {
        const response = await getCartItems(user.userId);
        setCartItems(response[0]);
      } catch (error) {
        throw error;
      }
    }
    async function order() {
      await createOrder(
        user.userId,
        info.firstname,
        info.lastname,
        info.email,
        info.address,
        info.contact,
        info.state,
        info.city,
        info.pin,
        info.cartItems
      );
    }
    init();
    if (validPay) {
      order();
      history.push(`/placed-order/${user.userId}`);
    }
  }, [validPay]);
  const info = JSON.parse(localStorage.getItem("shipping-info"));

    const handleToken = async (token) => {
    const total=info.total;
    await axios
      .post(
        "http://localhost:3001/api/payment/payment-info",
        { token, cartItems, total},
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(async (response) => {
        if (response.data.status == "succeeded") {
          setIsValidPay(true);
        }
        console.log(response);
      });
  };

  return (
    <>
      {validPay ? (
        <Loading />
      ) : (
        <div className={styles.main}>
          <section className={styles.content}>
            <div className={styles.content}>
              <div className={styles.info_module}>
                <div>Contact</div>
                <div>
                  {info.firstname} &nbsp; {info.lastname}
                </div>
              </div>
              <div className={styles.info_module}>
                <div>Ship to</div>
                <div style={{ width: "300px" }}>{info.address}</div>
              </div>
              <div className={styles.info_module}>
                <div>Method &nbsp;</div>
                <div>
                  {" "}
                  Standard Shipping ₹ <b>{info.total}</b>
                </div>
              </div>
              <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                <StripeCheckout
                  name="Planto"
                  stripeKey="pk_test_51K2y4BSB9ixEmu3Kd8fE5W99n07oXXBKuh2joAc5QSqPopFd4ZJsI9FA1hLoNQ6vHWfiRwvTPCPBKIqDyxVJcdNu00HA6wB793"
                  token={handleToken}
                  currency="INR"
                  amount={localStorage.getItem("cart-total") * 100}
                >
                  <button className={styles.button}>Pay ₹ {info.total}</button>
                </StripeCheckout>
              </div>
            </div>
          </section>

          <section className={styles.cart}>
            <div className={styles.item_section}>
              {cartItems.map((item) => (
                <div className={styles.item} key={item.productId}>
                  <div className={styles.image}>
                    <img src={item.productImage}></img>
                  </div>
                  <div className={styles.title}>{item.productTitle}</div>
                  <div>Qty {item.Quantity}</div>
                  <div className={styles.price}>
                    ₹ {item.price * item.Quantity}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.total}>
              <span>Total</span>
              <span>₹ {info.total} </span>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Payment;
