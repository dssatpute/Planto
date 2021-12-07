import axios from "axios";
import React, { useState } from "react";
import styles from "./sign_in.module.css";
import { useHistory } from "react-router";
import { Footer } from "..";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        toast.success("Signed In!")
        window.setTimeout(window.location.replace("http://localhost:3000/"),5000);
      })
      .catch((error) => {
        toast.error("Invalid Email or Password");
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
            <h2>Sign in to your Account</h2>
            <label className={styles.input_label}>
              <span>Email</span>
            </label>
            <div>
              <input
                className={styles.input_elements}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required="required"
                data-shrink="true"
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
            Don't have an account? <a href="/signup">Register</a>
          </div>
        </div>
      )}
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Signin;
