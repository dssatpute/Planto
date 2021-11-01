import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { useHistory, useLocation } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import axios from "axios";

const NavBar = ({ count }) => {
  const location = useLocation();
  const [activePlant, setActivePlant] = useState(false);
  const [activeGarden, setActiveGarden] = useState(false);
  const history = useHistory();
  const [state, setState] = useState(false);
  const [localCount, setLocalCount] = useState(0);

  useEffect(async () => {
    axios
      .get("http://localhost:3001/auth/verify", { withCredentials: true })
      .then((response) => {
        setState(response.data.flag);
      });
  }, []);

  const RenderButton = () => {
    if (state) {
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
          <Link to="/cart-items">
            <ShoppingCartIcon />
          </Link>
          {/* <div className={styles.count_cart}>
            <span
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
             {
               count?<span>{count}</span>:<span>{localCount}</span>
              
             }

            </span>
          </div> */}
        </div>
        <div className={styles.login_div}>
          <RenderButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
