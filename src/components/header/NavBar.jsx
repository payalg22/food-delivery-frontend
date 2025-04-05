import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/logo_basic.png";
import user from "../../assets/user.png";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function NavBar({ curr }) {
  const { userInfo } = useContext(AppContext);
  const name = userInfo?.name?.split(" ")[0];
  const navigate = useNavigate();
  const options = [
    { page: "Home", path: "home" },
    { page: "Browse Menu", path: "home" },
    { page: "Special Offers", path: "home" },
    { page: "Restaurants", path: "home" },
    { page: "Track Order", path: "home" },
  ];

  const handleProfile = () => {
    if (userInfo) {
      navigate("/profile");
    } else {
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={logo}
        className={styles.logo}
        onClick={() => navigate("/home")}
      />
      <div className={styles.sub}>
        {options.map((item, index) => {
          return (
            <p
              key={index}
              className={curr === item.page ? styles.selected : styles.options}
              onClick={() => navigate(`/${item.path}`)}
            >
              {item.page}
            </p>
          );
        })}
      </div>
      <button className={styles.user} onClick={handleProfile}>
        <img src={user} />
        <p>{userInfo ? `Hey ${name}` : "Login/Sign Up"}</p>
      </button>
    </div>
  );
}
