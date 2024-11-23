import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";

export default function Home() {
  return (
    <div className={styles.container}>
        <Header />
    </div>
  );
}
