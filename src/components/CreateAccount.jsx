import React,{useState} from "react";
import axios from 'axios'
import { useHistory } from "react-router";
import styles from "./create_account.module.css";


const Createaccount = () => {

  let history=useHistory();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");


  const onRegisterHandler=async(e)=>
  {
    e.preventDefault();
    if(password!=retypedPassword)
    {
      alert("Password and Retyped password do not match!")
    }
    else
    {
      const config={ header: {
        "Content-Type": "application/json"
      }}
      const {data} = await axios.post("http://localhost:3001/auth/register",{username,email,password},config)
      console.log(data);
      history.push('/login')
    }

  }

  return (
    <div>
      <span className={styles.header_logo}>Planto</span>
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
              type="text"
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
          <div>
            <a >
              <button className={styles.create_account_button} type="submit">
                CREATE ACCOUNT
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createaccount;
