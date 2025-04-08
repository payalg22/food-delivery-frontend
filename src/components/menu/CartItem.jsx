import { useDispatch } from "react-redux";
import cartActions from "../../redux/cartSlice";
import remove from "../../assets/remove.png";
import styles from "./Cart.module.css";
import { removeFromCart } from "../../services/cart";

export default function CartItem({ menuItem }) {
  const dispatch = useDispatch();
  const { quantity, price, name, _id } = menuItem;

  const handleRemoveItem = async () => {
    dispatch(cartActions.removeFromCart(_id));
    await removeFromCart(_id);
  };
  
  return (
    <div className={styles.itembox}>
      <div className={styles.quantity}>{quantity}x</div>
      <div className={styles.details}>
        <div className={styles.price}>{"₹" + price * quantity}</div>
        <div className={styles.item}>{name}</div>
      </div>
      <img src={remove} onClick={handleRemoveItem} />
    </div>
  );
}
