import React, { useRef, useState } from "react";
import styles from "./PortfolioCard.module.css";

import { AiFillCloseCircle } from "react-icons/ai";
import { FaGlobe, FaLinkedin, FaInstagram } from "react-icons/fa";

import BANNER from "../../Images/Banners/banner1.svg";

const PortfolioCard = (props) => {
  const drawerREF = useRef(null);

  const toggleDrawer = (visibility) => {
    if (visibility) {
      drawerREF.current.style.left = "0px";
    } else {
      drawerREF.current.style.left = "200vw";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div
        onClick={() => {
          toggleDrawer(true);
        }}
        className={styles.show_drawer_btn}
      >
        Know More
      </div>
      <div ref={drawerREF} className={styles.portfolio_card_drawer}>
        <div className={styles.close_btn_ctnr}>
          <AiFillCloseCircle
            onClick={() => {
              toggleDrawer(false);
            }}
            className={styles.close_icon}
          />
        </div>
        <div className={styles.drawer_info_ctnr}>
          <img className={styles.logo} src={BANNER} alt="Image" />
          <div className={styles.title}>{props.title}</div>
          <p className={styles.para}>{props.para}</p>
          <div className={styles.icons_container}>
            <a
              rel="noopener noreferrer"
              href="#"
              className={styles.icon_wrapper}
            >
              <FaGlobe className={styles.icon} />
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className={styles.icon_wrapper}
            >
              <FaInstagram className={styles.icon} />
            </a>

            <a
              rel="noopener noreferrer"
              href="#"
              className={styles.icon_wrapper}
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
