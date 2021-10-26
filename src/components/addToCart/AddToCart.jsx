import React, { useContext, useState, useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";
import styles from "./description.module.css";
import NavBar from "../landing/NavBar";
import axios from "axios";

const Description = (props) => {
  const history=useHistory()
  const { id } = useParams();
  const [item, setItem] = useState();
  const [quantity,setQuantity]=uses

  useEffect(async () => {
    await axios
      .get(`http://localhost:3001/data/getClickedItem/${id}`)
      .then((response) => {
        console.log(response.data);
        setItem(response.data);
        
      });
  }, []);
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  const addToCartAction =async  (itemTitle, itemPrice, itemQuantity,itemImage) => {

    if(localStorage.getItem("token"))
    {
      const userId=parseJwt(localStorage.getItem("token"))
      console.log(userId);
      await axios.post(
        `http://localhost:3001/data/addCartItem/${userId.id}/${itemTitle}/${itemPrice}/${encodeURIComponent(itemImage)}`
      ).then((response)=>
      {
        console.log(response.data);
      })
    }
    else{
      history.push('/login')
    }
    
  };
  return (
    <>
      <NavBar />
      {item && (
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.image_div}>
              <img className={styles.image} src={item.image}></img>
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                <h2>{item.title}</h2>
                <span>by Planto</span>
              </div>
              <div className={styles.price}>
                <span>{item.price}</span>
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
                    addToCartAction(item.title,item.price.split(" ")[1],2,item.image)
                  }}
                >
                  Add to Cart
                </button>
                <div>
                  <span>Quantity</span>
                  <input type="number" min="1" max="10" ></input>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature_header}>
              <h2>Description</h2>
              <span>{item.description}</span>
            </div>
            <div className={styles.special_feature}>
              <h2>Special Features</h2>
              <ul>
                {item.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Description;
