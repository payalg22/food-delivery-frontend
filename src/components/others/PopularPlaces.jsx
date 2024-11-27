import React, { useEffect, useState } from "react";
import styles from "./PopularPlaces.module.css";
import { getPopularRestaurants } from "../../services/assets";

export default function PopularPlaces() {
  const [restaurants, setRestaurants] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPopularRestaurants().then((data) => {
      setRestaurants(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <p> loading..</p>
      ) : (
        <div className={styles.container}>
          <p>Popular Restaurants</p>
          <div className={styles.block}>
            {restaurants.map((place, idx) => {
              return (
                <div key={idx} className={styles.card}>
                  <img src={place.logo} />
                  <p className={styles.name}>{place.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
