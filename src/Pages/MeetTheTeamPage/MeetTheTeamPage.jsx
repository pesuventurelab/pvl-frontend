import React from "react";
import styles from "./MeetTheTeamPage.module.css";

/* IMPORT COMPONENTS HERE */
import DepartmentCard from "../../Components/DepartmentCard/DepartmentCard";
import Footer from "../../Components/Footer/Footer";

const MeetTheTeamPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Meet the team</div>
      <div className={styles.heading}>DEPARTMENTS</div>
      <div className={styles.departments_ctnr}>
        <DepartmentCard title={"Analyst  Team"} para={"lorem ipsum doler sit tues la meri speaki nichao hinta gullu bhyga iu aj jhqolnkinuw kuGH KJBU KG SK"} />
        <DepartmentCard title={"Design  Team"} para={"lorem ipsum doler sit tues la meri speaki nichao hinta gullu bhyga iu aj jhqolnkinuw kuGH KJBU KG SK"} />
        <DepartmentCard title={"Developers  Team"} para={"lorem ipsum doler sit tues la meri speaki nichao hinta gullu bhyga iu aj jhqolnkinuw kuGH KJBU KG SK"} />
        <DepartmentCard title={"Marketing  Team"} para={"lorem ipsum doler sit tues la meri speaki nichao hinta gullu bhyga iu aj jhqolnkinuw kuGH KJBU KG SK"} />
        <DepartmentCard title={"Management  Team"} para={"lorem ipsum doler sit tues la meri speaki nichao hinta gullu bhyga iu aj jhqolnkinuw kuGH KJBU KG SK"} />
      </div>
      <Footer />
    </div>
  );
};

export default MeetTheTeamPage;
