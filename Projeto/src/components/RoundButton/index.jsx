import React from "react";
import "./styles.css";

const RoundButton = ({ children, ...rest }) => {
  return (
    <button className="roundbutton" {...rest}>
      {children}
    </button>
  );
};

export default RoundButton;
