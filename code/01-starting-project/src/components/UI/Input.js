import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <label htmlFor={props?.id}>{props.label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
