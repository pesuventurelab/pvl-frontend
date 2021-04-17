import React from "react";
import styles from "./Footer.module.css";

/* IMPORT VARIABLES */
import { websiteBaseURL } from "../../Config/Config";
import { linkedinURL, instagramURL } from "../../Data/Links";

/* IMPORT IMAGES HERE */
import LOGO from "../../Images/Logos/PVL_LOGO_YELLOW.png";
import linkedIcon from "../../Images/Icons/linkedin.svg";
import instagramIcon from "../../Images/Icons/instagram.svg";

const footerLinks = [
  {
    "title": "about us",
    "link":  websiteBaseURL  + "aboutus",
  },
  {
    "title": "the Team",
    "link":  websiteBaseURL  + "team",
  },
  {
    "title": "contact us",
    "link":  websiteBaseURL  + "contact",
  },
  {
    "title": "portfolio",
    "link":  websiteBaseURL  + "portfolio",
  },
  {
    "title": "Opportunities",
    "link":  websiteBaseURL  + "opportunities",
  },
  {
    "title": "resources",
    "link":  websiteBaseURL  + "resources",
  },
  {
    "title": "apply",
    "link":  websiteBaseURL  + "apply",
  },
];

const footerIcons = [
  {
    "icon":  linkedIcon ,
    "link":  linkedinURL ,
  },
  {
    "icon":  instagramIcon ,
    "link":  instagramURL ,
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={LOGO} alt="Image" />
      </div>
      <div className={styles.info_container}>
        <div className={styles.title}>PESU VENTURE LABS</div>
        <h3 className={styles.tagline}>MAKE YOUR IDEAS SEE THE LIGHT</h3>
        <div className={styles.link_container}>
          {footerLinks.map((item) => (
            <a
              href={item.link}
              rel="noopener noreferrer"
              className={styles.link_ele}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className={styles.tagline} >Connect with us at</div>
        <div className={styles.icons_container}>
          {footerIcons.map((item, index) => (
            <a target="_blank" rel="noopener noreferrer" href={item.link} className={styles.icon_wrapper}>
                <img className={styles.icon} src={item.icon} alt="Icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
