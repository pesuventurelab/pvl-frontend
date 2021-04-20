import React from "react";
import styles from "./OpportunitiesCard.module.css";

const OpportunitiesCard = (props) => {
  const category_to_image = {
    Developer: "👨‍💻",
    Designer: "👨‍🎨",
    Analyst: "📈",
    Marketing: "📺",
    Finance: "💰",
    "Human Resource Management": "👩‍💼",
    "Content Writer": "✍🏻",
  };

  
  return (
    <div className={styles.container}>
      <div className={styles.image}>{category_to_image[props.category]}</div>
      <div className={styles.info_container}>
        <div className={styles.title}>{props.position}</div>
        <p className={styles.para}>{props.summary}</p>
        <a
          className={`${"basic-button_one"} ${styles.apply_now}`}
          rel="noopener noreferrer"
          target="_blank"
          href={props.link}
        >
          Apply now
        </a>
      </div>
      <div className={styles.tag_container}>
        <div className={styles.tag}>{props.type}</div>
      </div>
    </div>
  );
};

export default OpportunitiesCard;
