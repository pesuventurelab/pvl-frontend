import React from "react";
import styles from "./WhoWeLookingForCard.module.css";

import ScrollAnimation from "react-animate-on-scroll";

const WhoWeLookingForCard = (props) => {
  return (
    <div className={styles.container}>
      {/* <ScrollAnimation duration="1" animateIn="fadeInLeft"> */}
        <img className={styles.banner} src={props.img} alt="Image" />
      {/* </ScrollAnimation> */}
      <div className={styles.info_container}>
        <ScrollAnimation duration="1" animateIn="fadeInUp">
          <div className={styles.title}> {props.title}</div>
        </ScrollAnimation>
        <ScrollAnimation duration="1" animateIn="fadeInUp">
          <p className={styles.para}>{props.para}</p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default WhoWeLookingForCard;
