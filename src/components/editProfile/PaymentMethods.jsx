import React from "react";
import styles from "./PaymentMethods.module.css";
import { useDispatch, useSelector } from "react-redux";
import AddCardIcon from "@mui/icons-material/AddCard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PaymentModal from "./PaymentModal";
import EditIcon from "@mui/icons-material/Edit";

export default function PaymentMethods() {
  const dispatch = useDispatch();
  const savedCards = useSelector((store) => store.payment);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Saved Payment Methods</p>
      <div className={styles.addrBox}>
        <div className={styles.addNew}>
          <PaymentModal
            trigger={
              <div className={styles.icon}>
                <AddCardIcon />
              </div>
            }
          />

          <p>Add New Card</p>
        </div>
        {savedCards.map((card) => {
          return (
            <div key={card._id} className={styles.card}>
              <div className={styles.icon}>
                <CreditCardIcon />
              </div>
              <div>
                <p className={styles.num}>
                  {"xxxx xxxx xxxx " + card.number.slice(-4)}
                </p>
                <p className={styles.name}>{card.name}</p>
              </div>
              <PaymentModal trigger={<EditIcon />} card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
