import React, { useState, useRef } from "react";
import styles from "./ApplyPage.module.css";

import InputLabel from "../../Components/InputComponent/InputLabel/InputLabel";
import Footer from "../../Components/Footer/Footer";

import { openNotificationWithIcon } from "../../Helpers";

const ApplyPage = () => {
  const nameREF = useRef(null);
  const emailREF = useRef(null);

  const universityREF = useRef(null);
  const departmentREF = useRef(null);
  const yearOfStudyRef = useRef(null);

  const organizationREF = useRef(null);

  const ideaTitleREF = useRef(null);
  const ideaDescriptionREF = useRef(null);
  const teamDescriptionREF = useRef(null);

  let [appplicantType, setApplicantType] = useState("IndustryExpert");

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

    request_data["email"] = emailREF.current.value;
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Apply Now</div>
      <p className={styles.para}>
        We are always on the lookout for proficient and dynamic individuals who
        are willing to work with us with dedication. We value our people and are
        passionate in helping them reach their professional goals by opening
        doors to new opportunities. If you believe that PVL will enable you to
        reach new heights APPLY NOW!!
      </p>
      <div className={styles.applicant_type_container}></div>

      {appplicantType === "" ? (
        <div className={styles.message}>Please select an Option</div>
      ) : (
        <div className={styles.form_container}>
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

          {appplicantType === "Student" || appplicantType === "Faculty" ? (
            <div>
              <InputLabel
                isRequired={true}
                title={"University"}
                info={"Please enter the name of your university."}
              />
              <input
                className="basic-input"
                type="text"
                placeholder="Enter name here..."
                required
                maxlength="255"
                ref={universityREF}
              />
            </div>
          ) : (
            <div></div>
          )}

          {appplicantType === "IndustryExpert" ? (
            <div>
              <InputLabel
                isRequired={true}
                title={"Organization"}
                info={"Please enter the name of your Organization."}
              />
              <input
                className="basic-input"
                type="text"
                placeholder="Enter name here..."
                required
                maxlength="255"
                ref={organizationREF}
              />
            </div>
          ) : (
            <div></div>
          )}

          {appplicantType === "Student" || appplicantType === "Faculty" ? (
            <div>
              <InputLabel
                isRequired={true}
                title={"Department"}
                info={"Please enter the name of your department."}
              />
              <input
                className="basic-input"
                type="text"
                placeholder="Enter department here..."
                required
                maxlength="255"
                ref={departmentREF}
              />
            </div>
          ) : (
            <div></div>
          )}

          {appplicantType === "Student" ? (
            <div>
              <InputLabel
                isRequired={true}
                title={"Year of  Study"}
                info={"Please enter your year of study. 1, 2, 3 ,4... etc."}
              />
              <input
                className="basic-input"
                type="number"
                placeholder="Enter year of study here..."
                required
                min="1"
                max="5"
                ref={yearOfStudyRef}
              />
            </div>
          ) : (
            <div></div>
          )}

          <InputLabel
            isRequired={true}
            title={"Idea Title"}
            info={"Please enter the title of your idea."}
          />
          <input
            className="basic-input"
            type="text"
            placeholder="Enter your idea title..."
            required
            maxlength="255"
            ref={ideaTitleREF}
          />

          <InputLabel
            isRequired={true}
            title={"Idea Description"}
            info={
              "Please enter a detailed description of your idea in not more than 1024 characters."
            }
          />
          <textarea
            className="basic-input basic-textarea"
            type="text"
            placeholder="Enter your idea..."
            required
            maxlength="1024"
            ref={ideaDescriptionREF}
          ></textarea>

          <InputLabel
            isRequired={true}
            title={"Team Description"}
            info={
              "Please enter a detailed description of your team in not more than 1024 characters."
            }
          />
          <textarea
            className="basic-input basic-textarea"
            type="text"
            placeholder="Enter description..."
            required
            maxlength="1024"
            ref={teamDescriptionREF}
          ></textarea>
          <button
            id={styles.form_submit_button}
            className={`${"basic-button_one"}`}
            onClick={handleFormSubmit}
          >
            APPLY
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ApplyPage;
