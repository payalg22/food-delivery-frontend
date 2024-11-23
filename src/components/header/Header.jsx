import React from "react";
import styles from "./Header.module.css";
import cart from "../../assets/cart.png";
import arrow from "../../assets/down.png";
import location from "../../assets/location.png";
import star from "../../assets/star.png";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <img src={star} />
        <span>Get 5% Off your first order,&nbsp;</span>
        <span className={styles.link}> Promo: ORDER5</span>
      </div>
      <div className={styles.middle}>
        <img src={location} />
        <span>GRegent Street, A4, A4201, London order,&nbsp;</span>
        <span className={styles.link}> Change Location</span>
      </div>
      <div className={styles.right}>
        <img src={cart} />
        <span className={styles.cart}>My Cart</span>
        <span className={styles.blank}></span>
        <img src={arrow} />
      </div>
    </div>
  );
}
