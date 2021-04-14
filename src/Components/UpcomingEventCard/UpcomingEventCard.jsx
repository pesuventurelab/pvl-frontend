import React from "react";
import styles from "./UpcomingEventCard.module.css";

const UpcomingEventCard = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src={props.img} />
      <div className={styles.title}>{props.title}</div>
      <p className={styles.para}>{props.para}</p>
      <a
        rel="noopener noreferrer"
        className={`${"basic-button_one"} ${styles.know_more_btn}`}
        href="#"
      >Know More</a>
    </div>
  );
};

export default UpcomingEventCard;
