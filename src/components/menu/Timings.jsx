import React from "react";
import styles from "./Timings.module.css";
import track from "../../assets/delivery_info.png";
import contact from "../../assets/contactInfo.png";
import time from "../../assets/optTime.png";

export default function Timings() {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.title}>
          <img src={track} />
          <h1>Delivery Information</h1>
        </div>
        <div className={styles.contentbox}>
          {weekdays.map((day, index) => {
            return (
              <div key={index}>
                <span className={styles.weekday}>{day}</span>
                <span className={styles.time}>: 8.00AM to 3.00AM</span>
              </div>
            );
          })}
          <p><span className={styles.weekday}>Estimated time until delivery: </span> 20 min</p>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.title}>
          <img src={contact} />
          <h1>Contact Information</h1>
        </div>
        <div>
          <p className={styles.para}>
            If you have allergies or other dietary restrictions, please contact
            the restaurant. The restaurant will provide food-specific
            information upon request.
          </p>
          <div>
            <p className={styles.heading}>Phone number</p>
            <p className={styles.content}>+91 8928304011</p>
          </div>
          <div>
            <p className={styles.heading}>Website</p>
            <p className={styles.content}>https://mcdelivery.co.in</p>
          </div>
        </div>
      </div>
      <div className={styles.column + " " + styles.opttime}>
        <div className={styles.title}>
          <img src={time} />
          <h1>Operational Times</h1>
        </div>
        <div className={styles.contentbox}>
          {weekdays.map((day, index) => {
            return (
              <div key={index}>
                <span className={styles.weekday}>{day}</span>
                <span className={styles.time}>: 8.00AM to 3.00AM</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
