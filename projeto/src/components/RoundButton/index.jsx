import React from "react";
import { Button } from "./styles";

const RoundButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default RoundButton;
