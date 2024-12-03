import React from "react";
import styles from "./Cart.module.css";
import icon from "../../assets/cart.png";
import remove from "../../assets/remove.png";
import share from "../../assets/share.png";
import scooter from "../../assets/deliveryScooter.png";
import store from "../../assets/newStore.png";
import forward from "../../assets/forwardButton.png";

function CartItem({ menuItem, handleRemove }) {
  const { quantity, item } = menuItem;
  const { price, name, _id } = item;
  return (
    <div className={styles.itembox}>
      <div className={styles.quantity}>{quantity}x</div>
      <div className={styles.details}>
        <div className={styles.price}>{"₹" + price}</div>
        <div className={styles.item}>{name}</div>
      </div>
      <img src={remove} onClick={() => {handleRemove(_id)}} />
    </div>
  );
}

export default function ({ list, handleRemove }) {
  const menuItems = list.items;
  return (
    <div className={styles.container}>
      {menuItems.length === 0 ? (
        <p>Cart is empty</p>
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
            {menuItems.map((item) => {
              return <CartItem key={item._id} menuItem={item} handleRemove={handleRemove} />;
            })}
            <div className={styles.invoice}>
              <div>
                <p> Sub Total: </p>
                <span>{list?.total?.toFixed(2)}</span>
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
                <h1>₹{list?.total?.toFixed(2)}</h1>
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
