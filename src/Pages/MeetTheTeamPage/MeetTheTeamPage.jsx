import React from "react";
import styles from "./MeetTheTeamPage.module.css";


/* IMPORT IMAGES HERE */
import BANNER_14 from "../../Images/Banners/banner14.svg";
import BANNER_2 from "../../Images/Banners/banner2.svg";
import BANNER_10 from "../../Images/Banners/banner10.svg";
import BANNER_11 from "../../Images/Banners/banner11.svg";

/* IMPORT COMPONENTS HERE */
import DepartmentCard from "../../Components/DepartmentCard/DepartmentCard";
import Footer from "../../Components/Footer/Footer";

const MeetTheTeamPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Meet the team</div>
      <div className={styles.heading}>DEPARTMENTS</div>
      <div className={styles.departments_ctnr}>
        <DepartmentCard banner={BANNER_2} title={"Analyst  Team"} para={"lorem ipsum doler sit tues la meri speaki nichao hinta gullu bhyga iu aj jhqolnkinuw kuGH KJBU KG SK"} />
        <DepartmentCard banner={BANNER_14} title={"Design  Team"} para={"lorem ipsum doler sit tues la meri speaki nichao hinta gullu bhyga iu aj jhqolnkinuw kuGH KJBU KG SK"} />
        <DepartmentCard banner={BANNER_10} title={"Developers  Team"} para={"lorem ipsum doler sit tues la meri speaki nichao hinta gullu bhyga iu aj jhqolnkinuw kuGH KJBU KG SK"} />
        <DepartmentCard banner={BANNER_11} title={"Marketing  Team"} para={"lorem ipsum doler sit tues la meri speaki nichao hinta gullu bhyga iu aj jhqolnkinuw kuGH KJBU KG SK"} />
      </div>
      <Footer />
    </div>
  );
};

export default MeetTheTeamPage;
