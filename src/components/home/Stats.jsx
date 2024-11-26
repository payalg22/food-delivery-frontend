import React from "react";
import styles from "./Stats.module.css";

export default function Stats() {
  const data = [
    { count: "546", title: "Registered Riders" },
    { count: "789,900", title: "Orders Delivered" },
    { count: "690", title: "Restaurants Partnered" },
    { count: "17,457", title: "Food items" },
  ];

  return <div className={styles.container}>
    {data.map((item, idx) => {
        return <div className={styles.section} key={idx}>
            <p className={styles.count}>{item.count}+</p>
            <p className={styles.title}>{item.title}</p>
        </div>
    })}
  </div>;
}
