import React from "react";
import styles from "./Navbar.module.css";

/* OTHER IMPORTS */
import { Link } from "react-router-dom";

/* ANT DESIGN IMPORTS */
import { Menu, Dropdown, Button } from "antd";

/* IMPORT IMAGES HERE */
import PVL_LOGO from "../../Images/Logos/PVL_LOGO.svg";

const NavbarComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={PVL_LOGO} alt="LOGO" />
        <div className={styles.logo_text}>PVL</div>
      </div>

      <div className={styles.navbar_ele_container}>
        <Link to="/home" className="no-underline">
          <div className={styles.navbar_ele}>Home</div>
        </Link>

        <Link to="/portfolio" className="no-underline">
          <div className={styles.navbar_ele}>Portfolio</div>
        </Link>

        <div className={styles.navbar_ele}>About US</div>

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
