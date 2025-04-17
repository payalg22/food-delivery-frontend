import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import styles from "./Address.module.css";
import NavBar from "../../components/header/NavBar";
import { getStateList } from "../../services/assets";
import AddressModal from "../../components/editProfile/AddressModal";
import {
  addAddress,
  deleteAddress,
  getUser,
  modifyAddress,
  setDefaultAddress,
} from "../../services/user";
import AppContext from "../../context/AppContext";
import PageLabel from "../../components/others/PageLabel";
import { useDispatch, useSelector } from "react-redux";
import addressActions from "../../redux/addressSlice";
import Tooltip from "@mui/material/Tooltip";
import cartActions from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Address() {
  const [stateList, setStateList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userInfo, setUserInfo } = useContext(AppContext);
  const [allAddresses, setAllAddresses] = useState();
  const allAddress = useSelector((store) => store.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const fetchUser = async () => {
    const res = await getUser();
    if (res.status === 200) {
      setUserInfo(res.data);
    }
  };

  const handleSave = async (address) => {
    const res = await addAddress(address);
    if (res.status === 201) {
      await fetchUser();
      dispatch(addressActions.addAddress(res.address));
      //toast saved succesfully
    } else {
      //toast unexpected error
    }
  };

  const handleEdit = async (address) => {
    const res = await modifyAddress(address);
    if (res.status === 201) {
      await fetchUser();
      //toast saved succesfully
    } else {
      //toast unexpected error res.data.message
    }
  };

  const handleSetDefault = async (id) => {
    const res = await setDefaultAddress(id);
    if(res.status === 200) {
        dispatch(addressActions.setDefaultAddress(id));
    } else {
        //toast: something went wrong or msg
    }
    
  };

  const handleDelete = async (id) => {
    const res = await deleteAddress(id);
    if (res.status === 200) {
      dispatch(addressActions.removeAddress(id));
      await fetchUser();
      //toast deleted succesfully
    } else {
      //toast unexpected error
    }
  };

  const handleSelectAddr = (id) => {
    //TODO: connect to address for cart api
    dispatch(cartActions.selectAddress(id));
    navigate(-1);
  }

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
            {allAddress?.map((addr) => {
              return (
                <div key={addr._id} className={styles.card}>
                  <div>
                    <span className={styles.name}>{userInfo.name}</span>
                    {addr.isDefault ? (
                      <span className={styles.default}>Default</span>
                    ) : (
                      <span
                        className={styles.others}
                        onClick={() => handleSetDefault(addr._id)}
                      >
                        Set Default
                      </span>
                    )}
                  </div>
                  <Tooltip title="Deliver here" placement="right">
                    <p className={styles.details} onClick={() => handleSelectAddr(addr._id)}>
                      {addr.address +
                        ", " +
                        addr.city +
                        ", " +
                        addr.state +
                        ", " +
                        addr.pincode +
                        ", India"}
                    </p>
                  </Tooltip>
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
