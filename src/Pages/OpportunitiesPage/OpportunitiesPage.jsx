import React, { useState, useEffect } from "react";
import styles from "./OpportunitiesPage.module.css";

import { Select } from "antd";
import { Spin } from "antd";

import axios from "axios";

import { apiURL } from "../../Config/Config";

import { openNotificationWithIcon } from "../../Helpers";

import Footer from "../../Components/Footer/Footer";

import {opportunitiesList} from "../../Data/Data"

/* IMPORT COMPONENT HERE */
import OpportunitiesCard from "../../Components/OpportunitiesCard/OpportunitiesCard";
import { websiteBaseURL } from "../../Config/Config";

const { Option } = Select;

const OpportunitiesPage = () => {

  // console.log("santosh is awesome")

  let [curPositions, setCurPositions] = useState([]);
  let [curTypes, setCurTypes] = useState([]);
  let [opportunities, setOpportunities] = useState(opportunitiesList);

  

  // useEffect(() => {
  //   // console.log("santosh inside api")
  //   axios.post(`${apiURL}/api/info/opportunities`).then((res) => {
  //     if (res.data["status"] === 200) {
  //       setOpportunities(res.data["data"]);
  //       console.log(res.data["data"]);
  //     } else {
  //       openNotificationWithIcon(
  //         "error",
  //         "Internal Server Error",
  //         res.data["msg"]
  //       );
  //     }
  //   });
  // },[]);


  return (
    <div className={styles.container}>
      <div className={styles.heading}>Opportunities</div>
      <p className={styles.para}>
        We’re looking for fresh talent that is daring enough to venture into
        limitless opportunities. Check out our open positions below!
      </p>

      <div className={styles.opportunities_container}>
        <div className={styles.opportunities_cards_ctnr}>
          {opportunities === [] ? (
            <Spin />
          ) : (
            opportunities.map((item, index) => (
              <OpportunitiesCard
                key={index}
                opportunityId={item.opportunityId}
                category={item.department_id}
                position={item.opportunityName}
                summary={item.opportunityDescription}
                type={item.opportunityRole}
              />
            ))
          )}
        </div>
      </div>

      <div className={styles.footer_heading}>
        Don’t see what you’re looking for?
      </div>
      <p className={styles.para}>
        Want to be part of the PVL family but not sure how you can contribute?
        Don’t worry! Unique talents are always appreciated here at PVL! Feel
        free to reach out to us via mail!
      </p>
      <a
        rel="noopener noreferrer"
        id={styles.mail_us_btn}
        className={`${"basic-button_one"} ${styles.mail_us_btn}`}
        href={`${websiteBaseURL}contactus`}
      >
        MAIL us
      </a>
      <Footer />
    </div>
  );
};

export default OpportunitiesPage;
