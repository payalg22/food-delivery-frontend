import React from "react";
import styles from "./Notification.module.css";
import logo from "../../assets/logo_basic.png";
import hurray from "../../assets/hurray.png";
import pin from "../../assets/Tracking.png";
import done from "../../assets/done.png";

const Card = ({ msg, index }) => {
  const { heading, text, emoji, align } = msg;
  return (
    <div className={styles.card} style={{alignSelf: align}}>
      <span className={styles.num}>{index}</span>
      <div className={styles.note}>
        <div>
          <img src={logo} className={styles.logo} />
          <span className={styles.now}>now</span>
        </div>
        <p className={styles.heading}>
          {heading}
          <img src={emoji} />
        </p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default function NotificationBox() {
  const messages = [
    {
      heading: "We’ve Received your order!",
      text: "Awaiting Restaurant acceptance",
      emoji: pin,
      align: "start",
    },
    {
      heading: "Order Accepted!",
      text: "Your order will be delivered shortly",
      emoji: done,
      align: "end",
    },
    {
      heading: "Your rider's nearby",
      text: "They're almost there- get ready!",
      emoji: hurray,
      align: "center",
    },
  ];

  return (
    <div className={styles.container}>
      {messages.map((msg, index) => {
        return <Card msg={msg} key={index} index={index + 1} />;
      })}
    </div>
  );
}
