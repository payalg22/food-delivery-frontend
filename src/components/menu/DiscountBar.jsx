import React, { useContext } from "react";
import styles from "./DiscountBar.module.css";
import AppContext from "../../context/AppContext";
import ImageCard from "../others/ImageCard";

export default function DiscountBar({ restaurant }) {
  const { assets } = useContext(AppContext);
  const offersList = [
    {
      label: restaurant,
      heading: "First Order Discount",
      logo: assets?.coupons?.firstOrder,
      discount: "20",
    },
    {
      label: restaurant,
      heading: "Vegan Discount",
      logo: assets?.coupons?.veganDiscount,
      discount: "20",
    },
    {
      label: restaurant,
      heading: "Free ice Cream Offer",
      logo: assets?.coupons?.freeIcecream,
      discount: "100",
    },
  ];

  return (
    <div className={styles.offers}>
      {offersList.map(({ label, heading, logo, discount }, index) => {
        return (
          <ImageCard
            key={index}
            label={label}
            heading={heading}
            logo={logo}
            discount={discount}
            isAdd={true}
          />
        );
      })}
    </div>
  );
}
