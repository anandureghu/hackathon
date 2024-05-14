import React from "react";
import styles from "./Input.module.scss";

interface props {
  [key: string]: HTMLInputElement;
}
const Input: React.FC<props> = ({ ...inputProps }) => {
  return <input {...inputProps} className={styles.input} />;
};

export default Input;
