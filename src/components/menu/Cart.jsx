import React, { useEffect } from "react";
import styles from "./Cart.module.css";
import icon from "../../assets/cart.png";
import share from "../../assets/share.png";
import scooter from "../../assets/deliveryScooter.png";
import store from "../../assets/newStore.png";
import forward from "../../assets/forwardButton.png";
import { useSelector } from "react-redux";
import calculateTotal from "../../utils/calculateTotal";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";


export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  const total = calculateTotal(cartItems);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      {cartItems?.length === 0 ? (
        <p className={styles.empty}>Cart is empty</p>
      ) : (
        <>
          <div className={styles.share}>
            <img src={share} />
            <p>Share this cart with your friends</p>
            <div className={styles.copylink}>Copy Link</div>
          </div>
          <div className={styles.cart}>
            <div className={styles.header}>
              <img src={icon} />
              <h1>My Basket</h1>
            </div>
            {cartItems?.map((item) => {
              return <CartItem key={item._id} menuItem={item} />;
            })}
            <div className={styles.invoice}>
              <div>
                <p> Sub Total: </p>
                <span>{total}</span>
              </div>
              <div>
                <p>Discounts:</p> <span>-₹25.00</span>
              </div>
              <div>
                <p>Delivery Fee: </p>
                <span>₹25.00</span>
              </div>
            </div>
            <div>
              <div className={styles.total}>
                <p>Total to pay</p>
                <h1>₹{total}</h1>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.tiles}>
                <div>
                  <img src={scooter} />
                  <p className={styles.action}>Delivery</p>
                  <p>Starts at 17:50</p>
                </div>
                <div>
                  <img src={store} />
                  <p className={styles.action}>Collection</p>
                  <p>Starts at 16:50</p>
                </div>
              </div>
              <div className={styles.checkout} onClick={() => navigate("/checkout")}>
                <img src={forward} />
                <h2>Checkout!</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
