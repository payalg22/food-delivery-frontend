import React from "react";
import styles from "./Payment.module.css";
import PageLabel from "../../components/others/PageLabel";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import PaymentModal from "../../components/editProfile/PaymentModal";
import { useSelector } from "react-redux";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import WalletIcon from "@mui/icons-material/Wallet";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { FaStripe } from "react-icons/fa";
import AddIcon from "@mui/icons-material/Add";
import { FaCreditCard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const { amount } = useSelector((store) => store.cart);
  const savedCards = useSelector((store) => store.payment);
  const paymentOptions = [
    { title: "Mastercard", id: "master-card", icon: <FaCcMastercard /> },
    { title: "Paypal", id: "pay-pal", icon: <FaPaypal /> },
    { title: "Stripe", id: "s-tripe", icon: <FaStripe /> },
  ];
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      <PageLabel label="Choose and Pay" />
      <div className={styles.main}>
        <div className={styles.left}>
          <div>
            <p>
              <WalletIcon className={styles.wallet} />
              Wallet
            </p>
            <KeyboardArrowRightIcon style={{ color: "rgba(252, 138, 6, 1)" }} />
          </div>
          <div className={styles.line}></div>
          {paymentOptions.map((option) => {
            return (
              <div>
                <p className={styles.paymentOption}>
                  {option.icon}
                  <label htmlFor={option.id}>{option.title}</label>
                </p>
                <input
                  type="radio"
                  name="payment-method"
                  className={styles.radio}
                  id={option.id}
                />
              </div>
            );
          })}
          {savedCards.map((card) => {
            return (
              <div key={card._id}>
                <p className={styles.paymentOption}>
                  <FaCreditCard />
                  <label htmlFor={card._id}>
                    {card.name}
                    <p className={styles.name}>
                      {" xxxx xxxx xxxx " + card.number.slice(-4)}
                    </p>
                  </label>
                </p>
                <input
                  type="radio"
                  name="payment-method"
                  className={styles.radio}
                  id={card._id}
                />
              </div>
            );
          })}
          <PaymentModal
            trigger={
              <div className={styles.addCard}>
                <AddIcon />
                Add Credit/ Debit card
              </div>
            }
          />
        </div>
        <div className={styles.right}>
          <div className={styles.bill}>
            <p>Amount to be payed</p>
            <p>{"₹" + amount}</p>
          </div>
          <div className={styles.line}></div>
          <button className={styles.proceed} onClick={() => navigate("/success")}>Proceed Payment</button>
        </div>
      </div>
    </div>
  );
}
