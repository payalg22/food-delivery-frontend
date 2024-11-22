import React from "react";
import styles from "./Form.module.css";

function FormField() {
  return (
    <div className={styles.container}>
      <label className={styles.label}>Email</label>
      <input className={styles.input} type="text" placeholder="xyz@example.com" />
    </div>
  );
}

export default function Form() {
  return <form className={styles.form}>
    <FormField />
    <input type="submit" value="Continue" className={styles.submit} />
  </form>;
}
