import React from "react";
import styles from "./HomePage.module.css";

import { Link } from "react-router-dom";

/*LIBRARY IMPORTS */
// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

/*IMPORT VARIABLES */
import { websiteBaseURL } from "../../Config/Config";
import { upcomingEvents } from "../../Data/Data";

/* IMPORT COMPONENT HERE */
import UpcomingEventCard from "../../Components/UpcomingEventCard/UpcomingEventCard";
import WhatWeOfferCard from "../../Components/WhatWeOfferCard/WhatWeOfferCard";
import WhatWeLookingForCard from "../../Components/WhatWeLookingForCard/WhatWeLookingForCard";
import WhoWeLookingForCard from "../../Components/WhoWeLookingForCard/WhoWeLookingForCard";
import Footer from "../../Components/Footer/Footer";

/* IMPORT IMAGES HERE */
// import PVL_LOGO from "../../Images/Logos/PVL_LOGO.svg";
import PVL_LOGO from "../../Images/Logos/PVL_LOGO_S.png";
import LOGO_ANIMATION from "../../Images/gifs/logo.gif";

import STEP_1 from "../../Images/Steps/step1.svg";
import STEP_2 from "../../Images/Steps/step2.svg";
import STEP_3 from "../../Images/Steps/step3.svg";
import STEP_4 from "../../Images/Steps/step4.svg";

import BANNER_1 from "../../Images/Banners/banner1.svg";
import BANNER_4 from "../../Images/Banners/banner4.svg";
import BANNER_5 from "../../Images/Banners/banner5.svg";
import BANNER_6 from "../../Images/Banners/banner6.svg";
import BANNER_7 from "../../Images/Banners/banner7.svg";
import BANNER_9 from "../../Images/Banners/banner9.svg";
import BANNER_16 from "../../Images/Banners/banner16.svg";
import BANNER_17 from "../../Images/Banners/banner17.svg";
import BANNER_20 from "../../Images/Banners/banner20.svg";
import BANNER_24 from "../../Images/Banners/banner24.svg";
import BANNER_25 from "../../Images/Banners/banner25.svg";

