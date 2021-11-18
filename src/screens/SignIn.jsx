import axios from "axios";
import React, { useState } from "react";
import styles from "./sign_in.module.css";
import { useHistory } from "react-router";

const Signin = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:3001/auth/login",
        { email, password },
        {
          withCredentials: true,
          header: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      )
      .then((response) => {
        setLoading(true);
        window.location.replace("http://localhost:3000/");
      })
      .catch((error) => {
        alert("Invalid Email or Password");
      });
  };

  return (
    <div>
      {loading ? (
        <h2>Loading</h2>
      ) : (
        <div className={styles.sign_in}>
          <form
            className={styles.input_form}
            onSubmit={(e) => onSubmitHandler(e)}
          >
            <h1>Sign In</h1>
            <label className={styles.input_label}>
              <span>Email address</span>
            </label>
            <div>
              <input
                className={styles.input_elements}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required="required"
              />
            </div>
            <label className={styles.input_label}>
              <span>Password</span>
            </label>
            <div>
              <input
                className={styles.input_elements}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                required="required"
              ></input>
            </div>
            <div className={styles.sign_in_div}>
              <button className={styles.sign_in_button} type="submit">
                SIGN IN
              </button>
            </div>
          </form>
          <div className={styles.create_account}>
            <span>OR</span>
            <div>
              <a href="/signup">
                <button className={styles.create_account_button}>
                  CREATE ACCOUNT
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
