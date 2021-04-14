import React from "react";
import styles from "./HomePage.module.css";

/* IMPORT COMPONENT HERE */
import UpcomingEventCard from "../../Components/UpcomingEventCard/UpcomingEventCard";
import WhatWeOfferCard from "../../Components/WhatWeOfferCard/WhatWeOfferCard";
import WhatWeLookingForCard from "../../Components/WhatWeLookingForCard/WhatWeLookingForCard";
import WhoWeLookingForCard from "../../Components/WhoWeLookingForCard/WhoWeLookingForCard";

import Footer from "../../Components/Footer/Footer";

import STEP_1 from "../../Images/Steps/step1.svg";
import STEP_2 from "../../Images/Steps/step2.svg";
import STEP_3 from "../../Images/Steps/step3.svg";
import STEP_4 from "../../Images/Steps/step4.svg";

import BANNER_1 from "../../Images/Banners/banner1.svg";
import BANNER_9 from "../../Images/Banners/banner9.svg";
import BANNER_17 from "../../Images/Banners/banner17.svg";

import BANNER_6 from "../../Images/Banners/banner6.svg";
import BANNER_20 from "../../Images/Banners/banner20.svg";
import BANNER_7 from "../../Images/Banners/banner7.svg";
import BANNER_5 from "../../Images/Banners/banner5.svg";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div id={styles.section_one} className={styles.section}></div>

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
      <button id={styles.contact_us_btn} className={`${"basic-button_one"}`}>
        COntact us
      </button>

      <Footer />
    </div>
  );
};

export default HomePage;
