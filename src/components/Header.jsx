import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./header.module.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [activePlant, setActivePlant] = useState(false);
  const [activeGarden, setActiveGarden] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <span className="logo">Planto</span>
      </div>
      <div className={styles.dropdown}>
        <div>
        <div
          className={styles.dropdown_button}
          onClick={(e) => {
            setActivePlant(!activePlant);
            setActiveGarden(false)
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
            setActivePlant(false)
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
      <div className={styles.actions}>
        <div className={styles.cart}>
          <ShoppingCartIcon />
        </div>
        <div className={styles.login_div}>
          <button className={styles.login_button} type="submit">
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

// const Main = styled.div`
//   width: 100%;
//   height: 70px;
//   align-items: center;
//   display: flex;
//   justify-content: space-between;
// `;
// const Logo = styled.div`
//   padding: 0px 50px;

//   .logo {
//     font-family: "Arial";
//     font-size: 2.2rem;
//     color: black;
//     font-family: "Pacifico";
//   }
// `;
// const Actions = styled.div`
//   display: flex;
//   width: 200px;
//   justify-content: space-around;
//   margin-right: 20px;
//   align-items:center;
// `;
// const Login = styled.div`
//   .login_button {
//     padding: 10px;
//     // border:2px solid black;
//     border: none;
//     border-radius: 20px;
//     font-weight: bold;
//   }
//   .login_button:hover
//   {
//     color:white;
//     background-color:#3d69e1;
//     border:2.5px solid black;
//     transition:all 0.3s ease-in-out ;
//   }
// `;
// const Cart = styled.div`
//   .cart {
//     padding: 10px;
//   }
// `;

// const Filter=styled.div`

// `
