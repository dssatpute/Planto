import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Navbar from "../landing/NavBar";
import styles from "./checkout.module.css";
import {v4 as uuid4} from 'uuid'
const Checkout = (props) => {
  const history = useHistory();
  const [total,setTotal]=useState(0)
  const [cartItems, setCartItems] = useState([]);
  useEffect(async () => {
    if (localStorage.getItem("token")) {
      const userId = parseJwt(localStorage.getItem("token"));
      console.log(userId);
      await axios
        .get(`http://localhost:3001/data/getCartItems/${userId.id}`)
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
  console.log(total);
  const count = document.getElementById("quantity");

  return (
    <div>
      <Navbar />
      {console.log(cartItems)}
      <div className={styles.item_list}>
        {cartItems.map((item) => (
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
              <div>
                <label for=" ">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  id="quantity"
                 
                ></input>
              </div>
              <div id="cost" style={{ marginLeft: "20px" }}>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
