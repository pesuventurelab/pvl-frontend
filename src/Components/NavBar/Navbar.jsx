import React from "react";
import styles from "./Navbar.module.css";

/* OTHER IMPORTS */
import { Link } from "react-router-dom";

import { websiteBaseURL } from "../../Config/Config";

/* ANT DESIGN IMPORTS */

/* IMPORT IMAGES HERE */
import PVL_LOGO from "../../Images/Logos/PVL_LOGO.svg";

/* CUSTOM MADE COMPONENT COMPONENTS */

const NavbarComponent = () => {
  return (
    <div className={styles.container}>
      <a
        href={`${websiteBaseURL}home`}
        rel="noopener noreferrer"
        boutus_container
        className={styles.logo_container}
      >
        <img className={styles.logo} src={PVL_LOGO} alt="LOGO" />
        <div className={styles.logo_text}>PVL</div>
      </a>

      <div className={styles.navbar_ele_container}>
        <Link to="/portfolio" className="no-underline">
          <div className={styles.navbar_ele}>Portfolio</div>
        </Link>

        <div className={styles.navbar_ele}>About Us</div>

        <Link to="/resources" className="no-underline">
          <div className={styles.navbar_ele}>Resources</div>
        </Link>
        <Link to="/pes" className="no-underline">
          <div className={styles.navbar_ele}>PES</div>
        </Link>
        <Link to="/opportunities" className="no-underline">
          <div className={styles.navbar_ele}>Opportunities</div>
        </Link>
      </div>

      <div className={styles.aboutus_container}>
        <Link to="/apply" className="no-underline">
          <div className={styles.navbar_ele}>Apply</div>
        </Link>
      </div>
    </div>
  );
};

export default NavbarComponent;
