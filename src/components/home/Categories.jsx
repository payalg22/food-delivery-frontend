import React, { useEffect, useState } from "react";
import { getCategories } from "../../services/assets";
import styles from "./Categories.module.css";

export default function Categories() {
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          <h1>Order.uk Popular Categories 🤩</h1>
          <div className={styles.block}>
            {categories.map((category) => {
              return (
                <div key={category._id} className={styles.card}>
                  <img src={category.img} className={styles.image} />
                  <div className={styles.details}>
                    <p>{category.name}</p>
                    <span>21 Restaurants</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
