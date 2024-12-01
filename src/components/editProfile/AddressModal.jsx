import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import styles from "./AddressModal.module.css";
import pin from "../../assets/address.png";

export default function AddressModal({ states, userAddr, onSave, isNew }) {
  const [addrData, setAddrData] = useState({
    state: "",
    city: "",
    pincode: "",
    phonenumber: "",
    address: "",
  });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (userAddr) {
      setAddrData({
        state: userAddr?.state || "",
        city: userAddr?.city || "",
        pincode: userAddr?.pincode || "",
        phonenumber: userAddr?.phonenumber || "",
        address: userAddr?.address || "",
        _id: userAddr?._id,
      });
    }
  }, []);

  useEffect(() => {
    setIsError(false);
  }, [addrData]);

  const handleModalClose = () => {
    setAddrData({
      state: userAddr?.state || "",
      city: userAddr?.city || "",
      pincode: userAddr?.pincode || "",
      phonenumber: userAddr?.phonenumber || "",
      address: userAddr?.address || "",
      _id: userAddr?._id,
    });
    setIsError(false);
  };

  const handleAddress = (e) => {
    setAddrData({ ...addrData, address: e.target.value });
  };

  const handleState = (e) => {
    setAddrData({ ...addrData, state: e.target.value });
  };

  const handleSubmit = (close) => {
    if (
      !addrData.state ||
      !addrData.city ||
      addrData.pincode.length < 6 ||
      !addrData.address ||
      addrData.phonenumber.length < 10
    ) {
      setIsError(true);
    } else {
      onSave(addrData);
      close();
    }
  };

  const fields = [
    {
      placeholder: "City/ District",
      type: "text",
      value: addrData.city,
      onChange: (e) => {
        setAddrData({ ...addrData, city: e.target.value });
      },
    },
    {
      placeholder: "Pin Code",
      type: "number",
      value: addrData.pincode,
      onChange: (e) => {
        const value = e.target.value;
        value.length <= 6 &&
          setAddrData({ ...addrData, pincode: e.target.value });
      },
    },
    {
      placeholder: "Phone Number",
      type: "number",
      value: addrData.phonenumber,
      onChange: (e) => {
        const value = e.target.value;
        value.length <= 10 && setAddrData({ ...addrData, phonenumber: value });
      },
    },
  ];

  return (
    <Popup
      trigger={
        isNew ? <span className={styles.add}>+</span> : <span>Edit</span>
      }
      modal
      overlayStyle={{ backgroundColor: "rgba(48, 61, 67, 0.55)" }}
      onClose={handleModalClose}
    >
      {(close) => (
        <form
          className={styles.container}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(close);
          }}
        >
          <div className={styles.title}>
            <img src={pin} />
            <span>Add Address</span>
          </div>
          <div className={styles.inputRow}>
            <select onChange={handleState} value={addrData.state}>
              <option>State</option>
              {states?.map((state, index) => {
                return <option key={index}>{state}</option>;
              })}
            </select>
            {fields.map((field, index) => {
              return (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={field.onChange}
                />
              );
            })}
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Enter Full address"
            value={addrData.address}
            onChange={handleAddress}
          ></textarea>
          {isError && (
            <p className={styles.error}>
              Please enter all the details to continue
            </p>
          )}
          <input type="submit" value="Save" className={styles.save} />
        </form>
      )}
    </Popup>
  );
}
