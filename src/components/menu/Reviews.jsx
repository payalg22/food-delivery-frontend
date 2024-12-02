import React, { useEffect, useState } from "react";
import styles from "./Reviews.module.css";
import back from "../../assets/left.png";
import next from "../../assets/right.png";
import profile from "../../assets/reviewProfile.png";
import stars from "../../assets/fivestars.png";
import clock from "../../assets/TimeSpan.png";
import rating from "../../assets/rating.png";
import { getReviews } from "../../services/assets";


function Card({ data }) {
  const { name, city, date, review } = data;
  return (
    <div className={styles.card}>
    <div className={styles.title}>
        <img src={profile} />
        <div className={styles.separation}></div>
        <span>
            <p className={styles.name}>{name}</p>
            <p className={styles.city}>{city}</p>
        </span>
        <span className={styles.rating}>
            <img src={stars} />
            <p className={styles.date}>
                <img src={clock} />
                {date}
            </p>
        </span>
    </div>
      <p className={styles.review}>{review}</p>
    </div>
  );
}

export default function Reviews() {
  const [allReviews, setAllReviews] = useState([]);
  const [pointer, setPointer] = useState(0);

  useEffect(() => {
    getReviews().then((data) => {
      setAllReviews(data);
    });
  }, []);

  const handleBack = () => {
    const newIndex = pointer - 3;
    if(newIndex >= 0) {
        setPointer(newIndex);
    }
  }

  const handleNext = () => {
    const newIndex = pointer + 3;
    if(newIndex < allReviews.length) {
        setPointer(newIndex);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Customer Reviews</h1>
        <span className={styles.arrow}>
          <img src={back} onClick={handleBack} />
          <img src={next} onClick={handleNext} />
        </span>
      </div>
      <div className={styles.carousel}>
        {allReviews?.slice(pointer, pointer + 3)?.map((review, index) => {
          return <Card key={index} data={review} />;
        })}
      </div>
      <div className={styles.overallrating}>
        <img src={rating} />
      </div>
    </div>
  );
}
