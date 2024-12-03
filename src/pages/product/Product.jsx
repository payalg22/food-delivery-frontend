import React, { useContext, useEffect, useState } from "react";
import styles from "./Product.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Map from "../../components/menu/Map";
import Timings from "../../components/menu/Timings";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import PopularPlaces from "../../components/others/PopularPlaces";
import Reviews from "../../components/menu/Reviews";
import DiscountBar from "../../components/menu/DiscountBar";
import Menu from "../../components/menu/Menu";
import { getRestaurantInfo } from "../../services/restaurant";
import search from "../../assets/search.png";
import { list } from "../../data/index";
import Banner from "../../components/menu/Banner";
import { addToCart, getCart, removeFromCart } from "../../services/cart";
import AppContext from "../../context/AppContext";
import Cart from "../../components/menu/Cart";

export default function Product() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();

  const handleViewCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = async (id) => {
    const res = await addToCart(id);
    getCart().then((data) => {
      setCart(data);
    });
  };

  const handleRemoveFromCart = async (id) => {
    const res = await removeFromCart(id);
    getCart().then((data) => {
      setCart(data);
    });
  };

  useEffect(() => {
    getCart().then((data) => {
      setCart(data);
    });
  }, []);

  useEffect(() => {
    getRestaurantInfo(id).then((res) => {
      if (res?.status === 200) {
        setRestaurant(res.data);
      } else {
        navigate("/*");
      }
    });
  }, [id]);

  return (
    <>
      <div className={styles.container}>
        <Header handleCart={handleViewCart} />
        <div className={styles.navbar}>
          <NavBar curr={"Restaurants"} />
        </div>
        {restaurant && <Banner restaurant={restaurant} />}
        <div className={styles.searchBar}>
          <h1>All Offers from {restaurant?.name + " " + restaurant?.city}</h1>
          <label className={styles.search}>
            <img src={search} />
            <input type="text" placeholder="Search from menu..." />
          </label>
        </div>
        <div className={styles.list}>
          {list.map((item, index) => {
            return (
              <span
                className={item === "Offers" ? styles.selected : null}
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className={styles.main}>
          <div className={styles.menu}>
            <DiscountBar
              restaurant={restaurant?.name + " " + restaurant?.city}
            />
            <Menu restaurant={id} handleAdd={handleAddToCart} />
          </div>
          {isCartOpen && (
            <div className={styles.cart}>
              <Cart list={cart} handleRemove={handleRemoveFromCart} />
            </div>
          )}
        </div>
        <Timings />
        <Map />
        <div className={styles.review}>
          <Reviews />
        </div>
        <PopularPlaces />
      </div>
    </>
  );
}
