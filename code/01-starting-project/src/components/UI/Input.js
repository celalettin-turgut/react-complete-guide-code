import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <label htmlFor={props?.id}>{props.label}</label>
      <input ref={ref} {...props} />
    </div>
  );
});

export default Input;
