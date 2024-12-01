import React from "react";
import Header from "../../components/header/Header";
import styles from "./Address.module.css";
import NavBar from "../../components/header/NavBar";
import PageLabel from "../../components/others/pageLabel";

export default function Address() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <NavBar />
      <PageLabel label={"My Addresses"} />
    </div>
  );
}
