import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo_basic.png";
import user from "../../assets/user.png";

export default function NavBar({ curr }) {
  const options = [
    "Home",
    "Browse Menu",
    "Special Offers",
    "Restaurants",
    "Track Order",
  ];

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <div className={styles.sub}>
        {options.map((item, index) => {
          return (
            <p
              key={index}
              className={curr === item ? styles.selected : styles.options}
            >
              {item}
            </p>
          );
        })}
      </div>
      <button className={styles.user}>
        <img src={user} />
        Login/Sign Up
      </button>
    </div>
  );
}
