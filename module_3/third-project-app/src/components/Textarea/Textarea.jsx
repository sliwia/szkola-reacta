import React from "react";

const Textarea = ({ bgColor, color, borderRadius, borderColor, borderSize}) =>
  <textarea style={{ backgroundColor: bgColor, padding: "5px", borderWidth: borderSize, color, borderRadius, borderColor }} />;

export default Textarea;
