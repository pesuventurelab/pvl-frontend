import React, { useRef } from "react";
import styles from "./OpportunitiesCard.module.css";

import axios from "axios";
import { IoIosArrowDown } from "react-icons/io";
import { apiURL } from "../../Config/Config";

import InputLabel from "../../Components/InputComponent/InputLabel/InputLabel";
import { openNotificationWithIcon } from "../../Helpers";

const category_to_image = {
  Developer: "👨‍💻",
  Designer: "👨‍🎨",
  Analyst: "📈",
  Marketing: "📺",
  Finance: "💰",
  "Human Resource Management": "👩‍💼",
  "Content Writer": "✍🏻",
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
    } else {
      request_data["name"] = nameREF.current.value;
    }

    if (emailREF.current.value === "") {
      openNotificationWithIcon(
        "error",
        "Please enter an email",
        "Email field cannot be empty. Please enter your email ID."
      );
      return;
    } else {
      request_data["email"] = emailREF.current.value;
    }

    if (contactREF.current.value === "") {
      openNotificationWithIcon(
        "error",
        "Please enter Contact Number",
        "Contact field cannot be empty. Please enter your contact number."
      );
      return;
    } else {
      request_data["contact"] = contactREF.current.value;
    }

    // if (resumeREF.current.value === "") {
    //   openNotificationWithIcon(
    //     "error",
    //     "Please upload your Resume",
    //     "Resume field cannot be empty. Please upload your Resume."
    //   );
    //   return;
    // } else {
    //   request_data["resume"] = resumeREF.current.value;
    // }

    

    axios.post(`${apiURL}/opportunity/apply`, request_data).then((res) => {
      if (res.data["status"] === 200) {
        openNotificationWithIcon(
          "success",
          "Application Successful",
          "Your application has been successfully submitted. Please await our mail."
        );

        nameREF.current.value = "";
        emailREF.current.value = "";
        contactREF.current.value = "";

      } else {
        openNotificationWithIcon(
          "error",
          "Internal Server Error",
          "Sorry for the inconvenience. There seems to be an issue on the server end. Please try again after some time."
        );
      }
    });








  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>{category_to_image[props.category]}</div>
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
          title={"Resume"}
          info={"Please upload your resume in PDF format only."}
        />
        <input
          className="basic-input"
          type="file"
          placeholder="Enter your contact..."
          maxlength="100"
          accept=".pdf"
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
