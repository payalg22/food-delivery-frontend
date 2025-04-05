import React from "react";
import styles from "./Cart.module.css";
import icon from "../../assets/cart.png";
import remove from "../../assets/remove.png";
import share from "../../assets/share.png";
import scooter from "../../assets/deliveryScooter.png";
import store from "../../assets/newStore.png";
import forward from "../../assets/forwardButton.png";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../../redux/cartSlice";
import calculateTotal from "../../utils/calculateTotal";

//TODO: CONNECT CART TO BACKEND: UPDATE
function CartItem({ menuItem }) {
  const dispatch = useDispatch();
  const { quantity, price, name, _id } = menuItem;

  return (
    <div className={styles.itembox}>
      <div className={styles.quantity}>{quantity}x</div>
      <div className={styles.details}>
        <div className={styles.price}>{"₹" + price}</div>
        <div className={styles.item}>{name}</div>
      </div>
      <img
        src={remove}
        onClick={() => {
          dispatch(cartActions.removeFromCart(_id));
        }}
      />
    </div>
  );
}

export default function Cart() {
  const menuItems = useSelector((store) => store.cart);
  const total = calculateTotal(menuItems);
  return (
    <div className={styles.container}>
      {menuItems?.length === 0 ? (
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
            {menuItems?.map((item) => {
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
              <div className={styles.checkout}>
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
