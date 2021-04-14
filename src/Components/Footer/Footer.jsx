import React from 'react';
import styles from "./Footer.module.css";

/* IMPORT IMAGES HERE */
import LOGO from "../../Images/Logos/PVL_LOGO_WHITE.png";

const Footer = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.left_column}>
                <img className={styles.logo} src={LOGO} />
                <p className={styles.text} >12<sup>th</sup> FLoor CIe Office, B block</p>
                <p className={styles.text} >PES University, Outer ring Road</p>
            </div>

            <div className={styles.right_column}>
                <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                <button className={`${"basic-button_one"}`} >SUBSCRIBE</button>
            </div>

        </div>
     );
}
 
export default Footer;