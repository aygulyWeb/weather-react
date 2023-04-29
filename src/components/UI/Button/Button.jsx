import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, ...props }) => {
  return (
    <button type="Submit" {...props} className={classes.btn}>
      {children}
    </button>
  );
};

export default Button;
