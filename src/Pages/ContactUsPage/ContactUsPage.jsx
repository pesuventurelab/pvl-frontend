import React from 'react';
import styles from "./ContactUsPage.module.css";

/* IMPORT IMAGES HERE */
import BANNER_13 from "../../Images/Banners/banner13.svg";

const ContactUsPage = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.info_container}>
                <div className={styles.main_heading}>CONTACT</div>
            </div>

            <img src={BANNER_13} alt="Image" />
        </div>
     );
}
 
export default ContactUsPage;