import React, { useContext } from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import Hero from "../../components/home/Hero";
import AppContext from "../../context/AppContext";

export default function Home() {
  const { isLoading } = useContext(AppContext);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className={styles.container}>
          <Header />
          <NavBar curr="Home" />
          <Hero />
        </div>
      )}
    </>
  );
}
