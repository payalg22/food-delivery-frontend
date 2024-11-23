import React from 'react';
import styles from './Notification.module.css';
import logo from '../../assets/logo_basic.png';

export default function Notification() {
  return (
    <div>
        <span className={styles.num} >
            1
        </span>
        <div className={styles.note}>
            <img src={logo} />
            <span className={styles.now}>now</span>
            <p className={styles.heading}>We’ve Received your order!</p>
            <p className={styles.text}>Awaiting Restaurant acceptance </p>
        </div>
    </div>
  )
}
