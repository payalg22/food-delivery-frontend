import React, { useContext } from "react";
import styles from "./EditProfile.module.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import back from "../../assets/back.png";
import profile from "../../assets/profile.png";
import AppContext from "../../context/AppContext";

export default function EditProfile() {
  const { userInfo, setUserInfo } = useContext(AppContext);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <NavBar />
      <div className={styles.tag}>
        <img src={back} />
        <h1>My Profile</h1>
      </div>
      <div className={styles.intro}>
        <img src={profile} />
        <h2>{userInfo.name}</h2>
      </div>
    </div>
  );
}
