import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import styles from "./Hero.module.css";
import NotificationBox from "./Notification";

export default function Hero() {
  const { assets } = useContext(AppContext);
  const images = assets.home;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Order Restaurant food, takeaway and groceries.</p>
        <p className={styles.heading}>Feast Your Senses,</p>
        <p className={styles.heading + " " + styles.diff}>Fast and Fresh</p>
        <span>Enter a postcode to see what we deliver</span>
        <div className={styles.input}>
            <input type="text" placeholder="e.g. EC4R 3TE" />
            <button>Search</button>
        </div>
      </div>
      <div className={styles.right}>
        <img src={images.heroComp1} className={styles.center} />
        <img src={images.heroComp2} className={styles.img2} />
        <div className={styles.orange}>
            <NotificationBox />
        </div>
      </div>
    </div>
  );
}
