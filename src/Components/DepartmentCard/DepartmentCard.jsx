import React, { useRef, useState } from "react";
import styles from "./DepartmentCard.module.css";

import styled from "styled-components";

/*IMPORT IMAGES */
import BANNER from "../../Images/Banners/banner1.svg";


const ProfileImageContainer = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 5px solid #fafafa;
  
  transition: border-color 0.3s ease-in-out;

  &:hover {
      border: 5px solid #41868e;
  }

  @media screen and (max-width: 800px) {
    height: 100px;
    width: 100px;
    top: -50px;
    border: 2px solid #fafafa;
  }
`;


const DepartmentCard = (props) => {
  const departmentMembersCtnrREF = useRef(null);
  let [teamVisible, setTeamvisibility] = useState(false);
  let [viewTeamBtnText, setViewTeamBtnText] = useState("View Team");

  const toggleTeamVisibility = () => {
    setTeamvisibility(!teamVisible);

    if (teamVisible) {
      setViewTeamBtnText("View Team");
      departmentMembersCtnrREF.current.style.display = "none";
    } else {
      setViewTeamBtnText("Hide Team");
      departmentMembersCtnrREF.current.style.display = "grid";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dept_info_wrapper}>
        <img className={styles.banner} src={BANNER} alt="Image" />
        <div className={styles.dept_info_ctnr}>
          <div className={styles.title}>{props.title}</div>
          <p className={styles.para}>{props.para}</p>
          <button
            onClick={toggleTeamVisibility}
            className={`${"basic-button_one"} ${styles.view_team_btn}`}
          >
            {viewTeamBtnText}
          </button>
        </div>
      </div>
      <div
        ref={departmentMembersCtnrREF}
        className={styles.dept_members_ctnr}
      >
          <div className={styles.member_card}>
            <ProfileImageContainer img={BANNER} />
            <div className={styles.member_name}>Some</div>
          </div>
          <div className={styles.member_card}>
            <ProfileImageContainer img={BANNER} />
            <div className={styles.member_name}>Some</div>
          </div>
          <div className={styles.member_card}>
            <ProfileImageContainer img={BANNER} />
            <div className={styles.member_name}>Some</div>
          </div>
          <div className={styles.member_card}>
            <ProfileImageContainer img={BANNER} />
            <div className={styles.member_name}>Some</div>
          </div>
          <div className={styles.member_card}>
            <ProfileImageContainer img={BANNER} />
            <div className={styles.member_name}>Some</div>
          </div>
          <div className={styles.member_card}>
            <ProfileImageContainer img={BANNER} />
            <div className={styles.member_name}>Some</div>
          </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
