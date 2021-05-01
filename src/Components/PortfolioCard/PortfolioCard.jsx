import React, { useRef, useState } from "react";
import styles from "./PortfolioCard.module.css";

import { AiFillCloseCircle } from "react-icons/ai";
import { FaGlobe, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

import BANNER from "../../Images/Banners/banner1.svg";
import ScrollAnimation from "react-animate-on-scroll";

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
      <ScrollAnimation duration="1" animateIn="fadeInUp">
        <div className={styles.title}>{props.title}</div>
      </ScrollAnimation>
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
          <img className={styles.logo} src={props.image} alt="Image" />
          <div className={styles.title}>{props.title}</div>
          <p className={styles.para}>{props.para}</p>
          <div className={styles.icons_container}>
            {props.website === "" ? (
              <></>
            ) : (
              <a
                rel="noopener noreferrer"
                href={props.website}
                className={styles.icon_wrapper}
                target="_blank"
              >
                <FaGlobe className={styles.icon} />
              </a>
            )}

            {props.instagram === "" ? (
              <></>
            ) : (
              <a
                rel="noopener noreferrer"
                href={props.instagram}
                className={styles.icon_wrapper}
                target="_blank"
              >
                <FaInstagram className={styles.icon} />
              </a>
            )}

            {props.linkedin === "" ? (
              <></>
            ) : (
              <a
                rel="noopener noreferrer"
                href={props.linkedin}
                className={styles.icon_wrapper}
                target="_blank"
              >
                <FaLinkedin className={styles.icon} />
              </a>
            )}

            {props.twitter === "" ? (
              <></>
            ) : (
              <a
                rel="noopener noreferrer"
                href={props.twitter}
                className={styles.icon_wrapper}
                target="_blank"
              >
                <FaTwitter className={styles.icon} />
              </a>
            )}

            {props.facebook === "" ? (
              <></>
            ) : (
              <a
                rel="noopener noreferrer"
                href={props.facebook}
                className={styles.icon_wrapper}
                target="_blank"
              >
                <FaFacebook className={styles.icon} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
