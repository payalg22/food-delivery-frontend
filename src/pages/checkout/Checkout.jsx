import React, { useState } from "react";
import styles from "./Checkout.module.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import PageLabel from "../../components/others/PageLabel";
import PopularPlaces from "../../components/others/PopularPlaces";
import mapPine from "../../assets/mapPin.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";
import calculateTotal from "../../utils/calculateTotal.js";
import cartActions from "../../redux/cartSlice.js";

export default function Checkout() {
  const { items: cart, address, payment } = useSelector((store) => store.cart);
  const allAddresses = useSelector((store) => store.address);
  const deliverTo = address
    ? allAddresses.find((addr) => addr._id === address)
    : allAddresses.find((addr) => addr.isDefault === true);
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");
  const cartTotal = calculateTotal(cart);
  const tax = 10;
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(cartActions.addNotes(notes));
  }

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
                <p className={styles.price}>
                  {"₹" + item.price * item.quantity}
                </p>
              </div>
            );
          })}
          <div>
            <input
              type="text"
              placeholder="Add order notes...."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.bill}>
          <div className={styles.address}>
            <img src={mapPine} />
            <span>
              <div>Delivery Address</div>
              <div>{deliverTo?.address + ", " + deliverTo?.city}</div>
            </span>
            <button onClick={() => navigate("/address")}>
              <KeyboardArrowRightIcon />
            </button>
          </div>
          <div className={styles.summary}>
            <div>
              <p>Items</p>
              <p>{"₹" + cartTotal}</p>
            </div>
            <div>
              <p>Sales Tax</p>
              <p>₹{tax}</p>
            </div>
          </div>
          <div className={styles.subtotal}>
            <h3>Subtotal</h3>
            <h2>₹{cartTotal + tax}</h2>
          </div>
          <button onClick={handleCheckout}>
            <h3>Choose Payment Method</h3>
          </button>
        </div>
      </div>
      <PopularPlaces />
      <div></div>
    </div>
  );
}
