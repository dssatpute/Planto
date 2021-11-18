import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { useHistory, useLocation } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";

const NavBar = ({ user }) => {
  const location = useLocation();
  const [userName, setUserName] = useState();
  const [activePlant, setActivePlant] = useState(false);
  const [activeGarden, setActiveGarden] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (user.status) {
      setUserName(user.userName);
      
    }
    else
    {
      localStorage.setItem("cart-count",0)
    }
  }, [user]);

  const UserInfo = () => {
    return (
      <div style={{ width: "130px" }}>
        <span>
          <i>Welcome &nbsp; </i>
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
  };
  return (
    <div className="NavBar">
      <div className={styles.main}>
        <div className={styles.logo} onClick={() => history.push("/")}>
          <span className="logo">Planto</span>
        </div>
        {location.pathname === "/" && (
          <div className={styles.dropdown}>
            <div>
              <div
                className={styles.dropdown_button}
                onClick={(e) => {
                  setActivePlant(!activePlant);
                  setActiveGarden(false);
                }}
              >
                Plants
              </div>
              {activePlant && (
                <div className={styles.dropdown_content_plant}>
                  <div className="dropdown-item">Air Plants</div>
                  <div className="dropdown-item">Aquatic Plants</div>
                  <div className="dropdown-item">Bamboo Plants</div>
                </div>
              )}
            </div>
            <div>
              <div
                className={styles.dropdown_button}
                onClick={(e) => {
                  setActiveGarden(!activeGarden);
                  setActivePlant(false);
                }}
              >
                Accessories
              </div>
              {activeGarden && (
                <div className={styles.dropdown_content_garden}>
                  <div className="dropdown-item">Garden Accessories</div>
                  <div className="dropdown-item">Garden Tools</div>
                </div>
              )}
            </div>
          </div>
        )}
        {/* <div className={styles.actions}></div> */}
        <div className={styles.actions}>
          {user.status ? <UserInfo /> : ""}

          <div className={styles.cart}>
            <div className={styles.cart_logo}>
              <a href="/cart-items">
                <ShoppingCartIcon />
                {/* {cartCount} */}
              </a>
            </div>
            <div className={styles.count_cart}>
              <span>{localStorage.getItem("cart-count")}</span>
            </div>
          </div>

          <div className={styles.login_div}>
            <RenderButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
