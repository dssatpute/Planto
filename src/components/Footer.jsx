import React from "react";
import styles from "./footer.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <span >Planto</span>
      </div>
      <div className={styles.division}>
        <ul className={styles.list_item}>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Know more about gardening</li>
        </ul>
      </div>
      <div className={styles.division}>
        <ul className={styles.list_item}>
          <li>Contact: 1234567890</li>
          <li>Address: Banglore, Tower - AE2</li>
          <li>Email: teamplanto@apple.com</li>
        </ul>
      </div>
      <div className={styles.division}>
        <ul className={styles.list_item_social}>
          <li>
            <i class="fab fa-facebook"></i>
          </li>
          <li>
            <FacebookIcon />
          </li>
          <li>
            <WhatsAppIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <EmailIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
