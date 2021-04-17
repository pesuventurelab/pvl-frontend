import React from "react";
import styles from "./OpportunitiesCard.module.css";

const OpportunitiesCard = (props) => {
  const category_to_image = {
    Developer: "👨‍💻",
    Designer: "👨‍🎨",
    Analyst: "📈",
    Marketing: "📺",
    Finance: "💰",
    Hr: "👩‍💼",
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>{category_to_image[props.category]}</div>
      <div className={styles.info_container}>
        <div className={styles.title}>JOB POSIION 1</div>
        <p className={styles.para}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
          recusandae, quasi rem voluptatem atque nemo perferendis. Earum illum
          in deleniti?
        </p>
        <a
            className={`${"basic-button_one"} ${styles.apply_now}`}
            rel="noopener noreferrer"
            target="_blank"
            href="#"
        >
            Apply now
        </a>
      </div>
      <div className={styles.tag_container}>
          
          <div className={styles.tag}>

          Intern

          </div>
          </div>
    </div>
  );
};

export default OpportunitiesCard;
