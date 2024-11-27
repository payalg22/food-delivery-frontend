import React, { useContext } from "react";
import styles from "./Ad.module.css";
import AppContext from "../../context/AppContext";
import logo from "../../assets/logo_basic.png";
import apple from "../../assets/apple_store.png";
import playstore from "../../assets/google_play.png";

export default function Ad() {
  const { assets } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <img src={assets.home.ad} className={styles.imageShadow} />
      <img src={assets.home.ad} className={styles.image} />
      <div className={styles.main}>
        <div className={styles.details}>
          <div className={styles.heading}>
            <img src={logo} />
            ing is more
          </div>
          <div className={styles.black}>
            <span>Personalised</span> & Instant
          </div>
          <p>Download the Order.uk app for faster ordering</p>
          <div className={styles.store}>
            <span>
              <img src={apple} />
            </span>
            <span>
              <img src={playstore} className={styles.playstore} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
