import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { useHistory, useLocation } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { Link } from "react-router-dom";


const NavBar = ({ user }) => {
  const location = useLocation();
  const [userName, setUserName] = useState();
  const [activePlant, setActivePlant] = useState(false);
  const [activeGarden, setActiveGarden] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (user.status) {
      setUserName(user.userName);
    } else {
      localStorage.setItem("cart-count", 0);
    }
  }, [user]);

  const UserInfo = () => {
    return (
      <div style={{ width: "auto" ,marginRight:"10px"}}>
        <span>
          <b>{userName}</b>
        </span>
      </div>
    );
  };

  const RenderButton = () => {
    if (user.status) {
      return (
        <>
          <button
            className={styles.login_button}
            onClick={() => {
              axios
                .get("http://localhost:3001/auth/logout", {
                  withCredentials: true,
                })
                .then((reponse) => {
                  localStorage.setItem("cart-total", 0);
                  // localStorage.setItem("cart-count", 0);
                  window.location.replace("http://localhost:3000/");
                });
            }}
          >
            LOG OUT
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className={styles.login_button}
            onClick={() => {
              history.push("/login");
            }}
          >
            LOG IN
          </button>
        </>
      );
    }

    const onClickMenu = () => {
      setSideBar(!sidebar);
    };
  };
  return (
    <div className="NavBar">
      <div className={styles.main}>
        <div className={styles.logo} onClick={() => history.push("/")}>
          <span className="logo">Planto</span>
        </div>

        <div className={styles.actions}>
          {user.status ? (
            <div style={{ fontSize: "1rem" }}>
              <UserInfo />
            </div>
          ) : (
            ""
          )}

          <div className={styles.cart}>
            <div className={styles.cart_logo}>
              <Link to="/cart-items">
                <ShoppingCartIcon />
              </Link>
            </div>
            <div className={styles.count_cart}>
              <span>{localStorage.getItem("cart-count")}</span>
            </div>
          </div>

          <div className={styles.login_div}>
            <RenderButton />
          </div>
        </div>

        <div
          onClick={() => {
            setSideBar(!sidebar);
          }}
          className={styles.ham_icon}
        >
          <MenuIcon />
        </div>
        <div className={sidebar?styles.side_menu_main:styles.hide}>
          <div className={styles.close}>
            <div onClick={()=>{setSideBar(!sidebar)}}>
              <CloseIcon />
            </div>
          </div>
          <div className={styles.side_menu_items}>
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="/cart-items">Cart ({localStorage.getItem("cart-count")} items)</a>
            </div>
            <div>
              {" "}
              <RenderButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
