import React from "react";
import styles from "./NotFound.module.css";

import NOT_FOUND_BANNER from "../../Images/Banners/banner12.svg";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src={NOT_FOUND_BANNER} alt="404" />
    </div>
  );
};

export default NotFoundPage;
