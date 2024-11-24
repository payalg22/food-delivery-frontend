import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { assets } = useContext(AppContext);
  const images= assets.home;

  return (
    <div className={styles.container}>
      <img src={images.heroComp1} className={styles.center} />
      <img src={images.heroComp2} className={styles.img2} />
      <div className={styles.orange}></div>
    </div>
  );
}
