import React, { useEffect, useState } from "react";
import styles from "./PopularPlaces.module.css";
import { getPopularRestaurants } from "../../services/assets";
import { useNavigate } from "react-router-dom";

export default function PopularPlaces() {
  const [restaurants, setRestaurants] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPopularRestaurants().then((data) => {
      setRestaurants(data);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      {isLoading ? (
        <p> loading..</p>
      ) : (
        <div className={styles.container}>
          <p>Popular Restaurants</p>
          <div className={styles.block}>
            {restaurants.map((place) => {
              return (
                <div
                  key={place._id}
                  className={styles.card}
                  onClick={() => {
                    handleClick(place._id);
                  }}
                >
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
