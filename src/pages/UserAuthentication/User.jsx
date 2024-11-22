import React, { useEffect, useState } from "react";
import { getAssets } from "../../services/assets";
import styles from "./index.module.css";
import logo from "../../assets/logo_basic.png";
import Form from "./Form";

export default function User({ type }) {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState();
  const isLogin = type == "Login" ? true : false;

  useEffect(() => {
    getAssets()
      .then((response) => response.assets)
      .then((data) => {
        const d = data.filter((item) => item.includes("login"));
        setImage(d[0]);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.form}>
          <img src={logo} />
          <p className={styles.heading}>
            Welcome {isLogin && "Back"} &#128075;
          </p>
          <p className={styles.subheading}>
            Today is a new day. It's your day. You shape it. Sign{" "}
            {isLogin ? "in" : "up"} to start ordering.
          </p>
          <Form />
          {isLogin ? (
            <p className={styles.footer}>
              Don't you have an account? <span>Sign up</span>
            </p>
          ) : (
            <p>
              Already have an account? <span>Sign in</span>
            </p>
          )}
        </div>
      </div>
      <div className={styles.img}>
        <img src={image} />
      </div>
    </div>
  );
}
