import React from "react";
import { useState, useEffect } from "react";
import {useHistory } from "react-router-dom";
import { deleteCart, getCartItems } from "../services/cartServices";
import { createOrder } from "../services/orderServices";
import styles from "./checkout.module.css";
import { states } from "../data/misc_data";
import Loading from "./Loading";
require("dotenv").config();

const Checkout = ({ user }) => {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState();
  const [state, setState] = useState("");
  const [pin, setPin] = useState();
  const [city, setCity] = useState("");
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await getCartItems(user.userId);
        setCartItems(response[0]);

        setLoading(false);
      } catch (error) {
        throw error;
      }
    }
    init();
  }, [user]);

  const calCartTotal = () => {
    var total = 0;
    cartItems.map((item) => {
      total = total + item.price * item.Quantity;
    });
    return total;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    localStorage.setItem("shipping-info",JSON.stringify({
      firstname,
      lastname,
      email,
      address,
      contact,
      state,
      city,
      pin,
      cartItems,
      total:calCartTotal()
    }))
      localStorage.setItem("cart-count", 0);
      history.push("/payment");
    };


  return (
    <>
      {loading ? <Loading /> :(
      <div className={styles.main}>
        <section className={styles.shipping_info}>
          <form className={styles.shipping_form} onSubmit={onSubmitHandler}>
            <div className={styles.contact_info}>
              <h3>Contact Information</h3>
              <input
                className={styles.input}
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required="required"
              />
              <input
                type="number"
                placeholder="Contact number "
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                value={contact}
                required="required"
              />
            </div>
            <div className={styles.shipping_address}>
              <h3>Shipping Address</h3>
              <div className={styles.name}>
                <input
                  type="text"
                  placeholder="First name"
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  value={firstname}
                  required="required"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  value={lastname}
                  required="required"
                />
              </div>
              <input
                type="text"
                placeholder="Address "
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
                required="required"
              />
              <div className={styles.state_pincode_city}>
                <select
                  id="state"
                  defaultValue={"Andhra Pradesh"}
                  onClick={({ target: { value } }) => setState(value)}
                >
                  {states.map((state) => (
                    <option
                      value={state}
                      onClick={(e) => {
                        console.log(e.target.value);
                      }}
                    >
                      {state}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="City"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  value={city}
                  required="required"
                />
                <input
                  type="number"
                  placeholder="Pin Code "
                  onChange={(e) => {
                    setPin(e.target.value);
                  }}
                  value={pin}
                  required="required"
                />
              </div>
            </div>
            <div className={styles.footer_buttons}>
              <button
                className={styles.button}
                onClick={() => {
                  history.push("/cart-items");
                }}
              >
                Back to Cart
              </button>
              <button
                className={styles.button}
                type="submit"
               
              >
                Continue Shipping
              </button>
            </div>
          </form>
        </section>
      </div>)}
    </>
  );
};

export default Checkout;
