import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import styles from "./PaymentModal.module.css";
import validateCard from "../../utils/validateCard";
import { useDispatch } from "react-redux";
import paymentActions from "../../redux/paymentSlice";

export default function PaymentModal({ trigger, card }) {
  const [formData, setFormData] = useState({
    number: "",
    cvv: "",
    expiry: "",
    name: "",
    _id: Date.now,
  });
  const [error, setError] = useState({
    num: false,
    cvv: false,
    exp: false,
    name: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (card) {
      setFormData(card);
    }
  }, []);

  useEffect(() => {
    setError({
      num: false,
      cvv: false,
      exp: false,
      name: false,
    });
  }, [formData]);

  const fields = [
    {
      label: "Card Number",
      placeholder: "xxxx xxxx xxxx xxxx",
      type: "text",
      value: formData.number,
      onChange: (e) => {
        let value = e.target.value.replace(/\D/g, "");
        const len = value.length;
        value = value.slice(0, 16);
        value = value.replace(/(.{4})/g, "$1 ").trim();
        setFormData({ ...formData, number: value });
      },
      id: "card-no",
      err: error.num,
    },
    {
      label: "Expiration",
      placeholder: "mm/yy",
      type: "text",
      value: formData.expiry,
      onChange: (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 2) {
          value = value.slice(0, 2) + "/" + value.slice(2, 4);
        }
        setFormData({ ...formData, expiry: value });
      },
      id: "exp-date",
      err: error.exp,
    },
    {
      label: "CVC",
      placeholder: "xxx",
      type: "number",
      value: formData.cvv,
      onChange: (e) => {
        setFormData({ ...formData, cvv: e.target.value.slice(0, 3) });
      },
      id: "card-cvc",
      err: error.cvv,
    },
    {
      label: "Name on Card",
      placeholder: "Card holder name",
      type: "text",
      value: formData.name,
      onChange: (e) => {
        setFormData({ ...formData, name: e.target.value });
      },
      id: "card-name",
      err: error.name,
    },
  ];

  const handleSubmit = (e, close) => {
    e.preventDefault();
    const { isError, isValid } = validateCard(formData);
    if (isError) {
      setError(isValid);
      return;
    }
    //send to backend, with updated id, continue
    dispatch(paymentActions.addCard(formData));
    close();
  };

  const handleRemove = (close) => {
    dispatch(paymentActions.removeCard(formData._id));
    close();
  }

  return (
    <Popup
      modal
      trigger={trigger}
      overlayStyle={{ backgroundColor: "rgba(48, 61, 67, 0.55)" }}
    >
      {(close) => (
        <form
          className={styles.container}
          onSubmit={(e) => {
            handleSubmit(e, close);
          }}
        >
          <h1 className={styles.title}>Edit Payment Method</h1>
          {fields.map((field) => {
            return (
              <div key={field.id}>
                <div className={styles.inputBox}>
                  <label htmlFor={field.id}>{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                    className={field.err ? styles.err : styles.input}
                  />
                </div>
                {field.err && <p className={styles.error}>{field.err}</p>}
              </div>
            );
          })}
          <div className={styles.controls}>
            <div className={styles.remove} onClick={() => handleRemove(close)}>Remove</div>
            <div className={styles.cancel} onClick={close}>
              Cancel
            </div>
            <input
              className={styles.submit}
              type="submit"
              value={"Save Changes"}
            />
          </div>
        </form>
      )}
    </Popup>
  );
}
