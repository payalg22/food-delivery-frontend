import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import styles from "./Header.module.css";
import cart from "../../assets/cart.png";
import arrow from "../../assets/down.png";
import location from "../../assets/location.png";
import star from "../../assets/star.png";
import { useSelector } from "react-redux";

export default function Header({ handleCart }) {
  const [defaultAddr, setDefaultAddr] = useState(null);
  const navigate = useNavigate();
  const addressList = useSelector(store => store.address);

  useEffect(() => {
    if (addressList) {
      const dAdd = addressList.find((addr) => addr.isDefault === true);
      setDefaultAddr(dAdd);
    }
  }, []);

  console.log(addressList);

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
        <span className={styles.cart} onClick={handleCart}>
          My Cart
        </span>
        <span className={styles.blank}></span>
        <img src={arrow} />
      </div>
    </div>
  );
}
