import React from "react";

const Button = ({label, bgColor, color, icon}) =>
  <button style={{backgroundColor: bgColor, color, padding: "5px 10px"}}>
    {icon} {label}
  </button>;

export default Button;
