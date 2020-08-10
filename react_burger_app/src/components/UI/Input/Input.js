import React from "react";
import classes from './Input.module.css'

const input = props => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = <input className={classes.InputElement}{...props} />;
      break;
    case "textarea":
      inputElement = <textarea className={classes.InputElement} {...props} />;
      break;
    default:
      inputElement = <imput className={classes.InputElement} {...props} />;
  }

  return (
    <div className={classes.Input}>
      <lable className={classes.Label}>{props.label}</lable>
      {inputElement}
    </div>
  );
};

export default input;
