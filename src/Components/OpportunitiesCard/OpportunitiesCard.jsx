import React, { useRef } from "react";
import styles from "./OpportunitiesCard.module.css";

import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { apiURL } from "../../Config/Config";

import InputLabel from "../../Components/InputComponent/InputLabel/InputLabel";
import { openNotificationWithIcon } from "../../Helpers";

import INVESTMENT_PARTNERS_ICON from "../../Images/Icons/icon6.svg";
import ENTREPRENUER_PARTNERS_ICON from "../../Images/Icons/icon6.svg";
import MANAGEMENT_PARTNERS_ICON from "../../Images/Icons/icon1.svg";
import DESIGN_PARTNERS_ICON from "../../Images/Icons/icon2.svg";
import TECHNOLOGY_PARTNERS_ICON from "../../Images/Icons/icon3.svg";
import GROWTH_PARTNERS_ICON from "../../Images/Icons/icon4.svg";
import MENTORS_ICON from "../../Images/Icons/icon5.svg";

const category_to_image = {
  1:INVESTMENT_PARTNERS_ICON,
  2:ENTREPRENUER_PARTNERS_ICON,
  3:MANAGEMENT_PARTNERS_ICON,
  4:DESIGN_PARTNERS_ICON,
  5:TECHNOLOGY_PARTNERS_ICON,
  6:GROWTH_PARTNERS_ICON,
  7:MENTORS_ICON
};

const OpportunitiesCard = (props) => {
  const formREF = useRef(null);

  const nameREF = useRef(null);
  const emailREF = useRef(null);
  const contactREF = useRef(null);
  const resumeREF = useRef(null);

  const toggleApplyform = (visibility) => {
    if (visibility) {
      formREF.current.style.bottom = "0px";
    } else {
      formREF.current.style.bottom = "-200vh";
    }
  };

  const handleFormSubmit = () => {
    const request_data = {};

    if (nameREF.current.value === "") {
      openNotificationWithIcon(
        "error",
        "Please enter a name",
        "Name field cannot be empty. Please enter your name."
      );
      return;
    } 

    if (emailREF.current.value === "") {
      openNotificationWithIcon(
        "error",
        "Please enter an email",
        "Email field cannot be empty. Please enter your email ID."
      );
      return;
    } 

    if (contactREF.current.value === "") {
      openNotificationWithIcon(
        "error",
        "Please enter Contact Number",
        "Contact field cannot be empty. Please enter your contact number."
      );
      return;
    } 

    if (resumeREF.current.value === "") {
      openNotificationWithIcon(
        "error",
        "Please upload your Resume link",
        "Resume field cannot be empty. Please upload your Resume link."
      );
      return;
    }



    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;


    axios.post(`${apiURL}/api/opportunity/apply`, {
      email:emailREF.current.value,
      opportunityId:props.opportunityId,
      resume:resumeREF.current.value,
      date:today,
      contact:contactREF.current.value
    }).then((res) => {
      if (res["status"] === 200) {
        openNotificationWithIcon(
          "success",
          "Application Successful",
          res.data["msg"]
        );

        nameREF.current.value = "";
        emailREF.current.value = "";
        contactREF.current.value = "";
        resumeREF.current.value = "";

        // toggleApplyform(false);

      } else {
        openNotificationWithIcon(
          "error",
          "Internal Server Error",
          res.data["msg"]
          );
      }
    });








  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={category_to_image[props.category]} alt="Image"/>
      <div className={styles.info_container}>
        <div className={styles.title}>{props.position}</div>
        <p className={styles.para}>{props.summary}</p>
        <button
          onClick={() => toggleApplyform(true)}
          className={`${"basic-button_one"} ${styles.apply_now}`}
        >
          Apply now
        </button>
      </div>
      <div className={styles.tag_container}>
        <div className={styles.tag}>{props.type}</div>
      </div>
      <div ref={formREF} className={styles.form_container}>
        <IoIosArrowDown
          onClick={() => toggleApplyform(false)}
          className={styles.close_icon}
        />
        <div className={styles.title}>Position : {props.position}</div>
        <InputLabel
          isRequired={true}
          title={"Name"}
          info={"Please enter your name."}
        />
        <input
          className="basic-input"
          type="text"
          placeholder="Enter your name..."
          required
          maxlength="255"
          ref={nameREF}
        />
        <InputLabel
          isRequired={true}
          title={"Email"}
          info={"Please enter your email ID."}
        />
        <input
          className="basic-input"
          type="email"
          placeholder="Enter your email..."
          maxlength="320"
          ref={emailREF}
        />
        <InputLabel
          isRequired={true}
          title={"Contact"}
          info={"Please enter contact information."}
        />
        <input
          className="basic-input"
          type="text"
          placeholder="Enter your contact..."
          maxlength="100"
          ref={contactREF}
        />

        <InputLabel
          isRequired={true}
          title={"Resume Link"}
          info={"Please upload your resume  on Drive/Linkedin and share the link for the same."}
        />
        <input
          className="basic-input"
          type="url"
          placeholder="Please upload your resume  on Drive/Linkedin and share the link for the same..."
          maxlength="1024"
          ref={resumeREF}
        />

        <button onClick={handleFormSubmit} className={`${"basic-button_one"}`}>
          APPLY
        </button>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
