import React, { useEffect, useState } from "react";
import styles from "./AllRestaurants.module.css";
import { getOtherRestaurants } from "../../services/assets";
import ImageCard from "../others/ImageCard";

export default function AllRestaurants() {
  const [selectedCuisine, setSelectedCuisine] = useState("Pizza & Fast food");
  const [allRestaurants, setAllRestaurants] = useState();
  const [selectedRestaurants, setSelectedRestaurants] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOtherRestaurants().then((data) => {
      setAllRestaurants(data);
      setSelectedRestaurants(data[0].restaurants);
      setIsLoading(false);
    });
  }, []);

  function handleRestaurants(type) {
    const selection = allRestaurants.filter((item) => {
      return item.type === type;
    });
    setSelectedRestaurants(selection[0].restaurants);
  }

  function handleCuisine(cuisine) {
    setSelectedCuisine(cuisine);
    handleRestaurants(cuisine);
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>Up to -40% 🎊 Order.uk exclusive deals</h1>
            <div className={styles.switch}>
              {allRestaurants?.map((item, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => {
                      handleCuisine(item.type);
                    }}
                    className={selectedCuisine === item.type ? styles.selected : undefined}
                  >
                    {item.type}
                  </p>
                );
              })}
            </div>
          </div>
          <div className={styles.restaurants}>
            {selectedRestaurants?.map((item) => {
              return (
                <ImageCard
                  key={item._id}
                  isAdd={false}
                  label={"Restaurant"}
                  heading={item.name + " " + item.city}
                  logo={item.logo}
                />
              );

            })}
          </div>
        </div>
      )}
    </>
  );
}
