import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PageLabel.module.css";
import back from "../../assets/back.png";

export default function PageLabel({ label }) {
  const navigate = useNavigate();
  return (
    <div className={styles.tag}>
      <img src={back} onClick={() => navigate(-1)} />
      <h1>{label}</h1>
    </div>
  );
}
