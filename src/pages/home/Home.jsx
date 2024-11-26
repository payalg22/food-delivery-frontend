import React, { useContext } from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import Hero from "../../components/home/Hero";
import AppContext from "../../context/AppContext";
import Stats from "../../components/home/Stats";
import AboutUs from "../../components/home/AboutUs";

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
