import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import styles from "./create_account.module.css";
import { Footer } from "..";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Createaccount = () => {
  let history = useHistory();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onRegisterHandler = async (e) => {
    e.preventDefault();
    if (password !== retypedPassword) {
      toast.error("Passwords do not match");
    } 
    else if(password.length<8)
    {
      toast.error("Password length <8");
    } 
    else if(!validateEmail(email))
    {
      toast.error("Invalid email");
    }
    else {
      await axios.post(
        "https://planto-backend-version.herokuapp.com/auth/register",
        { username, email, password },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      ).then((res)=>{
        console.log(res);
        toast.success("Account created!")
        history.push("/login");
      }).catch((err)=>
      {
        
        console.log(err);
      })
      
    }
  };

  return (
    <div>
      {/* <span className={styles.header_logo}>Planto</span> */}
      <div className={styles.create_account_form}>
        <form className={styles.input_form} onSubmit={onRegisterHandler}>
          <h1>Create Account</h1>
          <label className={styles.input_label}>
            <span>User Name</span>
          </label>
          <div>
            <input
              className={styles.input_elements}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            ></input>
          </div>
          <label className={styles.input_label}>
            <span>Email address</span>
          </label>
          <div>
            <input
              className={styles.input_elements}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <label className={styles.input_label}>
            <span>Password</span>
          </label>
          <div>
            <input
              className={styles.input_elements}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></input>
          </div>
          <label className={styles.input_label}>
            <span>Re-enter Password</span>
          </label>
          <div>
            <input
              className={styles.input_elements}
              type="password"
              onChange={(e) => setRetypedPassword(e.target.value)}
              value={retypedPassword}
            ></input>
          </div>
          <div className={styles.create_account}>
            <button  className={styles.create_account_button}
              type="submit"
              onClick={(e) => {
                onRegisterHandler(e);
              }}
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
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

export default Createaccount;