import ScrollAnimation from "react-animate-on-scroll";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div id={styles.section_one} className={styles.section}>
        <div className={styles.section_one_info_ctnr}>
          <ScrollAnimation duration="1" animateIn="fadeInUp">
            <div id={styles.section_one_header}>PESU VENTURE LABS</div>
          </ScrollAnimation>
          <ScrollAnimation duration="1.2" animateIn="fadeInUp">
            <div id={styles.section_one_secondary_header}>
              Make your ideas see the light
            </div>
          </ScrollAnimation>

          <ScrollAnimation duration="1.4" animateIn="fadeInUp">
            <p className={styles.section_one_para}>
              A unique fund that operates in the pre-prototype or pre-ideation
              phase. Founder-friendly terms (no special rights to PVL) and
              flexibility in terms of equity spent{" "}
            </p>
          </ScrollAnimation>
        </div>
        <img id={styles.PVL_LOGO} src={PVL_LOGO} alt="Image" />
        {/* <img id={styles.PVL_LOGO} src={LOGO_ANIMATION} alt="Image" /> */}
      </div>

      <div className={styles.upper_section_container}>
        <div
          id={styles.upper_section_one}
          className={`${styles.upper_section} ${styles.section}`}
        >
          <ScrollAnimation duration="1.3" animateIn="fadeInUp">
            <img
              loading="lazy"
              className={styles.section_banner}
              src={BANNER_6}
              alt="Images"
            />
          </ScrollAnimation>
          <p className={styles.upper_section_info_ctnr}>
            <ScrollAnimation duration="1.3" animateIn="fadeInDown">
              Funding of <br /> <b>$150K+</b>
            </ScrollAnimation>
          </p>
        </div>

        <div
          id={styles.upper_section_two}
          className={`${styles.upper_section} ${styles.section}`}
        >
          <p className={styles.upper_section_info_ctnr}>
            <ScrollAnimation duration="1.3" animateIn="fadeInUp">
              Research and Market insights in focused areas
            </ScrollAnimation>
          </p>
          <ScrollAnimation duration="1.3" animateIn="fadeInDown">
            <img
              loading="lazy"
              className={styles.section_banner}
              src={BANNER_7}
              alt="Images"
            />
          </ScrollAnimation>
        </div>

        <div
          id={styles.upper_section_three}
          className={`${styles.upper_section} ${styles.section}`}
        >
          <ScrollAnimation duration="1.3" animateIn="fadeInUp">
            <img
              loading="lazy"
              className={styles.section_banner}
              src={BANNER_16}
              alt="Images"
            />
          </ScrollAnimation>
          <p className={styles.upper_section_info_ctnr}>
            <ScrollAnimation duration="1.3" animateIn="fadeInDown">
              Mentoring, connect to investors and customers
            </ScrollAnimation>
          </p>
        </div>

        <div
          id={styles.upper_section_four}
          className={`${styles.upper_section} ${styles.section}`}
        >
          <p className={styles.upper_section_info_ctnr}>
            <ScrollAnimation duration="1.3" animateIn="fadeInUp">
              Resources to get started with your plan quickly
            </ScrollAnimation>
          </p>
          <ScrollAnimation duration="1.3" animateIn="fadeInDown">
            <img
              loading="lazy"
              className={styles.section_banner}
              src={BANNER_4}
              alt="Images"
            />
          </ScrollAnimation>
        </div>
      </div>

      {upcomingEvents.length > 0 ? (
        <ScrollAnimation duration="1" animateIn="fadeInUp">
          <div className={styles.section_heading}>upcoming events</div>
        </ScrollAnimation>
      ) : (
        <div></div>
      )}

      <div id={styles.upcoming_events} className={styles.section}>
        {upcomingEvents.map((item, index) => (
          <ScrollAnimation
            duration={Math.random() * 1.5 + 1}
            animateIn="slideInUp"
          >
            <UpcomingEventCard
              img={BANNER_1}
              title={item.title}
              para={item.para}
              link={item.link}
              key={index}
            />
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation duration="1" animateIn="fadeInUp">
        <div className={styles.section_heading}>our process</div>
      </ScrollAnimation>
      <img
        loading="lazy"
        className={styles.step_img}
        id={styles.step_one}
        src={STEP_1}
      />
      <img
        loading="lazy"
        className={styles.step_img}
        id={styles.step_two}
        src={STEP_2}
      />
      <img
        loading="lazy"
        className={styles.step_img}
        id={styles.step_three}
        src={STEP_3}
      />

      <img
        loading="lazy"
        className={styles.step_img}
        id={styles.step_four}
        src={STEP_4}
      />

      <ScrollAnimation duration="1" animateIn="fadeInUp">
        <div className={styles.section_heading}>what we offer</div>
      </ScrollAnimation>

      <div id={styles.what_we_offer} className={styles.section}>
        <ScrollAnimation duration="1.3" animateIn="fadeIn">
          <WhatWeOfferCard
            img={BANNER_6}
            title={"Resource pool"}
            para={
              "Product design, packaging and models, technology expertise, full stack development, access to Labs, brand & marketing support,IP and legal support finance and operational support"
            }
          />
        </ScrollAnimation>

        <ScrollAnimation duration="1.3" animateIn="fadeIn">
          <WhatWeOfferCard
            img={BANNER_20}
            title={"funding"}
            para={
              "Financial support up to external funding, no operational overhead and cashflow issues, no challenges in hiring and finding talent"
            }
          />
        </ScrollAnimation>
        <ScrollAnimation duration="1.3" animateIn="fadeIn">
          <WhatWeOfferCard
            img={BANNER_7}
            title={"Personal Guidance"}
            para={
              "Business Planning, Company structuring and documentation, Pitch deck, presentations and positioning"
            }
          />
        </ScrollAnimation>
        <ScrollAnimation duration="1.3" animateIn="fadeIn">
          <WhatWeOfferCard
            img={BANNER_5}
            title={"Access"}
            para={"Markets an customers, Partnerships, Investors,Team members"}
          />
        </ScrollAnimation>
      </div>

      <ScrollAnimation duration="1" animateIn="fadeInUp">
        <div className={styles.section_heading}>what we're looking for</div>
      </ScrollAnimation>

      <div id={styles.what_we_looking_for} className={styles.section}>
        <div className={styles.what_we_looking_for_card_section}>
          {/* <ScrollAnimation duration="0.7" animateIn="fadeInLeft"> */}
            <WhatWeLookingForCard
              title={"deep tech ideas"}
              para={
                "Ideas around IoT, Automation, Extended Reality (AR,ER,VR), quantum computing, AI/ML, personalized and predictive medicine"
              }
            />
          {/* </ScrollAnimation> */}

          {/* <ScrollAnimation duration="0.7" animateIn="fadeInRight"> */}
            <WhatWeLookingForCard
              title={"Campus Tech Ideas"}
              para={
                "Ideas that can transform the way academic programs are created and delivered"
              }
            />
          {/* </ScrollAnimation> */}
        </div>
        <div
          id={styles.what_we_looking_for_second_section}
          className={styles.what_we_looking_for_card_section}
        >
          {/* <ScrollAnimation duration="0.9" animateIn="fadeInLeft"> */}
            <WhatWeLookingForCard
              title={"Social Tech Ideas"}
              para={
                "Ideas that use  human, intellectual and digital resources in order to influence social processes."
              }
            />
          {/* </ScrollAnimation> */}
          {/* <ScrollAnimation duration="0.9" animateIn="fadeInRight"> */}
            <WhatWeLookingForCard
              title={"Multi Disciplinary Innovation​"}
              para={
                "Ideas that demand multidisciplinary innovations involving disciplines like design, computing, biotech, engineering, devices, food tech and others"
              }
            />
          {/* </ScrollAnimation> */}
        </div>
      </div>

      <ScrollAnimation duration="1" animateIn="fadeInUp">
        <div className={styles.section_heading}>who we're looking for</div>
      </ScrollAnimation>

      <div id={styles.who_we_looking_for} className={styles.section}>
        <WhoWeLookingForCard
          img={BANNER_25}
          title={"Students"}
          para={
            "We help students find a balance between academics and entrepreneurship. We employ models that ensure great rewards and security to students in terms of finance and careers."
          }
        />
        <WhoWeLookingForCard
          img={BANNER_7}
          title={"Industry Professionals"}
          para={
            "We deliver everything that helps you transform your idea to a business. We act like your cofounders and bring in team, expertise, mentoring, capital and infrastructure."
          }
        />
        <WhoWeLookingForCard
          img={BANNER_24}
          title={"Faculty"}
          para={
            "We enable academicians to balance their teaching and research.  Models where academicians can spend more time on research or development with substantial commercial value will be followed."
          }
        />
      </div>

      <ScrollAnimation duration="0.9" animateIn="fadeInUp">
        <a
          id={styles.contact_us_btn}
          rel="noopener noreferrer"
          href={websiteBaseURL + "contactus"}
          className={`${"basic-button_one"}`}
        >
          COntact us
        </a>
      </ScrollAnimation>

      <Footer />
    </div>
  );
};

export default HomePage;
