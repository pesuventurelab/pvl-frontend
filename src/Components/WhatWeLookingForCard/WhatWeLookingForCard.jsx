import React, { useState } from "react";
import styles from "./WhatWeLookingForCard.module.css";

const WhatWeLookingForCard = (props) => {
  let [text, setText] = useState(props.title);
  let [isFocused, alterFocus] = useState(false);

  return (
    <div className={styles.container}>
      maalCard
      <div>jw</div>
    </div>
  );
};

export default WhatWeLookingForCard;
