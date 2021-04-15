import React from "react";
import styles from "./HomePage.module.css";

import { Link } from "react-router-dom";

/*IMPORT VARIABLES */
import { websiteBaseURL } from "../../Config/Config";

/* IMPORT COMPONENT HERE */
import UpcomingEventCard from "../../Components/UpcomingEventCard/UpcomingEventCard";
import WhatWeOfferCard from "../../Components/WhatWeOfferCard/WhatWeOfferCard";
import WhatWeLookingForCard from "../../Components/WhatWeLookingForCard/WhatWeLookingForCard";
import WhoWeLookingForCard from "../../Components/WhoWeLookingForCard/WhoWeLookingForCard";

import Footer from "../../Components/Footer/Footer";

/* IMPORT IMAGES HERE */
import PVL_LOGO from "../../Images/Logos/PVL_LOGO.svg";

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

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div id={styles.section_one} className={styles.section}>
        <div className={styles.section_one_info_ctnr}>
          <div id={styles.section_one_header}>PESU VENTURE LABS</div>
          <div id={styles.section_one_secondary_header}>
            Make your ideas see the light
          </div>
          <p className={styles.section_one_para}>
            A unique fund that operates in the pre-prototype or pre-ideation
            phase. Founder-friendly terms (no special rights to PVL) and
            flexibility in terms of equity spent{" "}
          </p>
        </div>
        <img id={styles.PVL_LOGO} src={PVL_LOGO} alt="Image" />
      </div>

      <div className={styles.upper_section_container}>
        <div className={`${styles.upper_section} ${styles.section}`}>
          <img className={styles.section_banner} src={BANNER_6} alt="Images" />
          <p className={styles.upper_section_info_ctnr}>
            Funding of <br /> <b>$150K+</b>
          </p>
        </div>

        <div className={`${styles.upper_section} ${styles.section}`}>
          <p className={styles.upper_section_info_ctnr}>
            Research and Market insights in focused areas
          </p>
          <img className={styles.section_banner} src={BANNER_7} alt="Images" />
        </div>

        <div className={`${styles.upper_section} ${styles.section}`}>
          <img className={styles.section_banner} src={BANNER_16} alt="Images" />
          <p className={styles.upper_section_info_ctnr}>
            Mentoring, connect to investors and customers
          </p>
        </div>

        <div className={`${styles.upper_section} ${styles.section}`}>
          <p className={styles.upper_section_info_ctnr}>
            Resources to get started with your plan quickly - Technology,
            Marketing, co-founders, etc.
          </p>
          <img className={styles.section_banner} src={BANNER_4} alt="Images" />
        </div>
      </div>
      <div className={styles.section_heading}>upcoming events</div>
      <div id={styles.upcoming_events} className={styles.section}>
        <UpcomingEventCard
          img={BANNER_1}
          title={"Dummy title"}
          para={
            "lorem ipsum doler sit tues le maro dumero preppo ilahi mera ji ya ye ye"
          }
        />
        <UpcomingEventCard
          img={BANNER_9}
          title={"Dummy title"}
          para={
            "lorem ipsum doler sit tues le maro dumero preppo ilahi mera ji ya ye ye"
          }
        />
        <UpcomingEventCard
          img={BANNER_17}
          title={"Dummy title"}
          para={
            "lorem ipsum doler sit tues le maro dumero preppo ilahi mera ji ya ye ye"
          }
        />
      </div>

      <div className={styles.section_heading}>our process</div>
      <img src={STEP_1} />
      <img src={STEP_2} />
      <img src={STEP_3} />
      <img src={STEP_4} />
      <div className={styles.section_heading}>what we offer</div>
      <div id={styles.what_we_offer} className={styles.section}>
        <WhatWeOfferCard
          img={BANNER_6}
          title={"Resource pool"}
          para={
            "Design - UI, UX, product design, packaging and models, technology expertise, programming and full stack development, access to Labs (Security/High-end computing/ Biotech), brand and marketing support,IP and legal support finance and operational support"
          }
        />
        <WhatWeOfferCard
          img={BANNER_20}
          title={"funding"}
          para={
            "Financial support up to external funding, no operational overhead and cashflow issues, no challenges in hiring and finding talent"
          }
        />
        <WhatWeOfferCard
          img={BANNER_7}
          title={"Personal Guidance"}
          para={
            "Business Planning, Company structuring and documentation, Pitch deck, presentations and positioning"
          }
        />
        <WhatWeOfferCard
          img={BANNER_5}
          title={"Access"}
          para={"Markets an customers, Partnerships, Investors,Team members"}
        />
      </div>
      <div className={styles.section_heading}>what we're looking for</div>
      <div id={styles.what_we_looking_for} className={styles.section}>
        <div className={styles.what_we_looking_for_card_section}>
          <WhatWeLookingForCard
            title={"deep tech ideas"}
            para={
              "Ideas around IoT, Automation, Extended Reality (AR,ER,VR), quantum computing, AI/ML, personalized and predictive medicine"
            }
          />
          <WhatWeLookingForCard
            title={"Campus Tech Ideas"}
            para={
              "Ideas that can transform the way academic programs are created and delivered"
            }
          />
        </div>
        <div id={styles.what_we_looking_for_second_section} className={styles.what_we_looking_for_card_section}>
          <WhatWeLookingForCard
            title={"Social Tech Ideas"}
            para={
              "Ideas that use  human, intellectual and digital resources in order to influence social processes."
            }
          />
          <WhatWeLookingForCard
            title={"Multi Disciplinary Innovation​"}
            para={
              "Ideas that demand multidisciplinary innovations involving disciplines like design, computing, biotech, engineering, devices, food tech and others"
            }
          />
        </div>
      </div>
      <div className={styles.section_heading}>who we're looking for</div>
      <div id={styles.who_we_looking_for} className={styles.section}>
        <WhoWeLookingForCard
          img={BANNER_6}
          title={"Students"}
          para={
            "We help students find a balance between academics and entrepreneurship. We employ models that ensure great rewards and security to students in terms of finance and careers."
          }
        />
        <WhoWeLookingForCard
          img={BANNER_6}
          title={"Industry Professionals"}
          para={
            "We deliver everything that helps you transform your idea to a business. We act like your cofounders and bring in team, expertise, mentoring, capital and infrastructure."
          }
        />
        <WhoWeLookingForCard
          img={BANNER_6}
          title={"Faculty"}
          para={
            "We enable academicians to balance their teaching and research.  Models where academicians can spend more time on research or development with substantial commercial value will be followed."
          }
        />
      </div>

      <a
        id={styles.contact_us_btn}
        rel="noopener noreferrer"
        href={websiteBaseURL + "contactus"}
        className={`${"basic-button_one"}`}
      >
        COntact us
      </a>

      <Footer />
    </div>
  );
};

export default HomePage;
