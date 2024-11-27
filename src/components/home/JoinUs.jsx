import React, { useContext } from "react";
import styles from "./JoinUs.module.css";
import AppContext from "../../context/AppContext";

function Card({ details }) {
  const { bgImg, label, heading, text } = details;

  return (
    <div className={styles.card}>
        <img className={styles.bgimg} src={bgImg} />
      <div className={styles.label}>{label} </div>
      <p className={styles.text}>{text}</p>
      <h1 className={styles.heading}>{heading}</h1>
      <button className={styles.button}>Get Started</button>
    </div>
  );
}

export default function JoinUs() {
  const { assets } = useContext(AppContext);
  const images = assets.home;

  const info = [
    {
      label: "Earn more with lower fees",
      text: "Signup as a business",
      heading: "Partner with us",
      bgImg: images.chef,
    },
    {
      label: "Avail exclusive perks",
      text: "Signup as a rider",
      heading: "Ride with us",
      bgImg: images.rider,
    },
  ];

  return (
    <div className={styles.container}>
      {info.map((detail, idx) => {
        return <Card details={detail} key={idx} />;
      })}
    </div>
  );
}
