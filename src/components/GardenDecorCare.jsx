import React from "react";
import styles from "./garden_decor.module.css";

const promoItems = [
  {
    content:
      "Add colors to your garden. Choose from different shapes,colors and materials",
    price: "Planters starting at - ₹ 139",
    image: require("../assets/images/promo_images/pebbles.jpg").default,
  },
  {
    content:
      "Get a tool for every gardening activity and make it a fun experience",
    price: "Tools starting at - ₹ 139",
    image: require("../assets/images/promo_images/tools.jpg").default,
  },
  {
    content:
      "Add visual and textural  features to your garden with wide variety and range of natural pebbles",
    price: "Pebbles starting at - ₹ 139",
    image: require("../assets/images/promo_images/planters.jpg").default,
  },
  {
    content:
      "Healty food is key for healthy plants.Choose from wide range of fertilzers and soil",
    price: "Fertilizers starting at - ₹ 139",
    image: require("../assets/images/promo_images/soil_fertilizer.jpg").default,
  },
];

const Gardendecorcare = () => {
  return (
    <>
      <div className={styles.main_container}>
        {promoItems.map((item) => (
          <div className={styles.promo_block}>
            <img src={item.image} className={styles.image}></img>
            <div className={styles.inner_block}>
              <h2 style={{ fontSize: "1.5rem", color: "#082a54" }}>
                {item.price}
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "black",
                  fontWeight: "200",
                }}
                className="promo-content"
              >
                {item.content}
              </p>

              <div>
                <button className={styles.shop_button}>Shop Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gardendecorcare;
