import React from "react";
import MenuItem from "./MenuItem";

const navbarStyles = {
  padding: "5px",
  fontSize: "14px"
};

export default () => (
  <div style={navbarStyles}>
    <MenuItem to="/" text="Home" />
    <MenuItem to="/releases" text="Releases" />
    <MenuItem to="/contact" text="Contact" />
  </div>
);
