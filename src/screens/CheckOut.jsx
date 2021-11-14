import React from "react";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { getCartItems } from "../services/cartServices";
import { createOrder } from "../services/orderServices";
import styles from "./checkout.module.css";

const Checkout = ({ user }) => {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState();
  const [state, setState] = useState("");
  const [pin, setPin] = useState();
  const [city, setCity] = useState("");

  // const { userAuthInfo, dispatch } = useContext(UserContext);

  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  useEffect(() => {
    console.log(user);
    async function init() {
      try {
        const response = await getCartItems(user.userId);
        console.log(response);
        setCartItems(response);
      } catch (error) {
        throw error;
      }
    }
    init();
  }, []);

  const calCartTotal = () => {
    var total = 0;
    cartItems.map((item) => {
      total = total + item.price * item.Quantity;
    });
    return total;
  };

  const onSubmitHandler =async (e) => {
    e.preventDefault();
    await createOrder(user.userId,firstname, lastname,email, address,contact, state,city,pin,cartItems)
    // console.log({ firstname, lastname, address, state });
  };

  return (
    <>
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
                // required:true
              />
              <input
                type="number"
                placeholder="Contact number "
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                value={contact}
                // required:true
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
                  // required:true
                />
                <input
                  type="text"
                  placeholder="Last name"
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  value={lastname}
                  // required:true
                />
              </div>
              <input
                type="text"
                placeholder="Address "
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
                // required:true
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
                  // required:true
                />
                <input
                  type="number"
                  placeholder="Pin Code "
                  onChange={(e) => {
                    setPin(e.target.value);
                  }}
                  value={pin}
                  // required:true
                />
              </div>
            </div>
            <div className={styles.footer_buttons}>
              <button
                className={styles.return_to_cart}
                onClick={() => {
                  history.push("/cart-items");
                }}
              >
                Back to Cart
              </button>
              <button className={styles.place_order}>Place Order</button>
            </div>
          </form>
        </section>

        <section className={styles.cart}>
          {cartItems.map((item) => (
            <div className={styles.item} key={item.productId}>
              <div>
                <div className={styles.image}>
                  <img src={item.productImage}></img>
                </div>
                <div className={styles.quantity}>{item.Quantity}</div>
              </div>
              <div className={styles.title}>{item.productTitle}</div>
              <div className={styles.price}>{item.price * item.Quantity}</div>
            </div>
          ))}
          <div className={styles.total}>
            <span>Total</span>
            <span>₹ {calCartTotal()} </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Checkout;
