import React from "react";
import { Link } from "react-router-dom";

export default ({ to, text }) => (
  <div
    style={{
      display: "inline",
      padding: "5px",
      color: "white !important"
    }}
  >
    <Link to={to}>{text}</Link>
  </div>
);
