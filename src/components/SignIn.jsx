import axios from "axios";
import React, { useState } from "react";
import styles from "./sign_in.module.css";

const Signin = () => {

  const [email,setEmail]=useState('')
  const onSubmitHandler=(e)=>
  {
    e.preventDefault();
    axios.post('http://localhost:3001/post',{email})
  }


  return (
    <div>
      <span className={styles.header_logo}>Planto</span>
      <div className={styles.sign_in}>
        <form className={styles.input_form} onSubmit={(e)=>onSubmitHandler(e)}>
          <h1>Sign In</h1>
          <label className={styles.input_label}>
            <span>Email address</span>
          </label>
          <div>
            <input className={styles.input_elements} type="text" onChange={e=>setEmail(e.target.value)}/>
          </div>
          <label className={styles.input_label}>
            <span>Password</span>
          </label>
          <div>
            <input className={styles.input_elements} type="password"></input>
          </div>
          <div className={styles.sign_in_div}>
            <button className={styles.sign_in_button} type="submit">
              SIGN IN
            </button>
          </div>
        </form>
        <div className={styles.create_account}>
          <span >
            OR
          </span>
          <div>
            <button className={styles.create_account_button}>
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
