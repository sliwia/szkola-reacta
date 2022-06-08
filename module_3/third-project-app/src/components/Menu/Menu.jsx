import React from "react";

const styles = {
  padding: 10,
  display: 'flex',
  columnGap: 10
}

const Menu = ({children}) => <nav style={styles}>{children}</nav>;

export default Menu;
