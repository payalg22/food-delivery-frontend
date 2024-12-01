import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import styles from "./Header.module.css";
import cart from "../../assets/cart.png";
import arrow from "../../assets/down.png";
import location from "../../assets/location.png";
import star from "../../assets/star.png";

export default function Header() {
  const { userInfo } = useContext(AppContext);
  const [addresses, setAddresses] = useState(userInfo?.address);
  const defaultAddr = addresses?.find((addr) => addr.isDefault === true);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={star} />
        <span>Get 5% Off your first order,&nbsp;</span>
        <span className={styles.link}> Promo: ORDER5</span>
      </div>
      <div className={styles.middle}>
        <img src={location} />
        <span>{defaultAddr?.address} &nbsp;</span>
        <span className={styles.link} onClick={() => navigate("/address")}>
          {defaultAddr ? "Change" : "Add"} Location{" "}
        </span>
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
