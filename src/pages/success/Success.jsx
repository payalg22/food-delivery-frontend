import React from "react";
import styles from "./Success.module.css";
import CheckIcon from "@mui/icons-material/Check";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cartActions from "../../redux/cartSlice";
import { clearCart } from "../../services/cart";

export default function Success() {
  const { items } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCompleteOrder = async () => {
    await clearCart();
    dispatch(cartActions.emptyCart());
    navigate("/home");
  }

  return (
    <div className={styles.container}>
      <div className={styles.success}>
        <div>
          <div>
            <CheckIcon />
          </div>
        </div>
      </div>
      <h2>Order Placed Successfully</h2>
      <p>
        Your order is confirmed and on its way. Get set to savor your chosen
        delights!
      </p>
      <div className={styles.order}>
        {items.map((item) => (
          <p key={item._id} className={styles.item}>
            {item.name}
          </p>
        ))}
        <button onClick={handleCompleteOrder}>Back to Home</button>
      </div>
    </div>
  );
}
