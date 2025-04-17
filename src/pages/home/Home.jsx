import React, { useContext, useEffect } from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import Hero from "../../components/home/Hero";
import AppContext from "../../context/AppContext";
import Stats from "../../components/home/Stats";
import AboutUs from "../../components/home/AboutUs";
import JoinUs from "../../components/home/JoinUs";
import Ad from "../../components/home/Ad";
import PopularPlaces from "../../components/others/PopularPlaces";
import Categories from "../../components/home/Categories";
import AllRestaurants from "../../components/home/AllRestaurants";

export default function Home() {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className={styles.container}>
          <Header />
          <div className={styles.navbar}>
            <NavBar curr="Home" />
          </div>
          <Hero />
          <div>
            <AllRestaurants />
          </div>
          <div>
            <Categories />
          </div>
          <div>
            <PopularPlaces />
          </div>
          <div className={styles.ad}>
            <Ad />
          </div>
          <div>
            <JoinUs />
          </div>
          <div className={styles.about}>
            <AboutUs />
          </div>
          <div className={styles.stats}>
            <Stats />
          </div>
        </div>
      )}
    </>
  );
}
