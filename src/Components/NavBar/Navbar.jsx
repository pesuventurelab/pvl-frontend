import React, { useState, useRef, useEffect } from "react";
import styles from "./Navbar.module.css";

/* OTHER IMPORTS */
import { Link } from "react-router-dom";

import { websiteBaseURL } from "../../Config/Config";

import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseFill } from "react-icons/ri";
import { BsPersonSquare } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

/* IMPORT IMAGES HERE */
import PVL_LOGO from "../../Images/Logos/PVL_LOGO.svg";

/* CUSTOM MADE COMPONENT COMPONENTS */

// submenu keys of first level
const rootSubmenuKeys = ["aboutus", "pes"];

const NavbarComponent = () => {
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const menuDrawerREF = useRef(null);
  let [isMenuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {}, [isMenuVisible]);

  const toggleMenuDrawer = (visibility) => {
    setMenuVisibility(!visibility);
    if (isMenuVisible) {
      menuDrawerREF.current.style.left = "-100vw";
    } else {
      menuDrawerREF.current.style.left = "0";
    }
  };

  let [isAboutUsVisible, setAboutUsVisibility] = useState(false);
  const aboutUsDropdownREF = useRef(null);

  let [isPESVisible, setPESVisibility] = useState(false);
  const pesDropdownRef = useRef(null);

  const handleDropdownToggle = (ctnrRef, curState, setCurState) => {
    setCurState(!curState);
    if (curState) {
      ctnrRef.current.style.height = "0";
    } else {
      ctnrRef.current.style.height = "auto";
    }
  };

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

      <div
        onClick={() => {
          toggleMenuDrawer(isMenuVisible);
        }}
        className={styles.hamburger_icon_container}
      >
        <GiHamburgerMenu />
      </div>

      <div ref={menuDrawerREF} className={styles.menu_drawer_ctnr}>
        <div className={styles.menu_drawer_left_col}>
          <img className={styles.drawer_logo} src={PVL_LOGO} alt="Image" />
          <div className={styles.drawer_heading}>PESU VENTURE LABS</div>
          <div className={styles.drawer_heading}>
            MAKE YOUR IDEAS SEE THE LIGHT
          </div>
          <p className={styles.drawer_para}>
            A unique fund that operates in the pre-prototype or pre-ideation
            phase. Founder-friendly terms (no special rights to PVL) and
            flexibility in terms of equity spent
          </p>
        </div>

        <div className={styles.menu_drawer_right_col}>
          <div
            onClick={() => {
              toggleMenuDrawer(isMenuVisible);
            }}
            className={styles.menu_drawer_close_ctnr}
          >
            <RiCloseFill className={styles.menu_drawer_close_btn} />
          </div>

          <div className={styles.menu_drawer_menu_ctnr}>
            <div className={styles.menu_ele_ctnr}>
              <a
                href={`${websiteBaseURL}home`}
                rel="noopener noreferrer"
                boutus_container
                className={styles.menu_ele}
              >
                home
              </a>
            </div>
            <div className={styles.menu_ele_ctnr}>
              <a
                href={`${websiteBaseURL}portfolio`}
                rel="noopener noreferrer"
                boutus_container
                className={styles.menu_ele}
              >
                PORTFOLIO
              </a>
            </div>

            <div className={styles.menu_droppable_container}>
              <div className={styles.menu_droppable_btn_ctnr}>
                <div
                  onClick={() => {
                    handleDropdownToggle(
                      aboutUsDropdownREF,
                      isAboutUsVisible,
                      setAboutUsVisibility
                    );
                  }}
                  className={styles.menu_droppable_btn}
                >
                  About Us
                </div>
                <IoMdArrowDropdown className={styles.menu_drop_icon} />
              </div>
              <div
                ref={aboutUsDropdownREF}
                className={styles.menu_dropdown_ctnr}
              >
                <div className={styles.menu_ele_ctnr}>
                  <a
                    href={`${websiteBaseURL}aboutus`}
                    rel="noopener noreferrer"
                    boutus_container
                    className={styles.menu_ele}
                  >
                    About Us
                  </a>
                </div>
                <div className={styles.menu_ele_ctnr}>
                  <a
                    href={`${websiteBaseURL}team`}
                    rel="noopener noreferrer"
                    boutus_container
                    className={styles.menu_ele}
                  >
                    meet the team
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.menu_droppable_container}>
              <div className={styles.menu_droppable_btn_ctnr}>
                <div
                  onClick={() => {
                    handleDropdownToggle(
                      pesDropdownRef,
                      isPESVisible,
                      setPESVisibility
                    );
                  }}
                  className={styles.menu_droppable_btn}
                >
                  PES
                </div>
                <IoMdArrowDropdown className={styles.menu_drop_icon} />
              </div>
              <div ref={pesDropdownRef} className={styles.menu_dropdown_ctnr}>
                <div className={styles.menu_ele_ctnr}>
                  <a
                    href="https://pes.edu/"
                    rel="noopener noreferrer"
                    boutus_container
                    className={styles.menu_ele}
                  >
                    pes
                  </a>
                </div>
                <div className={styles.menu_ele_ctnr}>
                  <a
                    href="https://cie.pes.edu/"
                    rel="noopener noreferrer"
                    boutus_container
                    className={styles.menu_ele}
                  >
                    CIE
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.menu_ele_ctnr}>
              <a
                href={`${websiteBaseURL}resources`}
                rel="noopener noreferrer"
                boutus_container
                className={styles.menu_ele}
              >
                Resources
              </a>
            </div>

            <div className={styles.menu_ele_ctnr}>
              <a
                href={`${websiteBaseURL}opportunities`}
                rel="noopener noreferrer"
                boutus_container
                className={styles.menu_ele}
              >
                Opportunities
              </a>
            </div>

            <div className={styles.menu_ele_ctnr}>
              <a
                href={`${websiteBaseURL}apply`}
                rel="noopener noreferrer"
                boutus_container
                className={styles.menu_ele}
              >
                Apply
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
