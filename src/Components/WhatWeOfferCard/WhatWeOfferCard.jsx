import React from 'react';
import styles from "./WhatWeOfferCard.module.css";

const WhatWeOfferCard = (props) => {
    return ( 
        <div className={styles.container}>
            <img className={styles.banner}src={props.img} />
            <div className={styles.title}>{props.title}</div>
            <p className={styles.para}>{props.para}</p>
        </div>
     );
}
 
export default WhatWeOfferCard;