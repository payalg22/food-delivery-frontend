import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo_basic.png";
import user from "../../assets/user.png";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function NavBar({ curr }) {
  const { userInfo } = useContext(AppContext);
  const navigate = useNavigate();
  const options = [
    "Home",
    "Browse Menu",
    "Special Offers",
    "Restaurants",
    "Track Order",
  ];

  const handleProfile = () => {
    if(userInfo) {
       navigate("/profile");
    } else {
        navigate("/");
    }
  }

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />
      <div className={styles.sub}>
        {options.map((item, index) => {
          return (
            <p
              key={index}
              className={curr === item ? styles.selected : styles.options}
            >
              {item}
            </p>
          );
        })}
      </div>
      <button className={styles.user} onClick={handleProfile}>
        <img src={user} />
        <p>{userInfo ? `Hey ${userInfo.name}` : "Login/Sign Up"}</p>
      </button>
    </div>
  );
}
