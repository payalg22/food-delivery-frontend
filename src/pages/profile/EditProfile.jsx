import React, { useContext, useEffect, useState } from "react";
import styles from "./EditProfile.module.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/header/NavBar";
import profile from "../../assets/profile.png";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { validateUpdate } from "../../utils/validate";
import { updateUser } from "../../services/user";
import PageLabel from "../../components/others/PageLabel";

const FormField = ({ details, isDisabled }) => {
  const { label, type, value, onAction, error } = details;
  return (
    <div className={styles.inputBox}>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onAction}
        disabled={isDisabled}
      />
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default function EditProfile() {
  const { isLoading, userInfo, setUserInfo } = useContext(AppContext);
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: false,
    email: false,
    phone: false,
  });

  useEffect(() => {
    if (userInfo) {
      setFormData({
        name: userInfo?.name,
        email: userInfo?.email,
        phone: userInfo?.phone,
        _id: userInfo?._id,
      });
    }
  }, [userInfo]);

  useEffect(() => {
    setError({
      name: false,
      email: false,
      phone: false,
    });
  }, [formData]);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsDisabled(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (
      userInfo.name !== formData.name ||
      userInfo.email !== formData.email ||
      userInfo.phone !== formData.phone
    ) {
      const isValid = validateUpdate(formData);
      if (isValid === true) {
        const res = await updateUser(formData);
        if (res.status === 201) {
          setIsDisabled(true);
          //to do toast
          setUserInfo(res.data);
        } else {
          //to do toast
        }
      } else {
        setError(isValid);
      }
      return;
    }
    setIsDisabled(true);
  };

  const fields = [
    {
      label: "Full Name",
      type: "text",
      value: formData.name,
      onAction: (e) => {
        setFormData({ ...formData, name: e.target.value });
      },
      error: error.name,
    },
    {
      label: "Email Address",
      type: "email",
      value: formData.email,
      onAction: (e) => {
        setFormData({ ...formData, email: e.target.value });
      },
      error: error.email,
    },
    {
      label: "Phone",
      type: "number",
      value: formData.phone,
      onAction: (e) => {
        const value = e.target.value;
        value.length <= 10 &&
          setFormData({ ...formData, phone: e.target.value });
      },
      error: error.phone,
    },
    {
      label: "Country",
      type: "text",
      value: "India",
      error: false,
    },
  ];

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
          <PageLabel label="My Profile" />
          <form
            className={styles.form}
            onSubmit={isDisabled ? handleEdit : handleSave}
          >
            <div className={styles.intro}>
              <img src={profile} />
              <h2>{userInfo?.name}</h2>
              <input
                type="submit"
                value={isDisabled ? "Edit" : "Save"}
                className={styles.button}
              />
            </div>
            <div className={styles.inputContainer}>
              {fields.map((field, index) => {
                return (
                  <FormField
                    key={index}
                    details={field}
                    isDisabled={isDisabled}
                  />
                );
              })}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
