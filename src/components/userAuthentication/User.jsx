import React, { useContext, useEffect, useState } from "react";
import { getAssets } from "../../services/assets";
import styles from "./index.module.css";
import logo from "../../assets/logo_basic.png";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

export default function User({ type, fields, action }) {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState();
  const isLogin = type == "Login" ? true : false;
  const navigate = useNavigate();
  const { assets, setAssets } = useContext(AppContext);

  useEffect(() => {
    // getAssets()
    //   .then((response) => response.assets)
    //   .then((data) => {
    //     setAssets(data);
    //     console.log(data);
    //     const img = data.find((item) => {
    //       return item.includes("login");
    //     });
    //     setImage(img);
    //   });
    try {
      const img = assets.find((item) => {
        return item.includes("login");
      });
      setImage(img);
    } catch (error) {
      getAssets()
        .then((response) => response.assets)
        .then((data) => {
          setAssets(data);
          console.log(data);
          const img = data.find((item) => {
            return item.includes("login");
          });
          setImage(img);
        });
    }
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
          <Form
            fields={fields}
            onAction={action}
            submit={isLogin ? "Sign in" : "Continue"}
          />
          {isLogin ? (
            <p className={styles.footer}>
              Don't you have an account?{" "}
              <span onClick={() => navigate("/register")}>Sign up</span>
            </p>
          ) : (
            <p className={styles.footer}>
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>Sign in</span>
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
