import React from 'react';
import styles from "./OpportunitiesCard.module.css";

const OpportunitiesCard = (props) => {
    return ( 
        <div className={styles.container}>
            <img src={props.img} alt="Image" />
            <div className={styles.info_container} >

            </div>
            <div></div>
        </div>
     );
}
 
export default OpportunitiesCard;