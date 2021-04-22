import React from "react";
import styles from "./ContactUsPage.module.css";

/* IMPORT IMAGES HERE */
import BANNER_13 from "../../Images/Banners/banner13.svg";

const ContactUsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info_container}>
        <div className={styles.heading}>CONTACT</div>
        <div className={styles.sub_info_container}>
          <div className={styles.sub_info_header}>Drop by and say hello!</div>
          <p className={styles.para}>
            12th Floor CIE Office, B Block <br />
            PES University, Outer Ring Road
          </p>
        </div>

        <div className={styles.sub_info_container}>
          <div className={styles.sub_info_header}>or simply drop a mail</div>
          <p className={styles.para}>hello@pesuventurelabs.com</p>
        </div>
      </div>

      <div className={styles.banner_container}>
        <img className={styles.banner} src={BANNER_13} alt="Image" />
      </div>
    </div>
  );
};

export default ContactUsPage;
