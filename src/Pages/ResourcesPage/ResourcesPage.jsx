import React from 'react';
import styles from "./ResourcesPage.module.css";

import BANNER_15 from "../../Images/Banners/banner15.svg";


const ResourcesPage = () => {
    return ( 
        <div className={styles.container}>
            <div className={styles.heading}>resources</div>
            <img className={styles.banner} src={BANNER_15} alt="Image" />
        </div>
     );
}
 
export default ResourcesPage;