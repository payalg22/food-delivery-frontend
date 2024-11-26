import React, { useContext } from "react";
import styles from "./AboutUs.module.css";
import AppContext from "../../context/AppContext";

function Card({ step }) {
  const { heading, image, text } = step;
  return (
    <div className={styles.card}>
      <p className={styles.heading}>{heading}</p>
      <img src={image} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default function AboutUs() {
  const { assets } = useContext(AppContext);
  const images = assets.home;
  const faqs = [
    "How does Order.UK work?",
    "What payment methods are accepted?",
    "Can I track my order in real-time?",
    "Are there any special discounts or promotions available?",
    "Is Order.UK available in my area?",
  ];

  const steps = [
    {
      heading: "Place an Order!",
      image: images.vectorOrder,
      text: "Place order through our website or Mobile app",
    },
    {
      heading: "Track Progress",
      image: images.vectorTrack,
      text: "Your can track your order status with delivery time",
    },
    {
      heading: "Get your Order!",
      image: images.vectorDelivered,
      text: "Receive your order at a lighting fast speed!",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>Know more about us!</h1>
        <p className={styles.selected}>Frequent Questions</p>
        <p>Who we are?</p>
        <p>Partner Program </p>
        <p>Help & Support</p>
      </div>
      <div className={styles.main}>
        <div className={styles.faq}>
          {faqs.map((que, idx) => {
            return <p key={idx}>{que}</p>;
          })}
        </div>
        <div className={styles.process}>
          {steps.map((item, idx) => {
            return <Card key={idx} step={item} />;
          })}
          <p className={styles.details}>
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </p>
        </div>
      </div>
    </div>
  );
}
