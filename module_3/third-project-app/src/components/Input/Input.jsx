import React from "react";

const Input = ({ bgColor, color, borderRadius, borderColor, borderSize}) =>
  <input style={{ backgroundColor: bgColor, padding: "5px", borderWidth: borderSize, color, borderRadius, borderColor }} />;

export default Input;
