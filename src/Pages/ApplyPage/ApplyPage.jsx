import React, { useState, useRef } from "react";
import styles from "./ApplyPage.module.css";

import axios from "axios";

import { apiURL } from "../../Config/Config";

import InputLabel from "../../Components/InputComponent/InputLabel/InputLabel";
import Footer from "../../Components/Footer/Footer";

import { openNotificationWithIcon } from "../../Helpers";

import STUDENT_BANNER from "../../Images/Banners/banner25.svg";
import FACULTY_BANNER from "../../Images/Banners/banner24.svg";
import INDUSTRY_BANNER from "../../Images/Banners/banner6.svg";

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

  let [appplicantType, setApplicantType] = useState("");

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

    if (appplicantType === "Faculty" || appplicantType === "Student") {
      if (universityREF.current.value === "") {
        openNotificationWithIcon(
          "error",
          "Please enter University Name",
          "University field cannot be empty. Please enter your University Name."
        );
        return;
      } else {
        request_data["university"] = universityREF.current.value;
      }

      if (departmentREF.current.value === "") {
        openNotificationWithIcon(
          "error",
          "Please enter Department Name",
          "Department field cannot be empty. Please enter your Department Name."
        );
        return;
      } else {
        request_data["department"] = departmentREF.current.value;
      }
    }

    if (appplicantType === "Student") {
      if (yearOfStudyRef.current.value === "") {
        openNotificationWithIcon(
          "error",
          "Please enter year of study",
          "Year of Study field cannot be empty. Please enter your Year of Study."
        );
        return;
      } else {
        request_data["year_of_study"] = yearOfStudyRef.current.value;
      }
    }

    if (appplicantType === "IndustryExpert") {
      if (organizationREF.current.value === "") {
        openNotificationWithIcon(
          "error",
          "Please enter Organization Name",
          "Organization field cannot be empty. Please enter your Organization Name."
        );
        return;
      } else {
        request_data["organization"] = organizationREF.current.value;
      }
    }

    if (ideaTitleREF.current.value === "") {
      openNotificationWithIcon(
        "error",
        "Please enter an Idea Title",
        "Idea Title field cannot be empty. Please enter your an Idea Title."
      );
      return;
    } else {
      request_data["idea_title"] = ideaTitleREF.current.value;
    }

    if (ideaDescriptionREF.current.value === "") {
      openNotificationWithIcon(
        "error",
        "Please enter an Idea Description",
        "Idea Description field cannot be empty. Please enter your an Idea Description."
      );
      return;
    } else {
      request_data["idea_description"] = ideaDescriptionREF.current.value;
    }

    if (teamDescriptionREF.current.value === "") {
      openNotificationWithIcon(
        "error",
        "Please enter an Team Description",
        "Team Description field cannot be empty. Please enter your an Team Description."
      );
      return;
    } else {
      request_data["team_description"] = teamDescriptionREF.current.value;
    }

    axios.post(`${apiURL}/portfolio/apply`, request_data).then((res) => {
      if (res.data["status"] === 200) {
        openNotificationWithIcon(
          "success",
          "Application Successful",
          "Your application has been successfully submitted. Please await our mail."
        );

        nameREF.current.value = "";
        universityREF.current.value = "";
        emailREF.current.value = "";
        departmentREF.current.value = "";
        yearOfStudyRef.current.value = "";
        organizationREF.current.value = "";
        ideaTitleREF.current.value = "";
        ideaDescriptionREF.current.value = "";
        teamDescriptionREF.current.value = "";
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
      <div className={styles.heading}>Apply Now</div>
      <p className={styles.para}>
        We are always on the lookout for proficient and dynamic individuals who
        are willing to work with us with dedication. We value our people and are
        passionate in helping them reach their professional goals by opening
        doors to new opportunities. If you believe that PVL will enable you to
        reach new heights APPLY NOW!!
      </p>
      <div className={styles.applicant_type_container}>
        <InputLabel
          isRequired={true}
          title={"Select an Option"}
          info={"Please select your occupation."}
        />
        <div className={styles.occupation_container}>
          <div className={styles.occupation_wrapper}>
            <img
              className={styles.occupation_img}
              src={STUDENT_BANNER}
              alt="Student"
            />
            <div>
              <input
                onClick={() => setApplicantType("Student")}
                type="radio"
                name="occupation"
                className={styles.radio_input}
                value="Student"
              />
              <label for="Student">Student</label>
            </div>
          </div>

          <div className={styles.occupation_wrapper}>
            <img
              className={styles.occupation_img}
              src={FACULTY_BANNER}
              alt="Faculty"
            />
            <div>
              <input
                onClick={() => setApplicantType("Faculty")}
                type="radio"
                name="occupation"
                className={styles.radio_input}
                value="Faculty"
              />
              <label for="Faculty">Faculty</label>
            </div>
          </div>

          <div className={styles.occupation_wrapper}>
            <img
              className={styles.occupation_img}
              src={INDUSTRY_BANNER}
              alt="IndustryExpert"
            />
            <div>
              <input
                onClick={() => setApplicantType("IndustryExpert")}
                type="radio"
                name="occupation"
                className={styles.radio_input}
                value="IndustryExpert"
              />
              <label for="IndustryExpert">IndustryExpert</label>
            </div>
          </div>
        </div>
      </div>

      {appplicantType === "" ? (
        <div className={styles.message}>Please select an Option to proceed with the application</div>
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
