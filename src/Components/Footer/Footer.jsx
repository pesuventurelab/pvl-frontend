import React from "react";
import styles from "./Footer.module.css";

/* IMPORT VARIABLES */
import { websiteBaseURL } from "../../Config/Config";
import { linkedinURL, instagramURL } from "../../Data/Links";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

/* IMPORT IMAGES HERE */
import LOGO from "../../Images/Logos/PVL_LOGO_WHITE.png";

const footerLinks = [
  {
    title: "about us",
    link: websiteBaseURL + "aboutus",
  },
  {
    title: "the Team",
    link: websiteBaseURL + "team",
  },
  {
    title: "contact us",
    link: websiteBaseURL + "contact",
  },
  {
    title: "portfolio",
    link: websiteBaseURL + "portfolio",
  },
  {
    title: "Opportunities",
    link: websiteBaseURL + "opportunities",
  },
  {
    title: "resources",
    link: websiteBaseURL + "resources",
  },
  {
    title: "apply",
    link: websiteBaseURL + "apply",
  },
];

const Footer = () => {
  return (
    <div className={styles.container}>
      <div id={styles.section_one}>
        <div id={styles.logo_ctnr}>
          <img id={styles.logo} src={LOGO} alt="Image" />
          <div id={styles.logoname}>PESU VENTURE LABS</div>
        </div>
        <div className={styles.nav_container}>
          {footerLinks.map((item, index) => (
            <a
              href={item.link}
              rel="noopener noreferrer"
              className={styles.nav_ele}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      {/* <div id={styles.section_two}>
        <div id={styles.section_two_heading}>Join the Waitlist!</div>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="#"
          className={`${"basic-button_one"}`}
          id={styles.section_two_btn}
        >
          JOIN
        </a>
      </div> */}

      <div id={styles.section_three}>
        <div id={styles.section_three_para_ctnr}>
          <p className={styles.para}>
            12th Floor CIE Office, B Block <br />
            PES University, Outer Ring Road
          </p>
          <p className={styles.para}>
            Privacy Policy- Terms & Conditions- Legal <br />© 2021 PVL All
            Rights Reserved
          </p>
        </div>

        <div id={styles.connect_with_us_ctnr}>
          <div id={styles.connect_with_us}>Connect with us!</div>
          <div className={styles.icons_container}>
            <a
              rel="noopener noreferrer"
              href={instagramURL}
              className={styles.icon_wrapper}
            >
              <FaInstagram className={styles.icon} />
            </a>

            <a
              rel="noopener noreferrer"
              href={linkedinURL}
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

export default Footer;
