import React from "react";
import styles from "./Banner.module.css";
import clock from "../../assets/Clock.png";
import rider from "../../assets/rider.png";
import check from "../../assets/minOrder.png";
import rating from "../../assets/rating.png";

export default function Banner({ restaurant }) {
  const { image, name, city, logo } = restaurant;
  return (
    <div className={styles.container}>
      <img className={styles.bgimg} src={image || logo} />
      <div className={styles.main}>
        <div className={styles.left}>
          <p>I'm lovin' it!</p>
          <p className={styles.heading}>{name + ", " + city}</p>
          <div className={styles.details}>
            <span><img src={check} /> Minimum Order: 12 GBP</span>
            <span><img src={rider} />Delivery in 20-25 Minutes</span>
          </div>
          <div className={styles.time}>
            <img src={clock} /> <span> Open until 3:00 AM</span>
          </div>
        </div>
        <div className={styles.right}>
        <img className={styles.img} src={image || logo} />
        <img src={rating} className={styles.rating} />
        </div>
      </div>
    </div>
  );
}
