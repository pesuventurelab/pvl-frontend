import React, { useState } from "react";
import styles from "./InputLabel.module.css";

import { Tooltip, Button } from "antd";

import { TiWarning } from "react-icons/ti";
import { VscError } from "react-icons/vsc";
import { FaInfoCircle } from "react-icons/fa";

const InputLabel = (props) => {
  let [iconState, setIconState] = useState("info");

  return (
    <div className={styles.container}>
      {props.isRequired ? <span className={styles.asterisk}>*</span> : <></>}
      <div className={styles.title}>{props.title}</div>
      <div className={styles.icon_container}>
        <Tooltip placement="topLeft" color="#41868e" title={props.info}>
          <FaInfoCircle className={`${styles.icon} ${styles.info_icon}`} />
        </Tooltip>
      </div>
    </div>
  );
};

export default InputLabel;
