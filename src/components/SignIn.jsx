import axios from "axios";
import React, { useState } from "react";
import styles from "./sign_in.module.css";
import { useHistory } from "react-router";

const Signin = () => {
  let history=useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler =async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

     await axios.post("http://localhost:3001/auth/login",{email,password},config).then((response)=>
     {
       console.log(response);
       if(response.data.status)
       {
         localStorage.setItem("token",response.data.token)
       }
       else
       {
         alert(response.data.message)
       }
     })

     await axios.get("http://localhost:3001/api/verifyLogin",{
       headers:{
         "auth-token":localStorage.getItem("token")
       }
     }).then((response)=>
     {
        console.log(response);
     })


    
  };

  return (
    <div>
      <span className={styles.header_logo}>Planto</span>
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
    </div>
  );
};

export default Signin;
