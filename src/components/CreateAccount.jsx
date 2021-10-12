import React from "react";
import styles from "./create_account.module.css";

const Createaccount = () => {

  return (
    <div>
      <span className={styles.header_logo}>Planto</span>
      
      <div className={styles.create_account_form}>
     
        <form className={styles.input_form}>
        <h1>Create Account</h1>
          <label className={styles.input_label}>
            <span>Email address</span>
          </label>
          <div>
            <input className={styles.input_elements} type="text"></input>
          </div>
          <label className={styles.input_label}>
            <span>Password</span>
          </label>
          <div>
            <input className={styles.input_elements} type="password"></input>
          </div>
          <label className={styles.input_label}>
            <span>Re-enter Password</span>
          </label>
          <div>
            <input className={styles.input_elements} type="password"></input>
          </div>
          <div>
            <a href="/signup" className={styles.create_account_button} type="submit">
             CREATE ACCOUNT
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createaccount;
