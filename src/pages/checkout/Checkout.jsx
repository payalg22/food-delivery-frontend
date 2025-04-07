import React from "react";
import styles from "./Checkout.module.css";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import PageLabel from "../../components/others/PageLabel";
import PopularPlaces from "../../components/others/PopularPlaces";
import mapPine from "../../assets/mapPin.png";

export default function Checkout() {
  const cart = useSelector((store) => store.cart);
  const address = useSelector(store => store.address);

  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      <PageLabel label="Your Order Details" />
      <div className={styles.info}>
        <div className={styles.cart}>
          {cart.map((item) => {
            return (
              <div key={item._id} className={styles.cartItem}>
                <img
                  src={
                    item.img ||
                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJvd2x8ZW58MHx8MHx8fDA%3D"
                  }
                />
                <p>{item.quantity} x</p>
                <p>{item.name}</p>
                <p className={styles.price}>{item.price}</p>
              </div>
            );
          })}
          <div>
            <input type="text" placeholder="Add order notes...." />
          </div>
        </div>
        <div className={styles.bill}>
          <div className={styles.address}>
            <img src={mapPine} />
            <div>{address[0]?.address}</div>
          </div>
        </div>
      </div>
      <PopularPlaces />
      <div></div>
    </div>
  );
}
