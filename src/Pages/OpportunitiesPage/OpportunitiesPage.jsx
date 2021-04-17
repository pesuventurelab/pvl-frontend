import React, { useState, useEffect } from "react";
import styles from "./OpportunitiesPage.module.css";

import { Select } from "antd";

/* IMPORT COMPONENT HERE */
import OpportunitiesCard from "../../Components/OpportunitiesCard/OpportunitiesCard";
import { websiteBaseURL } from "../../Config/Config";

const { Option } = Select;

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut
        eius dignissimos molestiae unde, voluptatum nesciunt repudiandae quo,
        inventore possimus reiciendis, ad tenetur libero explicabo illo quia
        asperiores sequi rem!
      </p>

      <div className={styles.opportunities_container}>
        <div className={styles.opportunities_filter_ctnr}>
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
            <Option value="Developer" label="Developer">
              <div className="demo-option-label-item">
                <span
                  className={styles.tags_text}
                  role="img"
                  aria-label="Developer"
                >
                  👨‍💻
                </span>
                Developer
              </div>
            </Option>
            <Option value="Designer" label="Designer">
              <div className="demo-option-label-item">
                <span
                  className={styles.tags_text}
                  role="img"
                  aria-label="Designer"
                >
                  👨‍🎨
                </span>
                Designer
              </div>
            </Option>
            <Option value="Analyst" label="Analyst">
              <div className="demo-option-label-item">
                <span
                  className={styles.tags_text}
                  role="img"
                  aria-label="Analyst"
                >
                  📈
                </span>
                Analyst
              </div>
            </Option>
            <Option value="Marketing" label="Marketing">
              <div className="demo-option-label-item">
                <span
                  className={styles.tags_text}
                  role="img"
                  aria-label="Marketing"
                >
                  📺
                </span>
                Marketing
              </div>
            </Option>
            <Option value="Finance" label="Finance">
              <div className="demo-option-label-item">
                <span
                  className={styles.tags_text}
                  role="img"
                  aria-label="Finance"
                >
                  💰
                </span>
                Finance
              </div>
            </Option>
            <Option value="Hr" label="Hr">
              <div className="demo-option-label-item">
                <span className={styles.tags_text} role="img" aria-label="Hr">
                  👩‍💼
                </span>
                Hr
              </div>
            </Option>
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
        <div className={styles.opportunities_cards_ctnr}>
          <OpportunitiesCard category={"Developer"} />
          <OpportunitiesCard category={"Designer"} />
          <OpportunitiesCard category={"Finance"} />
          <OpportunitiesCard category={"Analyst"} />
          <OpportunitiesCard category={"Hr"} />
        </div>
      </div>

      <div className={styles.footer_heading}>
        Don’t see what you’re looking for?
      </div>
      <p className={styles.para}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut
        eius dignissimos molestiae unde, voluptatum nesciunt repudiandae quo,
        inventore possimus reiciendis, ad tenetur libero explicabo illo quia
        asperiores sequi rem!
      </p>
      <a
        rel="noopener noreferrer"
        id={styles.mail_us_btn}
        className={`${"basic-button_one"}`}
        href={`${websiteBaseURL}contactus`}
      >
        MAIL us
      </a>
    </div>
  );
};

export default OpportunitiesPage;
