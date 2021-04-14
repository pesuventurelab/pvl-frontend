import React from "react";
import styles from "./WhoWeLookingForCard.module.css";

const WhoWeLookingForCard = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src={props.img} alt="Image" />
      <div className={styles.info_container}>
        <div className={styles.title}> {props.title}</div>
        <p className={styles.para}>{props.para}</p>
      </div>
    </div>
  );
};

export default WhoWeLookingForCard;
