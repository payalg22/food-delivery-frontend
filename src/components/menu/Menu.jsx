import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import { getCategories } from "../../services/assets";
import { getMenu } from "../../services/restaurant";

function Item({ item, img, handleAdd }) {
  const { name, price, description, _id } = item;
  return (
    <div className={styles.card}>
      <p className={styles.name}>{name}</p>
      <div className={styles.image}>
        <img src={img} />
        <span className={styles.add}>
          <span
            onClick={() => {
              handleAdd(_id);
            }}
          >
            +
          </span>
        </span>
      </div>
      <p className={styles.desc}>{description}</p>
      <p className={styles.price}>{"₹ " + price}</p>
    </div>
  );
}

export default function Menu({ restaurant, handleAdd }) {
  const [categories, setCategories] = useState();
  const [menu, setMenu] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const category = getCategories().then((data) => {
      setCategories(data);
    });
    const menuInfo = getMenu(restaurant).then((res) => {
      if (res.status === 200) {
        setMenu(res.data);
      }
    });

    Promise.all([category, menuInfo]).finally(() => {
      setIsLoading(false);
    });
  }, [restaurant]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <p>Loading Menu...</p>
      ) : (
        menu &&
        categories.map((category, index) => {
          return (
            menu[category.name]?.length > 0 && (
              <div key={index} className={styles.category}>
                <h1>{category.name}</h1>
                <div className={styles.menu}>
                  {menu[category.name].map((item) => {
                    const image = category.img;
                    return (
                      <Item
                        key={item._id}
                        item={item}
                        img={image}
                        handleAdd={handleAdd}
                      />
                    );
                  })}
                </div>
              </div>
            )
          );
        })
      )}
    </div>
  );
}
