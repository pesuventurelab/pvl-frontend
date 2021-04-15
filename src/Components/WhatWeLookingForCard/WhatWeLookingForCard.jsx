import React, { useState, useRef } from "react";
import styles from "./WhatWeLookingForCard.module.css";

const WhatWeLookingForCard = (props) => {
  const containerREF = useRef(null);

  let [text, setText] = useState(props.title);
  let [isFocused, alterFocus] = useState(false);

  const handleMouseOver = () => {
    containerREF.current.style.backgroundColor = "#41868e";
    containerREF.current.style.zIndex = "100";
    setText(props.para);
    alterFocus(!isFocused);
  };
  
  const handleMouseOut = () => {
    containerREF.current.style.backgroundColor = "#FFFFFF";
    containerREF.current.style.zIndex = "1";
    setText(props.title);
    alterFocus(!isFocused);
  };

  return (
    <div
      ref={containerREF}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={styles.container}
    >
      {isFocused ? (
        <div className={styles.para}>{text}</div>
      ) : (
        <div className={styles.title}>{text}</div>
      )}
    </div>
  );
};

export default WhatWeLookingForCard;
