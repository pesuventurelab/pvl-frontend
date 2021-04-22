import React, { useState, useEffect } from "react";
import styles from "./OpportunitiesPage.module.css";

import { Select } from "antd";

import Footer from "../../Components/Footer/Footer";

/* IMPORT COMPONENT HERE */
import OpportunitiesCard from "../../Components/OpportunitiesCard/OpportunitiesCard";
import { websiteBaseURL } from "../../Config/Config";
import { opportunities } from "../../Data/Data";

const { Option } = Select;

const selectRoleData = [
  {
    title: "Developer",
    emoji: "👨‍💻",
  },
  {
    title: "Designer",
    emoji: "👨‍🎨",
  },
  {
    title: "Analyst",
    emoji: "📈",
  },
  {
    title: "Marketing",
    emoji: "📺",
  },
  {
    title: "Finance",
    emoji: "💰",
  },
  {
    title: "Human Resource Management",
    emoji: "👩‍💼",
  },
];

const OpportunitiesPage = () => {
  let [curPositions, setCurPositions] = useState([]);
  let [curTypes, setCurTypes] = useState([]);

  useEffect(() => {
    console.log(curTypes);
    console.log(curPositions);
  }, [curPositions, curTypes]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Opportunities</div>
      <p className={styles.para}>
        We’re looking for fresh talent that is daring enough to venture into
        limitless opportunities. Check out our open positions below!
      </p>

      <div className={styles.opportunities_container}>
        {/* <div className={styles.opportunities_filter_ctnr}>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select Role"
            defaultValue={[]}
            onChange={(value) => {
              setCurPositions(value);
            }}
            optionLabelProp="label"
            className={styles.filters_container}
          >
            {selectRoleData.map((item, index) => (
              <Option key={index} value={item.title} label={item.title}>
                <div className="demo-option-label-item">
                  <span
                    className={styles.tags_text}
                    role="img"
                    aria-label={item.title}
                  >
                    {item.emoji}
                  </span>
                  {item.title}
                </div>
              </Option>
            ))}
          </Select>

          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select Type"
            defaultValue={[]}
            onChange={(value) => {
              setCurTypes(value);
            }}
            optionLabelProp="label"
            className={styles.filters_container}
          >
            <Option value="Intern" label="Intern">
              <div className="demo-option-label-item">
                <span
                  className={styles.tags_text}
                  role="img"
                  aria-label="Intern"
                >
                  💡
                </span>
                Intern
              </div>
            </Option>

            <Option value="Full Time" label="Full Time">
              <div className="demo-option-label-item">
                <span
                  className={styles.tags_text}
                  role="img"
                  aria-label="Full Time"
                >
                  💻
                </span>
                Full Time
              </div>
            </Option>
          </Select>
        </div>
         */}
        <div className={styles.opportunities_cards_ctnr}>
          {opportunities.map((item, index) => (
            <OpportunitiesCard
              category={item.category}
              position={item.position}
              summary={item.summary}
              link={item.link}
              type={item.type}
            />
          ))}
        </div>
      </div>

      <div className={styles.footer_heading}>
        Don’t see what you’re looking for?
      </div>
      <p className={styles.para}>
        Want to be part of the PVL family but not sure how you can
        contribute? Don’t worry! Unique talents are always appreciated here at
        PVL! Feel free to reach out to us via mail!
      </p>
      <a
        rel="noopener noreferrer"
        id={styles.mail_us_btn}
        className={`${"basic-button_one"}`}
        href={`${websiteBaseURL}contactus`}
      >
        MAIL us
      </a>
      <Footer />
    </div>
  );
};

export default OpportunitiesPage;
