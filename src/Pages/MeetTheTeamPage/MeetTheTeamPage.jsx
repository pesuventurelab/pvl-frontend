import React, { useState, useEffect } from "react";
import styles from "./MeetTheTeamPage.module.css";

import axios from "axios";
import { apiURL } from "../../Config/Config";
import { openNotificationWithIcon } from "../../Helpers";

import { Spin } from "antd";

/* IMPORT IMAGES HERE */
import DESIGN_PARTNERS from "../../Images/Banners/banner10.svg";
import INVESMENT_PARTNERS from "../../Images/Banners/banner9.svg";
import MANAGEMENT_PARTNERS from "../../Images/Banners/banner25.svg";
import ENTREPRENUER_PARTNERS from "../../Images/Banners/banner11.svg";
import TECHNOLOGY_PARTNERS from "../../Images/Banners/banner18.svg";
import GROWTH_PARTNERS from "../../Images/Banners/banner7.svg";
import MENTORS from "../../Images/Banners/banner24.svg";

/* IMPORT COMPONENTS HERE */
import DepartmentCard from "../../Components/DepartmentCard/DepartmentCard";
import Footer from "../../Components/Footer/Footer";

const Dept_id_to_image = {
  1: INVESMENT_PARTNERS,
  2: ENTREPRENUER_PARTNERS,
  3: MANAGEMENT_PARTNERS,
  4: DESIGN_PARTNERS,
  5: TECHNOLOGY_PARTNERS,
  6: GROWTH_PARTNERS,
  7: MENTORS,
};

const MeetTheTeamPage = () => {
  let [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    axios.post(`${apiURL}/api/info/departments`).then((res) => {
      if (res.data["status"] === 200) {
        setDepartmentList(res.data["data"])
      } else {
        openNotificationWithIcon(
          "error",
          "Internal Server Error",
          res.data["msg"]
        );
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Meet the team</div>
      <div className={styles.departments_ctnr}>
        {departmentList === [] ? (
          <Spin />
        ) : (
          departmentList.map((item, index) => (
            <DepartmentCard
              key={index}
              departmentId={item.departmentId}
              banner={Dept_id_to_image[item.departmentId]}
              title={item.departmentName}
              para={item.departmentDescription}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MeetTheTeamPage;
