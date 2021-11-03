import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { useHistory, useLocation } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../App";
import { useContext } from "react";

const NavBar = () => {

  const { userAuthInfo } = useContext(UserContext);
  const location = useLocation();
  const [activePlant, setActivePlant] = useState(false);
  const [activeGarden, setActiveGarden] = useState(false);
  const history = useHistory();

  const RenderButton = () => {
    if (userAuthInfo.status) {
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

  const ShowCart = () => {
    if (userAuthInfo.status) {
      return (
        <div>
          <Link to="/cart-items">
            <ShoppingCartIcon />
          </Link>
        </div>
      );
    } else {
      return <div>Log In</div>;
    }
  };

  return (
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
      <div className={styles.actions}>
        <div className={styles.cart}>
          <ShowCart />
          <div className={styles.count_cart}>
            <span >{localStorage.getItem("cart-count")}</span>
          </div>
        </div>
        <div className={styles.login_div}>
          <RenderButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
