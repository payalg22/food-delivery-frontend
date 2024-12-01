import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "./Address.module.css";
import NavBar from "../../components/header/NavBar";
import PageLabel from "../../components/others/pageLabel";
import { getStateList } from "../../services/assets";
import AddressModal from "../../components/editProfile/AddressModal";
import {
  addAddress,
  deleteAddress,
  getUser,
  modifyAddress,
} from "../../services/user";
import AppContext from "../../context/AppContext";

export default function Address() {
  const [stateList, setStateList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(AppContext);
  const [allAddresses, setAllAddresses] = useState();

  useEffect(() => {
    getStateList().then((res) => {
      setStateList(res.states);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (userInfo) {
      setAllAddresses(userInfo?.address);
    }
  }, [userInfo]);

  const handleSave = async (address) => {
    const res = await addAddress(address);
    if (res.status === 201) {
      await fetchUser();
      //toast saved succesfully
    } else {
      //toast unexpected error
      console.log(res.data.message);
    }
  };

  const handleEdit = async (address) => {
    const res = await modifyAddress(address);
    if (res.status === 201) {
      console.log(res);
      await fetchUser();
      //toast saved succesfully
    } else {
      //toast unexpected error
      console.log(res.data.message);
    }
  };

  const handleDelete = async (id) => {
    const res = await deleteAddress(id);
    if (res.status === 200) {
      await fetchUser();
      //toast deleted succesfully
    } else {
      //toast unexpected error
      console.log(res.data.message);
    }
  };

  const fetchUser = async () => {
    const res = await getUser();
    if (res.status === 200) {
      setUserInfo(res.data);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.header}>
            <Header />
          </div>
          <NavBar />
          <PageLabel label={"My Addresses"} />
          <div className={styles.main}>
            <div className={styles.card}>
              <AddressModal
                states={stateList}
                onSave={handleSave}
                isNew={true}
              />
              <p>Add Address</p>
            </div>
            {allAddresses?.map((addr) => {
              return (
                <div key={addr._id} className={styles.card}>
                  <div>
                    <span className={styles.name}>{userInfo.name}</span>
                    {addr.isDefault && (
                      <span className={styles.default}>Default</span>
                    )}
                  </div>
                  <p className={styles.details}>
                    {addr.address +
                      ", " +
                      addr.city +
                      ", " +
                      addr.state +
                      ", " +
                      addr.pincode +
                      ", India"}
                  </p>
                  <p className={styles.details}>
                    {"Phone Number: " + addr.phonenumber}
                  </p>
                  <div className={styles.utils}>
                    <AddressModal
                      userAddr={addr}
                      states={stateList}
                      onSave={handleEdit}
                      isNew={false}
                    />
                    <span className={styles.part}>|</span>
                    <span
                      onClick={() => {
                        handleDelete(addr._id);
                      }}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
