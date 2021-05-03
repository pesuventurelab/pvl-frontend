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
// import PVL_LOGO from "../../Images/Logos/PVL_LOGO.svg";
import PVL_LOGO from "../../Images/Logos/PVL_LOGO_S.png";

/* CUSTOM MADE COMPONENT COMPONENTS */
import { setTheme } from "../Helpers";
import { handleRoute } from "../Helpers";

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
      menuDrawerREF.current.style.left = "0";
    }
  };

  let [isThemesVisible, setThemesVisibility] = useState(false);
  const themesDropdownREF = useRef(null);

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
          {/* <img className={styles.drawer_logo} src={PVL_LOGO} alt="Image" />
          <div className={styles.drawer_heading}>PESU VENTURE LABS</div>
          <div className={styles.drawer_heading}>
            MAKE YOUR IDEAS SEE THE LIGHT
          </div>
          <p className={styles.drawer_para}>
            A unique fund that operates in the pre-prototype or pre-ideation
            phase. Founder-friendly terms (no special rights to PVL) and
            flexibility in terms of equity spent
          </p> */}
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
              <div
                // href={`${websiteBaseURL}home`}
                // rel="noopener noreferrer"
                // boutus_container
                className={styles.menu_ele}
                onClick={() => {
                  toggleMenuDrawer(false);

                  handleRoute(websiteBaseURL + "home");
                }}
              >
                home
              </div>
            </div>
            <div className={styles.menu_ele_ctnr}>
              <div
                // href={`${websiteBaseURL}portfolio`}
                // rel="noopener noreferrer"
                // boutus_container
                className={styles.menu_ele}
                onClick={() => {
                  toggleMenuDrawer(false);

                  handleRoute(websiteBaseURL + "portfolio");
                }}
              >
                PORTFOLIO
              </div>
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
                  <div
                    // href={`${websiteBaseURL}aboutus`}
                    // rel="noopener noreferrer"
                    className={styles.menu_ele}
                    onClick={() => {
                      toggleMenuDrawer(false);
                      handleRoute(websiteBaseURL + "aboutus");
                    }}
                  >
                    About Us
                  </div>
                </div>
                <div className={styles.menu_ele_ctnr}>
                  <div
                    // href={`${websiteBaseURL}team`}
                    // rel="noopener noreferrer"
                    className={styles.menu_ele}
                    onClick={() => {
                      toggleMenuDrawer(false);

                      handleRoute(websiteBaseURL + "team");
                    }}
                  >
                    meet the team
                  </div>
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
                  PESU
                </div>
                <IoMdArrowDropdown className={styles.menu_drop_icon} />
              </div>
              <div ref={pesDropdownRef} className={styles.menu_dropdown_ctnr}>
                <div className={styles.menu_ele_ctnr}>
                  <a
                    href="https://pes.edu/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.menu_ele}
                    onClick={() => {
                      toggleMenuDrawer(false);
                    }}
                  >
                    PESU
                  </a>
                </div>
                <div className={styles.menu_ele_ctnr}>
                  <a
                    href="https://cie.pes.edu/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={styles.menu_ele}
                    onClick={() => {
                      toggleMenuDrawer(false);
                    }}
                  >
                    CIE
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.menu_ele_ctnr}>
              <div
                // href={`${websiteBaseURL}resources`}
                // rel="noopener noreferrer"
                className={styles.menu_ele}
                onClick={() => {
                  toggleMenuDrawer(false);

                  handleRoute(websiteBaseURL + "resources");
                }}
              >
                Resources
              </div>
            </div>

            <div className={styles.menu_ele_ctnr}>
              <div
                // href={`${websiteBaseURL}opportunities`}
                // rel="noopener noreferrer"
                className={styles.menu_ele}
                onClick={() => {
                  toggleMenuDrawer(false);

                  handleRoute(websiteBaseURL + "opportunities");
                }}
              >
                Opportunities
              </div>
            </div>

            <div className={styles.menu_ele_ctnr}>
              <div
                // href={`${websiteBaseURL}apply`}
                // rel="noopener noreferrer"
                className={styles.menu_ele}
                onClick={() => {
                  toggleMenuDrawer(false);

                  handleRoute(websiteBaseURL + "apply");
                }}
              >
                Apply
              </div>
            </div>
            <div className={styles.menu_ele_ctnr}>
              <div
                // href={`${websiteBaseURL}contactus`}
                // rel="noopener noreferrer"
                className={styles.menu_ele}
                onClick={() => {
                  toggleMenuDrawer(false);

                  handleRoute(websiteBaseURL + "contactus");
                }}
              >
                contact us
              </div>
            </div>

            <div className={styles.menu_droppable_container}>
              <div className={styles.menu_droppable_btn_ctnr}>
                <div
                  onClick={() => {
                    handleDropdownToggle(
                      themesDropdownREF,
                      isThemesVisible,
                      setThemesVisibility
                    );
                  }}
                  className={styles.menu_droppable_btn}
                >
                  Themes
                </div>
                <IoMdArrowDropdown className={styles.menu_drop_icon} />
              </div>
              <div
                ref={themesDropdownREF}
                className={styles.menu_dropdown_ctnr}
              >
                <div className={styles.menu_ele_ctnr}>
                  <div
                    className={styles.menu_ele}
                    onClick={() => {
                      setTheme("light");
                      // console.log("light theme here");
                    }}
                  >
                    Light Theme
                  </div>
                </div>
                <div className={styles.menu_ele_ctnr}>
                  <div
                    className={styles.menu_ele}
                    onClick={() => {
                      setTheme("dark");
                      // console.log("dark theme here");
                    }}
                  >
                    Dark Theme
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
