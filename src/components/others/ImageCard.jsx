import React from "react";
import styles from "./ImageCard.module.css";

export default function ImageCard({label, heading, logo, discount, isAdd, showMenu }) {
  return (
    <div className={styles.card} onClick={showMenu}>
      <img src={logo} className={styles.bgImg} />
      <span className={styles.discount}>
        -{discount || Math.round(Math.random() * 30) + 10}%
      </span>
      <p className={styles.label}>{label}</p>
      <p className={styles.name}>
        {heading}
      </p>
      {isAdd && <span className={styles.add}>
        <span>+</span>
      </span>}
    </div>
  );
}
