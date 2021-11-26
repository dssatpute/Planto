import React from "react";
import {useHistory} from 'react-router-dom'
import { Footer } from "..";
import { months } from "../data/misc_data";
import styles from './order_placed.module.css'


const OrderPlaced = ({user}) => {
    var date=new Date()
    var day=String(date.getDate()+7)
    var month=String(date.getMonth())
    const history=useHistory()
  return (
    <div className={styles.main}>
      <section className={styles.summary}>
        <h2>Order Id {user.userId}</h2>
        <div>
          <img
            src={require("../assets/images/green_tick.png").default}
            alt="Cannot display"
            style={{borderRadius:"1000px"}}
          ></img>
        </div>
        <div classNam={styles.summary_content}>
          <p>
            Your order has been placed and will be delivered to you by {day} th{" "}
            {months[0][month]}{" "}
          </p>
        </div>
        <div>
            <h3>Thank you for shopping with us</h3>
        </div>
        <button className={styles.return} onClick={(e)=>
        {
          history.push('/')
        }}>Return Home</button>
      </section>
      <Footer/>
    </div>
  );
};

export default OrderPlaced;
