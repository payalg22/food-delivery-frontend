import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/logo.png';
import apple from '../../assets/apple_store.png';
import playstore from '../../assets/google_play.png';
import facebook from '../../assets/Facebook.png';
import tiktok from '../../assets/TikTok.png';
import instagram from '../../assets/Instagram.png';
import snapchat from '../../assets/Snapchat.png';

const Item = ({content}) => {
    return <li className={styles.link}>{content}</li>
}

export default function Footer() {
const pages = ['Terms and conditions', 'Privacy', 'Cookies', 'Modern Slavery Statement'];
const links = ['Get help', 'Add your restaurant', 'Sign up to deliver', 'Create a business account'];

  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <div className={styles.app}>
                <img src={logo} />
                <div className={styles.store}>
                    <span>
                        <img src={apple} />
                    </span>
                    <span>
                        <img src={playstore} className={styles.playstore} />
                    </span>
                </div>
                <p>Company # 490039-445, Registered with House of companies.</p>
            </div>
            <div className={styles.deals}>
                <p className={styles.subheading}>Get Exclusive Deals in your Inbox</p>
                <div className={styles.subscribe}>
                    <input type='text' placeholder='youremail@gmail.com' />
                    <button>Subscribe</button>
                </div>
                <p className={styles.link}>we wont spam, read our <span>email policy</span></p>
                <div className={styles.social}>
                    <img src={facebook} />
                    <img src={instagram} />
                    <img src={tiktok} />
                    <img src={snapchat} />
                </div>
            </div>
            <div className={styles.legal}>
                <p className={styles.subheading}>Legal Pages</p>
                <ul>
                   {pages.map((item, index) => {
                        return <Item key={index} content={item}/>
                    })}
                </ul>
            </div>
            <div className={styles.legal}>
            <p className={styles.subheading}>Important Links</p>
                <ul>
                   {links.map((item, index) => {
                        return <Item key={index} content={item}/>
                    })}
                </ul>
            </div>
        </div>
        <div className={styles.footer}>
            <div className={styles.bottom}>
                <p>Order.uk Copyright 2024, All Rights Reserved.</p>
                <span>
                    <p>Privacy Policy</p>
                    <p>Terms</p>
                    <p>Pricing </p>
                    <p>Do not sell or share my personal information</p>
                </span>
            </div>
        </div>
    </div>
  )
}
