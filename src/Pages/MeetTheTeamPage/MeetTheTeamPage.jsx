import React from "react";
import styles from "./MeetTheTeamPage.module.css";

/* IMPORT IMAGES HERE */
import BANNER_14 from "../../Images/Banners/banner14.svg";
import BANNER_2 from "../../Images/Banners/banner2.svg";
import BANNER_10 from "../../Images/Banners/banner10.svg";
import BANNER_11 from "../../Images/Banners/banner11.svg";

/* DATA */
import {
  designPartners,
  managementPartners,
  entrepreneurPartners,
  mentorsList,
  investmentPartners,
  technologyPartners,
  growthPartners,
} from "../../Data/Data";

/* IMPORT COMPONENTS HERE */
import DepartmentCard from "../../Components/DepartmentCard/DepartmentCard";
import Footer from "../../Components/Footer/Footer";

const MeetTheTeamPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Meet the team</div>
      <div className={styles.departments_ctnr}>
        <DepartmentCard
          banner={BANNER_2}
          teamList={managementPartners}
          title={"Management partners"}
          para={
            "Strategic planning, employee and office  management  are few of the many ways how our  experienced management partners  contribute and enable PVL to reach new milestones everyday."
          }
        />
        <DepartmentCard
          banner={BANNER_2}
          teamList={entrepreneurPartners}
          title={"Entrepreneur partner"}
          para={
            "These passionate and balanced individuals  are determined to build better teams and products. Their synergy with PVL has been the driving force in making PVL what it is today."
          }
        />
        <DepartmentCard
          banner={BANNER_2}
          teamList={mentorsList}
          title={"Mentors"}
          para={
            "These domain experts guide startups working with PVL onto the right track by not only giving them critical feedback but also words of encouragement."
          }
        />
        <DepartmentCard
          banner={BANNER_2}
          teamList={investmentPartners}
          title={"Investment Partners"}
          para={
            "With their critical thinking and  high attention to detail , these individuals are helping startups under PVL evolve into their better versions by the day."
          }
        />
        <DepartmentCard
          banner={BANNER_2}
          teamList={technologyPartners}
          title={"Technology partners"}
          para={
            "A skilled team converting designs into wondrous products, our tech team is adept and passionate in all aspects of development."
          }
        />
        <DepartmentCard
          banner={BANNER_2}
          teamList={designPartners}
          title={"Design partners"}
          para={
            "Our in-house creative talents bring your product ideas to life and design incredible user experiences."
          }
        />
        <DepartmentCard
          banner={BANNER_2}
          teamList={growthPartners}
          title={"Growth partners"}
          para={
            "Making products reach bigger audiences through their impressive content and the right strategies for marketing."
          }
        />
      </div>
      <Footer />
    </div>
  );
};

export default MeetTheTeamPage;
