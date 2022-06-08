import React from "react";

// eslint-disable-next-line
const MenuItem = ({label, isActive}) => <a href="#" style={{color: isActive ? "red" : "black"}}>{label}</a>;

export default MenuItem;
